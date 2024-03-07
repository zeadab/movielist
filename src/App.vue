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
    <div class="divi">
    <MovieList class="movie-list" />
    <AddMovie class="add-movie" />
  </div>
  </div>
</template>

<<style lang="scss" >
@import "./style/main.scss";
</style>