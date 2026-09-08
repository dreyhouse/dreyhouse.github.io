const COLOR_FIELDS = [
  { key:'bg', label:'Fond général du site' },
  { key:'panel', label:'Fond des cartes produits' },
  { key:'panel2', label:'Fond secondaire (bannières)' },
  { key:'accentFrom', label:'Accent — début du dégradé' },
  { key:'accentTo', label:'Accent — fin du dégradé' },
  { key:'textLight', label:'Texte principal' },
  { key:'textDim', label:'Texte secondaire' },
  { key:'whatsapp', label:'Bouton WhatsApp' }
];

const PLAN_LABELS = {
  'price-1': '1 mois',
  'price-2': '3 mois',
  'price-3': '6 mois',
  'price-4': '12 mois'
};

let currentConfig = null;
let pageLoadedAt = Date.now();
let currentCaptcha = null;

/* ---------------- Captcha ---------------- */
async function loadCaptcha(){
  const el = document.getElementById('captcha-question');
  const loginBtn = document.getElementById('login-btn');
  const retryBtn = document.getElementById('captcha-retry-btn');
  loginBtn.disabled = true;
  retryBtn.hidden = true;
  el.textContent = "Vérification anti-robot : chargement…";

  try{
    const res = await fetch('/.netlify/functions/captcha', { cache:'no-store' });
    if(!res.ok) throw new Error('bad status');
    const data = await res.json();
    if(typeof data.a !== 'number' || typeof data.b !== 'number' || !data.token){
      throw new Error('invalid payload');
    }
    currentCaptcha = data;
    el.textContent = `Vérification anti-robot : combien font ${data.a} + ${data.b} ?`;
    loginBtn.disabled = false;
  }catch(err){
    currentCaptcha = null;
    el.textContent = "Vérification anti-robot indisponible pour le moment.";
    retryBtn.hidden = false;
  }
}
document.getElementById('captcha-retry-btn').addEventListener('click', loadCaptcha);

/* ---------------- Connexion ---------------- */
function getSessionToken(){
  return sessionStorage.getItem('fb_admin_token');
}
function setSessionToken(token){
  sessionStorage.setItem('fb_admin_token', token);
}
function clearSessionToken(){
  sessionStorage.removeItem('fb_admin_token');
}

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const errorEl = document.getElementById('login-error');
  errorEl.textContent = '';
  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  btn.textContent = 'Connexion…';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const answer = document.getElementById('captcha-answer').value;
  const honeypot = document.getElementById('honeypot').value;
  const elapsed = Date.now() - pageLoadedAt;

  if(!currentCaptcha){
    errorEl.textContent = "Vérification anti-robot indisponible, cliquez sur \"Recharger la vérification\".";
    btn.disabled = false;
    btn.textContent = 'Se connecter';
    return;
  }

  try{
    const res = await fetch('/.netlify/functions/login', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({
        email, password, answer, honeypot, elapsed,
        a: currentCaptcha ? currentCaptcha.a : null,
        b: currentCaptcha ? currentCaptcha.b : null,
        token: currentCaptcha ? currentCaptcha.token : null
      })
    });
    const data = await res.json();
    if(!res.ok || !data.ok){
      errorEl.textContent = data.error || "Connexion impossible.";
      await loadCaptcha();
      document.getElementById('captcha-answer').value = '';
      btn.disabled = false;
      btn.textContent = 'Se connecter';
      return;
    }
    setSessionToken(data.sessionToken);
    showDashboard();
  }catch(err){
    errorEl.textContent = "Erreur réseau, merci de réessayer.";
    btn.disabled = false;
    btn.textContent = 'Se connecter';
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  clearSessionToken();
  location.reload();
});

/* ---------------- Tableau de bord ---------------- */
async function showDashboard(){
  document.getElementById('login-screen').hidden = true;
  document.getElementById('dashboard').hidden = false;
  await loadConfigIntoForm();
}

async function loadConfigIntoForm(){
  const res = await fetch('/.netlify/functions/config-get', { cache:'no-store' });
  currentConfig = await res.json();
  if(!currentConfig.screenshots) currentConfig.screenshots = [];
  if(!currentConfig.banner) currentConfig.banner = { enabled:false, type:'warning', message:'' };
  if(!currentConfig.footerYear) currentConfig.footerYear = String(new Date().getFullYear());

  renderColors();
  renderPrices();
  renderScreenshotsAdmin();
  renderGeneral();
}

function renderColors(){
  const grid = document.getElementById('color-grid');
  grid.innerHTML = '';
  COLOR_FIELDS.forEach(f => {
    const value = currentConfig.colors[f.key] || '#000000';
    const item = document.createElement('div');
    item.className = 'color-item';
    item.innerHTML = `
      <input type="color" data-color-key="${f.key}" value="${toHex(value)}">
      <div>
        <div class="color-label">${f.label}</div>
        <div class="color-hex">${value}</div>
      </div>
    `;
    grid.appendChild(item);
  });
  grid.querySelectorAll('input[type=color]').forEach(input => {
    input.addEventListener('input', (e) => {
      const key = e.target.getAttribute('data-color-key');
      currentConfig.colors[key] = e.target.value;
      e.target.closest('.color-item').querySelector('.color-hex').textContent = e.target.value;
    });
  });
}

