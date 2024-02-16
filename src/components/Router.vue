<template>
  <h1>Enrutamiento en VueJS</h1>
  <p>
    El enrutamiento en VueJS se hace con el paquete <code>vue-router</code>.
    Este paquete permite navegar entre las distintas páginas de una aplicación
    web sin recargar la página.
  </p>
  <p>
    Para instalar <code>vue-router</code>, ejecuta el siguiente comando en la
    terminal:
  </p>
  <p class="text-center">
    <code>npm install vue-router</code>
  </p>
  <p>
    Si creamos el proyecto con <code>npm</code>, tendremos la opción de
    seleccionar la instalación automática del router.
  </p>

  <h3>Configuración</h3>
  <p>
    Para configurar <code>vue-router</code>, debemos crear un archivo
    <code>index.js</code> en la carpeta <code>src/router</code>.
  </p>
  <p class="alert alert-info">
    Puedes ver el archivo de este proyecto para comprobar la configuración.
  </p>

  <h3>Router push</h3>
  <p>
    Para navegar entre las distintas páginas de la aplicación, podemos usar el
    método <code>router.push</code>.
  </p>
  <div class="row">
    <div class="col-12 col-md-3">
      <button @click="$router.push('/')" class="btn btn-primary">
        Ir a la página de Inicio
      </button>
    </div>
    <div class="col-12 col-md-9">
      <code-highlight language="html">
        <pre>
            &lt;button @click="$router.push('/')" class="btn btn-primary"&gt;
              Ir a la página principal
            &lt;/button&gt;
        </pre>
      </code-highlight>
    </div>
  </div>

  <h3>Enrutamiento dinámico con parámetros en URL</h3>
  <p>
    Para crear rutas dinámicas, podemos usar el carácter <code>:</code> seguido
    del nombre del parámetro.
  </p>
  <p>
    Por ejemplo, si queremos crear una ruta para mostrar el detalle de un
    producto, podemos usar la siguiente ruta:
  </p>
  <p class="text-center">
    <code>/product/:id</code>
  </p>
  <p>
    De esta forma, podemos acceder a la ruta
    <a href="/product/1">/product/1</a>, <a href="/product/1">/product/2</a>,
    etc.
  </p>
  <p class="text-center">
    <input type="search"  v-model="productId" />
    <button
      @click="$router.push('/buscador?cadena=' + productId)"
      class="btn btn-primary"
    >
      Ver producto con ID {{ productId }}
    </button>
  </p>
  <p>
    Para acceder a los parámetros de la ruta, podemos usar el objeto
    <code>$route.params</code>.
  </p>
  <p>
    Puedes ver el archivo <code>ProductDetail.vue</code> para ver un ejemplo de
    cómo acceder a los parámetros de la ruta.
  </p>

  <h3>$Router vs $Route</h3>
  <p>
    Si revisamos el archivo <code>ProductDetail.vue</code>, veremos que usa
    tanto $router como $route.
  </p>
  <p class="alert alert-warning">
    <strong>$router y $route</strong> son dos propiedades proporcionadas por Vue Router en
    aplicaciones Vue.js, pero tienen propósitos diferentes.
  </p>
  <dl>
    <dt class="text-center">$router</dt>
    <dd>
      $router es una instancia de la clase VueRouter y proporciona métodos de
      navegación. Permite realizar acciones de navegación programáticamente,
      como cambiar la ruta, redirigir a otra página o realizar operaciones de
      navegación avanzadas. Ejemplos de uso de $router incluyen
      <strong>$router.push(), $router.replace(), $router.go(), etc.</strong>
      $router te permite interactuar con la instancia de Vue Router y realizar
      acciones de navegación desde cualquier parte de tu aplicación.
    </dd>
    <dt class="text-center">$route</dt>
    <dd>
      $route es una propiedad que contiene información sobre la ruta actual.
      Proporciona acceso a los parámetros de la ruta, la consulta (query) de la
      URL, el nombre de la ruta, entre otros detalles de la ruta actual. $route
      es de solo lectura y se utiliza para acceder a información sobre la ruta
      actual desde cualquier componente sin necesidad de pasarla como prop o
      utilizar eventos.
    </dd>
  </dl>
</template>

<script setup>
import { ref } from "vue";
const productId = ref(1);

import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
</script>

<style scoped>
h1 {
  text-align: center;
}
h3 {
  margin-top: 4rem;
  text-decoration: underline;
}
p {
  text-align: justify;
}
.text-center {
  text-align: center;
}
a {
  margin-left: 0;
}
</style>
