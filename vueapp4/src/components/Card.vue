/* eslint-disable */
<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks.slice(0,10)" :key="artwork.ObjectID" >
  <div class="card-header" v-on:click="removeDiacritics(`${artwork.Artist[0]}`)">
    {{Medium}}
    </div>
  <div class="card-body text-primary">
    <h4 class="card-title" v-on:click="nameToUrl(artwork.Artist[0])">
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

export default {
  name: 'Card',
  components: { AttributeList },
  props: ['artworks', 'Medium', 'nameToUrl', 'removeDiacritics'],
  data() {
    return {
      infoToggle: true
    };
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
