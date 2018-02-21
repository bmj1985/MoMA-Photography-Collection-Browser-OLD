<template>
  <ul>
    <li>
    <p>{{artwork.Dimensions}}</p>
    <p>{{artwork.CreditLine}}</p>
    <p>Acquisition Date: {{artwork.DateAcquired}}</p>
    <p>Artist Bio: {{artwork.ArtistBio[0]}}</p>
    <p>Gender: {{artwork.Gender[0]}}</p>
    <p><a :href="artwork.URL" target="_blank">Link to Moma Official Page</a></p>
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
