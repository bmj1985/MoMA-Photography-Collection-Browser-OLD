<template>
  <div id="card">
    <img :src="artwork.ThumbnailURL" alt="Card image">
    <button
      type="button"
      class="btn btn-secondary"
      @click="showModal"
    >{{artwork.Artist[0]}}
    </button>
    <PhotographModal
      v-show="isModalVisible"
      @close="closeModal"
      :artwork="artwork"
      :departmentHeads="departmentHeads"
    />
    </div>
</template>

<script>
import PhotographModal from '@/components/PhotographModal';

export default {
  name: 'Card',
  components: { PhotographModal },
  props: ['artwork', 'departmentHeads'],
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
