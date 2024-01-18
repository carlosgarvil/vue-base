<template>
  <div class="container">
    <div class="row">
      <header class="col-12">
        <h1>Plantilla para proyectos</h1>
        <p>Este repositorio sirve como punto de partida para los proyectos donde se use Bootstrap y SASS.</p>
      </header>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


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

