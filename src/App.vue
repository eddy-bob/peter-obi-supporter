<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <router-view></router-view>
  <notifications class="mt-x" />
</template>
<style scoped>
.mt-x {
  margin-top: 7%;
}
.vue-notification-template {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
.notification-title {
  font-size: 14px !important;
}
.notification-content {
  font-size: 16px !important;
}</style>
