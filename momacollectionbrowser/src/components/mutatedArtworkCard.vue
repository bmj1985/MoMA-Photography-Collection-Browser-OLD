<template>
<div class="wrapper">
 <div class="card border-primary mb-3" style="max-width: 20rem;" v-for="mutatedArtwork in mutatedArtworks.slice(0,99)" :key="mutatedArtwork.ObjectID" :departmentHeads="departmentHeads">
  <div class="card-header">
    {{mutatedArtwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <ul>
  <li>{{mutatedArtwork.name}}</li>
  </ul>
    <h4 class="card-title" @click="getCardsByArtist()">
      {{mutatedArtwork.Artist[0]}}
      </h4>
    <img class="image" :src="mutatedArtwork.ThumbnailURL" alt="">
    <p>{{mutatedArtwork.Title}}</p>
    <p>{{mutatedArtwork.Date}}</p>
    <p class="togglearrow" @click="infoToggle = !infoToggle">&#9660;more info&#9660;</p>
      <mutatedAttributeList :class="{ hidden : infoToggle }" :mutatedArtwork="mutatedArtwork"
      :departmentHeads="departmentHeads"/>
  </div>
  </div>
</div>
</div>
</template>

<script>
import mutatedAttributeList from './mutatedAttributeList';
import moment from 'moment';

export default {
  name: 'mutatedArtworkCard',
  components: { mutatedAttributeList },
  props: [
    'mutatedArtworks',
    'departmentHeads',
    'getCardsByArtist',
    'cardsByArtist'
  ],
  data() {
    return {
      infoToggle: true
    };
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
