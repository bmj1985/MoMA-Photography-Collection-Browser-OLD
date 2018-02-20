/* eslint-disable */
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
        // eslint-disable-next-line
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxOTUxMTUxOCwiaWF0IjoxNTE4OTA2NzE4LCJhdWQiOiI1YTdkZjRlMmIyMDJhMzJmZGM2NWExZGUiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWE4OGFkNWU5YzE4ZGIzN2E5NzQ2ZTg3In0.NNjM3nHvQd5Rm2Gs2zGHwKWPuBnZ8ZsrbijlhZx8c9U',
      artsyUrl: '',
      artsyArtistId: '',
      similarArtists: [],
      artistName: '',
      similarArtistUrl: '',
      artistUrl: ''
    };
  },
  methods: {
    getArtistUrl() {
      const artsyUrl = `https://api.artsy.net/api/search?q=${
        this.artwork.Artist[0]
      }&type=artist`;
      fetch(artsyUrl, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(response => response.json())
        .then(response => {
          this.artistUrl = response._embedded.results[0]._links.self.href;
          console.log(this.artistUrl);
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
        });
    }
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
