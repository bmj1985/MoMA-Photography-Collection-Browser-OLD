<template>
  <div>
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
          <input @click="filterPhotographs('instant')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Instant
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input @click="filterPhotographs('photomontage')" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Photomontage
        </label>
      </div>
  </fieldset>
  </div>
</template>

<script>
export default {
  name: 'PrintType',
  props: ['filterPhotographs', 'mutatedArtworks', 'filterGelatinSilver']
};
</script>

<style scoped>

</style>