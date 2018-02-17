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
      return localStorage.setItem('token', response.token);
    })
    .catch(err => console.error('Request failed', err));
}

function getArtistUrl(input) {
  const artsyUrl = `https://api.artsy.net/api/search?q=${input}&type=artist`;
  fetch(artsyUrl, {
    method: 'GET',
    headers: new Headers({
      'X-Xapp-Token': localStorage.getItem('token')
    })
  })
    .then(response => response.json())
    .then(response => {
      const similarUrl = response._embedded.results[0]._links.self.href;
      localStorage.setItem('similarUrl', similarUrl);
      return similarUrl;
    })
    .catch(error => console.log(error.message));
}

function getSimilarArtist(input) {
  getArtistUrl(input);
  fetch(localStorage.getItem('similarUrl'), {
    method: 'GET',
    headers: new Headers({
      'X-Xapp-Token': localStorage.getItem('token')
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

export { getToken, getArtistUrl, getSimilarArtist };
