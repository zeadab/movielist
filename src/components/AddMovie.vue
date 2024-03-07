<template>
  <div class="add-movie">
    <h2>Add Movie</h2>
    <input type="text" v-model="newMovie.title" placeholder="Enter movie name" />
    <input type="number" v-model="newMovie.rating" placeholder="Enter movie rating (1-5)" />
    <input type="text" v-model="newMovie.comment" placeholder="Enter your comment" />
    <button @click="addMovie">Add Movie</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newMovie = ref({
  title: '',
  rating: 0,
  comment: ''
});

const addMovie = async () => {
  try {
    const response = await fetch('http://localhost:3000/add-movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie.value)
    });

    if (response.ok) {
      console.log('Movie added successfully!');
      newMovie.value = {
        title: '',
        rating: 0,
        comment: ''
      };
    } else {
      console.error('Failed to add movie:', response.statusText);
    }
  } catch (error) {
    console.error('Error adding movie:', error);
  }
};

</script>
