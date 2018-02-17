/* eslint-disable */
<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks.slice(0,10)" :key="artwork.ObjectID" >
  <div class="card-header">
    {{artwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <input type="radio" id="one" :value="artwork.Artist[0]" v-model="artistData">
<label for="one">Click here to get similar artist.</label>
    <h4 class="card-title">
      {{artwork.Artist[0]}}
      </h4>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p @click="infoToggle = !infoToggle">Click here to see more information.</p>
    <div :class="{ hidden : infoToggle }">
    <button v-on:click="getSimilarArtist(artistData)">Button 4</button>
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
      infoToggle: true,
      artistData: '',
      artsyUrl: ''
    };
  },
  methods: {
    getSimilarArtist(input) {
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
