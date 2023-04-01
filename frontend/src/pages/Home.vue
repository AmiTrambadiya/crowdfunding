
<template>
  <!-- Header-->

  <section class=" z-1 bg-no-repeat  bg-cover bg-center"
    style="background-image: url('https://crowdfunding.frappe.cloud/files/Frame1.jpg');">
    <Navbar />
    <div class="pt-[0px] md:pt-[0px] lg:pt-[28px] pb-[110px] md:pb-[110px] lg:pb-[128px] container mx-auto h-full">
      <div class="grid lg:grid-cols-2 mt-5 md:mt-10 lg:mt-0">

        <div
          class="grid place-items-center tracking-wide                                                                                                                                                                                                                                                                                                                   ">
          <h1 style="text-shadow:3px 6px 6px #c9c9c9;"
            class="text-[#40b751] pl-[0x] md:pl-[28px] lg:pl-[28px] xl:pl-[0px] font-sans text-center md:text-center lg:text-left font-semibold leading-[36px] md:leading-[36px] lg:leading-[50px] text-[30px] md:text-[30px] lg:text-[48px] [text-shadow:3px 6px 6px #c9c9c9]">
            Donate with
            <span class="text-gray-700">100% Transparency</span>
            on
            <span class="text-gray-700">most trusted</span>
            crowd funding platform of India.
          </h1>
        </div>
        <div class="grid place-items-center  mt-5 md:mt-10 lg:mt-0  mx-4 md:mx-10 lg:mx-0">
          <img src="../../src/assets/Inter/img/map2.png" class="h-96 md:h-96 lg:h-full w-96 md:w-96 lg:w-full" />
        </div>
      </div>
    </div>
  </section>
  <div class="container mx-auto h-full p-4 lg:p-6 -mt-[90px] md:-mt-[88px] lg:-mt-[95px] pl-4 lg:pl-0 pr-4 lg:pr-0">
  <!-- <div class="bg-white rounded-xl product-shodow">

  <div class="container mx-auto h-full sm:-mt-16 md:-mt-16 lg:-mt-36 -mb-20 md:-mb-0 lg:-mb-0 pl-4 lg:pl-0 pr-4 lg:pr-0">
   <div class="bg-white rounded-xl product-shodow">
      <div v-for="data in campaigns">
        <div v-if="data.is_featured == 1" class="grid mb-5 p-5 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div class="md:col-span-2 lg:col-span-1">
            <img class="pl-3 pt-3 pb-1 md:h-80 lg:h-56 sm:w-full md:w-96 lg:w-96" :src="data.campain_image" alt="Mountain"
              @click="donate(data.name)">
          </div>
          <div class="md:col-span-2 lg:col-span-3 pr-0 lg:pr-16">
            <button
              class="bg-[#364958] text-base rounded-lg pl-4 pr-4 pt-2 pb-2 text-white mb-2 md:mt-3">Featured</button>
            <h5 class="text-[#364958] text-2xl font-medium mb-2">{{ data.campaign_title }}</h5>
            <p class="text-[#364958]">
              {{ data.short_description }}
            </p>
            <button class="text-[#40b751] pt-3 font-bold" type="button" @click="donate(data.name)">Donate Now</button>
          </div>
        </div>
      </div>
                                                                  </div> -->
    <div class="container mx-auto h-full">
      <div class="bg-white rounded-xl drop-shadow-xl">
        <Sliders :featured_campaigns="featured_campaigns" :interval="3000" />
      </div>

      <!-- Categories -->
      <div class="text-center mt-10">
        <h2 class="text-3xl font-black text-[#40b751] mb-2">Categories</h2>
        <p class="text-[#364958]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!</p>
      </div>

      <div class="flex mt-3 border-b sm:mr-4 lg:mr-2 ">
        <div class="overflow-x-auto">
          <ul class="flex mb-0 list-none pt-3 pb-0 overflow-y-hidden lg:overflow-x-hidden ">
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns()">
              <div
                class="font-bold px-6 md:px-10 lg:px-10 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(1)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 1, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 1 }">

                <div class="grid justify-items-center" v-if="openTab !== 1">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/grid(2).png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2  text-[13px] md:text-[16px] lg:text-[16px]">All</p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 1">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/grid.png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2  text-[13px] md:text-[16px] lg:text-[16px]">All</p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 text-center" @click="get_campaigns('Animal Campaign')">
              <div
                class="font-bold px-4 md:px-8 lg:px-8 py-1 md:py-2 lg:py-2  cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(2)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 2, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 2 }">

                <div class="grid justify-items-center" v-if="openTab !== 2">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/paw(1).png" />
                  <p class=" pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">Animal
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 2">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/paw.png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">Animal
                  </p>
                </div>


              </div>
            </li>

            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Education Campaign')">
              <div
                class="font-bold px-2 md:px-6 lg:px-6 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(3)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 3, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 3 }">

                <div class="grid justify-items-center" v-if="openTab !== 3">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8 "
                    src="../../src/assets/Inter/img/icon/mortarboard(1).png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">Education
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 3">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/mortarboard.png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">Education
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Children Campaign')">
              <div
                class="font-bold px-4 md:px-8 lg:px-8 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(4)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 4, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 4 }">

                <div class="grid justify-items-center" v-if="openTab !== 4">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/children(1).png" />
                  <p class=" pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">Children
                  </p>
                </div>
                <div class="grid justify-items-center" v-else="openTab === 4">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/children.png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">Children
                  </p>
                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Medical Campaign')">
              <div
                class="font-bold px-2 md:px-8 lg:px-8 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(5)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 5, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 5 }">

                <div class="grid justify-items-center" v-if="openTab !== 5">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/healthcare(1).png" />
                  <p class="pl-2 md:pl-4 lg:pl-4 pr-2 md:pr-4 lg:pr-4 text-[13px] md:text-[16px] lg:text-[16px]">Medical
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 5">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/healthcare.png" />
                  <p class="pl-2 md:pl-4 lg:pl-4 pr-2 md:pr-4 lg:pr-4 text-[13px] md:text-[16px] lg:text-[16px]">Medical
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Hunger Campaign')">
              <div
                class="font-bold px-2 md:px-8 lg:px-8 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(6)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 6, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 6 }">

                <div class="grid justify-items-center" v-if="openTab !== 6">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/supplies(1).png" />
                  <p class="pl-2 md:pl-4 lg:pl-4 pr-2 md:pr-4 lg:pr-4 text-[13px] md:text-[16px] lg:text-[16px]">Hunger
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 6">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/supplies.png" />
                  <p class="pl-2 md:pl-4 lg:pl-4 pr-2 md:pr-4 lg:pr-4 text-[13px] md:text-[16px] lg:text-[16px]">Hunger
                  </p>

                </div>

              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Religiouse Campaign')">
              <div
                class="font-bold px-2 md:px-5 lg:px-5 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(7)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 7, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 7 }">

                <div class="grid justify-items-center" v-if="openTab !== 7">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/pray(1).png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">
                    Religiouse
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 7">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/pray.png" />
                  <p class=" pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">
                    Religiouse
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-3 last:mr-0 flex-auto text-center" @click="get_campaigns('Disability Campaign')">
              <div
                class="font-bold px-2 md:px-6 lg:px-6 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(8)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 8, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 8 }">

                <div class="grid justify-items-center" v-if="openTab !== 8">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8"
                    src="../../src/assets/Inter/img/icon/disability(1).png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">
                    Disability
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 8">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/disability.png" />
                  <p class="pl-1 md:pl-2 lg:pl-2 pr-1 md:pr-2 lg:pr-2 text-[13px] md:text-[16px] lg:text-[16px]">
                    Disability
                  </p>

                </div>


              </div>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center" @click="get_campaigns('Elder Campaign')">
              <div
                class="font-bold px-4 md:px-9 lg:px-9 py-1 md:py-2 lg:py-2 cursor-pointer transition ease-in-out delay-150 hover:bg-[#40b751] hover:text-white border rounded-t-3xl border-gray-200 h-30 w-30"
                v-on:click="toggleTabs(9)"
                v-bind:class="{ 'bg-white text-gray-500': openTab !== 9, 'rounded-t-3xl bg-[#40b751] text-white': openTab === 9 }">

                <div class="grid justify-items-center" v-if="openTab !== 9">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/old-man(1).png" />
                  <p class="pl-4 md:pl-10 lg:pl-10 pr-4 md:pr-10 lg:pr-10 text-[13px] md:text-[16px] lg:text-[16px]">Elder
                  </p>

                </div>
                <div class="grid justify-items-center" v-else="openTab === 9">
                  <img class="h-6 md:h-8 lg:h-8 w-6 md:w-8 lg:w-8" src="../../src/assets/Inter/img/icon/old-man.png" />
                  <p class="pl-4 md:pl-10 lg:pl-10 pr-4 md:pr-10 lg:pr-10 text-[13px] md:text-[16px] lg:text-[16px]">Elder
                  </p>

                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--Cards-->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 mt-10">
        <div v-for="index in campaignToShow">
          <div v-if="index < campaigns.length" class="pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 grid ">
            <div class="max-w-[580px] md:max-w-[350px] lg:max-w-[400px] lg:max-w-sm rounded overflow-hidden card-shodow">
              <img class="w-full h-52 cursor-pointer" :src="campaigns[index].campain_image" alt="Mountain"
                @click="donate(campaigns[index].name)">
              <div class="pt-[30px] pr-[30px] pb-[34px] pl-[30px]">
                <p
                  class="font-bold font-[600] text-[#40b751] text-[25px] md:text-[20px] lg:text-[20px] mb-2 truncate-2-lines">
                  {{ campaigns[index].campaign_title }}</p>
                <p class="text-gray-700 text-[18px] md:text-[16px] lg:text-[16px]  truncate">
                  By: {{ campaigns[index].ngo }}</p>
                <div class="w-full bg-gray-200 text-white font-black rounded h-[16px] dark:bg-gray-700 mt-6 mb-6 ">
                  <div v-if="campaigns[index].raised_amount"
                    class="bg-[#40b751] h-3.5 rounded bg-[#40b751] text-xs font-bold  text-center p-0.5 leading-none rounded-md"
                    :style="{ width: campaigns[index].raised_amount * 100 / campaigns[index].donation_amount + '%' }"> {{
                      (campaigns[index].raised_amount * 100
                        /
                        campaigns[index].donation_amount).toFixed(2) }}%</div>
                </div>
                <p
                  class="fontcard flex border-b-2 border-b-gray-100  justify-between mt-6 mb-6 pb-6 text-[14px] md:text-[12px] lg:text-[14px] ">
                  <span class="font-[600] text-[#222222]">Raised: ₹{{ numberWithCommas(campaigns[index].raised_amount)
                  }}</span><span class="font-[600] text-[#222222]">Goal: ₹{{
  numberWithCommas(campaigns[index].donation_amount) }}</span>
                </p>

              </div>
              <div class="sm:pr-9 md:pr-2 lg:pr-9 pb-7 pl-9 flex justify-between">
                <button class="text-[#40b751] text-base">Share</button>
                <button
                  class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-3 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" @click="donate(campaigns[index].name)"> donate now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="campaignToShow < campaigns.length || campaigns.length > campaignToShow" class="text-center">
        <button
          class="mt-4 rounded-lg hover:bg-[#40b751] bg-white hover:text-white border-[#40b751] border border-solid text-[#40b751] active:bg-green-600  text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
          type="button" @click="campaignToShow += 6">Show More</button>
      </div>
    </div>
  </div>
  <!--Testimonials-->

  <Testimonials />

  <!--Featured In-->

  <div class="container mx-auto h-full">
    <div class="text-center mt-10">
      <h2 class="text-[24px] md:text-[24px] lg:text-[30px] font-black text-[#40b751] mb-[20px]">Featured in</h2>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[34px] ">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/protection.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Protection</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px]">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/mask.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Prevention</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px]">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/sanitizer.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Treatments</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div class="flex pb-[34px] md:pb-[20px] lg:pb-[0px] ">
        <div class="">
          <img class="h-[46px] md:h-[50px] lg:h-[48px] w-[40px] md:w-[50px] lg:w-[40px] mr-3 ml-8 md:ml-0 lg:ml-0 pt-2"
            src="../../src/assets/Inter/img/virus.png" />
        </div>
        <div class="lg:w-9/12 xl:w-9/12">
          <p class="text-[16px] text-[#40b751] font-black">Symptoms</p>
          <p class="text-[#aaa]">Lorem ipsum dolor sit.</p>
        </div>
      </div>

    </div>
  </div>
  <!--Awards-->
  <div class="bg-[#f5f3ff]">
    <div class="container mx-auto h-full">

      <div class="text-center mt-10">
        <h2 class="text-3xl font-black text-[#40b751] pt-12">Awards</h2>
      </div>
      <div class="pb-16">
        <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 justify-items-center text-center">
          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96 "
              src="../../src/assets/Inter/img/nationalbusinessawards.jpeg">
            <div class="">
              <h5 class="text-[#364958] font-bold text-[20px] leading-6">National Business Excellence And</h5>
              <h5 class="text-[#364958] font-bold text-[20px] leading-6"> Achievers Award</h5>
              <p class="text-[#364958] font-bold pt-2">2021</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/bsinhchennailogo.jpg">
            <div class="">
              <h5 class="text-[#364958] font-bold text-[20px] leading-6">Top Ten Startups In Hyderabad</h5>
              <p class="text-[#364958] font-bold pt-2">2020</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/socialenterpriceaward.jpg">
            <div class="">
              <h5 class="text-[#364958] font-bold text-[20px] leading-6">Social Enterprise Challenge Award</h5>
              <p class="text-[#364958] font-bold pt-2">2018</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/NASSCOM.jpg">
            <div class="">
              <h5 class="text-[#364958] font-bold text-[20px] leading-6">NASSCOM Social Innovation Award</h5>
              <p class="text-[#364958] font-bold pt-2">2018</p>
            </div>
          </div>

          <div>
            <img class="px-24 md:px-8 py-8 lg:py-8 h-52 w-96" src="../../src/assets/Inter/img/indianextress.png">
            <div class="">
              <h5 class="text-[#364958] font-bold text-[20px] leading-6">Indian Express 40</h5>
              <h5 class="text-[#364958] font-bold text-[20px] leading-6">nder 40</h5>
              <p class="text-[#364958] font-bold pt-2">2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { inject, provide, ref } from "vue";
