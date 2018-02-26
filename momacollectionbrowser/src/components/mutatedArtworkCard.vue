<template>
<li class="listitem">
 <div class="card border-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">
    {{mutatedArtwork.Medium}}
    </div>
  <div class="card-body text-primary">
    <ul>
  <li>{{mutatedArtwork.name}}</li>
  </ul>
    <h4 class="card-title">
      {{mutatedArtwork.Artist[0]}}
      </h4>
    <img class="image" :src="mutatedArtwork.ThumbnailURL" alt="">
    <p>{{mutatedArtwork.Title}}</p>
    <p>{{mutatedArtwork.Date}}</p>
    <div id="moreinfo">
    <button
      type="button"
      class="btn btn-secondary"
      @click="showModal"
    >
      more info
    </button>

    <mutatedPhotographModal
      v-show="isModalVisible"
      @close="closeModal"
      :mutatedArtwork="mutatedArtwork"
      :departmentHeads="departmentHeads"
    />
    </div>
  </div>
  </div>
</div>
</li>
</template>

<script>
import mutatedPhotographModal from '@/components/mutatedPhotographModal';

export default {
  name: 'Card',
  components: { mutatedPhotographModal },
  props: ['mutatedArtwork', 'departmentHeads'],
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
#moreinfo {
  border: solid 1px lightgrey;
  align-self: flex-end;
}
.listitem {
  margin: 10px;
  align-self: flex-start;
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
