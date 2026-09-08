const crypto = require('crypto');
const CAPTCHA_SECRET = 'fastboola-captcha-secret-2026';

function sign(payload){
  return crypto.createHmac('sha256', CAPTCHA_SECRET).update(payload).digest('hex');
}

exports.handler = async function(){
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  const payload = `${a}:${b}`;
  const token = `${Buffer.from(payload).toString('base64')}.${sign(payload)}`;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    body: JSON.stringify({ a, b, token })
  };
};
