<template>
<div>
  <!-- <li>{{mutatedArtwork.Medium}}</li>
  <li>{{mutatedArtwork.name}}</li>
  <li>{{mutatedArtwork.Artist[0]}}</li>
  <li>{{mutatedArtwork.Title}}</li>
  <li>{{mutatedArtwork.Date}}</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
  </div>
  </div>
</div>
<div>
  <ul> -->
      <img class="image" :src="mutatedArtwork.ThumbnailURL" alt="">
    <p>{{mutatedArtwork.Dimensions}}</p>
    <p>{{mutatedArtwork.CreditLine}}</p>
    <p>Acquisition Date: {{mutatedArtwork.DateAcquired}}</p>
    <p>Artist Bio: {{mutatedArtwork.ArtistBio[0]}}</p>
    <p>Gender: {{mutatedArtwork.Gender[0]}}</p>
    <p>Department Head(s) at time of acquisition: {{mutatedCurator}}
      </p>
    <p><a :href="mutatedArtwork.URL" target="_blank">Link to Moma Official Page</a></p>
</div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'mutatedAttributeList',
  data() {
    return {
      date: this.mutatedArtwork.DateAcquired,
      mutatedCurator: ''
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
  mounted() {
    this.getSpecificCurator();
  },
  methods: {
    getSpecificCurator() {
      return this.departmentHeads
        .filter(head => {
          if (
            moment(new Date(this.date)).isBefore(head.PositionEndYear) &&
            moment(new Date(this.date)).isAfter(head.PositionBeginYear)
          ) {
            return head;
          }
        })
        .forEach(head => {
          this.mutatedCurator = head.DisplayName;
        });
    }
  }
};
</script>

<style scoped>

</style>
