const { getStore } = require('@netlify/blobs');
const DEFAULT_CONFIG = require('../../site-config.default.json');

exports.handler = async function(){
  try{
    const store = getStore('fastboola-site');
    let config = await store.get('config', { type: 'json' });
    if(!config){
      config = DEFAULT_CONFIG;
      await store.setJSON('config', config);
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(config)
    };
  }catch(err){
    // Si Netlify Blobs n'est pas encore disponible, on retombe sur la config par défaut.
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(DEFAULT_CONFIG)
    };
  }
};
