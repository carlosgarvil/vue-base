<template>
<h1>Petición ApiGet con TheMovieDB.com</h1>
<p>
    Este componente hace una petición a la API de TheMovieDB.com y muestra los resultados en una lista. Para hacer una petición a la API de TheMovieDB.com necesitas una API key. Puedes obtener una API key en <a href="https://www.themoviedb.org/settings/api" target="_blank">https://www.themoviedb.org/settings/api</a>. 
</p>
<p>
    Si no es posible obtener una clave de API, puedes encontrar una de ejemplo en Google Classroom. Para más información sobre la API de TheMovieDB.com, puedes consultar la documentación oficial en <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">https://developers.themoviedb.org/3/getting-started/introduction</a>.
</p>
<p>
    A la hora de hacer una petición con una clave API, podemos hacerlo de dos formas. La primera es añadiendo la clave API en la URL de la petición. La segunda es añadiendo la clave API en el header de la petición. La diferencia entre ambas es que la primera es más sencilla de implementar, pero la clave API se puede ver en la URL. La segunda es más compleja de implementar, pero la clave API no se puede ver en la URL.
</p>
<p class="alert alert-info">
    En términos de seguridad, enviar la clave API en el header de la petición es más seguro que enviarla en la URL de la petición. Sin embargo, si la clave API se envía en la URL de la petición, es recomendable utilizar HTTPS en lugar de HTTP.
</p>
<p>
    En este ejemplo, se utiliza la primera opción. Para ello, al pulsar el botón, se ejecuta la función <mark>getMoviesUrlApi</mark> que hace una petición a la API de TheMovieDB.com y guarda los resultados en la variable movies.
</p>
<code-highlight language="javascript">
    <pre>
        const getMoviesUrlApi = () => {<br>
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey.value)<br>
        .then(response => response.json())<br>
        .then(data => movies.value = data.results)
}
    </pre>
</code-highlight>
<p>
    <h5>API Key</h5>
    <textarea v-model="apiKey" placeholder="API key" rows="1" cols="50"></textarea>
    <button @click="getMoviesUrlApi">Get Movies URL Api</button>
</p>
<p>
    La segunda forma de hacer una petición a la API de TheMovieDB.com es añadiendo la clave API en el header de la petición. Para ello, debemos añadir un objeto con la clave API en el header de la petición. En este ejemplo, se utiliza la segunda opción. Para ello, al pulsar el botón, se ejecuta la función <mark>getMoviesHeaderApi</mark> que hace una petición a la API de TheMovieDB.com y guarda los resultados en la variable movies.   
</p>

<code-highlight language="javascript">
    <pre>
        const getMoviesHeaderApi = () => {
    fetch('https://api.themoviedb.org/3/movie/popular', {
        headers: {
            'Authorization': 'Bearer ' + bearerToken.value
        }
    })
        .then(response => response.json())
        .then(data => movies.value = data.results)
}
    </pre>
</code-highlight>
<p>
    <h5>API Key</h5>
    <textarea v-model="bearerToken" placeholder="API key" rows="2" cols="80"></textarea>
    <button @click="getMoviesHeaderApi">Get Movies Header API</button>
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

import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

const apiKey = ref('')
const bearerToken = ref('')
const movies = ref([])
const getMoviesUrlApi = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey.value)
        .then(response => response.json())
        .then(data => movies.value = data.results)
}
const getMoviesHeaderApi = () => {
    fetch('https://api.themoviedb.org/3/movie/popular', {
        headers: {
            'Authorization': 'Bearer ' + bearerToken.value
        }
    })
        .then(response => response.json())
        .then(data => movies.value = data.results)
}

</script>

<style lang="scss" scoped>

</style>