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
  />
  <div v-if="artworks.length < 1" id="pageloadingdiv">
    <p id="pageloading">Please wait<br>while the<br>page loads.</p>
  </div>
  <div v-else-if="mutatedArtworks.length < 1" id="carddiv">
    <ul class="cardlist">
      <li class="cardlistitem">
          <Card class="row"
          :artworks="artworks"
          :departmentHeads="departmentHeads"/>
      </li>
    </ul>
  </div>
  <div v-else id="mutatedcarddiv">
    <ul class="cardlist">
      <li class="cardlistitem">
        <mutatedArtworkCard class="row"
        :mutatedArtworks="mutatedArtworks"
        :departmentHeads="departmentHeads"
        :getCardsByArtist="getCardsByArtist"
        :cardsByArtist="cardsByArtist"/>
      </li>
      </ul>
  </div v-else>
</div>
</template>

<script>
import Card from '@/components/Card';
import mutatedArtworkCard from '@/components/mutatedArtworkCard';
import Sidebar from '@/components/Sidebar';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    Sidebar,
    Card,
    mutatedArtworkCard
  },
  data() {
    return {
      artistData: '',
      momaArtworksAPI_Url: '../static/momaartworks.json',
      momaDeptHeadsAPI_Url: '../static/momadepartmentheads.json',
      token: '',
      momaArtworks: [],
      departmentHeads: [],
      artworks: [],
      mutatedArtworks: [],
      acquisitionDate: [],
      cardsByArtist: []
    };
  },
  mounted() {
    this.getDataForArtworks();
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
          this.artworks = artworks.sort(() => {
            return 0.5 - Math.random();
          });
          this.getDataForDeptHeads();
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
          this.formatDeptHeadData();
        });
    },
    formatDeptHeadData() {
      return this.departmentHeads.map(head => {
        head.PositionBeginYear = new Date(
          head.PositionBeginYear.toString() + '-' + '01' + '-' + '01'
        );
        if (head.PositionEndYear === '') {
          head.PositionEndYear = new Date();
        } else {
          head.PositionEndYear = new Date(
            head.PositionEndYear + '-' + '12' + '-' + '31'
          );
        }
        return head;
      });
    },
    getArtworkDate() {
      return this.artworks
        .filter(artwork => artwork.DateAcquired != null)
        .map(artwork => {
          this.acquisitionDate.push(
            Object.create({
              AcquisitionDate: artwork.DateAcquired,
              ObjectID: artwork.ObjectID
            })
          );
        });
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
      this.mutatedArtworks = stringGelatinSilver.sort(() => {
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
      this.mutatedArtworks = stringPigmentedInkjet.sort(() => {
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
      this.mutatedArtworks = stringChromogenicColor.sort(() => {
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
      this.mutatedArtworks = stringSilverDyeBleach.sort(() => {
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
      this.mutatedArtworks = stringColorInstant.sort(() => {
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
      this.mutatedArtworks = stringDyeTransfer.sort(() => {
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
      this.mutatedArtworks = stringAmbrotype.sort(() => {
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
      this.mutatedArtworks = stringBromoil.sort(() => {
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
      this.mutatedArtworks = stringCalotype.sort(() => {
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
      this.mutatedArtworks = stringCarbonPrint.sort(() => {
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
      this.mutatedArtworks = stringCollodion.sort(() => {
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
      this.mutatedArtworks = stringCyanotype.sort(() => {
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
      this.mutatedArtworks = stringDaguerreotype.sort(() => {
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
      this.mutatedArtworks = stringGumBichromate.sort(() => {
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
      this.mutatedArtworks = stringGumPlatinum.sort(() => {
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
      this.mutatedArtworks = stringPlatinumPalladium.sort(() => {
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
      this.mutatedArtworks = stringSaltedPaper.sort(() => {
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
      this.mutatedArtworks = stringTintype.sort(() => {
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
      this.mutatedArtworks = stringPrintingOutPaper.sort(() => {
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
      this.mutatedArtworks = stringIntaglio.sort(() => {
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
      this.mutatedArtworks = stringLithograph.sort(() => {
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
      this.mutatedArtworks = stringPhotogravure.sort(() => {
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
      this.mutatedArtworks = stringSerigraph.sort(() => {
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
      this.mutatedArtworks = stringScreenprint.sort(() => {
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
      this.mutatedArtworks = stringInkjet.sort(() => {
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
    getCardsByArtist(input) {
      return this.mutatedArtworks.filter(artwork => artwork.Artist[0]);
    },
    filterGelatinSilver(searchTerm) {
      let noNull = this.artworks.filter(artwork => artwork.Medium != null);
      let byArtist = noNull.filter(photograph => {
        if (photograph.Artist[0].toLowerCase().includes() === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringGelatinSilver.sort(() => {
        return 0.5 - Math.random();
      });
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
#pageloading {
  font-size: 5rem;
  align-self: center;
  margin: 10vh 5vw 10vh 5vw;
  text-align: center;
}
</style>
