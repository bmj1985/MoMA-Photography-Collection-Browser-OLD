<template>
  <div id="card">
    <img :src="mutatedArtwork.ThumbnailURL" alt="Card image">
    <button
      type="button"
      class="btn btn-secondary"
      @click="showModal"
    >{{mutatedArtwork.Artist[0]}}
    </button>
    <mutatedPhotographModal
      v-show="isModalVisible"
      @close="closeModal"
      :mutatedArtwork="mutatedArtwork"
      :departmentHeads="departmentHeads"
    />
    </div>
</template>

<script>
import mutatedPhotographModal from '@/components/mutatedPhotographModal';

export default {
  name: 'TestCard',
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
#card {
  display: flex;
  align-items: center;
  border: solid 1px grey;
  flex-direction: column;
  margin: 1vh;
  height: inherit;
  overflow: hidden;
  justify-content: center;
}

button {
  margin: 10px;
}
</style>
