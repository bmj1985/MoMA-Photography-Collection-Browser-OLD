const traverson = require('traverson-promise');
const JsonHalAdapter = require('traverson-hal');
const fetch = require('isomorphic-fetch');
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

module.exports = { getResource, getToken };

function getToken() {
  const clientID = 'e7a553ede809b28975c5';
  const clientSecret = '3958f90fe1ff54c8380e508aaf2966f9';
  return fetch('https://api.artsy.net/api/tokens/xapp_token', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify({
      client_id: clientID,
      client_secret: clientSecret
    })
  })
    .then(response => response.json())
    .then(response => {
      return response.token;
    })
    .catch(err => console.error('Request failed', err));
}

function getResource(token) {
  const api = traverson.from('https://api.artsy.net/api').jsonHal();

  return api
    .newRequest()
    .follow('artist')
    .withRequestOptions({
      headers: {
        'X-Xapp-Token': token,
        Accept: 'application/vnd.artsy-v2+json'
      }
    })
    .withTemplateParameters({
      id: 'andy-warhol'
    })
    .getResource().result;
}
