<template>
<li class="listitem">
 <div class="card border-primary mb-3" style="max-width: 20rem;">
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
    <div id="moreinfo">
    <button
      type="button"
      class="btn btn-secondary"
      @click="showModal"
    >
      more info
    </button>

    <PhotographModal
      v-show="isModalVisible"
      @close="closeModal"
      :artwork="artwork"
      :departmentHeads="departmentHeads"
    />
    </div>
  </div>
  </div>
</div>
</li>
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
