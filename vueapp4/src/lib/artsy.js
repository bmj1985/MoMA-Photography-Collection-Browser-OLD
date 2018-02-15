// const traverson = require('traverson-promise');
// const JsonHalAdapter = require('traverson-hal');
// const fetch = require('isomorphic-fetch');

// traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

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
  // const api = traverson.from('https://api.artsy.net/api/artists/').jsonHal();

  fetch(
    'https://api.artsy.net/api/artists?similar_to_artist_id=4eeb62edee499500010021ba',
    {
      method: 'GET',
      headers: new Headers({
        'X-Xapp-Token': token
      })
    }
  )
    .then(response => response.json())
    .then(response => {
      console.log(response._embedded.artists[0].name);
    });
}

// return api
//   .newRequest()
//   .follow('artist')
//   .withRequestOptions({
//     headers: {
//       'X-Xapp-Token': token,
//       Accept: 'application/vnd.artsy-v2+json'
//     }
//   })
//   .withTemplateParameters({ id: 'andy-warhol' })
// .getResource().result;
// }

export { getToken, getResource };
