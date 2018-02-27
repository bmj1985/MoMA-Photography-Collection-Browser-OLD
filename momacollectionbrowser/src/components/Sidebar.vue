/* eslint-disable */
<template>
  <div>
    <h2>MOMA Photography Collection Browser</h2>
<form>
      <div class="form-group">
        <button id="random" @click="getRandomPhotographs" type="submit" class="btn btn-primary btn-sm">Get Random Photographs</button></div>
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
          <input @click="filterPhotographs('pigmented inkjet')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Pigmented Inkjet
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('chromogenic color')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Chromogenic Color
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('silver dye bleach')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Silver dye bleach (cibacrhome)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('color instant')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Color Instant
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('dye transfer')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Dye Transfer
        </label>
      </div>
      <div class="form-check">
        <h6>Alternative Processes</h6>
        <label class="form-check-label">
          <input @click="filterPhotographs('albumen')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Albumen
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('ambrotype')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Ambrotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('bromoil')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Bromoil
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('calotype')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Calotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('carbon print')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Carbon print
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('collodion')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Collodion
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('cyanotype')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Cyanotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('daguerreotype')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Daguerreotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('gum bichromate')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Gum Bichromate
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('gum platinum')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Gum Platinum
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('palladium')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Platinum/Palladium
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('salted paper')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Salted Paper
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('tintype')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
         Tintype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('printing-out-paper')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Printing-out-paper
        </label>
      </div>
      <div class="form-check">
        <h6>Printmaking processes</h6>
        <label class="form-check-label">
          <input @click="filterPhotographs('intaglio')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Intaglio
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('lithograph')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Lithograph
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('photogravure')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
         Photogravure
        </label>
      </div>
       <div class="form-check">
        <h6>Other processes</h6>
        <label class="form-check-label">
          <input @click="filterPhotographs('inkjet')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Inkjet (B&W and Color)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('photomontage')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
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
  name: 'Sidebar',
  components: { modal },
  props: ['filterPhotographs', 'mutatedArtworks', 'filterGelatinSilver'],
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
#random {
  margin: 10px;
}
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
