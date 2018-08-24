/* eslint-disable */
<template>
  <div>
    <h2>MOMA Photography Collection Browser</h2>
      <form class="form-group my-2 my-lg-0">
        <div id="searchwrapper">
          <input v-model="searchTerm" class="form-control form-control-sm" placeholder="Search" id="inputSmall" type="text">
          <button @click.prevent="search(searchTerm)" type="submit" class="btn btn-primary btn-sm" id="searchbutton">Search</button>
        <button id="random" @click="getRandomPhotographs" type="submit" class="btn btn-outline-primary btn-sm">Get Random Photographs</button>
        </div>
      </form>
      <PrintType
          :filterPhotographs="filterPhotographs"
          :filterGelatinSilver="filterGelatinSilver"
          :mutatedArtworks="mutatedArtworks">
      </PrintType>
<AboutButton/>
</div>
</template>

<script>
import modal from "@/components/modal";
import PrintType from "@/components/PrintType";
import AboutButton from "@/components/AboutButton";

export default {
  name: "Sidebar",
  components: { PrintType, AboutButton },
  props: [
    "filterPhotographs",
    "mutatedArtworks",
    "filterGelatinSilver",
    "getRandomPhotographs",
    "search"
  ],
  data() {
    return {
      searchTerm: ""
    };
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
  margin: 0.5vh 0.5vh 0.5vh 0.5vh;
  width: 18vw;
}
#random {
  margin: 0.5vh 0.5vh 2.5vh 0.5vh;
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
