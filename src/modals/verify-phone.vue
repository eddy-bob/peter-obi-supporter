<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["closeVerify"]);
</script>
<template>
  <div class="flex">
    <img
      src="/images/svg/obi.svg"
      class="w-[35%]"
      @click="$emit('closeVerify')"
    />
    <div class="bg-white min-h-screen h-auto py-4 w-[75%] space-y-32 px-28">
      <div class="flex justify-between w-full">
        <p class="font-extrabold text-[16px]">STEP 1/3</p>
        <img src="/images/png/Union.png" class="w-5 h-5" alt="" />
      </div>
      <!--  -->

      <div class="flex justify-center">
        <div>
          <div class="space-y-4">
            <p class="font-extrabold text-[31px]">Enter your phone Number</p>
            <p class="text-center font-extrabold text-[12px] textGrey">
              Please make sure your phone number is enabled to receive SMS and
              calls for verification purposes
            </p>
          </div>
          <div class="space-y-5">
            <div class="flex">
              <input
                type="text"
                placeholder="PHONE NUMBER "
                class="py-5 px-5 outline-none focus:outline-none text-[11px]"
              />
            </div>
            <div class="">
              <button
                class="bg-black flex px-28 py-4 space-x-2 text-[11px] font-extrabold text-white"
              >
                VERIFY MY PHONE NUMBER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
