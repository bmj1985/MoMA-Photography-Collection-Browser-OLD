/* eslint-disable */
<template>
<div>
<button
      type="button"
      class="btn btn-primary aboutbutton"
      @click="showModal"
    >
      About
</button>
<modal
      v-show="isModalVisible"
      @close="closeModal"
    />
<a href="http://dx.doi.org/10.5281/zenodo.1163802"
rel="nofollow"><img id="momaattribution" src="https://camo.githubusercontent.com/
7ea321b31bf12352ff70f2f5dc672e82208b2738/68747470733a2f2f7a6
56e6f646f2e6f72672f62616467652f646f692f31302e353238312f7a656e6f646f2e313136333830322e737667"
alt="DOI" data-canonical-src="https://zenodo.org/badge/doi/10.5281/zenodo.1163802.svg"
 style="max-width:100%;"></a>
 </div>
</template>

<script>
import modal from '@/components/modal';

export default {
  name: 'AboutButton',
  components: { modal },
  props: [
    'filterPhotographs',
    'mutatedArtworks',
    'filterGelatinSilver',
    'getRandomPhotographs',
    'search'
  ],
  data() {
    return {
      isModalVisible: false,
      searchTerm: ''
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
#randomwrapper,
#searchwrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#inputSmall {
  width: 18vw;
  margin: 0vh 0.5vh 0.5vh 0.5vh;
}
#searchbutton {
  margin: 0.5vh 0.5vh 0vh 0.5vh;
  width: 18vw;
}
#random {
  margin: 0vh 0.5vh 0.5vh 0.5vh;
  width: 18vw;
  align-self: center;
}
.aboutbutton {
  margin: 30px 0px 10px 0px;
  width: 18vw;
}
.slider {
  margin: 1vw;
}

h6 {
  margin: 8px;
}
#momaattribution {
  margin: 30px 0px 10px 0px;
}
.hidden {
  display: none;
}
</style>
