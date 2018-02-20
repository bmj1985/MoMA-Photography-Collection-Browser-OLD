/* eslint-disable */
<template>
<div id="app">
  <Sidebar class="sidebar"
  :filterGelatinSilver="filterGelatinSilver"
  :filterPigmentedInkjet="filterPigmentedInkjet"
  :filterChromogenicColor="filterChromogenicColor"
  :filterSilverDyeBleach="filterSilverDyeBleach"
  :filterColorInstant="filterColorInstant"
  :filterDyeTransfer="filterDyeTransfer"
  :filterAlbumen="filterAlbumen"
  :filterAmbrotype="filterAmbrotype"
  :filterBromoil="filterBromoil"
  :filterCalotype="filterCalotype"
  :filterCarbonPrint="filterCarbonPrint"
  :filterCollodion="filterCollodion"
  :filterCyanotype="filterCyanotype"
  :filterDaguerreotype="filterDaguerreotype"
  :filterGumBichromate="filterGumBichromate"
  :filterGumPlatinum="filterGumPlatinum"
  :filterPlatinumPalladium="filterPlatinumPalladium"
  :filterSaltedPaper="filterSaltedPaper"
  :filterTintype="filterTintype"
  :filterPrintingOutPaper="filterPrintingOutPaper"
  :filterIntaglio="filterIntaglio"
  :filterLithograph="filterLithograph"
  :filterPhotogravure="filterPhotogravure"
  :filterSerigraph="filterSerigraph"
  :filterScreenprint="filterScreenprint"
  :filterInkjet="filterInkjet"
  :filterPhotomontage="filterPhotomontage"
  :mutatedArtworks="mutatedArtworks"/>
  <div>
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :mutatedArtworks="mutatedArtworks"/>
      </li>
    </ul>
    </div>
</div>
</template>

<script>
import Card from '@/components/Card';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'App',
  components: {
    Card,
    Sidebar
  },
  data() {
    return {
      artistData: '',
      momaAPI_Url: '../static/momaartworks.json',
      token: '',
      artworks: [],
      mutatedArtworks: []
    };
  },
  mounted() {
    fetch(this.momaAPI_Url)
      .then(response => response.json())
      .then(response => {
        const artworks = response.filter(artwork => {
          if (
            artwork.Department === 'Photography' &&
            artwork.ThumbnailURL != null
          ) {
            return artwork;
          }
        });
        this.artworks = artworks;
      });
  },
  methods: {
    filterGelatinSilver() {
      let gelatinSilver = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringGelatinSilver = gelatinSilver.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('gelatin silver') === true &&
          photograph.Medium.toLowerCase().includes(
            'printing-out-paper print'
          ) === false
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringGelatinSilver;
    },
    filterPigmentedInkjet() {
      let pigmentedInkjet = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringPigmentedInkjet = pigmentedInkjet.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('pigmented inkjet') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringPigmentedInkjet;
    },
    filterChromogenicColor() {
      let chromogenicColor = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringChromogenicColor = chromogenicColor.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('chromogenic color') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringChromogenicColor;
    },
    filterSilverDyeBleach() {
      let silverDyeBleach = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringSilverDyeBleach = silverDyeBleach.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('silver dye bleach') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringSilverDyeBleach;
    },
    filterColorInstant() {
      let colorInstant = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringColorInstant = colorInstant.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('color instant') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringColorInstant;
    },
    filterDyeTransfer() {
      let dyeTransfer = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringDyeTransfer = dyeTransfer.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('dye transfer') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringDyeTransfer;
    },
    filterAlbumen() {
      let albumen = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringAlbumen = albumen.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('albumen') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringAlbumen;
    },
    filterAmbrotype() {
      let ambrotype = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringAmbrotype = ambrotype.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('ambrotype') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringAmbrotype;
    },
    filterBromoil() {
      let bromoil = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringBromoil = bromoil.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('bromoil') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringBromoil;
    },
    filterCalotype() {
      let calotype = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringCalotype = calotype.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('calotype') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringCalotype;
    },
    filterCarbonPrint() {
      let carbonPrint = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringCarbonPrint = carbonPrint.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('carbon print') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringCarbonPrint;
    },
    filterCollodion() {
      let collodion = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringCollodion = collodion.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('collodion') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringCollodion;
    },
    filterCyanotype() {
      let cyanotype = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringCyanotype = cyanotype.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('cyanotype') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringCyanotype;
    },
    filterDaguerreotype() {
      let daguerreotype = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringDaguerreotype = daguerreotype.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('daguerreotype') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringDaguerreotype;
    },
    filterGumBichromate() {
      let gumBichromate = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringGumBichromate = gumBichromate.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('gum bichromate') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringGumBichromate;
    },
    filterGumPlatinum() {
      let gumPlatinum = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringGumPlatinum = gumPlatinum.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('gum platinum') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringGumPlatinum;
    },
    filterPlatinumPalladium() {
      let platinumPalladium = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringPlatinumPalladium = platinumPalladium.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('palladium') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringPlatinumPalladium;
    },
    filterSaltedPaper() {
      let saltedPaper = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringSaltedPaper = saltedPaper.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('salted paper') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringSaltedPaper;
    },
    filterTintype() {
      let tintype = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringTintype = tintype.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('tintype') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringTintype;
    },
    filterPrintingOutPaper() {
      let printingOutPaper = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringPrintingOutPaper = printingOutPaper.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('printing-out-paper') ===
          true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringPrintingOutPaper;
    },
    filterIntaglio() {
      let intaglio = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringIntaglio = intaglio.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('intaglio') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringIntaglio;
    },
    filterLithograph() {
      let lithograph = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringLithograph = lithograph.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('lithograph') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringLithograph;
    },
    filterPhotogravure() {
      let photogravure = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringPhotogravure = photogravure.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('photogravure') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringPhotogravure;
    },
    filterSerigraph() {
      let serigraph = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringSerigraph = serigraph.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('serigraph') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringSerigraph;
    },
    filterScreenprint() {
      let screenprint = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringScreenprint = screenprint.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('screenprint') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringScreenprint;
    },
    filterInkjet() {
      let inkjet = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringInkjet = inkjet.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('inkjet') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringInkjet;
    },
    filterPhotomontage() {
      let photomontage = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringPhotomontage = photomontage.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes('photomontage') === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringPhotomontage;
    }
  }
};
</script>

<style>
#app {
  display: flex;
}
.card {
  margin: 1vw;
}

.sidebar {
  align-items: flex-start;
  width: 20vw;
  margin: 20px;
}

li {
  list-style-type: none;
}
</style>
