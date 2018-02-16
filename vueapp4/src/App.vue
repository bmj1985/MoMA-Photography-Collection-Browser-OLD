/* eslint-disable */
<template>
<div id="app">
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :artworks="artworks" :Medium="Medium"
          :nameToUrl="nameToUrl" :artistData="artistData"/>
      </li>
    </ul>
 <div id="event-testing">
  <button v-on:click="getDataFromMoma()">Button 1</button>
  <button v-on:click="getToken()">Button 2</button>
  <button v-on:click="getResource()">Button 4</button>
</div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import AttributeList from '@/components/AttributeList';
import defaultDiacriticsRemovalMap from './lib/diacritics';
import XRegExp from 'xregexp';

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      defaultDiacriticsRemovalMap: [],
      artistData: '',
      momaAPI_Url: '../static/momaartworks.json',
      artsyUrl: '',
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
          const artworks = response.filter(artwork => {
            if (artwork.Department === 'Photography' && artwork.URL != null) {
              return artwork;
            }
          });
          artworks.forEach(artwork => {
            this.title = artwork.Title;
            this.artist = artwork.Artist;
            this.ConstituentID = artwork.ConstituentID;
            this.ArtistBio = artwork.ArtistBio;
            this.Nationality = artwork.Nationality;
            this.BeginDate = artwork.BeginDate;
            this.EndDate = artwork.EndDate;
            this.Gender = artwork.Gender;
            this.Date = artwork.Date;
            this.Medium = artwork.Medium;
            this.Dimensions = artwork.Dimensions;
            this.CreditLine = artwork.CreditLine;
            this.AccessionNumber = artwork.AccessionNumber;
            this.Classification = artwork.Classification;
            this.Department = artwork.Department;
            this.DateAcquired = artwork.DateAcquired;
            this.Cataloged = artwork.Cataloged;
            this.ObjectID = artwork.ObjectID;
            this.URL = artwork.URL;
            this.Date = artwork.Date;
            this.ThumbnailURL = artwork.ThumbnailURL;
            this.Height = artwork['Height_(cm)'];
            this.Width = artwork['Width_(cm)'];
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
          this.token = response.token;
          console.log(this.token);
          return response.token;
        })
        .catch(err => console.error('Request failed', err));
    },
    getResource(url) {
      fetch(url, {
        method: 'GET',
        headers: new Headers({
          'X-Xapp-Token': this.token
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

<style>
.card {
  margin: 1vw;
}
</style>
