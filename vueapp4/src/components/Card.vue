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
    <AttributeList :artwork="artwork"/>
    </div>
  </div>
</div>
</div>
</template>

<script>
import AttributeList from './AttributeList';
import defaultDiacriticsRemovalMap from '../lib/diacritics';

export default {
  name: 'Card',
  components: { AttributeList },
  props: ['artworks', 'Medium'],
  data() {
    return {
      infoToggle: true,
      artistData: '',
      defaultDiacriticsRemovalMap: []
    };
  },
  methods: {
    removeDiacritics(string) {
      let changes;
      if (!changes) {
        changes = defaultDiacriticsRemovalMap;
      }
      for (var i = 0; i < changes.length; i++) {
        string = string.replace(changes[i].letters, changes[i].base);
      }
      this.artistData = string;
      return string;
    },
    nameToUrl() {
      console.log(this.artistData);
      let filteredName = this.artistData.toLowerCase().replace(/\s/g, '-');
      let url = 'https://api.artsy.net/api/artists/' + filteredName;
      console.log(url);
      return url;
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
