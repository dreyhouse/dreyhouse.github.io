/* Local defaults render immediately; remote settings and rates never block prices. */
async function fetchJSON(url, timeout = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {cache:'no-store', signal:controller.signal});
    if (!response.ok) throw new Error('Request failed');
    return await response.json();
  } finally { clearTimeout(timer); }
}
function mergeConfig(value) {
  const defaults = window.SITE_DEFAULTS;
  const config = value && typeof value === 'object' ? value : {};
  const prices = {};
  const valid = value => value !== '' && value !== null && value !== undefined && Number.isFinite(Number(value)) && Number(value) >= 0;
  for (const [id, fallback] of Object.entries(defaults.prices)) {
    const item = config.prices?.[id] || {};
    prices[id] = {
      original:valid(item.original) ? Number(item.original) : fallback.original,
      promo:valid(item.promo) ? Number(item.promo) : valid(item.original) ? Number(item.original) : fallback.promo
    };
  }
  return {...defaults, ...config, prices, colors:{...defaults.colors,...config.colors},
    banner:{...defaults.banner,...config.banner}, screenshots:Array.isArray(config.screenshots) ? config.screenshots : defaults.screenshots};
}
function applyConfig(value) {
  const config = window.SITE_CONFIG = mergeConfig(value);
  const map = {bg:'--bg',panel:'--panel',panel2:'--panel-2',accentFrom:'--accent-from',accentTo:'--accent-to',accentSolid:'--accent-solid',textLight:'--cream',textDim:'--cream-dim',whatsapp:'--whatsapp',line:'--line'};
  for (const [key, property] of Object.entries(map)) {
    if (config.colors[key]) document.documentElement.style.setProperty(property, config.colors[key]);
  }
  document.querySelectorAll('[data-plan]').forEach(el => {
    const price = config.prices[el.dataset.plan];
    if (!price) return;
    el.dataset.xofOriginal = price.original;
    el.dataset.xofPromo = price.promo;
  });
  window.SITE_FOOTER_YEAR = config.footerYear || new Date().getFullYear();
  renderScreenshots(config.screenshots);
  if (window.CURRENT_COUNTRY) setUserCountry(window.CURRENT_COUNTRY, false);
}
function localizedText(value, lang) {
  if (typeof value === 'string') return value;
  return value?.[lang] || value?.fr || value?.en || '';
}
function renderBanner(banner) {
  const el = document.getElementById('site-banner');
  const message = localizedText(banner?.messages?.[window.CURRENT_LANG] || banner?.message, window.CURRENT_LANG);
  el.hidden = !banner?.enabled || !message;
  el.classList.toggle('type-info', banner?.type === 'info');
  el.classList.toggle('type-warning', banner?.type !== 'info');
  document.getElementById('site-banner-text').textContent = message;
  document.getElementById('site-banner-close').onclick = () => { el.hidden = true; };
}
function renderScreenshots(screenshots) {
  const track = document.getElementById('screenshots-track');
  track.replaceChildren();
  document.getElementById('captures').hidden = screenshots.length === 0;
  screenshots.forEach(s => {
    if (typeof s.src !== 'string' || !/^(https?:\/\/|data:image\/(png|jpeg|webp);base64,|\.?\/?image\/)/i.test(s.src)) return;
    const card = document.createElement('div'); card.className = 'screenshot-card';
    const img = document.createElement('img'); img.src = s.src;
    img.alt = localizedText(s.caption, window.CURRENT_LANG || 'fr'); img.loading = 'lazy';
    card.append(img); track.append(card);
  });
}
function countryName(code) {
  if (code === '001') return window.CURRENT_DICT?.international || 'International';
  try { return new Intl.DisplayNames([window.CURRENT_LANG || 'fr'], {type:'region'}).of(code); }
  catch { return code; }
}
let channelSearchGroups = [];
function normalizeChannelSearch(value) {
  return value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
}
function filterChannels() {
  const input = document.getElementById('channel-search');
  if (!input || !window.CURRENT_DICT) return;
  const query = normalizeChannelSearch(input.value);
  let total = 0;
  for (const group of channelSearchGroups) {
    let matches = 0;
    for (const item of group.items) {
      const visible = !query || item.search.includes(query);
      if (item.card.hidden === visible) item.card.hidden = !visible;
      if (visible) matches++;
    }
    group.section.hidden = matches === 0;
    group.count.dataset.channelCount = matches;
    group.count.textContent = window.CURRENT_DICT.channel_count.replace('{count}', new Intl.NumberFormat(window.CURRENT_LOCALE).format(matches));
    total += matches;
  }
  document.getElementById('channel-search-status').textContent = total
    ? window.CURRENT_DICT.channel_results.replace('{count}', new Intl.NumberFormat(window.CURRENT_LOCALE).format(total))
    : window.CURRENT_DICT.channel_no_results;
}
function renderChannelsByCountry() {
  channelSearchGroups = [];
  const grid = document.getElementById('channels-grid');
  const fragment = document.createDocumentFragment();
  for (const group of window.CHANNEL_CATALOG || []) {
    const section = document.createElement('div'); section.className = 'channel-country-group';
    const heading = document.createElement('h3'); heading.className = 'channel-country-title';
    const title = document.createElement('span'); title.dataset.countryCode = group.code; title.textContent = countryName(group.code);
    const count = document.createElement('span'); count.className = 'channel-count'; count.dataset.channelCount = group.items.length;
    heading.append(title,count);
    const row = document.createElement('div'); row.className = 'channel-country-row';
    const searchGroup = {section, count, items:[]};
    channelSearchGroups.push(searchGroup);
    for (const item of group.items) {
      const card = document.createElement('div'); card.className = 'channel-item';
      searchGroup.items.push({card, search:normalizeChannelSearch(item.name)});
      const img = document.createElement('img'); img.src = `image/channels/${group.folder}/${item.file.split('/').map(encodeURIComponent).join('/')}`;
      img.alt = item.name; img.loading = 'lazy'; img.decoding = 'async'; img.width = 112; img.height = 84;
      const name = document.createElement('span'); name.className = 'channel-name'; name.textContent = item.name;
      const country = document.createElement('span'); country.className = 'channel-country'; country.dataset.countryCode = group.code; country.textContent = countryName(group.code);
      card.append(img,name,country); row.append(card);
    }
    section.append(heading,row); fragment.append(section);
  }
  grid.replaceChildren(fragment);
  document.getElementById('channel-search').oninput = filterChannels;
  filterChannels();
}
async function refreshConfig() {
  try { applyConfig(await fetchJSON('site-config.default.json')); } catch { /* embedded defaults remain usable */ }
  if (location.protocol === 'file:') return;
  try { applyConfig(await fetchJSON('/.netlify/functions/config-get')); } catch { /* local configuration remains usable */ }
}
async function refreshRates() {
  if (location.protocol === 'file:') return;
  let cached;
  try { cached = JSON.parse(localStorage.getItem('fb_rates')); } catch {}
  if (validRates(cached) && cached.time_last_update_unix > window.EXCHANGE_RATES.time_last_update_unix) window.EXCHANGE_RATES = cached;
  if (Date.now()/1000 < window.EXCHANGE_RATES.time_next_update_unix) {
    setUserCountry(window.CURRENT_COUNTRY, false); return;
  }
  try {
    const data = await fetchJSON('https://open.er-api.com/v6/latest/EUR');
    if (!validRates(data)) return;
    window.EXCHANGE_RATES = data;
    try { localStorage.setItem('fb_rates', JSON.stringify(data)); } catch {}
    setUserCountry(window.CURRENT_COUNTRY, false);
  } catch { /* last bundled/cached rates remain available */ }
}
function validRates(data) {
  return data?.result === 'success' && data.base_code === 'EUR' && Number.isFinite(data.time_last_update_unix)
    && Number.isFinite(data.time_next_update_unix) && data.rates?.EUR === 1
    && Object.values(COUNTRY_MAP).every(c => Number.isFinite(data.rates[c.currency]) && data.rates[c.currency] > 0);
}
applyConfig(window.SITE_DEFAULTS);
initLocale();
renderChannelsByCountry();
updateCountryLabels();
refreshConfig();
refreshRates();
