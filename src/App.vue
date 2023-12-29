<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="row">
    <img alt="Vue logo" class="logo col-2" src="./assets/logo.svg" width="125" height="125" />
    <nav class="col-10">
        <RouterLink to="/">Home</RouterLink>
        
      </nav>
  </header>

  <main>
    <RouterView />  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
