<script setup lang="ts">
import { ref, provide, shallowRef, watchEffect } from "vue";
import complete from "./complete.vue";
import eligibility from "./eligibility.vue";
import info from "./info.vue";
import verifyphone from "./verify-phone.vue";
// variables
const step = ref(1);
const comp = shallowRef(verifyphone);
// provider
const stepUp = provide<{ value: number }>("stepUp", step);
// methods

watchEffect(() => {
   switch (step.value) {
    case 1:
      comp.value = verifyphone;
      break;
    case 2:
      comp.value = info;
      break;
    case 3:
      comp.value = eligibility;
      break;
    case 4:
      comp.value = complete;
      break;
  }
});
</script>
<template>
  <div class="lg:flex">
    <div class="w-[35%] md:block hidden min-h-screen h-full relative">
      <img src="/images/svg/office.svg" class="" />
      <div class="flex font-extrabold absolute text-white top-[7%] left-[15%]">
        <span class="py-2 text-[23px]">PETER</span>
        <img src="/images/png/logo.png" alt="" class="w-[40px] h-[40px] mt-1" />
        <span class="py-2 text-[23px]">BI</span>
      </div>
      <p
        class="text-white text-[35px] absolute bottom-[10%] font-extrabold left-[15%]"
      >
        This is our<br />
        opportunity to<br />
        take back our<br />
        country
      </p>
    </div>

    <div class="lg:w-[75%] w-full">
      <component :is="comp" />
    </div>
  </div>
</template>

<style></style>
