<script setup lang="ts">
import { ref, inject } from "vue";

const showVerify = inject<{ value: boolean }>("showVerify");
const stepUp = inject<{ value: number }>("stepUp");
// methods
const submit = () => {
  stepUp!.value = 4;
};
</script>
<template>
  <div class="min-h-screen h-full bg-white py-16">
    <div class="space-y-48 px-28">
      <div class="flex justify-between w-full">
        <p class="font-extrabold text-[16px]">STEP 3/3</p>
        <img
          src="/images/png/Union.png"
          @click="showVerify = false"
          class="w-5 h-5 cursor-pointer"
          alt=""
        />
      </div>
      <!--  -->

      <div class="flex justify-center">
        <div class="">
          <div class="space-y-6">
            <div class="flex justify-center">
              <img src="/images/png/complete.png" class="w-24 h-24" alt="" />
            </div>

            <div class="space-y-4">
              <p class="font-extrabold text-center leading-[38px] text-[32px]">
                Thank your for joining<br />
                the obidient team
              </p>
              <p class="font-extrabold text-[11px] text-center">
                Stay tune for more updates via SMS, call or email
              </p>
            </div>
          </div>

          <div class="flex justify-center py-10">
            <button
              @click="showVerify = false"
              class="bg-black px-20 py-4 space-x-2 text-[11px] font-extrabold text-white"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
