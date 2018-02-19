/* eslint-disable */
<template>
<div id="app">
  <Sidebar class="sidebar" :artworks="artworks"/>
  <div>
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :artworks="artworks"/>
      </li>
    </ul>
    </div>
</div>
</template>

<script>
import Card from '@/components/Card';
import Sidebar from '@/components/Sidebar';
import { getToken } from './lib/vanilla';

export default {
  name: 'App',
  components: {
    Card,
    Sidebar
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
      })
      .then(getToken());
  }
};
</script>

<style>
#app {
  display: flex;
}
.card {
  margin: 1vw;
}

.sidebar {
  align-items: flex-start;
  width: 20vw;
  margin: 20px;
}

li {
  list-style-type: none;
}
</style>
