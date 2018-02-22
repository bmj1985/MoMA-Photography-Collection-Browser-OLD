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
  :mutatedArtworks="mutatedArtworks"
  :addDeptHeadsToArtworks="addDeptHeadsToArtworks"
  :search="search"/>
  <div id="carddiv">
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row" :mutatedArtworks="mutatedArtworks" :artworks="artworks"/>
      </li>
    </ul>
    </div>
</div>
</template>

<script>
import Card from '@/components/Card';
import Sidebar from '@/components/Sidebar';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    Card,
    Sidebar
  },
  data() {
    return {
      artistData: '',
      momaArtworksAPI_Url: '../static/momaartworks.json',
      momaDeptHeadsAPI_Url: '../static/momadepartmentheads.json',
      token: '',
      momaArtworks: [],
      momaDeptHeads: [],
      artworks: [],
      mutatedArtworks: []
    };
  },
  mounted() {
    this.getDataForArtworks();
    // this.getDataForDeptHeads();
  },
  methods: {
    getDataForArtworks() {
      fetch(this.momaArtworksAPI_Url)
        .then(response => response.json())
        .then(response => {
          const artworks = response.filter((artwork, index) => {
            if (
              artwork.Department === 'Photography' &&
              artwork.ThumbnailURL != null
            ) {
              return artwork;
            }
          });
          this.artworks = artworks.sort(function() {
            return 0.5 - Math.random();
          });
        });
    },
    getDataForDeptHeads() {
      fetch(this.momaDeptHeadsAPI_Url)
        .then(response => response.json())
        .then(response => {
          let departmentHeads = response.filter(department => {
            return (
              department.DepartmentFullName === 'Department of Photography'
            );
          });
          this.departmentHeads = departmentHeads;
        });
    },
    addDeptHeadsToArtworks() {
      let noNullDates = this.artworks.filter(
        artwork => artwork.DateAcquired != null
      );
    },
    filterGelatinSilver() {
      let gelatinSilver = this.artworks.filter(
        artwork => artwork.Medium != null
      );
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
      this.mutatedArtworks = stringGelatinSilver.sort(function() {
        return 0.5 - Math.random();
      });
    },
    filterPigmentedInkjet() {
      const randomNumber = Math.floor(Math.random() * 202);
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
      this.mutatedArtworks = stringPigmentedInkjet.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringChromogenicColor.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringSilverDyeBleach.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringColorInstant.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringDyeTransfer.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringAmbrotype.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringBromoil.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringCalotype.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringCarbonPrint.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringCollodion.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringCyanotype.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringDaguerreotype.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringGumBichromate.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringGumPlatinum.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringPlatinumPalladium.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringSaltedPaper.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringTintype.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringPrintingOutPaper.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringIntaglio.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringLithograph.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringPhotogravure.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringSerigraph.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringScreenprint.sort(function() {
        return 0.5 - Math.random();
      });
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
      this.mutatedArtworks = stringInkjet.sort(function() {
        return 0.5 - Math.random();
      });
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
    },
    search(input) {
      const newArray = [];
      let searchArray = this.artworks
        .slice(0, 20)
        .map((artwork, index) => newArray.push(Object.values(artwork)));
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
