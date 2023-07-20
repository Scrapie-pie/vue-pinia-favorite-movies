import { defineStore } from "pinia";
import {useMovieStore} from "@/stores/MovieStore.js";
import {ref} from "vue";

const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1'




// export const useSearchStore = defineStore('searchStore', {
//   state: () => ({
//     movies: [],
//     loader: false
//   }),
//   getters: {
//
//   },
//   actions: {
//     async getMovies(searchQuery) {
//       try {
//         this.loader = true
//         const response = await fetch(
//           url, {
//             method: 'GET',
//             headers: {
//               'X-RapidAPI-Key': 'e4914bf815mshca29f001801a6a8p174c51jsn8f86147d8739',
//               'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
//             }
//           });
//         const result = await response.json();
//
//         console.log('res', result)
//
//
//         searchQuery = searchQuery.toLowerCase()
//
//         this.movies = [...result.results.map((m, i) => {
//           return Object.assign(m, { id: i, isWatched: false, imageurl: m.imageurl[0] })
//         })]
//
//           //.filter(o => searchQuery.includes(o.title.toLowerCase()) || searchQuery.includes(o.synopsis.toLowerCase()))
//
//         console.log('sea', searchQuery)
//
//         console.log('m', this.movies)
//
//         this.loader = false
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     addToUserMovie(movie) {
//       const movieStore = useMovieStore()
//       movieStore.movies.push(movie)
//       movieStore.activeTab = 1
//     }
//   }
// })

export const useSearchStore = defineStore('searchStore', () => {
  const movies = ref([])
  const loader = ref(false)

  const getMovies = async (searchQuery) => {
    try {
      loader.value = true
      const response = await fetch(
        url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'e4914bf815mshca29f001801a6a8p174c51jsn8f86147d8739',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
          }
        });
      const result = await response.json();

      console.log('res', result)


      searchQuery = searchQuery.toLowerCase()

      movies.value = [...result.results.map((m, i) => {
        return Object.assign(m, { id: i, isWatched: false, imageurl: m.imageurl[0] })
      })]

      //.filter(o => searchQuery.includes(o.title.toLowerCase()) || searchQuery.includes(o.synopsis.toLowerCase()))

      console.log('sea', searchQuery)

      console.log('m', movies.value)

      loader.value = false
    } catch (error) {
      console.error(error);
    }
  }

  const addToUserMovie = (movie) => {
    const movieStore = useMovieStore()
    movieStore.movies.push(movie)
    movieStore.activeTab = 1
  }

  return {
    movies,
    loader,
    getMovies,
    addToUserMovie,
  }
})