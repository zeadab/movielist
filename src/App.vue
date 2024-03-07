<script setup>


import MovieList from './components/MovieList.vue';
import AddMovie from './components/AddMovie.vue';

  components: {
    MovieList
    AddMovie
  }

</script>

<template>
  <div id="app">
    <MovieList />
    <AddMovie />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

</style>
