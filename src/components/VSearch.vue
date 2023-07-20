<template>
  <form @submit.prevent="searchStore.getMovies(searchQuery)">
    <input
      type="text"
      class="search-input"
      placeholder="input movie"
      v-model="searchQuery"
    >
    <VLoader v-if="searchStore.loader" />
    
    <div v-else>
      <VMovie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :is-search="true"/>

    </div>
    
  </form>
</template>

<script setup>
import {ref} from "vue";
import { useSearchStore } from "@/stores/SearchStore.js";
import VLoader from "@/components/VLoader.vue";
import VMovie from "@/components/VMovie.vue";

const searchQuery = ref('')
const searchStore = useSearchStore()

</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>