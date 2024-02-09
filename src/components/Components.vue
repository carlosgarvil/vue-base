<template>
    <h1>Components</h1>
    <p>
        Sirve para definir componentes del framework.
    </p>
    <p>
        Puedes importar componentes de otros archivos con la siguiente sintaxis:
    </p>
    <p class="text-center">
        <code>import child from './subcomponents/child.vue';</code>
    </p>
    <p>
        Para llamar a un componente hijo, usa la siguiente sintaxis:
    </p>
    <p class="text-center">
        <code>&lt;child /&gt;</code>    
    </p>
    <childComponent />
    <h3>Props</h3>
    <p>
        Sirve para definir propiedades del componente. En este caso, la propiedad <code>message</code> se define en el componente padre y se pasa al componente hijo como una propiedad. Puedes usar <code>props</code> para definir propiedades del componente.
    </p>
    <p>
        Por ejemplo, si queremos pasar un objeto movie al componente hijo, podemos hacerlo de la siguiente manera:
    </p>
    <p class="text-center">
        <code>&lt;child :movie="movie" /&gt;</code> 
    </p>
    <childComponent :movie="movie" />
    <h3>Emits</h3>
    <p>
        Sirve para emitir un evento desde el componente hijo al componente padre. En este caso, el componente hijo emite el evento <code>reverse-message</code> cuando el usuario hace click en el botón. Puedes usar <code>emits</code> para emitir un evento desde el componente hijo al componente padre.<span class="todo">En proceso</span>
    </p>
    <h3>Slots</h3>
    <p>
        Sirve para definir slots en el componente. En este caso, el componente padre define un slot con el nombre <code>default</code> y el componente hijo lo usa para mostrar el contenido. Puedes usar <code>slots</code> para definir slots en el componente. <span class="todo">En proceso</span>
    </p>
</template>

<script setup>
import childComponent from './subcomponents/child.vue';
import { ref } from 'vue';

const movie = ref({
    title: 'The Godfather',
    year: 1972
});
</script>
<style scoped>
.todo {
    color: red;
    font-weight: bold;  
}
</style>