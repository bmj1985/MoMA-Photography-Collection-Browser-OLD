/* eslint-disable */
<template>
  <div>
    <div>
    <h4 v-for="similarArtist in similarArtists" :key="similarArtist.id">Similar Artists</h4>
    <ul>
      <li>{{similarArtist.name}}</li>
    </ul>
     <input type="radio" id="one" :value="artwork.Artist[0]" v-model="artistData">
     <label for="one">{{artwork.Artist[0]}}</label>
  </div>
  </div>
</template>

<script>
import { getArtistUrl } from '../lib/vanilla';

export default {
  name: 'SimilarArtist',
  components: {},
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
      artistData: '',
      artsyUrl: '',
      artsyArtistId: '',
      similarArtists: [],
      artistName: ''
    };
  },
  methods: {
    fetchSimilarArtists() {
      fetch(this.artsyArtistId, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(response => response.json())
        // eslint-disable-next-line
        .then(response => console.log(response));
    },
    getArtsyArtistId() {
      getArtistUrl('Josef Koudelka');
      fetch(localStorage.getItem('artistUrl'), {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(idResponse => idResponse.json())
        .then(idResponse => {
          this.artsyArtistId = idResponse.id;
          const similarArtistUrl = `https://api.artsy.net/api/artists?similar_to_artist_id=${
            this.artsyArtistId
          }`;
          fetch(similarArtistUrl, {
            method: 'GET',
            headers: new Headers({
              'X-Xapp-Token': this.xappToken
            })
          })
            .then(response => response.json())
            .then(response => {
              this.similarArtists = response._embedded.artists;
            });
        })
        // eslint-disable-next-line
        .catch(error => console.log(error.message));
    }
  },
  mounted() {
    this.getArtsyArtistId();
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
