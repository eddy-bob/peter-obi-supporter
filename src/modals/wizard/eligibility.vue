<script setup lang="ts">
import { ref, inject } from "vue";

const showVerify = inject<any>("showVerify");
const stepUp = inject<any>("stepUp");
// methods
const submit = () => {
  stepUp!.value = 4;
};
</script>
<template>
  <div class="min-h-screen h-full bg-white py-16">
    <div class="space-y-16 px-28">
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
          <div class="space-y-10">
            <p class="font-extrabold text-center text-[33px]">
              Voting Eligibility
            </p>
            <div class="bg-[#F8F8F8] py-16">
              <div class="flex justify-center">
                <div class="space-y-3">
                  <input type="file" id="file" class="hidden" />
                  <label for="file" class="flex justify-center cursor-pointer">
                    <img
                      src="/images/png/picture.png"
                      class="w-4 h-3"
                      alt="upload"
                    />
                  </label>

                  <p
                    class="text-[#4E4E4E] text-center font-extrabold text-[11px]"
                  >
                    UPLOAD IMAGE OF PVC
                  </p>
                </div>
              </div>
            </div>
            <div class="text-[#4E4E4E] space-y-12">
              <div class="flex font-extrabold text-[11px]">
                <p class="w-full">Do you own a smart phone?</p>
                <div class="w-full flex space-x-3">
                  <div class="flex space-x-3">
                    <p>YES</p>
                    <label class="container" for="Yes">
                      <input type="checkbox" class="mr-3" name="Yes" id="Yes" />
                      <span class="checkmark"></span>
                    </label>
                  </div>

                  <div class="flex space-x-3">
                    <p>NO</p>
                    <label class="container" for="no">
                      <input type="checkbox" class="mr-3" name="no" id="no" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="flex w-full font-extrabold text-[11px]">
                <p class="w-full">
                  Are you able to browse,<br />connect to WhatsApp or<br />
                  Telegram in your Polling Unit
                </p>
                <div class="w-full flex space-x-3">
                  <div class="flex space-x-3">
                    <p>YES</p>
                    <label class="container" for="yes2">
                      <input
                        type="checkbox"
                        class="mr-3"
                        name="yes"
                        id="yes2"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>

                  <div class="flex space-x-3">
                    <p>NO</p>
                    <label class="container" for="no2">
                      <input type="checkbox" class="mr-3" name="no" id="no2" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex w-full font-extrabold text-[11px]">
                <p class="w-full">
                  What party does Peter Obi<br />
                  belong to?
                </p>
                <div class="flex w-full space-x-3">
                  <div class="flex space-x-3 flex-wrap">
                    <div class="flex space-x-3">
                      <p>APC</p>
                      <label class="container" for="APC">
                        <input
                          type="checkbox"
                          class="mr-3"
                          name="APC"
                          id="APC"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>

                    <div class="flex space-x-3">
                      <p>PDP</p>
                      <label class="container" for="PDP">
                        <input
                          type="checkbox"
                          class="mr-3"
                          name="PDP"
                          id="PDP"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="flex space-x-3">
                      <p>LABOUR</p>
                      <label class="container" for="LABOUR">
                        <input
                          type="checkbox"
                          class="mr-3"
                          name="LABOUR"
                          id="LABOUR"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="flex space-x-3">
                      <p>ANPP</p>
                      <label class="container" for="SDP">
                        <input
                          type="checkbox"
                          class="mr-3"
                          name="SDP"
                          id="SDP"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center py-10">
            <button
              @click="submit"
              class="bg-black px-28 w-full py-4 space-x-2 text-[11px] font-extrabold text-white"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
