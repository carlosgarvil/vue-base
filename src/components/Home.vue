<template>
  <div class="container">
    <div class="row">
      <header class="col-12">
        <h1>Plantilla para proyectos</h1>
        <p>Este proyecto sirve como puento de partida para los proyectos donde se use Bootstrap y SASS.</p>
      </header>
    </div>
    <div class="row login">
      <input type="password" v-model="password" @keyup="checkPass" placeholder="Password" />
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import {useRouter} from 'vue-router'
const router = useRouter()

const password = ref('')

function checkPass() {
  if( password.value == "1234")
    router.push('protected')
  else
    console.log(password.value)
}

</script>

<style lang="scss" scoped>
$color-primario: #183b31;
$color-secundario: #C69774;
$color-terciario: #F8DFD4;
$color-cuarto: #FFEFE8;
header {
  background-color: $color-primario;
  h1 {
    text-decoration: underline;
    color: $color-terciario;
  }
  p {
    color: $color-cuarto;
  }
}
</style>

