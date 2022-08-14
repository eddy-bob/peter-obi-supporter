<script setup lang="ts">
import { ref } from "vue";
defineEmits<{ event: "closeVerify" }>();
</script>
<template>
  <div class="min-h-screen h-full bg-white py-16">
    <div class="space-y-16 px-28">
      <div class="flex justify-between w-full">
        <p class="font-extrabold text-[16px]">STEP 2/3</p>
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
            <p class="font-extrabold text-center text-[33px]">
              Personal Information
            </p>
            <div class="text-[#4E4E4E] space-y-3">
              <div class="flex space-x-2">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
              </div>
              <div class="w-full">
                <input
                  type="text"
                  placeholder="ALTERNATE PHONE"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
              </div>
              <div class="flex space-x-2">
                <input
                  type="text"
                  placeholder="STATE"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
                <input
                  type="text"
                  placeholder="L.G.A"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
              </div>
              <div class="flex space-x-3 font-extrabold text-[11px]">
                <p class="">GENDER</p>
                <div class="flex space-x-2">
                  <label for="male">MALE</label>
                  <input type="checkbox" name="male" id="male" />
                </div>

                <div class="flex space-x-2">
                  <label for="female">FEMALE</label>
                  <input type="checkbox" name="female" id="female" />
                </div>
              </div>
              <div class="w-full">
                <input
                  type="text"
                  placeholder="WARD"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
              </div>
              <div class="w-full">
                <input
                  type="text"
                  placeholder="POOLING UNIT"
                  class="bg-[#F8F8F8] text-[10px] px-3 py-6 font-extrabold text-black w-full border-none focus:outline-none outline-none"
                />
              </div>
            </div>
          </div>
          <div class="space-y-5">
            <div class="flex">
              <div class="flex"></div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-black px-28 w-full py-4 space-x-2 text-[11px] font-extrabold text-white"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
