<template>
  <ul>
    <li>
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
    <p>ObjectID: {{artwork.ObjectID}}</p>
    <p><a :href="artwork.URL" target="_blank">Link to Moma Official Page</a></p>
    <p><a :href="artwork.ThumbnailURL" target="_blank">Link to Thumbnail</a></p>
    <p>{{artwork.Height}}</p>
    <p>{{artwork.Width}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AttributeList',
  props: {
    artwork: {
      type: Object
    }
  }
};
</script>

<style scoped>

</style>