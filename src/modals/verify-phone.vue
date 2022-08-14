<script setup lang="ts">
import { ref } from "vue";
defineEmits<{ event: "closeVerify" }>();
</script>
<template>
  <div class="flex">
    <div class="w-[35%] min-h-screen relative">
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

    <div class="bg-white min-h-screen h-auto py-16 w-[75%] space-y-32 px-28">
      <div class="flex justify-between w-full">
        <p class="font-extrabold text-[16px]">STEP 1/3</p>
        <img
          src="/images/png/Union.png"
          @click="$emit('closeVerify')"
          class="w-5 h-5 cursor-pointer"
          alt=""
        />
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
