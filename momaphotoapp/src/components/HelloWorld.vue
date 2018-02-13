<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <div>
  <div v-for="artwork in artworks" :key="artwork.ObjectID" >
  
    </div>
  <div class="card-body text-primary">
    <h4 class="card-title">
      <!-- {{artwork.Artist[0]}} -->
      </h4>
    <p class="card-text">Medium: {{Medium}}</p>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.artist}}</p> 
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p> 
      <!-- <p>Bio: {{artwork.ArtistBio}}</p> 
      <p>Nationality: {{artwork.Nationality}}</p> 
      <p>Begin Date: {{artwork.BeginDate}}</p> 
      <p>End Date: {{artwork.EndDate}}</p> 
      <p>Gender: {{artwork.Gender}}</p> 
      <p>{{artwork.Date}}</p> 
      <p>{{artwork.Medium}}</p> 
      <p>{{artwork.Dimensions}}</p> 
      <p>{{artwork.CreditLine}}</p> 
      <p>{{artwork.AccessionNumber}}</p> 
      <p>{{artwork.Classification}}</p> 
      <p>{{artwork.Department}}</p> 
      <p>{{artwork.DateAcquired}}</p> 
      <p>{{artwork.Cataloged}}</p> 
      <p>{{artwork.ObjectID}}</p>
      <p><a :href="artwork.URL" target="_blank">URL</a></p> 
      <p><a :href="artwork.ThumbnailURL" target="_blank">Link to Thumbnail</a></p> 
      <p>{{artwork.Height}}</p>
      <p>{{artwork.Width}}</p> -->
</div>
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  props: ['artworks', 'Medium']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
