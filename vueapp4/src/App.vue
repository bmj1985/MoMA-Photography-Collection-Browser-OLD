/* eslint-disable */
<template>
<div id="app">
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :artworks="artworks"/>
      </li>
    </ul>
</div>
</template>

<script>
import Card from '@/components/Card';
import AttributeList from '@/components/AttributeList';
// import { getToken } from './lib/vanilla';

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      artistData: '',
      momaAPI_Url: '../static/momaartworks.json',
      token: '',
      artworks: []
    };
  },
  mounted() {
    fetch(this.momaAPI_Url)
      .then(response => response.json())
      .then(response => {
        const artworks = response.filter(artwork => {
          if (
            artwork.Department === 'Photography' &&
            artwork.ThumbnailURL != null
          ) {
            return artwork;
          }
        });
        this.artworks = artworks;
      });
    // .then(getToken);
  }
};
</script>

<style>
.card {
  margin: 1vw;
}
</style>
