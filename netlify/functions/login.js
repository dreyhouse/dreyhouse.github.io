const { verifyCaptcha, checkCredentials, createSessionToken } = require('./lib/auth');

exports.handler = async function(event){
  if(event.httpMethod !== 'POST'){
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let data;
  try{
    data = JSON.parse(event.body || '{}');
  }catch(e){
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:'Requête invalide.' }) };
  }

  const { email, password, a, b, answer, token, honeypot, elapsed } = data;

  // Piège à robots : un champ caché rempli, ou un formulaire soumis trop vite.
  if(honeypot){
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:'Vérification anti-robot échouée.' }) };
  }
  if(typeof elapsed === 'number' && elapsed < 1200){
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:'Merci de réessayer plus lentement.' }) };
  }

  if(!verifyCaptcha({ a, b, answer, token })){
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:'Réponse anti-robot incorrecte.' }) };
  }

  if(!checkCredentials(email, password)){
    return { statusCode: 401, body: JSON.stringify({ ok:false, error:'Email ou mot de passe incorrect.' }) };
  }

  const sessionToken = createSessionToken(email);
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok:true, sessionToken })
  };
};
