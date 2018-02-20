// // Function Gets Token From Artsy
// function getToken() {
//   const clientID = 'e7a553ede809b28975c5';
//   const clientSecret = '3958f90fe1ff54c8380e508aaf2966f9';
//   return (
//     fetch('https://api.artsy.net/api/tokens/xapp_token', {
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }),
//       method: 'POST',
//       body: JSON.stringify({
//         client_id: clientID,
//         client_secret: clientSecret
//       })
//     })
//       .then(response => response.json())
//       .then(response => {
//         localStorage.setItem('token', response.token);
//       })
//       // eslint-disable-next-line
//       .catch(err => console.error('Request failed', err))
//   );
// }

// Function
// function getArtistUrl(input) {
//   const xappToken =
//     // eslint-disable-next-line
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxOTUxMTUxOCwiaWF0IjoxNTE4OTA2NzE4LCJhdWQiOiI1YTdkZjRlMmIyMDJhMzJmZGM2NWExZGUiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWE4OGFkNWU5YzE4ZGIzN2E5NzQ2ZTg3In0.NNjM3nHvQd5Rm2Gs2zGHwKWPuBnZ8ZsrbijlhZx8c9U';
//   const artsyUrl = `https://api.artsy.net/api/search?q=${input}&type=artist`;
//   fetch(artsyUrl, {
//     method: 'GET',
//     headers: new Headers({
//       'X-Xapp-Token': xappToken
//     })
//   })
//     .then(response => response.json())
//     .then(response => {
//       const artistUrl = response._embedded.results[0]._links.self.href;
//       localStorage.setItem('artistUrl', artistUrl);
//       return artistUrl;
//     })
//     // eslint-disable-next-line
//     .catch(error => console.log(error.message));
// }

// function getSimilarArtist(input) {
//   const xappToken =
// eslint-disable-next-line
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxOTUxMTUxOCwiaWF0IjoxNTE4OTA2NzE4LCJhdWQiOiI1YTdkZjRlMmIyMDJhMzJmZGM2NWExZGUiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWE4OGFkNWU5YzE4ZGIzN2E5NzQ2ZTg3In0.NNjM3nHvQd5Rm2Gs2zGHwKWPuBnZ8ZsrbijlhZx8c9U';
//   getArtistUrl(input);
//   fetch(localStorage.getItem('artistUrl'), {
//     method: 'GET',
//     headers: new Headers({
//       'X-Xapp-Token': xappToken
//     })
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);
//     });
// }

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

// export { getToken, getArtistUrl };
