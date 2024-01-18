<template>
<h1>Petición ApiGet con TheMovieDB.com</h1>
<p>
    Este componente hace una petición a la API de TheMovieDB.com y muestra los resultados en una lista. Para hacer una petición a la API de TheMovieDB.com necesitas una API key. Puedes obtener una API key en <a href="https://www.themoviedb.org/settings/api" target="_blank">https://www.themoviedb.org/settings/api</a>. 
</p>
<p>
    Si no es posible obtener una clave de API, puedes encontrar una de ejemplo en Google Classroom. Para más información sobre la API de TheMovieDB.com, puedes consultar la documentación oficial en <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">https://developers.themoviedb.org/3/getting-started/introduction</a>.
</p>
<p>
    <textarea v-model="apiKey" placeholder="API key" rows="1" cols="50"></textarea>
    <button @click="getMovies">Get Movies</button>
</p>
<div class="container">
    <div class="row">
        <div class="col-2" v-for="movie in movies" :key="movie.id">
                    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" class="img-fluid"/>
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.overview }}</p>
        </div>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue'

const apiKey = ref('')
const movies = ref([])
const getMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey.value)
        .then(response => response.json())
        .then(data => movies.value = data.results)
}

</script>

<style lang="scss" scoped>

</style>