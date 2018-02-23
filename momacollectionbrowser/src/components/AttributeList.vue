<template>
<div>
  <ul>
    <li>
    <p>{{artwork.Dimensions}}</p>
    <p>{{artwork.CreditLine}}</p>
    <p>Acquisition Date: {{date}}</p>
    <p>Artist Bio: {{artwork.ArtistBio[0]}}</p>
    <p>Gender: {{artwork.Gender[0]}}</p>
    <p>Department Head(s) at time of acquisition: {{curator}}
      </p>
    <p><a :href="artwork.URL" target="_blank">Link to Moma Official Page</a></p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'AttributeList',
  props: {
    artwork: {
      type: Object
    },
    date: {
      type: String
    },
    curator: {
      type: String
    }
  }
};
</script>

<style scoped>

</style>
