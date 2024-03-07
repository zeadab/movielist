<script setup>




</script>

<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }} - Rating: {{ movie.rating }} <br> {{movie.comment}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>