/* eslint-disable */
<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks.slice(0,10)" :key="artwork.ObjectID" >
  <div class="card-header">
    {{Medium}}
    </div>
  <div class="card-body text-primary">
    <input type="radio" id="one" :value="artwork.Artist[0]" v-model="artistData" v-on:click="nameToUrl(artistData)">
<label for="one">Click here to get similar artist.</label>
    <h4 class="card-title" v-on:click="nameToUrl(artistData)">
      {{artwork.Artist[0]}}
      </h4>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p @click="infoToggle = !infoToggle">Click here to see more information.</p>
    <div :class="{ hidden : infoToggle }">
    <button v-on:click="getResource()">Button 4</button>
    <AttributeList :artwork="artwork"/>
    </div>
  </div>
</div>
</div>
</template>

<script>
import AttributeList from './AttributeList';

export default {
  name: 'Card',
  components: { AttributeList },
  props: ['artworks', 'Medium'],
  data() {
    return {
      infoToggle: true,
      artsyUrl: '',
      token: '',
      artistData: '',
      defaultDiacriticsRemovalMap: []
    };
  },
  mounted () {
    getResource()
  },
  methods: {
    getResource() {
      console.log('Hello World');
      console.log('2nd line');
      this.artsyUrl = `https://api.artsy.net/api/search?q=${
        this.artistData
      }&type=artist`;
      console.log(this.artsyUrl);
      fetch(this.artsyUrl, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': localStorage.getItem('token')
        })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response._embedded.results[0]._links.self.href);
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
