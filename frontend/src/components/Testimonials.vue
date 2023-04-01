<template>
  <div class="bg-[#ebf8ec]">
    <div class="container mx-auto h-full">
      <div class=" text-center mt-10 md:mt-10 lg:mt-10 ">
        <h2 class=" text-[24px] md:text-[24px] lg:text-[30px] pt-16 font-black text-[#40b751] mb-2">Testimonials</h2>
        <p class="text-[#364958] text-[15px] px-2 font-[400]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet,
          voluptate!</p>
      </div>

      <div class="flex border-b-2 ml-4 mr-8 border-b-solid border-gray-200 flex-wrap justify-center mt-5">
        <div class="">
          <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-[16px] hover:border hover-border-100 font-xtralight  px-[12px] md:px-[20px] lg:px-[30px] py-[10px] md:py-[10px] lg:py-[12px] rounded block leading-normal cursor-pointer"
                v-on:click="toggleTabsTestimonials(1)"
                v-bind:class="{ 'bg-white': openTabTestimonials !== 1, 'bg-[#40b751] text-white': openTabTestimonials === 1 }">
                <i class="fas fa-space-shuttle text-base mr-1"></i> Celebrities
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-[16px] hover:border hover-border-100 font-xtralight  px-[12px] md:px-[20px] lg:px-[40px] py-[10px] md:py-[10px] lg:py-[12px] rounded block leading-normal cursor-pointer"
                v-on:click="toggleTabsTestimonials(2)"
                v-bind:class="{ 'bg-white': openTabTestimonials !== 2, 'bg-[#40b751] text-white': openTabTestimonials === 2 }">
                <i class="fas fa-cog text-base mr-1"></i> Donors
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a class="text-[16px] hover:border hover-border-100 font-xtralight mt-2 md:mt-0 lg:mt-0 px-[16px] md:px-[28px] lg:px-[48px] py-[10px] md:py-[10px] lg:py-[12px] rounded block leading-normal cursor-pointer"
                v-on:click="toggleTabsTestimonials(3)"
                v-bind:class="{ 'bg-white': openTabTestimonials !== 3, 'bg-[#40b751] text-white': openTabTestimonials === 3 }">
                <i class="fas fa-cog text-base mr-1"></i> NGOs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col min-w-0 break-words w-full">
        <div class=" flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ 'hidden': openTabTestimonials !== 1, 'block': openTabTestimonials === 1 }">


              <div class="pb-16 grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 mt-20">
                <div class="mb-24 md:mb-0 lg:mb-0 flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6  overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 1
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="mb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                      </p>

                    </div>
                  </div>
                </div>
                <div class="mb-24 md:mb-0 lg:mb-0 flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6 overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 1
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="mb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                      </p>

                    </div>
                  </div>
                </div>

                <div class="mb-24 md:mb-0 lg:mb-0  flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6 h-full overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 1
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="mb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div v-bind:class="{ 'hidden': openTabTestimonials !== 2, 'block': openTabTestimonials === 2 }">



              <div class="pb-16 grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 mt-20">
                <div class="mb-24 md:mb-0 lg:mb-0 flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6  overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 2
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="pb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. <a v-show="readMoret21">It has survived not
                          only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged.</a>
                        <a class="cursor-pointer text-blue" @click="readMoret21 = !readMoret21">
                          <span class="text-blue-500 underline" v-if="readMoret21">Read Less</span>
                          <span class="text-blue-500 underline" v-else>Read More</span>
                        </a>
                      </p>

                    </div>
                  </div>
                </div>
                <div class="mb-24 md:mb-0 lg:mb-0 flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6 overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 2
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="pb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. <a v-show="readMoret22">It has survived not
                          only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged.</a>
                        <a class="cursor-pointer text-blue" @click="readMoret22 = !readMoret22">
                          <span class="text-blue-500 underline" v-if="readMoret22">Read Less</span>
                          <span class="text-blue-500 underline" v-else>Read More</span>
                        </a>
                      </p>

                    </div>
                  </div>
                </div>

                <div class="mb-24 md:mb-0 lg:mb-0 flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div class="px-6 shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 2
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="pb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. <a v-show="readMoret23">It has survived not
                          only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged.</a>
                        <a class="cursor-pointer text-blue" @click="readMoret23 = !readMoret23">
                          <span class="text-blue-500 underline" v-if="readMoret23">Read Less</span>
                          <span class="text-blue-500 underline" v-else>Read More</span></a>
                      </p>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div v-bind:class="{ 'hidden': openTabTestimonials !== 3, 'block': openTabTestimonials === 3 }">



              <div class="pb-6 grid lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 mt-20">
                <div class="flex h-[440px] flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6 h-3/4 md:h-4/6 lg:h-full overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 3
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="pb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. <a v-show="readMoret31">It has survived not
                          only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged.</a>
                        <a class="cursor-pointer text-blue" @click="readMoret31 = !readMoret31">
                          <span class="text-blue-500 underline" v-if="readMoret31">Read Less</span>
                          <span class="text-blue-500 underline" v-else>Read More</span>
                        </a>
                      </p>

                    </div>
                  </div>
                </div>

                <div class="h-[440px] flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6 h-3/4 md:h-4/6 lg:h-full overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white lg:mr-6 md:mr-6">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 3
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="pb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. <a v-show="readMoret32">It has survived not
                          only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged.</a>
                        <a class="cursor-pointer text-blue" @click="readMoret32 = !readMoret32">
                          <span class="text-blue-500 underline" v-if="readMoret32">Read Less</span>
                          <span class="text-blue-500 underline" v-else>Read More</span>
                        </a>
                      </p>

                    </div>
                  </div>
                </div>

                <div class="h-[440px] flex flex-col min-w-0 break-words w-full sm:mb-0 md:mb-2 lg:mb-10 ">
                  <div
                    class="px-6 h-3/4 md:h-4/6 lg:h-full overflow-auto overflow-x-hidden shadow-xl shadow-[rgb(0 0 0 / 5%)] bg-white md:mr-6 lg:mr-6 ">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div class="">
                          <img alt="..." src="../../src/assets/Inter/img/person_1.jpg"
                            class=" rounded-full h-auto align-middle border-none absolute -m-14 object-center max-w-100-px" />
                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div class="py-8 px-3 mt-0 md:mt-0 lg:mt-32 sm:mt-0">

                        </div>
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">

                      </div>
                    </div>
                    <div class="text-left mt-0 pb-0">
                      <h3 class="text-[22px] md:text-[22px] lg:text-[24px] leading-normal mb-0 text-gray-600 ">
                        Name Tab 3
                      </h3>
                      <p
                        class="text-[14px] md:text-[14px] lg:text-[16px] leading- normal mt-0 text-[#364958] text-opacity-60 ">
                        <i class="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                        Designation
                      </p>
                      <p class="pb-10 text-[18px] md:text-[18px] lg:text-[18px] leading-8 text-blueGray-600 mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. <a v-show="readMoret33">It has survived not
                          only five centuries, but
                          also the leap into electronic typesetting, remaining essentially unchanged.</a>
                        <a class="cursor-pointer text-blue" @click="readMoret33 = !readMoret33">
                          <span class="text-blue-500 underline" v-if="readMoret33">Read Less</span>
                          <span class="text-blue-500 underline" v-else>Read More</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      openTabTestimonials: 1,
      readMoret21: false,
      readMoret22: false,
      readMoret23: false,
      readMoret31: false,
      readMoret32: false,
      readMoret33: false
    }
  },
  methods: {
    toggleTabsTestimonials: function (tabNumber) {
      this.openTabTestimonials = tabNumber
    },
  }
}
</script>