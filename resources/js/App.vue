<template>
  <v-container class="counter">
    <router-view></router-view>
  </v-container>
</template>

<script>
import Navbar from '@/layout/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>