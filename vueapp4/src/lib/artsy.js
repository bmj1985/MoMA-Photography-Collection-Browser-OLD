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
      set.localStorage('token', response.token);
      return response.token;
    })
    .catch(err => console.error('Request failed', err));
}

// function nameToUrl(artistName) {
//   XRegExp(artistName);
//   console.log(artistName);
//   let artist_name = artistName.toLowerCase().replace(/\s/g, '-');
//   let url = 'https://api.artsy.net/api/artists/' + artist_name;
//   console.log(url);
//   return url;
// }

function getResource(url) {
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'X-Xapp-Token': get.localStorage('token')
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
}

// function getDataFromMoma() {
//   fetch('../static/momaartworks.json')
//     .then(response => response.json())
//     .then(response => {
//       const artworks = response.filter(artwork => {
//         if (artwork.Department === 'Photography' && artwork.URL !== null) {
//           return artwork;
//         }
//       });
//       return artworks;
//     });
// }

export { getToken, getResource, nameToUrl };
