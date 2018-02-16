/* eslint-disable */
<template>
<div id="app">
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :artworks="artworks" :Medium="Medium"/>
      </li>
    </ul>
 <div id="event-testing">
  <button v-on:click="getDataFromMoma()">Button 1</button>
  <button v-on:click="getToken()">Button 2</button>
</div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import AttributeList from '@/components/AttributeList';

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
      artworks: [],
      title: '',
      artist: [],
      ConstituentID: [],
      ArtistBio: [],
      Nationality: [],
      BeginDate: [],
      EndDate: [],
      Gender: [],
      Date: '',
      Medium: '',
      Dimensions: '',
      CreditLine: '',
      AccessionNumber: '',
      Classification: '',
      Department: '',
      DateAcquired: '',
      Cataloged: '',
      ObjectID: 0,
      URL: '',
      ThumbnailURL: '',
      Height: 0,
      Width: 0
    };
  },
  updated() {},
  mounted() {},
  methods: {
    getDataFromMoma() {
      fetch(this.momaAPI_Url)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          const artworks = response.filter(artwork => {
            if (artwork.Department === 'Photography' && artwork.URL != null) {
              return artwork;
            }
          });
          this.artworks = artworks;
        });
    },
    getToken() {
      const clientID = 'e7a553ede809b28975c5';
      const clientSecret = '3958f90fe1ff54c8380e508aaf2966f9';
      return fetch('https://api.artsy.net/api/tokens/xapp_token', {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          client_id: clientID,
          client_secret: clientSecret
        })
      })
        .then(response => response.json())
        .then(response => {
          localStorage.setItem('token', response.token);
          this.token = response.token;
          console.log(this.token);
          return response.token;
        })
        .catch(err => console.error('Request failed', err));
    }
  }
};
</script>

<style>
.card {
  margin: 1vw;
}
</style>
