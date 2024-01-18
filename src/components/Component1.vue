<template>
    <h1>Component 1</h1>
    <p>Este es el componente de ejemplo 1. Aquí puedes encontrar los fundamentos de VueJS.</p>
    <p>
        El texto se ha generado casi en su totalidad usando Copilot, corrigiendo levemente algunos errores y agregando algunos detalles para simplificar los ejemplos. Para una explicación más detallada de los fundamentos de VueJS, puedes consultar la documentación oficial de VueJS en <a href="https://v3.vuejs.org/guide/introduction.html" target="_blank">https://v3.vuejs.org/guide/introduction.html</a>.
    </p>

    <h3>Attribute Bindings</h3>
    <p>
        Sirve para enlazar un atributo de un elemento HTML a una expresión de VueJS. En este caso, el atributo <code>src</code> de la imagen se enlaza a la variable <code>imageSrc</code> que se encuentra en el script del componente. Puedes usar <code>v-bind</code> o la forma abreviada<code>:</code> para hacer el enlace.
    </p>
    <p class="text-center">
        <code>&lt;img v-bind:src="imageSrc" alt="Vue logo" class="logo col-2" width="125" height="125" /&gt;</code>
    </p>
    <p class="text-center">
        <code>&lt;img :src="imageSrc" alt="Vue logo" class="logo col-2" width="125" height="125" /&gt;</code>
    </p>
    <h3>Form Bindings</h3>
    <p>
        Sirve para enlazar el valor de un elemento de formulario a una expresión de VueJS. En este caso, el valor del input se enlaza a la variable <code>message</code> que se encuentra en el script del componente. Puedes usar <code>v-model</code> para hacer el enlace.
    </p>
    <p class="text-center">
        <code>&lt;input v-model="message" type="text" /&gt;</code>
    </p>
    <h3>Event Bindings</h3>
    <p>
        Sirve para enlazar un evento de un elemento HTML a una expresión de VueJS. En este caso, el evento <code>click</code> del botón se enlaza a la función <code>reverseMessage</code> que se encuentra en el script del componente. Puedes usar <code>v-on</code> o la forma abreviada <code>@</code> para hacer el enlace.
    </p>
    <p class="text-center">
        <code>&lt;button v-on:click="reverseMessage"&gt;Reverse Message&lt;/button&gt;</code>
    </p>
    <p class="text-center">
        <code>&lt;button @click="reverseMessage"&gt;Reverse Message&lt;/button&gt;</code>
    </p>
    <h3>Computed Properties</h3>
    <p>
        Sirve para definir propiedades computadas. En este caso, la propiedad computada <code>reversedMessage</code> se calcula a partir de la propiedad <code>message</code> que se encuentra en el script del componente. Puedes usar <code>computed</code> para definir propiedades computadas.
    </p>
    <p class="text-center">
        <code>computed: { reversedMessage() { return this.message.split('').reverse().join('') } }</code>
    </p>
    <h3>Conditional Rendering</h3>
    <p>
        Sirve para renderizar condicionalmente un elemento HTML. En este caso, el elemento <code>p</code> se renderiza si la propiedad <code>message</code> que se encuentra en el script del componente es mayor a 5. Puedes usar <code>v-if</code> para renderizar condicionalmente un elemento HTML.
    </p>
    <p class="text-center">
        <code>&lt;p v-if="message.length &gt; 5"&gt;Mensaje mayor a 5 caracteres&lt;/p&gt;</code>
    </p>
    <h3>List Rendering</h3>
    <p>
        Sirve para renderizar una lista de elementos HTML. En este caso, el elemento <code>li</code> se renderiza por cada elemento del arreglo <code>fruits</code> que se encuentra en el script del componente. Puedes usar <code>v-for</code> para renderizar una lista de elementos HTML.
    </p>
    <p class="text-center">
        <code>&lt;li v-for="fruit in fruits" :key="fruit"&gt;{{ fruit }}&lt;/li&gt;</code>
    </p>
    <h3>Mounted (Lifecycle)</h3>
    <p>
        Sirve para ejecutar una función cuando el componente se monta en el DOM. En este caso, la función <code>mounted</code> se ejecuta cuando el componente se monta en el DOM. 
    </p>
    <p class="text-center">
        <code>mounted() { console.log('Componente montado') }</code>
    </p>
    <h3>Computed properties</h3>
    <p>
        Sirve para definir propiedades computadas. En este caso, la propiedad computada <code>reversedMessage</code> se calcula a partir de la propiedad <code>message</code> que se encuentra en el script del componente. Puedes usar <code>computed</code> para definir propiedades computadas.
    </p>
    <p class="text-center">
        <code>computed: { reversedMessage() { return this.message.split('').reverse().join('') } }</code>
    </p>

    <h3>Watchers</h3>
    <p>
        Sirve para ejecutar una función cuando una propiedad del componente cambia. En este caso, la función <code>watch</code> se ejecuta cuando la propiedad <code>message</code> cambia. Puedes usar <code>watch</code> para ejecutar una función cuando una propiedad del componente cambia.
    </p>
    <p class="text-center">
        <code>watch: { message() { console.log('Propiedad message cambiada') } }</code>
    </p>
    <div class="alert alert-info">
        <h4>Diferencia entre watchers y computed properties</h4>
        <p>
            Las <code>computed properties</code> se ejecutan cuando una propiedad del componente cambia y las <code>watchers</code> se ejecutan cuando una propiedad del componente cambia. La diferencia es que las <code>computed properties</code> devuelven un valor y las <code>watchers</code> no.
        </p>
    </div>
    <h3>Methods</h3>
    <p>
        Sirve para definir métodos del componente. En este caso, la función <code>reverseMessage</code> se ejecuta cuando el usuario hace click en el botón. Puedes usar <code>methods</code> para definir métodos del componente.
    </p>
    <p class="text-center">
        <code>methods: { reverseMessage() { this.message = this.message.split('').reverse().join('') } }</code>
    </p>
    <h3>Props</h3>
    <p>
        Sirve para definir propiedades del componente. En este caso, la propiedad <code>message</code> se define en el componente padre y se pasa al componente hijo como una propiedad. Puedes usar <code>props</code> para definir propiedades del componente.
    </p>
    <p class="text-center">
        <code>props: { message: String }</code>
    </p>


            
</template>

<script setup>

</script>

<style lang="scss" scoped>
h1 {
    text-decoration: underline;
}
h3 {
    margin-top: 20px;
}
</style>
