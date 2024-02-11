<template>
  <div class="container" >
    <div class="row" v-if="$route.params.id">
        <p class="text-center"><h1>{{ product.title }}</h1></p>
      <div class="col-2 border">
        <img :src="product.image" :alt="product.title" class="img-fluid" />
      </div>
      <div class="col-6">
        <p>{{ product.description }}</p>
        <a class="btn btn-primary">{{ product.price }} €</a>
      </div>
    </div>
    <div class="row" v-else>
        <p class="alert alert-danger">No se ha encontrado el producto. Modifique la URL e incluya /product/id para acceder a un producto.</p>
        <p class="text-center"> 
        <input type="number" v-model="productId">
        <a :href="`product/${productId}`" class="btn btn-primary">
            Ver producto {{ productId }}
        </a>
        </p>
        
  </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();

const productId = ref(1);
const product = ref([]);

onMounted(async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/" + $route.params.id
  );
  const data = await response.json();
  product.value = data;
});
</script>
<style scoped>
</style>