function toHex(v){
  if(/^#/.test(v)) return v;
  return '#000000';
}

function renderPrices(){
  const grid = document.getElementById('price-grid');
  grid.innerHTML = '';
  Object.keys(PLAN_LABELS).forEach(planKey => {
    const p = currentConfig.prices[planKey] || { original:0, promo:0 };
    const item = document.createElement('div');
    item.className = 'price-item';
    item.innerHTML = `
      <h3>${PLAN_LABELS[planKey]}</h3>
      <label>Prix barré (ancien prix, FCFA)
        <input type="number" min="0" step="100" data-plan="${planKey}" data-field="original" value="${p.original}">
      </label>
      <label>Prix promo (prix actuel, FCFA)
        <input type="number" min="0" step="100" data-plan="${planKey}" data-field="promo" value="${p.promo}">
      </label>
    `;
    grid.appendChild(item);
  });
  grid.querySelectorAll('input[type=number]').forEach(input => {
    input.addEventListener('input', (e) => {
      const plan = e.target.getAttribute('data-plan');
      const field = e.target.getAttribute('data-field');
      if(!currentConfig.prices[plan]) currentConfig.prices[plan] = { original:0, promo:0 };
      currentConfig.prices[plan][field] = Number(e.target.value) || 0;
    });
  });
}

/* ---------------- Général (année + bannière) ---------------- */
function renderGeneral(){
  document.getElementById('footer-year').value = currentConfig.footerYear;
  document.getElementById('banner-toggle').checked = !!currentConfig.banner.enabled;
  document.getElementById('banner-type').value = currentConfig.banner.type || 'warning';
  const bannerLanguages = {fr:'Français', en:'Anglais', de:'Allemand', es:'Espagnol', pt:'Portugais', it:'Italien', nl:'Néerlandais', tr:'Turc', el:'Grec', pl:'Polonais', fi:'Finnois', sk:'Slovaque', hr:'Croate', sq:'Albanais', bg:'Bulgare', ar:'Arabe', zh:'Chinois', hi:'Hindi', vi:'Vietnamien', ru:'Russe', ja:'Japonais', ko:'Coréen'};
  const language = document.getElementById('banner-language');
  language.replaceChildren();
  for (const [code, label] of Object.entries(bannerLanguages)) {
    const option = document.createElement('option'); option.value = code; option.textContent = label; language.append(option);
  }
  language.value = 'fr';
  currentConfig.banner.messages ||= {};
  const showMessage = () => { document.getElementById('banner-message').value = language.value === 'fr' ? currentConfig.banner.message || '' : currentConfig.banner.messages[language.value] || ''; };
  language.onchange = showMessage;
  showMessage();

  document.getElementById('footer-year').oninput = (e) => currentConfig.footerYear = e.target.value.trim();
  document.getElementById('banner-toggle').onchange = (e) => currentConfig.banner.enabled = e.target.checked;
  document.getElementById('banner-type').onchange = (e) => currentConfig.banner.type = e.target.value;
  document.getElementById('banner-message').oninput = (e) => {
    if (language.value === 'fr') currentConfig.banner.message = e.target.value;
    else currentConfig.banner.messages[language.value] = e.target.value;
  };
}

/* ---------------- Captures (upload + redimensionnement local) ---------------- */
function resizeImageFile(file, maxWidth){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderScreenshotsAdmin(){
  const grid = document.getElementById('screenshots-admin-list');
  grid.innerHTML = '';
  if(currentConfig.screenshots.length === 0){
    grid.innerHTML = '<p class="hint">Aucune capture ajoutée pour le moment.</p>';
    return;
  }
  currentConfig.screenshots.forEach(s => {
    const item = document.createElement('div');
    item.className = 'screenshot-admin-item';
    item.innerHTML = `<img src="${s.src}" alt=""><button data-id="${s.id}">Supprimer</button>`;
    item.querySelector('button').addEventListener('click', () => {
      currentConfig.screenshots = currentConfig.screenshots.filter(x => x.id !== s.id);
      renderScreenshotsAdmin();
    });
    grid.appendChild(item);
  });
}

document.getElementById('screenshot-upload').addEventListener('change', async (e) => {
  const files = Array.from(e.target.files || []);
  const hint = document.getElementById('upload-hint');
  if(files.length === 0) return;
  hint.textContent = 'Traitement des images…';
  for(const file of files){
    try{
      const dataUrl = await resizeImageFile(file, 900);
      currentConfig.screenshots.push({ id: 'shot_' + Date.now() + '_' + Math.random().toString(36).slice(2,8), src: dataUrl });
    }catch(err){ /* ignore le fichier en erreur */ }
  }
  renderScreenshotsAdmin();
  hint.textContent = 'Ajouté. Pensez à cliquer sur "Enregistrer les modifications" en bas de page.';
  e.target.value = '';
});

/* ---------------- Onglets ---------------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('is-active');
  });
});

/* ---------------- Enregistrement ---------------- */
document.getElementById('save-btn').addEventListener('click', async () => {
  const statusEl = document.getElementById('save-status');
  statusEl.textContent = 'Enregistrement…';
  statusEl.className = 'save-status';

  // La couleur "accent solide" (badges, eyebrow) suit automatiquement le début du dégradé.
  currentConfig.colors.accentSolid = currentConfig.colors.accentFrom;

  try{
    const res = await fetch('/.netlify/functions/config-set', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + getSessionToken()
      },
      body: JSON.stringify(currentConfig)
    });
    const data = await res.json();
    if(!res.ok || !data.ok){
      statusEl.textContent = data.error || "Échec de l'enregistrement.";
      statusEl.className = 'save-status error';
      return;
    }
    statusEl.textContent = "✓ Enregistré. Le site est mis à jour immédiatement.";
    statusEl.className = 'save-status ok';
  }catch(err){
    statusEl.textContent = "Erreur réseau, merci de réessayer.";
    statusEl.className = 'save-status error';
  }
});

/* ---------------- Démarrage ---------------- */
(function init(){
  if(getSessionToken()){
    showDashboard();
  }else{
    loadCaptcha();
  }
})();
