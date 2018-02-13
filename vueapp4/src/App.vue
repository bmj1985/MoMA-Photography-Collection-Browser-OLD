/* eslint-disable */
<template>
  <div id="app">
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :artworks="artworks" :Medium="Medium"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card';
import traverson from 'traverson';
import JsonHalAdapter from 'traverson-hal';

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      momaAPI_Url: '../static/momaartworks.json',
      artsyAPI_Url: 'https://api.artsy.net/api',
      postUrl: 'https://api.artsy.net/api/tokens/xapp_token',
      xappToken: '',
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
  mounted() {
    this.getDataFromMoma();
    this.postForTokenFromArtsy();
  },
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
          this.artworks = artworks.slice(13455, 14088);
        });
    },
    postForTokenFromArtsy() {
      const clientID = 'e7a553ede809b28975c5';
      const clientSecret = '3958f90fe1ff54c8380e508aaf2966f9';
      fetch(this.postUrl, {
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
          this.xappToken = response.token;
          console.log('xappToken', this.xappToken);
          this.getDataFromArtsy();
          // localStorage.setItem(this.xappToken, response.token);
        })
        .catch(err => console.log('Request failed', err));
    },
    getDataFromArtsy() {
      traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
      const api = traverson.from('https://api.artsy.net/api').jsonHal();

      api
        .newRequest()
        .follow('artist')
        .withRequestOptions({
          headers: {
            'X-Xapp-Token': this.xappToken,
            Accept: 'application/vnd.artsy-v2+json'
          }
        })
        .withTemplateParameters({ id: 'andy-warhol' })
        .getResource((error, andyWarhol) => {
          if (error) {
            console.error(error);
          } else {
            console.log(JSON.stringify(document));
          }
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
