const crypto = require('crypto');

/* ============================================================
   Identifiants admin — à changer ici si besoin.
   ============================================================ */
const ADMIN_EMAIL = 'fastboola@gmail.com';
const ADMIN_PASSWORD = 'Yeesile';

/* Clés de signature (anti-robot + session). Modifiables si besoin,
   mais fonctionnent parfaitement telles quelles. */
const CAPTCHA_SECRET = 'fastboola-captcha-secret-2026';
const SESSION_SECRET = 'fastboola-session-secret-2026';
const SESSION_DURATION_MS = 1000 * 60 * 60 * 4; // 4 heures

function hmac(secret, payload){
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

function verifyCaptcha({ a, b, answer, token }){
  if(a === undefined || b === undefined || answer === undefined || !token) return false;
  const [encoded, sig] = String(token).split('.');
  if(!encoded || !sig) return false;
  let payload;
  try{
    payload = Buffer.from(encoded, 'base64').toString('utf8');
  }catch(e){ return false; }
  if(payload !== `${a}:${b}`) return false;
  const expected = hmac(CAPTCHA_SECRET, payload);
  if(expected !== sig) return false;
  return Number(answer) === Number(a) + Number(b);
}

function checkCredentials(email, password){
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

function createSessionToken(email){
  const exp = Date.now() + SESSION_DURATION_MS;
  const payload = JSON.stringify({ email, exp });
  const encoded = Buffer.from(payload).toString('base64');
  const sig = hmac(SESSION_SECRET, encoded);
  return `${encoded}.${sig}`;
}

function verifySessionToken(token){
  if(!token) return false;
  const [encoded, sig] = String(token).split('.');
  if(!encoded || !sig) return false;
  const expected = hmac(SESSION_SECRET, encoded);
  if(expected !== sig) return false;
  let payload;
  try{
    payload = JSON.parse(Buffer.from(encoded, 'base64').toString('utf8'));
  }catch(e){ return false; }
  if(!payload.exp || Date.now() > payload.exp) return false;
  return true;
}

module.exports = {
  ADMIN_EMAIL,
  verifyCaptcha,
  checkCredentials,
  createSessionToken,
  verifySessionToken
};
