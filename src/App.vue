<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
  <a
    class="github"
    href="https://github.com/themis1986/vue3_compositionApi_music_portal"
    target="_blank"
    ><span>Github link</span>
    <img src="./assets/icons8-github-48.png" alt="gihub link" />
  </a>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

.github {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
}
.github span {
  font-size: 10px;
  margin-bottom: 20px;
}
</style>
