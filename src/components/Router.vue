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
        De esta forma, podemos acceder a la ruta <code>/product/1</code>,
        <code>/product/2</code>, etc.
    </p>
    <p>
        Para acceder a los parámetros de la ruta, podemos usar el objeto
        <code>$route.params</code>.
    </p>
    <p>
        Puedes ver el archivo <code>ProductDetail.vue</code> para ver un ejemplo
        de cómo acceder a los parámetros de la ruta.
    </p>


  <h3>Router push</h3>
  <p>
    Para navegar entre las distintas páginas de la aplicación, podemos usar el
    método <code>router.push</code>.
  </p>

  <p>
    <button @click="goToHome" class="btn btn-primary">
      Ir a la página de Inicio
    </button>
  </p>
  
</template>
<script>
import { useRouter} from "vue-router";

export default {
  setup() {
    const router = useRouter();
    
    const goToHome = () => {
      router.push("/");
    };

    return {
      goToHome,
    };
  },
};

</script>
