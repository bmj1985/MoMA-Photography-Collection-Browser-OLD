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

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      momaAPI_Url: '../static/momaartworks.json',
      artsyAPI_Url: 'https://api.artsy.net/api/',
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
    this.getDataFromArtsty, this.getDataFromMoma();
  },
  methods: {
    getDataFromMoma() {
      fetch(this.momaAPI_Url)
        .then(response => response.json())
        .then(response => {
          let artworks = response.filter(artwork => {
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
            // to be cCreditLine
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
          this.artworks = artworks.slice(11455, 11588);
        });
    },
    getDataFromArtsty() {
      fetch(this.artsyAPI_Url)
        .then(response => response.json())
        .then(response => console.log(response));
    }
  }
};
</script>

<style>
.card {
  margin: 1vw;
}
</style>
  