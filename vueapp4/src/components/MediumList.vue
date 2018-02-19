<template>
  <div>
    <ul v-for="artwork in artworks.sort()">
      <li>{{artwork.Medium}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'MediumList',
  props: ['artworks']
};
</script>

<style scoped>

</style>