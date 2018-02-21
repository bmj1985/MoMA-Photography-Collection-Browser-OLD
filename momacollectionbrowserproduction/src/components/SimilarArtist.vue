<template>
  <div>
    <div>
    <h4 v-for="similarArtist in similarArtists" :key="similarArtist.id">Similar Artists</h4>
    <ul>
      <li>{{similarArtist.name}}</li>
    </ul>
  </div>
  </div>
</template>


<script>
export default {
  name: 'SimilarArtist',
  props: {
    artwork: {
      type: Object
    }
  },
  data() {
    return {
      xappToken:
        /* es-lint-disable-next-line */
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxOTc2Njg5MywiaWF0IjoxNTE5MTYyMDkzLCJhdWQiOiI1YTdkZjRlMmIyMDJhMzJmZGM2NWExZGUiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWE4YzkyZWQ4YjNiODEzNWRiNTk4OTlkIn0.3zJzNKPRlTJCnxKIk_K5_3Pt_zx4msilXGNJVPAt4II',
      artsyUrl: '',
      artsyArtistId: '',
      similarArtists: [],
      artistName: '',
      similarArtistUrl: '',
      artistUrl: ''
    };
  },
  methods: {
    getToken() {
      const clientID = 'e7a553ede809b28975c5';
      const clientSecret = '3958f90fe1ff54c8380e508aaf2966f9';
      return (
        fetch('https://api.artsy.net/api/tokens/xapp_token', {
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
            console.log(response);
            this.xappToken = response.token;
          })
          // eslint-disable-next-line
          .catch(err => console.error('Request failed', err))
      );
    },
    getArtistUrl() {
      const artsyUrl = `https://api.artsy.net/api/search?q=${
        this.artwork.Artist[0]
      }`;
      fetch(artsyUrl, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(response => response.json())
        .then((response, secondThing, thirdThing) => {
          console.log(response, secondThing, thirdThing);
          console.log(typeof response._embedded);
          // if (response._embedded != undefined) {
          //   this.artistUrl = response._embedded.results[0]._links.self.href;
          // } else {
          //   this.artistUrl =
          //     'https://api.artsy.net/api/shows/5401add97261692d5d090000';
          // }
          // console.log(this.artistUrl);
        })
        // eslint-disable-next-line
        .catch(error => console.log(error.message));
    },
    getArtsyArtistId() {
      console.log(this.artistUrl);
      this.getArtistUrl();
      fetch(this.artistUrl, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(response => response.json())
        .then(response => {
          this.artsyArtistId = response.id;
          console.log(this.artsyArtistId);
        })
        // eslint-disable-next-line
        .catch(error => console.log(error.message));
    },
    fetchSimilarArtists() {
      this.similarArtistUrl = `https://api.artsy.net/api/artists?similar_to_artist_id=${
        this.artsyArtistId
      }`;
      fetch(this.similarArtistUrl, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.similarArtists = response._embedded.artists;
          console.log(this.similarArtists);
        });
    }
  },
  beforeMount() {
    // this.getToken();
  },
  mounted() {
    this.getArtistUrl();
    // this.getArtsyArtistId();
    // this.fetchSimilarArtists();
  }
};
</script>

<style scoped>
.image {
  align-items: center;
}
.hidden {
  display: none;
}
</style>
