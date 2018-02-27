/* eslint-disable */
<template>
<div id="app">
  <Sidebar class="sidebar"
      :filterPhotographs="filterPhotographs"
      :filterGelatinSilver="filterGelatinSilver"
      :mutatedArtworks="mutatedArtworks"
      :getRandomPhotographs="getRandomPhotographs"
  />
  <div v-if="artworks.length < 1" id="pageloadingdiv">
    <p id="pageloading">Please wait<br>while the<br>page loads.</p>
  </div>
  <div v-else-if="mutatedArtworks.length < 1" id="carddiv" >
    <ul class="cardlist">
      <li class="row">
          <Card
          :artwork="artwork"
          :departmentHeads="departmentHeads" v-for="artwork in artworks.slice(0,99)"
          :key="artwork.ObjectID"
          />
      </li>
    </ul>
  </div>
  <div v-else id="mutatedcarddiv">
    <ul class="cardlist">
      <li class="row">
        <mutatedArtworkCard
        v-for="mutatedArtwork in mutatedArtworks.slice(0,99)"
        :key="mutatedArtwork.ObjectID"
        :mutatedArtwork="mutatedArtwork"
        :departmentHeads="departmentHeads"/>
      </li>
      </ul>
  </div v-else>
</div>
</template>

<script>
import Card from '@/components/Card';
import mutatedArtworkCard from '@/components/mutatedArtworkCard';
import Sidebar from '@/components/Sidebar';

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
      departmentHeads: [],
      artworks: [],
      mutatedArtworks: [],
      acquisitionDate: []
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
    filterPhotographs(string) {
      let noNull = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let photographsByType = noNull.filter(photograph => {
        if (photograph.Medium.toLowerCase().includes(string) === true) {
          return photograph;
        }
      });
      this.mutatedArtworks = photographsByType.sort(() => {
        return 0.5 - Math.random();
      });
    },
    getRandomPhotographs() {
      this.mutatedArtworks = [];
      this.artworks.sort(() => {
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
.cardlistitem {
  margin: 10px;
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
  margin: 20vh auto auto 20vw;
  text-align: center;
}
</style>