import Sliders from "../components/Sliders.vue";
import Testimonials from "../components/Testimonials.vue";
import { useRoute } from 'vue-router'


export default {
  name: 'Home',
  // created() {
  //   this.get_campaigns()
  //   this.get_featured_campaigns()
  // },
  components: {
    Navbar,
    Footer,
    Sliders,
    Testimonials,
  },
  setup() {
    const user = inject("user")
    // console.log("param id", this.$route.params.razorpay_payment_id)

    return {
      user
    }
  },
  mounted() {
    this.get_campaigns()
    this.get_featured_campaigns()
    // const route = useRoute()
    // if(route.query.razorpay_payment_id){
    //   this.verify_signature(route.query.razorpay_payment_id, route.query.razorpay_payment_link_id, route.query.razorpay_payment_link_reference_id, route.query.razorpay_payment_link_status, route.query.razorpay_signature, route.query.amount)
    // }
    // else{
    //   console.log("not found")
    // }
  },

  data() {
    return {
      campaigns: [],
      campaignToShow: 6,
      totalCampaign: 0,
      loading: false,
      selection: 1,
      openTab: 1,
      openTabTestimonials: 1,
      featured_campaigns: []
    }
  },
  resources: {
    get_campaigns() {
      return {
        method: '/api/method/sadbhavna_donatekart.api.campaign.get_campaigns',
        onSuccess: (res) => {
          console.log("get_campaign_success", res)
          this.campaigns = res
          this.totalCampaign = this.campaigns.length
        },
        onError: (error) => {
          console.log("Error", error)
        }
      }
    },
    get_featured_campaigns() {
      return {
        method: '/api/method/sadbhavna_donatekart.api.campaign.get_featured_campaigns',
        onSuccess: (res) => {
          console.log("get_featured_success", res)
          this.featured_campaigns = res
        },
        onError() {
          console.log("Error")
        }
      }
    }
    // verify_signature(){
    //   return{
    //     method: "sadbhavna_donatekart.api.api.verify_signature",
    //     onSuccess:(res)=>{
    //       console.log("res", res)
    //       if(res[0]){
    //         // this.$router.push(`/sadbhavna/donation-success-page/${res[1]}`)
    //       }
    //       else{
    //         console.log("payment not done")
    //       }
    //     },
    //     onError:(error)=>{
    //       console.log("error", error)
    //     }
    //   }
    // }

  },
  methods: {
    numberWithCommas(x) {
      return x.toLocaleString();
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    // toggleTabsTestimonials: function (tabNumber) {
    //   this.openTabTestimonials = tabNumber
    // },
    // verify_signature(razorpay_payment_id, razorpay_payment_link_id, razorpay_payment_link_reference_id, razorpay_payment_link_status, razorpay_signature, amount){
    //   this.$resources.verify_signature.submit({
    //     razorpay_payment_id: razorpay_payment_id,
    //     razorpay_payment_link_id: razorpay_payment_link_id,
    //     razorpay_payment_link_reference_id: razorpay_payment_link_reference_id,
    //     razorpay_payment_link_status: razorpay_payment_link_status,
    //     razorpay_signature: razorpay_signature,
    //     amount: amount
    //   })
    // },

    get_campaigns(category) {
      this.$resources.get_campaigns.submit({
        category: category
      })

      // ****************************
      // let url = ''
      // if (category == null) {
      //   url = '/api/resource/Donation Campaign?filters={"published": 1}&fields=["name", "campain_image", "campaign_title", "is_featured","donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"]'
      // }
      // else {
      //   url = `/api/resource/Donation%20Campaign?filters=[["Donation Campaign","campaign_category","=","${category}"],["Donation Campaign","published","=",1]]&fields=["name", "campain_image", "is_featured", "campaign_title", "donation_amount", "raised_amount", "start_date", "end_date", "short_description", "ngo", "campaign_category"]`
      // }
      // axios.get(url).then((response) => {
      //   // console.log("campaign", response)
      //   this.campaigns = response.data['data']
      // }).catch(function (error) {
      //   console.log(error);
      // })
      // ***************************
      // fetch(url, {
      //           method: 'GET',
      //       })
      //       .then(response => {
      //           response.json().then(res => {
      //           this.campaigns = res.data['data']
      //           });
      //       })
      //       .catch(err => {
      //           console.error(err);
      //       });
      // *****************************
    },
    get_featured_campaigns() {
      this.$resources.get_featured_campaigns.submit({
      })
    },
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    // viewmore(name) {
    //   this.$router.push(`/sadbhavna/campaign-donation/${name}`)
    // },
    donate(name) {
      // this.$router.push(`/sadbhavna/donate/${name}`)
      this.$router.push(`/sadbhavna/campaign-donation/${name}`)
    }
  },
  // mounted(){
  //   if (!this.user.isLoggedIn()) {
  // 		this.$router.push({
  // 			name: "DeskLogin",
  // 			query: { route: this.$route.path },
  // 		})
  // 		return
  // 	}
  //   // else{
  //   //   this.$router.push(`/sadbhavna/login`)
  //   // }
  // 	if (!this.user.has_desk_access) {
  // 		this.$router.push({ path: "/home" })
  // 		return
  // 	}
  // }

  // beforeMount(){
  //   this.get_campaign
  // }
}

</script>
