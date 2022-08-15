<script setup lang="ts">
import { inject } from "vue";
const showVerify = inject<any>("showVerify");
const stepUp = inject<any>("stepUp");
// methods
const verifyPhone = () => {
  console.log(stepUp?.value);
  stepUp!.value = 2;
};
</script>
<template>
  <div class="min-h-screen h-full bg-white lg:py-16 py-5">
    <div class="lg:space-y-32 space-y-10 lg:px-28 px-10">
      <div class="flex justify-between w-full">
        <p class="font-extrabold text-[16px]">STEP 1/3</p>
        <img
          src="/images/png/Union.png"
          @click="showVerify = false"
          class="w-5 h-5 cursor-pointer"
          alt=""
        />
      </div>
      <!--  -->

      <div class="flex justify-center">
        <div>
          <div class="space-y-4">
            <p
              class="font-extrabold md:leading-[40px] leading-[34px] text-center md:text-[33px] text-[29px]"
            >
              Verify your<br />
              Phone Number
            </p>
            <p class="text-center font-extrabold text-[12px] textGrey pb-6">
              Please enter the six (6) digit number sent to your<br />
              number ending with *****53722
            </p>
          </div>
          <div class="space-y-5">
            <div class="flex space-x-2">
              <input
                type="text"
                class="md:w-[4rem] w-[3rem] px-2 md:h-[4rem] h-[3rem] bg-[#F8F8F8]"
              />
              <input
                type="text"
                class="md:w-[4rem] w-[3rem] px-2 md:h-[4rem] h-[3rem] bg-[#F8F8F8]"
              />
              <input
                type="text"
                class="md:w-[4rem] w-[3rem] px-2 md:h-[4rem] h-[3rem] bg-[#F8F8F8]"
              />
              <input
                type="text"
                class="md:w-[4rem] w-[3rem] px-2 md:h-[4rem] h-[3rem] bg-[#F8F8F8]"
              />
              <input
                type="text"
                class="md:w-[4rem] w-[3rem] px-2 md:h-[4rem] h-[3rem] bg-[#F8F8F8]"
              />
              <input
                type="text"
                class="md:w-[4rem] w-[3rem] px-2 md:h-[4rem] h-[3rem] bg-[#F8F8F8]"
              />
            </div>
            <div class="space-y-5">
              <button
                @click="verifyPhone"
                class="bg-black w-full text-center py-4 space-x-2 text-[11px] font-extrabold text-white"
              >
                CONFIRM NUMBER
              </button>
              <div class="space-y-5 text-[12px] text-center">
                <p class="appGreen">Resend text message</p>
                <p class="font-extrabold">Use another phone number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
