<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="logo" />
      <h1><router-link :to="{ name: 'Home' }">Music Portal</router-link></h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }"
            >Signup</router-link
          >
          <router-link v-if="!user" class="btn" :to="{ name: 'Login' }"
            >Log in</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const router = useRouter();
    const { logout, error, isPending } = useLogout();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("User logged out");
        router.push({ name: "Login" });
      }
    };

    return { handleLogout, error, isPending, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}

img {
  max-height: 100px;
  background: rgb(235, 212, 85);
  border-radius: 50%;
}
</style>
