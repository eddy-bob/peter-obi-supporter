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
    <div class="w-[35%] md:block hidden min-h-screen relative">
      <img src="/images/svg/office.svg" class="h-screen" />
      <div
        class="flex font-extrabold space-x-1 absolute text-white top-[7%] left-[15%]"
      >
        <div class="space-x-1">
          <span class="py-2 text-[22px]">Obi</span>
          <span class="py-2 text-[22px]">|</span>
        </div>
        <div>
          <span class="py-2 text-[22px]">Datti </span>
          <span class="py-2 text-[22px] appGreen">2023</span>
        </div>
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

    <div class="lg:w-[75%] w-full h-screen overflow-y-scroll myOverflow ">
      <component :is="comp" />
    </div>
  </div>
</template>

<style></style>
