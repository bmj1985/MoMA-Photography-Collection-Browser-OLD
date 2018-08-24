<template>
<div class="wrapper">
  <div class="imagedatewrapper">
  <div id="imagediv"><img :src="artwork.ThumbnailURL" alt=""></div>
  <div id="photodate"><p>{{artwork.Date}}</p></div>
  </div>
  <ul>
    <li>
      <p>Artist Name: {{artwork.Artist[0]}}</p>
      <p>Artist Bio: {{artwork.ArtistBio[0]}}</p>
      <p>Gender: {{artwork.Gender[0]}}</p>
      <p>Print Type: {{artwork.Medium}}</p>
      <p>Dimensions: {{artwork.Dimensions}}</p>
    <p>Credit: {{artwork.CreditLine}}</p>
    <p>Acquisition Date: {{artwork.DateAcquired}}</p>
    <p>Department Head(s) at time of acquisition: {{curator}}
      </p>
    <p><a :href="artwork.URL" target="_blank">Link to Moma Official Page</a></p>
    </li>
  </ul>
</div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "AttributeList",
  data() {
    return {
      date: this.artwork.DateAcquired,
      curator: ""
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
            dayjs(new Date(this.date)).isBefore(head.PositionEndYear) &&
            dayjs(new Date(this.date)).isAfter(head.PositionBeginYear)
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
.imagedatewrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#photodate {
  align-self: center;
  margin-top: 20px;
}
.wrapper {
  display: flex;
  padding: 1vh;
  margin: 1vh;
}
#imagediv {
  align-self: center;
}
</style>
