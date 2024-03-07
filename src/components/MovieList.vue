<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }} - Rating: {{ movie.rating }} <br> {{ movie.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/movies');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    movies.value = data.movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
});
</script>
