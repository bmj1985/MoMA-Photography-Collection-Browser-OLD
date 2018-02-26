/* eslint-disable */
<template>
  <div>
    <h2>MOMA Photography Collection Browser</h2>
<form>
  <fieldset>
      <legend>Print Type</legend>
      <div class="form-check">
        <h6>Gelatin Silver</h6>
        <label class="form-check-label">
           <input @click="filterGelatinSilver" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Gelatin Silver
        </label>
      </div>
      <div class="form-check">
        <h6>Color Processes</h6>
        <label class="form-check-label">
          <input @click="filterPigmentedInkjet" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Pigmented Inkjet
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterChromogenicColor" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Chromogenic Color
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterSilverDyeBleach" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Silver dye bleach (cibacrhome)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterColorInstant" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Color Instant
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterDyeTransfer" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Dye Transfer
        </label>
      </div>
      <div class="form-check">
        <h6>Alternative Processes</h6>
        <label class="form-check-label">
          <input @click="filterAlbumen" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Albumen
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterAmbrotype" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Ambrotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterBromoil" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Bromoil
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterCalotype" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Calotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterCarbonPrint" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Carbon print
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterCollodion" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Collodion
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterCyanotype" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Cyanotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterDaguerreotype" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Daguerreotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterGumBichromate" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Gum Bichromate
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterGumPlatinum" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Gum Platinum
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPlatinumPalladium" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Platinum/Palladium
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterSaltedPaper" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Salted Paper
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterTintype" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
         Tintype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPrintingOutPaper" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Printing-out-paper
        </label>
      </div>
      <div class="form-check">
        <h6>Printmaking processes</h6>
        <label class="form-check-label">
          <input @click="filterIntaglio" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Intaglio
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterLithograph" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Lithograph
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotogravure" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
         Photogravure
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterSerigraph" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Serigraph
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterScreenprint" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Screenprints
        </label>
      </div>
       <div class="form-check">
        <h6>Other processes</h6>
        <label class="form-check-label">
          <input @click="filterInkjet" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Inkjet (B&W and Color)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotomontage" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Photomontage
        </label>
      </div>
  </fieldset>
  </fieldset>
</form>
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
    >
    <h2 slot="header">ABOUT MOMA PHOTOGRPAHY COLLECTION BROWSER</h2>
    <div slot="body"><AboutText/></div>
    <footer slot="footer"><p>Copyright Brandon Johnson 2018</p></footer>
    </modal>
<a href="http://dx.doi.org/10.5281/zenodo.1163802"
rel="nofollow" target="blank"><img id="momaattribution" src="https://camo.githubusercontent.com/
7ea321b31bf12352ff70f2f5dc672e82208b2738/68747470733a2f2f7a6
56e6f646f2e6f72672f62616467652f646f692f31302e353238312f7a656e6f646f2e313136333830322e737667"
alt="DOI" data-canonical-src="https://zenodo.org/badge/doi/10.5281/zenodo.1163802.svg"
 style="max-width:100%;"></a>
</div>
</template>

<script>
import modal from '@/components/modal';
import AboutText from '@/components/AboutText';
export default {
  name: 'Sidebar',
  components: { modal, AboutText },
  props: [
    'mutatedArtworks',
    'filterGelatinSilver',
    'filterPigmentedInkjet',
    'filterChromogenicColor',
    'filterSilverDyeBleach',
    'filterColorInstant',
    'filterDyeTransfer',
    'filterAlbumen',
    'filterAmbrotype',
    'filterBromoil',
    'filterCalotype',
    'filterCarbonPrint',
    'filterCollodion',
    'filterCyanotype',
    'filterDaguerreotype',
    'filterGumBichromate',
    'filterGumPlatinum',
    'filterPlatinumPalladium',
    'filterSaltedPaper',
    'filterTintype',
    'filterPrintingOutPaper',
    'filterIntaglio',
    'filterLithograph',
    'filterPhotogravure',
    'filterSerigraph',
    'filterScreenprint',
    'filterInkjet',
    'filterPhotomontage'
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
.aboutbutton {
  margin: 30px 0px 10px 0px;
  width: 18vw;
}
#randombutton {
  margin: 10px 0 10px 0;
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
