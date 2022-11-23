<template>
  <div class="container">
    <div class="">
      <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="!isPending">Log in</button>
        <button v-if="isPending" disabled>Loading</button>
      </form>
    </div>
    <div class="instructions">
      <p>
        You can login to this demo project with the usernam and password
        credentials as shown below:
      </p>
      <ul>
        <li>Username: themis@gmail.com</li>
        <li>Password: 111111</li>
      </ul>
      <br />
      <p>
        Alternatively you can create your own custom account in the
        <router-link class="link" :to="{ name: 'Signup' }">Signup</router-link>
        form using a dummy email and password.
      </p>
    </div>
  </div>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const response = await login(email.value, password.value);
      if (!error.value) {
        console.log(response);
        router.push({ name: "UserPlaylists" });
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}
.instructions {
  align-self: center;
}
.link {
  border: 1px solid rgb(245, 235, 101);
  padding: 5px 10px;
  background: #eee;
  border-radius: 10px;
}
</style>
