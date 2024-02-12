<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "@/store/userStore";
const store = useUserStore();
</script>

<template>
  <div class="container">
    <header class="row">
      <img
        alt="Vue logo"
        class="logo col-2"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />
      <nav class="col-9">
        <a><RouterLink to="/">Home</RouterLink></a>
        <a><RouterLink to="/fundamentals">VueJS fundamentals</RouterLink></a>
        <a><RouterLink to="/api">API</RouterLink></a>
        <a><RouterLink to="/components">Components</RouterLink></a>
        <a><RouterLink to="/router">Router</RouterLink></a>
        <a><RouterLink to="/product">Get URL params</RouterLink></a>
        <a><RouterLink to="/pinia">Pinia</RouterLink></a>
      </nav>
      <div class="col-1" v-if="false">
        <a v-if="store.user.username!=''" @click="store.logout">Logout</a>
        <a v-else><RouterLink to="/login">Login</RouterLink></a>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
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
