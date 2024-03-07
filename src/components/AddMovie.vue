<template>
  <div>
    <h2>Add Movie</h2>
    <input type="text" v-model="newMovieName" placeholder="Enter movie name" />
    <input type="number" v-model="newMovieRating" placeholder="Enter movie rating (1-5)" />
    <input type="text" v-model="newMovieComment" placeholder="Enter your comment" />
    <button @click="addMovie">Add Movie</button>
  </div>
</template>

<script setup>

</script>