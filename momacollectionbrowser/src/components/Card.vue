/* eslint-disable */
<template>
<div class="wrapper">
   <div class="card border-primary mb-3" style="max-width: 20rem;" v-for="artwork in artworks.slice(0,29)" :key="artwork.ObjectID">
  <div class="card-header">
    {{artwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <p>{{artwork.name}}</p>
    <h4 class="card-title">
      {{artwork.Artist[0]}}
      </h4>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p class="togglearrow" @click="infoToggle = !infoToggle">&#9660; more info &#9660;</p>
    <section :class="{ hidden : infoToggle }">
      <AttributeList :artwork="artwork" :curator="curator"
      :date="date"/>
    </section>
  </div>
  </div>
  </div>
</template>
<script>
import AttributeList from './AttributeList';
import moment from 'moment';

export default {
  name: 'Card',
  components: { AttributeList },
  props: ['artworks', 'departmentHeads'],
  data() {
    return {
      infoToggle: true,
      curator: '',
      date: this.artwork.DateAcquired
    };
  },
  watch: {
    departmentHeads: function getSpecificCurator() {
      console.log(this.departmentHeads);
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
.wrapper {
  align-items: center;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.image {
  align-self: center;
}
.hidden {
  display: none;
}

.togglearrow {
  text-align: right;
}
#toolong {
  font-size: 5rem;
  text-align: center;
}

#pageloading {
  font-size: 5rem;
  align-self: center;
  margin: 10vh 5vw 10vh 5vw;
  text-align: center;
}
</style>
