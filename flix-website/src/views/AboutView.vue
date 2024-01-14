<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { signUp } from '../services/auth.js'
  const router = useRouter()
  const email = ref('')
  const username = ref('')
  const password = ref('')
  const password2 = ref('')
  const submit = async () => {
    // Vérifiez que tous les champs sont remplis
    if (!email.value || !username.value || !password.value || !password2.value) {
      alert('Please fill in all fields')
      return
    }

    if (password.value !== password2.value) {
      alert('Passwords do not match')
      return
    }

    try {
      // Utilisez la méthode signUp pour envoyer la requête
      await signUp(username.value, email.value, password.value)
      router.push('/')
    } catch (err) {
      alert(err.message)
    }
  }
</script>
<template>
  <div class="sign-in">
<!--  formulaire de création de compte  -->
    <form class="form" @submit.prevent="submit">
      <h2>Sign Up</h2>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="form-control">
        <label for="password2">Confirm Password</label>
        <input type="password" id="password2" v-model="password2" />
      </div>
      <button class="btn btn-primary">Sign Up</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
    <hr>
    <button class="btn btn-soft bg-dominant" @click="githubSignIn">Sign Up with Github</button>
    <br>
    <button class="btn btn-soft bg-dominant" @click="googleSignIn">Sign Up with Google</button>
  </div>
</template>

<style>

</style>
