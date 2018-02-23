<template>
<div>
  <ul>
    <li>
    <p>{{artwork.Dimensions}}</p>
    <p>{{artwork.CreditLine}}</p>
    <p>Acquisition Date: {{artwork.DateAcquired}}</p>
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
import moment from 'moment';
export default {
  name: 'AttributeCopy',
  data() {
    return {
      date: this.artwork.DateAcquired,
      curator: ''
    };
  },
  props: {
    artwork: {
      type: Object
    },
    departmentHeads: {
      type: Array
    }
  },
  watch: {
    departmentHeads: function getSpecificCurator() {
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
          this.curator = head.DisplayName;
        });
    }
  }
};
</script>

<style scoped>

</style>
