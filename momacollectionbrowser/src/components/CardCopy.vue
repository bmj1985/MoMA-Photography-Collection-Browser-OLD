<template>
<div class="wrapper">
 <div class="card border-primary mb-3" style="max-width: 20rem;" v-for="artwork in artworks.slice(0,99)" :key="artwork.ObjectID" :departmentHeads="departmentHeads">
  <div class="card-header">
    {{artwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <ul>
  <li>{{artwork.name}}</li>
  </ul>
    <h4 class="card-title">
      {{artwork.Artist[0]}}
      </h4>
    <img class="image" :src="artwork.ThumbnailURL" alt="">
    <p>{{artwork.Title}}</p>
    <p>{{artwork.Date}}</p>
    <p class="togglearrow" @click="infoToggle = !infoToggle">&#9660;more info&#9660;</p>
      <AttributeCopy :class="{ hidden : infoToggle }" :artwork="artwork"
      :departmentHeads="departmentHeads"/>
  </div>
  </div>
</div>
</div>
</template>

<script>
import AttributeCopy from './AttributeCopy';

export default {
  name: 'CardCopy',
  components: { AttributeCopy },
  props: ['artworks', 'departmentHeads'],
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
