/* eslint-disable */
<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks.slice(9800,9900)" :key="artwork.ObjectID" >
  <div class="card-header">
    {{artwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <input type="radio" id="one" :value="artwork.Artist[0]" v-model="artistData">
<label for="one">Click here to get similar artist.</label>
<ul v-for="artist in similarArtist">
  <li>{{artist.name}}</li>
</ul>
    <h4 class="card-title">
      {{artwork.Artist[0]}}
      </h4>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p @click="infoToggle = !infoToggle">Click here to see more information.</p>
    <div :class="{ hidden : infoToggle }">
    <button v-on:click="getArtsyArtistId(artistData)">Button 4</button>
    <AttributeList :artwork="artwork"/>
    </div>
  </div>
</div>
</div>
</template>

<script>
import AttributeList from './AttributeList';
import { getArtistUrl } from '../lib/vanilla';

export default {
  name: 'Card',
  components: { AttributeList },
  props: ['artworks'],
  data() {
    return {
      xappToken:
        // eslint-disable-next-line
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUxOTUxMTUxOCwiaWF0IjoxNTE4OTA2NzE4LCJhdWQiOiI1YTdkZjRlMmIyMDJhMzJmZGM2NWExZGUiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWE4OGFkNWU5YzE4ZGIzN2E5NzQ2ZTg3In0.NNjM3nHvQd5Rm2Gs2zGHwKWPuBnZ8ZsrbijlhZx8c9U',
      infoToggle: true,
      artistData: '',
      artsyUrl: '',
      artsyArtistId: '',
      similarArtist: []
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
        .then(response => console.log(response));
    },
    getArtsyArtistId(input) {
      getArtistUrl(input);
      fetch(localStorage.getItem('similarUrl'), {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.xappToken
        })
      })
        .then(response => response.json())
        .then(response => {
          this.artsyArtistId = response.id;
          console.log(this.artsyArtistId);
          let similarArtistUrl = `https://api.artsy.net/api/artists?similar_to_artist_id=${
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
              response._embedded.artists.forEach(artist => {
                console.log(artist.name);
              });
              this.similarArtist = response._embedded.artists;
            });
        })
        .catch(error => console.log(error.message));
    }
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
