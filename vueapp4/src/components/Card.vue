/* eslint-disable */
<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks.slice(5678,5688)" :key="artwork.ObjectID" >
  <div class="card-header">
    {{artwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <ul>
  <li>{{artwork.name}}</li>
  </ul>
    <h4 class="card-title">
      {{artwork.Artist[0]}}
      </h4>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p class="togglearrow" @click="infoToggle = !infoToggle">&#9660;</p>
    <div :class="{ hidden : infoToggle }">
    <AttributeList :artwork="artwork"/>
    <!-- <SimilarArtist :artwork="artwork"></SimilarArtist> -->
    </div>
  </div>
</div>
</div>
</template>

<script>
import AttributeList from './AttributeList';
import SimilarArtist from './SimilarArtist';
// import { getArtistUrl } from '../lib/vanilla';

export default {
  name: 'Card',
  components: { AttributeList, SimilarArtist },
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
  }
};
</script>

<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
}
.image {
  align-self: center;
}
.hidden {
  display: none;
}

.togglearrow {
  text-align: right;
}
</style>
