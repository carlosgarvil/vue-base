<template>
    <h1>
        Pinia: gestión de estados en VueJS
    </h1>
    <p>
        Pinia es una librería de manejo de estado (Store) para VueJS. Esta librería
        permite manejar el estado de la aplicación de una forma sencilla y
        eficiente.
    </p>
    <h3>¿Qué es un Store?</h3>
    <p>
        Un Store (como Pinia) es una entidad que almacena el estado y la lógica de negocio que no está vinculada a tu árbol de componentes. En otras palabras, alberga un estado global. Es un poco como un componente que siempre está presente y al que todos pueden acceder para leer y escribir. Tiene tres conceptos: el estado, los getters y las acciones, y es seguro asumir que estos conceptos son equivalentes a los datos, los computados y los métodos en los componentes.
    </p>
    
    <h3>Instalación</h3>
    <p>
        Para instalar <code>pinia</code>, ejecuta el siguiente comando en la
        terminal:
    </p>
    <p class="text-center">
        <code>npm install pinia</code>
    </p>
    <p>
        Si creamos el proyecto con <code>npm</code>, tendremos la opción de
        seleccionar la instalación automática de <code>pinia</code>.
    </p>
    <h3>Configuración</h3>
    <p>
        Para configurar <code>pinia</code>, debemos crear un archivo
        <code>index.js</code> en la carpeta <code>src/store</code>.
    </p>
    <p>
        En este archivo, debemos importar <code>pinia</code> y crear una nueva
        instancia de <code>pinia</code>: <code>createPinia()</code>.
    </p>
    <p>
        Luego, debemos exportar esta instancia para que esté disponible en toda
        la aplicación. El archivo <code>index.js</code> debería verse así:
    </p>
    <code-highlight language="javascript">
    <pre>
        
            import { createPinia } from "pinia";
            export const pinia = createPinia();
        
    </pre>
    </code-highlight>
    <p>
        Ahora, podemos importar <code>pinia</code> en cualquier componente y
        usarlo para manejar el estado de la aplicación.
    </p>
    <h3>Uso</h3>
    <p>
        Para usar <code>pinia</code>, debemos importar la instancia de
        <code>pinia</code> en el componente que queramos. Luego, podemos usar
        los métodos y propiedades de <code>pinia</code> para manejar el estado
        de la aplicación.
    </p>
    <p>
        Por ejemplo, si queremos crear un objeto usuario que contenga el nombre, el email y el avatar del usuario, podemos hacer lo siguiente:
    </p>
    <code-highlight language="javascript">
    <pre>
        
            import { pinia } from "../store";
            const user = pinia.ref({
                name: "John Doe",
                email: "john.doe@mail.com",
                avatar: "https://placekitten.com/200/200",
            });
    </pre>
    </code-highlight>

    <p>
        En este ejemplo, creamos un objeto <code>user</code> que contiene el
        nombre, el email y el avatar del usuario. Luego, podemos usar este
        objeto en cualquier componente de la aplicación.
    </p>

<h3>Mostrar datos desde Store</h3>
<p>
    En este ejemplo, los datos del usuario se almacenan en un Store. Para poder modificar los datos del usuario, se ha vinculado el input con los campos del usuario (mediante v-model). Si en el navegador está instalada la extensión de Vue DevTools, se puede ver el estado del Store y cómo se modifican los datos del usuario de forma reactiva.
</p>
<div class="row">
    <div class="col border">
        <p>Username: <input type="text" v-model="store.user.username" ></p>
        <p>eMail: <input type="text" v-model="store.user.email" ></p>
        <p>Avatar: <img :src="store.user.avatar" class="border border-dark"></p>

    </div>
    <div class="col ms-3 border">
        <h5>Estado del Store</h5>
        <p>store.user.username: {{ store.user.username }}</p>
        <p>store.user.email: {{ store.user.email }}</p>
        <p>store.user.avatar: {{ store.user.avatar  }} </p>
    
    </div>

</div>
<h3>GlobalProperties</h3>
<p>
    Otra opción que permite VueJS es añadir variables globales a toda la aplicación. Para ello, podemos hacer uso de las GlobalProperties.
</p>
<p>
    Si revisamos el archivo src/main.js, podemos ver la siguiente línea de código:
</p>
<p>
    <pre>
        <code>
            app.config.globalProperties.$cart = [];
        </code> 
    </pre>
</p>
<p>
    Una vez definida, dentro de nuestro componente podemos acceder a la variable <code>$cart</code> con el siguiente código:
</p>
<code-highlight language="javascript">
    <pre>
        
        import { getCurrentInstance } from "vue";
        const {proxy} = getCurrentInstance();
        proxy.$cart.push(newProduct); // Añadir un nuevo producto al carrito
    </pre>
    </code-highlight>
<p>
    Podemos añadir más elementos a cart con el siguiente input de tipo número:
</p>
<div class="row">
    <div class="col-6">
        <div class="mb-3">
            <label class="form-label" for="product_id">ID del producto</label>
            <input id="product_id" type="number" v-model="newProduct.id" disabled class="form-control"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="product_name">Nombre</label>
            <input id="product_name" type="text" v-model="newProduct.name" class="form-control"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="product_price">Precio</label>
            <input id="product_price" type="number" v-model="newProduct.price" class="form-control"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="product_iquantityd">ID del producto</label>
            <input id="quantity" type="number" v-model="newProduct.quantity" class="form-control"/>
        </div>



        <button @click="addProduct()">Añadir al carrito</button>
    </div>
    <div class="col-6">
        <h3>Carrito</h3>
        <ul>
            <li v-for="item in $cart" :key="item.id">{{ item }}</li>
        </ul>
    </div>
</div>

</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

const {proxy} = getCurrentInstance();

const newProduct = ref({id: 0, name: "", price: 0, quantity: 0});

const addProduct = () => {
    proxy.$cart.push(newProduct);
    newProduct.value = {id: getMaxId()+1, name: "", price: 0, quantity: 0};
};

onMounted(() => {
    newProduct.value.id = getMaxId() +1;
});

const getMaxId = () => {
    let maxId = 1;
    proxy.$cart.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });
    return maxId;
};

import { useUserStore } from "@/store/userStore";
const store = useUserStore();

</script>
