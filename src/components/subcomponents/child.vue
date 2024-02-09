<template>
    <div class="alert alert-info">
        <h1>Componente hijo</h1>
        <p>
            Este es el componente hijo definido en el archivo <code>child.vue</code>.
        </p>
        <p>
            Si este compontente recibe un objeto <code>movie</code> como propiedad, se mostrará el título y el año de la
            película.
        </p>
        <div v-if="movie" class="border border-danger p-3">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.year }}</p>
        </div>
    </div>
</template>
<script setup>
//get movie props
const props = defineProps({
    movie: Object
});

</script>