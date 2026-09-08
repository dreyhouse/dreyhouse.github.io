const { getStore } = require('@netlify/blobs');
const { verifySessionToken } = require('./lib/auth');

exports.handler = async function(event){
  if(event.httpMethod !== 'POST'){
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');

  if(!verifySessionToken(token)){
    return { statusCode: 401, body: JSON.stringify({ ok:false, error:'Session expirée, merci de vous reconnecter.' }) };
  }

  let newConfig;
  try{
    newConfig = JSON.parse(event.body || '{}');
  }catch(e){
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:'Configuration invalide.' }) };
  }

  if(!newConfig.colors || !newConfig.prices){
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:'Configuration incomplète.' }) };
  }

  try{
    const store = getStore('fastboola-site');
    await store.setJSON('config', newConfig);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok:true })
    };
  }catch(err){
    return {
      statusCode: 500,
      body: JSON.stringify({ ok:false, error:'Impossible d\'enregistrer (Netlify Blobs indisponible).' })
    };
  }
};
