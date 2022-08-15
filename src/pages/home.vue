<script setup lang="ts">
import { ref, provide } from "vue";

import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import appForm from "../modals/wizard/form.vue";

// variables
const showVerifyPhone = ref(false);

// providers
const showVerify = provide<{ value: boolean }>("showVerify", showVerifyPhone);
</script>

<template>
  <div class="min-h-screen h-auto relative">
    <!-- header -->
    <AppHeader />
    <appForm
      v-if="showVerifyPhone == true"
      @closeVerify="showVerifyPhone = false"
      class="w-full min-h-screen h-auto absolute z-50"
    />
    <!-- Main body -->
    <div class="min-h-screen" v-if="showVerifyPhone == false">
      <!-- section 1 -->
      <section class="relative lg:mb-52 mb-32 h-full">
        <img
          src="/images/svg/sectionone.svg"
          alt=""
          class="md:w-auto w-screen md:h-auto h-96"
        />
        <p
          class="absolute font-extrabold lg:text-[55px] text-[30px] lg:left-[11%] left-[10%] top-[29%] lg:leading-[70px] leading-[30px] text-white"
        >
          Finally a Cause<br />
          That’s Worth Our<br />
          <span class="appGreen">Full Attention.</span>
        </p>
        <!-- pointers -->
        <div class="">
          <img
            src="/images/png/left.png"
            class="absolute left-[4%] top-[40%]"
            alt=""
          />
          <img
            src="/images/png/right.png"
            class="absolute right-[4%] top-[40%]"
            alt=""
          />
        </div>
        <!-- slider selector -->
        <div
          class="flex absolute md:left-[50%] left-[40%] md:bottom-[20%] bottom-[34%] text-[11px] space-x-4"
        >
          <p class="textGrey">01</p>
          <p class="appGreenBg h-5 w-5 pl-1 pt-[1px] text-white rounded-full">
            02
          </p>
          <p class="textGrey">03</p>
        </div>
        <!-- absolute card -->
        <div class="absolute md:flex md:bottom-[-37%] bottom-[-55%] left-[10%]">
          <div class="flex">
            <div class="relative">
              <img
                src="/images/svg/cardone.svg"
                class="md:w-[19rem] w-[30rem]"
                alt=""
              />
              <div
                class="absolute text-white md:top-[15%] top-[4%] left-[8%] md:space-y-20 space-y-3"
              >
                <div>
                  <p class="md:text-[12px] text-[10px] tracking-[4px]">
                    BETTER NIGERIA PLAN
                  </p>
                  <p
                    class="font-extrabold md:text-[30px] text-[20px] md:leading-[34px] leading-5"
                  >
                    Create a country<br />
                    for very citizen
                  </p>
                </div>

                <button
                  class="appGreenBg flex md:px-6 px-3 md:py-2 py-2 space-x-2"
                >
                  <span
                    class="md:text-[12px] text-[10px] font-extrabold mt-1 text-white"
                  >
                    SEE THE PLAN</span
                  >

                  <img
                    src="/images/png/arrow-right.png"
                    alt="icon"
                    class="md:w-auto w-4 md:h-auto h-4 md:mt-0 mt-1"
                  />
                </button>
              </div>
            </div>
            <!--  -->
            <div class="relative">
              <img
                src="/images/png/flag.png"
                class="md:w-[19rem] w-[30rem]"
                alt=""
              />
              <div
                class="absolute text-white md:top-[15%] top-[3%] left-[8%] md:space-y-20 space-y-3"
              >
                <div>
                  <p class="md:text-[12px] text-[10px] tracking-[4px]">
                    BETTER NIGERIA PLAN
                  </p>
                  <p
                    class="font-extrabold md:text-[30px] text-[20px] md:leading-[34px] leading-5"
                  >
                    Political change<br />
                    through activism
                  </p>
                </div>

                <button class="appGreenBg flex px-6 py-2 space-x-2">
                  <span
                    class="md:text-[12px] text-[10px] font-extrabold mt-1 text-white"
                  >
                    SEE THE PLAN</span
                  >

                  <img
                    src="/images/png/arrow-right.png"
                    alt="icon"
                    class="md:w-auto w-4 md:h-auto h-4 md:mt-0 mt-1"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            class="appRedBg md:px-14 px-3 md:py-10 py-6 md:space-y-5 space-y-2"
          >
            <p
              class="md:text-[32px] text-[20px] font-extrabold md:leading-[34px] leading-[22px] text-white"
            >
              Prosperity Starts Here<br />
              With Us
            </p>
            <div class="space-y-3">
              <input
                type="text"
                placeholder="ENTER YOUR PHONE NUMBER"
                class="bg-white text-[10px] md:px-6 px-3 md:py-5 py-2 font-extrabold text-black w-full border-none focus:outline-none outline-none"
              />
              <button
                @click="showVerifyPhone = true"
                class="bg-black flex px-6 py-3 space-x-2 text-[7px] md:text-[12px] font-extrabold text-white"
              >
                BECOME A VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- section 2 -->
      <section class="md:pt-48 pt-32 md:pb-36 pb-20 md:px-36 px-10">
        <div class="customGrey md:flex space-y-5 md:space-y-0 pt-5">
          <img src="/images/svg/sectiontwocard.svg" class="w-[20rem]" alt="" />
          <div class="space-y-5 md-px-0 px-5">
            <p
              class="md:text-[34px] text-[30px] font-extrabold leading-8 md:leading-[39px]"
            >
              Commit to call, chip in to support <br />Peter Obi and Yusuf Datti
            </p>

            <p class="text-[12px] textGrey">
              Write like a human.Dont be afraid to break a few rules if it makes
              you writing more relatable.<br />
              All our content,from splashy hopepage copy to system alerts,
              should be warm and humans
            </p>
            <button class="bg-black flex px-7 py-2 space-x-2">
              <span class="text-[12px] font-extrabold mt-1 text-white">
                DONATE</span
              >

              <img src="/images/png/arrow-right.png" alt="icon" class="" />
            </button>
          </div>
        </div>
      </section>
      <!-- section 3 -->
      <section class="md:pb-36 pb-20">
        <div class="md:px-36 px-10">
          <div class="space-y-4 md:px-0 px-5">
            <p
              class="md:text-[44px] text-[30px] leading-8 md:leading-[39px] font-extrabold"
            >
              The Save Nigeria Agenda
            </p>
            <p class="text-[12px] text-[#7F7F7F]">
              Nigerians remain hopeful for a national rebirth, which implies
              returning Nigeria to Nigerians; farmers,<br />
              teachers and students, lecturers, artisans, workers, pensioners
              and over a hundred million <br />
              Nigerians who are not sure where their next meal will come from.
            </p>
          </div>
          <p
            class="text-[#00923F] flex justify-end space-x-2 font-extrabold text-[14px] pb-12"
          >
            <span> See All Plans</span>
            <span class="mt-1">
              <img src="/images/png/pointer-right-green.png" alt="icon"
            /></span>
          </p>
        </div>
        <!-- grid -->
        <div class="md:pl-36 pl-10 overflow-x-scroll myOverflow">
          <div class="flex space-x-4">
            <div class="relative shrink-0">
              <img
                src="/images/png/sectionthreef.png"
                alt=""
                class="md:w-[27rem] md:h-[15rem] w-[20rem] h-[12rem]"
              />
              <div
                class="absolute text-white top-[15%] left-[8%] md:space-y-20 space-y-10"
              >
                <div>
                  <p
                    class="font-extrabold text-[22px] md:leading-[34px] leading-5"
                  >
                    Affordable, quality<br />health care
                  </p>
                </div>

                <button
                  @click="showVerifyPhone = true"
                  class="appGreenBg flex px-6 py-2 text-[12px] font-extrabold text-white space-x-2"
                >
                  SEE THE PLAN
                </button>
              </div>
            </div>
            <!--  -->
            <div class="relative shrink-0">
              <img
                src="/images/png/sectionthrees.png"
                alt=""
                class="md:w-[27rem] md:h-[15rem] w-[20rem] h-[12rem]"
              />
              <div
                class="absolute text-white top-[15%] left-[8%] md:space-y-20 space-y-10"
              >
                <div>
                  <p
                    class="font-extrabold text-[22px] md:leading-[34px] leading-5"
                  >
                    Quality Education <br />beyond high school
                  </p>
                </div>

                <button
                  @click="showVerifyPhone = true"
                  class="appGreenBg flex px-6 py-2 text-[12px] font-extrabold text-white space-x-2"
                >
                  SEE THE PLAN
                </button>
              </div>
            </div>
            <!--  -->
            <div class="relative shrink-0">
              <img
                src="/images/png/sectionthreel.png"
                alt=""
                class="md:w-[27rem] md:h-[15rem] w-[20rem] h-[12rem]"
              />
              <div
                class="absolute text-white top-[15%] left-[8%] md:space-y-20 space-y-10"
              >
                <div>
                  <p class="font-extrabold text-[22px]">Security</p>
                </div>

                <button
                  @click="showVerifyPhone = true"
                  class="appGreenBg flex px-6 py-2 text-[12px] font-extrabold text-white space-x-2"
                >
                  SEE THE PLAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section 4 -->
      <section class="md:pb-36 pb-20 md:px-36 px-10 md:space-y-12 space-y-7">
        <div class="md:space-y-10 space-y-7">
          <p class="md:text-[47px] text-[40px] font-extrabold leading-[50px]">
            This is our opportunity to<br />
            take back our country
          </p>
          <p class="text-[12px] text-[#7F7F7F]">
            Nigerians remain hopeful for a national rebirth, which implies
            returning Nigeria to Nigerians; farmers,<br />
            teachers and students, lecturers, artisans, workers, pensioners and
            over a hundred million poor<br />
            Nigerians who are not sure where their next meal will come from.
          </p>
        </div>
        <!-- grid -->
        <div class="grid md:grid-cols-2 gap-3">
          <div class="relative shrink-0">
            <img src="/images/png/sectionfourf.png" alt="" class="w-full" />
            <div class="absolute text-white top-[5%] left-[8%] space-y-20">
              <div>
                <p
                  class="font-extrabold md:text-[35px] text-[22px] text-[#BFB2B2]"
                >
                  Watch now
                </p>
                <p
                  class="md:leading-[48px] leading-[30px] font-extrabold md:text-[50px] text-[32px]"
                >
                  Behind the scenes<br />and make off<br />
                  process
                </p>
              </div>
            </div>
            <img
              src="/images/png/youtube.png"
              alt=""
              class="absolute bottom-0 left-[8%]"
            />
          </div>
          <!--  -->
          <div class="relative">
            <img src="/images/svg/sectionfours.svg" alt="" class="w-full" />
            <div class="absolute text-white top-[5%] left-[8%]">
              <div>
                <p
                  class="font-extrabold md:text-[35px] text-[22px] text-[#BFB2B2]"
                >
                  Watch now
                </p>
                <p
                  class="md:leading-[48px] leading-[30px] font-extrabold md:text-[50px] text-[32px]"
                >
                  Unite for <br />
                  better future
                </p>
              </div>
            </div>
            <img
              src="/images/png/youtube.png"
              alt=""
              class="absolute bottom-0 left-[8%]"
            />
          </div>
        </div>
        <!--  -->
        <div class="relative mt-4">
          <div
            class="absolute bg-[rgba(0,0,0,0.6)] w-full h-full top-0 left-0 z-30"
          ></div>
          <img
            src="/images/svg/sectionfourl.svg"
            alt=""
            class="md:w-full w-screen md:h-auto h-[20rem]"
          />
          <div class="absolute z-40 text-white top-[8%] left-[8%] space-y-20">
            <div>
              <p
                class="md:leading-[48px] leading-[30px] font-extrabold md:text-[50px] text-[32px]"
              >
                “Nigeria is not a producing<br />
                country. The cumulative effect<br />
                of what we are suffering today<br />
                is bad leadership.”
              </p>
            </div>
          </div>

          <div class="absolute z-40 left-[8%] bottom-[8%]">
            <p class="md:text-[34px] text-[22px] font-extrabold text-white">
              Obi|Datti 2023
            </p>
            <p class="md:text-[34px] text-[22px] font-extrabold text-[#7F7F7F]">
              Labour Party
            </p>
          </div>
          <div class="absolute z-40 bottom-[16%] right-[8%]">
            <p
              class="flex md:text-[34px] text-[22px] font-extrabold text-[#7F7F7F]"
            >
              Volunteer
              <span
                ><img
                  src="/images/png/arrow-right.png"
                  alt="icon"
                  class="mt-4 ml-2"
              /></span>
            </p>
          </div>
        </div>
      </section>

      <!-- section 5 -->
      <section class="pb-36">
        <div class="px-36">
          <div class="space-y-7 mb-12">
            <p class="text-[44px] font-extrabold">The Latest News</p>
            <p class="text-[13px] leading-[20px] text-[#7F7F7F]">
              Nigerians remain hopeful for a national rebirth, which implies
              returning Nigeria to Nigerians; farmers,<br />
              teachers and students, lecturers, artisans, workers, pensioners
              and over a hundred million <br />
              Nigerians who are not sure where their next meal will come from.
            </p>
          </div>
        </div>
        <!-- grid -->
        <div class="pl-36 overflow-x-scroll myOverflow">
          <div class="flex space-x-4">
            <div class="space-y-5 shrink-0">
              <img
                src="/images/png/sectionfivecard.png"
                alt=""
                class="w-[22rem] h-[17rem]"
              />
              <div class="space-y-4">
                <p class="text-[#52525B] font-extrabold text-[14px]">
                  November 25, 2022
                </p>
                <p class="font-extrabold">
                  A Holiday Tradition: Tax Extenders<br />
                  Slated to Expire at End of 2021
                </p>
              </div>
            </div>
            <!--  -->
            <div class="space-y-5 shrink-0">
              <img
                src="/images/svg/dati.svg"
                alt=""
                class="w-[22rem] h-[17rem]"
              />
              <div class="space-y-4">
                <p class="text-[#52525B] font-extrabold text-[14px]">
                  November 25, 2022
                </p>
                <p class="font-extrabold">
                  A Holiday Tradition: Tax Extenders<br />
                  Slated to Expire at End of 2021
                </p>
              </div>
            </div>
            <!--  -->
            <div class="space-y-5 shrink-0">
              <img
                src="/images/svg/obi.svg"
                alt=""
                class="w-[22rem] h-[17rem]"
              />
              <div class="space-y-4">
                <p class="text-[#52525B] font-extrabold text-[14px]">
                  November 25, 2022
                </p>
                <p class="font-extrabold">
                  A Holiday Tradition: Tax Extenders<br />
                  Slated to Expire at End of 2021
                </p>
              </div>
            </div>
            <div class="space-y-5 shrink-0">
              <img
                src="/images/svg/dati.svg"
                alt=""
                class="w-[22rem] h-[17rem]"
              />
              <div class="space-y-4">
                <p class="text-[#52525B] font-extrabold text-[14px]">
                  November 25, 2022
                </p>
                <p class="font-extrabold">
                  A Holiday Tradition: Tax Extenders<br />
                  Slated to Expire at End of 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section 6 -->
      <section class="pb-36 px-36 bg-[#FAFAFA] space-y-12 py-16">
        <p class="leading-[44px] font-extrabold text-[36px]">
          People are saying about our<br />
          previous events
        </p>
        <div class="grid grid-cols-4 gap-5">
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
          <div class="bg-white rounded-md p-4 space-y-4 border">
            <div class="flex justify-between">
              <div class="flex w-full space-x-2">
                <img src="/images/png/iconone.png" class="w-10 h-9" alt="" />
                <div class="space-y-1">
                  <p class="font-extrabold text-[14px]">Darrell Steward</p>
                  <p class="textGrey text-[12px]">@darrels</p>
                </div>
              </div>
              <img src="/images/png/twitter.png" class="w-5 h-4" alt="" />
            </div>
            <p class="text-[#27272A] text-[15px]">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.<br /><span class="text-[#0EA5E9]"
                >#another</span
              >
            </p>
          </div>
          <!--  -->
        </div>
      </section>
      <!-- section 7 -->
      <section>
        <div class="flex">
          <div class="w-full appGreenBg">
            <img
              src="/images/svg/sectiontwocard.svg"
              class="w-[33rem] pt-28"
              alt=""
            />
          </div>
          <div class="appGreenDark w-full space-y-6 py-20 px-40">
            <p
              class="text-center leading-[48px] font-extrabold text-[38px] text-white"
            >
              Let’s do this together,<br />join us
            </p>
            <div class="flex">
              <div class="font-extrabold text-[12px] w-full space-y-2">
                <div class="w-full">
                  <input
                    type="text"
                    placeholder="FULL NAME "
                    class="py-5 px-5 outline-none w-full focus:outline-none text-[11px]"
                  />
                </div>
                <div class="w-full">
                  <input
                    type="text"
                    placeholder="PHONE NUMBER"
                    class="py-5 px-5 outline-none w-full focus:outline-none text-[11px]"
                  />
                </div>

                <div class="flex justify-center">
                  <button
                    @click="showVerifyPhone = true"
                    class="bg-black flex px-28 py-4 space-x-2 text-[11px] font-extrabold text-white"
                  >
                    JOIN US
                  </button>
                </div>
              </div>
            </div>
            <p class="text-center text-white text-[11px]">
              Thank you for joining our campaign to elect Obi Datti. By
              providing your mobile phone number you consent to receive
              recurring text messages from Peter for President. Message & Data
              Rates May Apply. Text HELP for Info. Text STOP to opt out. No
              purchase necessary. Terms and Conditions and Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- footer -->
    <AppFooter v-if="showVerifyPhone == false" />
  </div>
</template>

<style></style>
