<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="menu">
        <nav>
          <h1>Vue 3</h1>
          <RouterLink to="/">Home</RouterLink>
        </nav>
        <nav>
          <RouterLink to="/login"><button class="btn btn-outline-primary">Sign Up</button></RouterLink>
          <RouterLink to="/"><button class="btn btn-soft">Login</button></RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView/>

  <button class="btn btn-soft bg-dominant theme" id="theme-button">Light mode</button>
</template>

<style scoped>

</style>
