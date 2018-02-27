<template>
<div class="wrapper">
  <div id="imagediv"><img :src="mutatedArtwork.ThumbnailURL" alt=""></div>
  <ul>
    <li>
      <p>Artist Name: {{mutatedArtwork.Artist[0]}}</p>
      <p>Artist Bio: {{mutatedArtwork.ArtistBio[0]}}</p>
      <p>Gender: {{mutatedArtwork.Gender[0]}}</p>
      <p>Print Type: {{mutatedArtwork.Medium}}</p>
      <p>Dimensions: {{mutatedArtwork.Dimensions}}</p>
    <p>Credit: {{mutatedArtwork.CreditLine}}</p>
    <p>Acquisition Date: {{mutatedArtwork.DateAcquired}}</p>
    <p>Department Head(s) at time of acquisition: {{curator}}
      </p>
    <p><a :href="mutatedArtwork.URL" target="_blank">Link to Moma Official Page</a></p>
    </li>
  </ul>
</div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'mutatedAttributeList',
  data() {
    return {
      mutatedDate: this.mutatedArtwork.DateAcquired,
      curator: ''
    };
  },
  props: {
    mutatedArtwork: {
      type: Object
    },
    departmentHeads: {
      type: Array
    }
  },
  methods: {
    getSpecificCurator() {
      return this.departmentHeads
        .filter(head => {
          if (
            moment(new Date(this.mutatedDate)).isBefore(head.PositionEndYear) &&
            moment(new Date(this.mutatedDate)).isAfter(head.PositionBeginYear)
          ) {
            return head;
          }
        })
        .forEach(head => {
          this.curator = head.DisplayName;
          console.log(this.curator);
        });
    }
  },
  mounted() {
    this.getSpecificCurator();
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  padding: 1vh;
}
#imagediv {
  align-self: flex-start;
}
</style>
