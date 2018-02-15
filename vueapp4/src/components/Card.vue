/* eslint-disable */
<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks" :key="artwork.ObjectID" >
  <div class="card-header">
    {{Medium}}
    </div>
  <div class="card-body text-primary">
    <h4 class="card-title">
      {{artwork.Artist[0]}}
      </h4>
    <p class="card-text">Medium: {{Medium}}</p>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.artist}}</p>
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p>Bio: {{artwork.ArtistBio[0]}}</p>
    <p>Nationality: {{artwork.Nationality[0]}}</p>
    <p>Begin Date: {{artwork.BeginDate[0]}}</p>
    <p>End Date: {{artwork.EndDate[0]}}</p>
    <p>Gender: {{artwork.Gender[0]}}</p>
    <p>{{artwork.Date}}</p>
    <p>{{artwork.Medium}}</p>
    <p>{{artwork.Dimensions}}</p>
    <p>{{artwork.CreditLine}}</p>
    <p>{{artwork.AccessionNumber}}</p>
    <p>{{artwork.Classification}}</p>
    <p>{{artwork.Department}}</p>
    <p>Acquisition Date: {{artwork.DateAcquired}}</p>
    <p>{{artwork.Cataloged}}</p>
    <p>{{artwork.ObjectID}}</p>
    <p><a :href="artwork.URL" target="_blank">Link to Moma Official Page</a></p>
    <p><a :href="artwork.ThumbnailURL" target="_blank">Link to Thumbnail</a></p>
    <p>{{artwork.Height}}</p>
    <p>{{artwork.Width}}</p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: ['artworks', 'Medium']
};
</script>

<style scoped>
.image {
  align-items: center;
}
</style>
