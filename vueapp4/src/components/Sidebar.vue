/* eslint-disable */
<template>
  <div>
    <h2>MOMA Photography Collection Browser</h2>
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
        <h6>Gelatin Silver</h6>
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
          <input class="form-check-input" value=""  type="checkbox" @click="filterDaguerreotype()">
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
  <div class="form-group">
  <label class="col-form-label" for="inputDefault">Search:</label>
  <input class="form-control" placeholder="Search criteria" id="inputDefault" type="text">
</div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
<a href="http://dx.doi.org/10.5281/zenodo.1163802"
rel="nofollow"><img id="momaattribution" src="https://camo.githubusercontent.com/
7ea321b31bf12352ff70f2f5dc672e82208b2738/68747470733a2f2f7a6
56e6f646f2e6f72672f62616467652f646f692f31302e353238312f7a656e6f646f2e313136333830322e737667"
alt="DOI" data-canonical-src="https://zenodo.org/badge/doi/10.5281/zenodo.1163802.svg"
 style="max-width:100%;"></a>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['artworks'],
  data() {
    return {
      daguerreotype: []
    };
  },
  computed: {
    filterDaguerreotype() {
      let daguerreotype = this.artworks.filter(artwork => {
        console.log(artwork.Medium);
        return artwork.Medium.startsWith('Daguerreotype');
      });
      return daguerreotype;
    }
  }
};
</script>

<style scoped>
.slider {
  margin: 1vw;
}

h6 {
  margin: 8px;
}
#momaattribution {
  margin: 30px 0px 10px 0px;
}
</style>
