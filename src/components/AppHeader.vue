<script lang="ts" setup>
import { ref } from "vue";
import AppHeaderMobile from "./AppHeaderMobile.vue";
// variables
const showSide = ref(false);
</script>
<template>
  <div>
    <div
      class="md:w-full w-screen bg-white flex justify-between lg:px-36 px-6 md:px-10 fixed z-50 py-5"
    >
      <!-- header logo -->
      <div class="flex font-extrabold">
        <span class="py-2 text-[23px]">PETER</span>
        <img src="/images/png/logo.png" alt="" class="w-[40px] h-[40px] mt-1" />
        <span class="py-2 text-[23px]">BI</span>
      </div>
      <!-- hamburger icon -->
      <div class="md:hidden block cursor-pointer" @click="showSide = true">
        <img src="/images/svg/menu.svg" class="w-7 h-7 mt-3" alt="menu" />
      </div>
      <!-- main navigation links -->
      <div
        class="hidden md:flex text-[12px] font-extrabold textGrey space-x-12 py-4"
      >
        <router-link to="/">ABOUT</router-link>
        <router-link to="/">WHERE TO VOTE</router-link>
        <router-link to="/">VOLUNTEER</router-link>
        <router-link to="/">SHOP</router-link>
      </div>
      <!-- button -->
      <div class="hidden md:block">
        <button class="appGreenBg flex px-6 py-2 space-x-2">
          <span class="text-[12px] font-extrabold mt-1 text-white">
            DONATE</span
          >

          <img src="/images/png/arrow-right.png" alt="icon" class="" />
        </button>
      </div>
    </div>
    <AppHeaderMobile
      class="md:hidden block w-screen h-[100%] fixed z-50"
      v-if="showSide == true"
      @closeNav="showSide = false"
    />
  </div>
</template>

<style scoped></style>
