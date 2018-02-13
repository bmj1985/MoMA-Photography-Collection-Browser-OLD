<template>
<div class="wrapper">
  <div class="card border-primary mb-3" style="max-width: 20rem;"
  v-for="artwork in artworks" :key="artwork.ObjectID" >
  <div class="card-header">
    {{Medium}}
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
    <p>{{artwork.DateAcquired}}</p>
    <p>{{artwork.Cataloged}}</p>
    <p>{{artwork.ObjectID}}</p>
    <p><a :href="artwork.URL" target="_blank">Link to Moma Official Page</a></p>
    <p><a :href="artwork.ThumbnailURL" target="_blank">Link to Thumbnail</a></p>
    <p>{{artwork.Height}}</p>
    <p>{{artwork.Width}}</p>
    <p>{"id":"4eeb62edee499500010021ba","slug":"august-sander","created_at":"2011-12-16T15:25:33+00:00","updated_at":"2018-02-13T06:35:21+00:00","name":"August Sander","sortable_name":"Sander August","gender":"male","biography":"","birthday":"1876","deathday":"1964","hometown":"Herdorf, near Siegen, Germany","location":"Cologne, Germany","nationality":"German","image_versions":["four_thirds","large","square","tall"],"_links":{"thumbnail":{"href":"https://d32dm0rphc51dk.cloudfront.net/VBuu5O1uRdufZRacNlvGcg/four_thirds.jpg"},"image":{"href":"https://d32dm0rphc51dk.cloudfront.net/VBuu5O1uRdufZRacNlvGcg/{image_version}.jpg","templated":true},"self":{"href":"https://api.artsy.net/api/artists/4eeb62edee499500010021ba"},"permalink":{"href":"http://www.artsy.net/artist/august-sander"},"artworks":{"href":"https://api.artsy.net/api/artworks?artist_id=4eeb62edee499500010021ba"},"published_artworks":{"href":"https://api.artsy.net/api/artworks?artist_id=4eeb62edee499500010021ba&published=true"},"similar_artists":{"href":"https://api.artsy.net/api/artists?similar_to_artist_id=4eeb62edee499500010021ba"},"similar_contemporary_artists":{"href":"https://api.artsy.net/api/artists?similar_to_artist_id=4eeb62edee499500010021ba&similarity_type=contemporary"},"genes":{"href":"https://api.artsy.net/api/genes?artist_id=4eeb62edee499500010021ba"}}}%</p>
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
