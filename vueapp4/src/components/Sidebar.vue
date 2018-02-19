/* eslint-disable */
<template>
  <div>
<form>
  <fieldset>
    <legend>Date Range</legend>
     <div class="slider-group row">
      <label for="slider1" class="col-sm-2 col-form-label">Year Start (1839)</label>
      <div class="col-sm-10">
             <input class="slider" id="slider1" type="range" min="1839" max="2018" step="10"/>
      </div>
      <label for="slider2" class="col-sm-2 col-form-label">Year End (Present)</label>
      <div class="col-sm-10">
             <input class="slider" id="slider2" type="range" min="1839" max="2018" step="10"/>
      </div>
      </div>
       
    <fieldset class="form-group">
      <legend>Print Type</legend>
      <div class="form-check">
        <h6>Gelatin Silver and related processes</h6>
        <label class="form-check-label">
          <input class="form-check-input" value="" type="checkbox">
          Gelatin Silver
        </label>
      </div>
      <div class="form-check">
        <h6>Color Processes</h6>
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Pigmented Inkjet
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Chromogenic Color
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Silver dye bleach (cibacrhome)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Color Instant
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Dye Transfer
        </label>
      </div>
      <div class="form-check">
        <h6>Alternative Processes</h6>
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Albumen
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Ambrotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Bromoil
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Calotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Carbon print
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Collodion
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Cyanotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Daguerreotype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Gum Bichromate
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Gum Platinum
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Platinum/Palladium
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Salted Paper
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
         Tintype
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Printing-out-paper
        </label>
      </div>
      <div class="form-check">
        <h6>Printmaking processes</h6>
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Intaglio
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Lithograph
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
         Photogravure
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Serigraph
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Screenprints
        </label>
      </div>
       <div class="form-check">
        <h6>Other processes</h6>
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Inkjet (B&W and Color)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" value=""  type="checkbox">
          Photomontage
        </label>
      </div>
  </fieldset>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
.slider {
  margin: 1vw;
}

h6 {
  margin: 8px;
}
</style>
