<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
// initialize router
const router = useRouter();
// initialize route
const route = useRouter;

// emits
const emit = defineEmits(["closeNav"]);
// methods
// change route
const navigate = (route: string) => {
  emit("closeNav");
  router.push(route);
};
</script>
<template>
  <div class="w-full py-10 px-10 h-screen bg-black text-white">
    <div class="w-full flex justify-between">
      <div class="flex font-extrabold space-x-1">
        <div class="space-x-1">
          <span class="py-2 text-[22px]">Obi</span>
          <span class="py-2 text-[22px]">|</span>
        </div>
        <div>
          <span class="py-2 text-[22px]">Datti </span>
          <span class="py-2 text-[22px] appGreen">2023</span>
        </div>
      </div>
      <img
        src="/images/png/Union.png"
        @click="emit('closeNav')"
        class="w-5 h-5 cursor-pointer"
        alt=""
      />
    </div>

    <!-- main navigation links -->
    <div class="text-[12px] space-y-10 font-extrabold text-white py-4">
      <div @click="navigate('/')" class="cursor-pointer">ABOUT</div>
      <div @click="navigate('/')" class="cursor-pointer">WHERE TO VOTE</div>
      <div @click="navigate('/')" class="cursor-pointer">VOLUNTEER</div>
      <div @click="navigate('/')" class="cursor-pointer">SHOP</div>
    </div>
    <!-- button -->
    <div>
      <button class="appGreenBg flex px-6 py-2 space-x-2">
        <span class="text-[12px] font-extrabold mt-1 text-white"> DONATE</span>

        <img src="/images/png/arrow-right.png" alt="icon" class="" />
      </button>
    </div>
  </div>
</template>

<style></style>
