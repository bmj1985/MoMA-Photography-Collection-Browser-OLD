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
    <button
      type="button"
      class="btn"
      @click="showModal"
    >
      more info
    </button>
     <modal
      v-show="isModalVisible"
      @close="closeModal"
      :mutatedArtwork="mutatedArtwork"
      :departmentHeads="departmentHeads"
    >
    <h2 slot="header">{{mutatedArtwork.Artist[0]}}</h2>
    <mutatedAttributeList slot="body" :mutatedArtwork="mutatedArtwork"
      :departmentHeads="departmentHeads"></mutatedAttributeList>
    <footer slot="footer"><p>Information courtesy Museum of Modern Art</p></footer>
    </modal>
  </div>
  </div>
</div>
</div>
</template>

<script>
import modal from './modal';
import moment from 'moment';
import mutatedAttributeList from '@/components/mutatedAttributeList';

export default {
  name: 'mutatedArtworkCard',
  components: { modal, mutatedAttributeList },
  props: [
    'mutatedArtworks',
    'departmentHeads',
    'getCardsByArtist',
    'cardsByArtist'
  ],
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
