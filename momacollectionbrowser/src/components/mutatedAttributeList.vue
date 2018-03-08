<template>
<div class="wrapper">
  <div class="imagedatewrapper">
  <div id="imagediv"><img :src="mutatedArtwork.ThumbnailURL" alt=""></div>
  <div id="photodate"><p>{{mutatedArtwork.Date}}</p></div>
  </div>
  <ul>
    <li>
      <p>Artist Name: {{mutatedArtwork.Artist[0]}}</p>
      <p v-show="mutatedArtwork.ArtistBio.length > 0">Artist Bio: {{mutatedArtwork.ArtistBio[0]}}</p>
      <p v-show="mutatedArtwork.Gender.length > 0">Gender: {{mutatedArtwork.Gender[0]}}</p>
      <p v-show="mutatedArtwork.Medium.length > 0">Print Type: {{mutatedArtwork.Medium}}</p>
      <p v-show="mutatedArtwork.Dimensions.length > 0">Dimensions: {{mutatedArtwork.Dimensions}}</p>
    <p>Credit: {{mutatedArtwork.CreditLine}}</p>
    <p>Acquisition Date: {{mutatedArtwork.DateAcquired}}</p>
    <p >Department Head(s) at time of acquisition: {{curator}}
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
.imagedatewrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#photodate {
  align-self: center;
  margin-top: 20px;
}
</style>
