<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloWorld :artworks="artworks" :Medium="Medium"/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Museum of Modern Art Photo Sorter',
      momaAPI_Url: '../static/momaartworks.json',
      artsyAPI_Url: 'https://api.artsy.net/api/',
      artworks: [],
      Title: '',
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
  name: 'App',
  components: {
    HelloWorld,
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
            this.Title = artwork.Title;
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
