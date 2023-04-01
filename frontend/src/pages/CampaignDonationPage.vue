<template>
    <!-- <DonationCheckout/> -->
    <Navbar />
    <div class="container mx-auto mt-[40px] md:mt-[40px] lg:mt-[80px]">
        <div v-if="campaign_detail" class="px-[14px] md:px-0 lg:px-0">
            <!-- {{ campaign_detail }}  -->
            <h2 style="font-size: 2rem; font-weight: 700;"
                class="w-full mb-4 leading-10 md:leading-0 lg:heading-12 mb-1.5 text-[#364958] capitalize">{{
                    campaign_detail.data.campaign_title }}</h2>
            <p style="line-height:1.7;" class="mb-4 text-base text-[#364958] font-normal">{{
                campaign_detail.data.short_description }}</p>
            <div class="mb-[50px] flex flex-wrap">
                <span
                    class="mb-2 bg-[#40b751] mr-[4px] capitalize text-white  py-[7px] px-[18px] md:px-[20px] lg:px-[20px] rounded-[10px]">
                    Tax Benefit</span>
                <span
                    class="mb-2 bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[18px] md:px-[20px] lg:px-[20px]  rounded-[10px]">
                    Assured</span>
                <span
                    class="mb-2 bg-[#40b751] mr-[4px] capitalize text-white py-[7px] px-[18px] md:px-[20px] lg:px-[20px] rounded-[10px]">
                    Old Ages</span>
            </div>
            <div class="flex flex-wrap mt-6 mb-5">
                <img class="object-fill w-full mb-4" :src="campaign_detail.data.campain_image">
                <div class="w-full lg:w-8/12 pr-4">
                    <!-- <DonationDetail /> -->
                    <div class="pt-4 pb-2 mt-[4px] mb-[6px] flex text-[#364958] justify-between font-bold">
                        <p>Raised: {{ numberWithCommas(campaign_detail.data.raised_amount) }}</p>
                        <p>Goal: {{ numberWithCommas(campaign_detail.data.donation_amount) }}</p>
                    </div>
                    <div class="w-full h-[16px] bg-gray-200 rounded-md dark:bg-gray-700">
                        <!-- <div class="bg-green-500 text-xs font-medium text-grren-100 text-center p-0.5 leading-none rounded-md" style="width: 40%"> 40%</div> -->
                        <div class="bg-[#40b751] text-[11px] font-medium text-black text-center p-0.5 leading-none rounded"
                            :style="{ width: campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount + '%' }">
                            {{ (campaign_detail.data.raised_amount * 100 / campaign_detail.data.donation_amount).toFixed(2)
                            }}%</div>
                    </div>


                    <!-- <div class="pt-4 pb-2 mt-[4px] mb-[6px] flex flex-wrap text-[#364958] font-bold">
                        <div class="lg:w-3/12 md:3/12 sm: 6/12 flex">
                            <p class="flex mr-5"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>{{ numberWithCommas(total_donors) }} Donors</p>
                            <p class="flex"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {{ campaign_days }} Days Left</p>
                        </div>
                        <div class="flex lg:w-6/12 md:6/12 sm:6/12 justify-between">
                            <p></p>
                            <p>facebook</p>
                            <p>twitter</p>
                            <p>whatsapp</p>
                            <p>link</p> -->
                            <!-- <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4" src="../../src/assets/Inter/img/facebook.svg" />
                                <span class="sr-only">Facebook page</span>
                                </a>
                                <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4" src="../../src/assets/Inter/img/twitter.svg" />
                                <span class="sr-only">Twitter page</span>
                                </a>
                                <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4 " src="../../src/assets/Inter/img/insta.svg" />
                                <span class="sr-only">Instagram page</span>
                                </a>
                                <a href="#" class="text-gray-400 text-white">
                                <img class="w-4 h-4" src="../../src/assets/Inter/img/linkedin.svg" />
                                <span class="sr-only">Linkedin account</span>
                                </a> -->
                        <!-- </div> -->
                    <!-- </div> -->


                    <div class="flex flex-wrap mt-2 justify-between">
                        <div class="flex flex-wrap">
                            <p class="flex mr-5"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>{{ numberWithCommas(total_donors) }} Donors</p>
                            <p class="flex"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {{ campaign_days }} Days Left</p>
                
                        </div>
                        <div class="flex flex-wrap">
                            <div class="bg-blue-700 rounded-full h-10 w-10 sm:ml-2 pt-2 pb-1 pl-2 pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </div> 
                            <div class="bg-sky-400 rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2 pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </div>
                            <div class="bg-[#40b751] rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2 pr-1">
                                <svg fill="#000000" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve"><g id="XMLID_468_"><path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"/><path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"/> </g></svg>                            
                            </div>
                            <div class="bg-gray-600 rounded-full h-10 w-10 ml-2 pt-2 pb-1 pl-2.5 pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            </div>
                        </div>
                    </div>




        
                    <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 mt-6">
                        <div class="pb-4" v-for="products in campaign_detail.data.add_campaign_items">
                            <!-- {{ products }} -->
                            <div class="block product-shodow bg-white pl-5">
                                <div class="flex items-center pt-4">
                                    <div class="lg:flex lg:w-4/12 xl:w-4/12">
                                        <img :src="products.image" :alt="products.display_as_name"
                                            class="w-32 h-32" />
                                    </div>

                                    <div class="lg:w-8/12 xl:w-8/12">
                                        <div class="px-6 md:px-6 lg:px-6">
                                            <h4 class="text-xl font-medium text-[#40b751]">{{ products.display_as_name }}</h4>
                                            <p class="text-gray-500 mb-2">
                                                {{ products.about }}
                                            </p>
                                            <p class="text-gray-500 font-bold pb-2">
                                                ₹ {{ numberWithCommas(products.price) }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mr-4">
                                <div class="flex justify-end">
                                    <div class="flex pb-2" v-if="item_b.includes(products.item)">
                                        <div class="flex justify-between w-24 text-xl h-9 mr-6">
                                            <Button class="bg-gray-300"
                                                @click="decrement(products.item, products.price, qty=1)">-</Button>

                                            <div v-for="item in item_cart">
                                                <div class="bg-[#40b751] pt-1 pb-1 pl-3 pr-3 rounded-lg justify-center pb-5"
                                                    v-if="products.item == item.item"> {{ item.qty }}
                                                </div>
                                            </div>
                                            <Button class="bg-gray-300"
                                                @click="increment(products.item, products.price, qty=1)">+</Button>
                                        </div>
                                    </div>                    

                                    <div class="pb-2" v-else>
                                        <div class="grid justify-items-end w-24 text-xl h-9 mr-4">
                                            <div>
                                                <button class="rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-2 md:px-4 lg:px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                                @click="increment(products.item, products.price, qty=1)">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div v-for="index in descToShow">
                        <div v-if="index - 1 < campaign_detail.data.description.length">
                            <img class="object-fill w-full" :src="campaign_detail.data.description[index - 1].image">
                            <p style="line-height:1.7;" class="text-[#364958] mb-5">{{
                                campaign_detail.data.description[index - 1].image_description }}</p>
                        </div>
                    </div>
                    <div class="text-center"
                        v-if="descToShow < campaign_detail.data.description.length || campaign_detail.data.description.length > descToShow">
                        <button
                            class="mt-2 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-6 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="descToShow += 1">View More</button>
                    </div>
                    <div class="text-center" v-else>
                        <button
                            class="mt-2 rounded-lg bg-[#40b751] hover:bg-white text-white hover:border-[#40b751] hover:border hover-border-solid hover:text-[#40b751] active:bg-green-600 uppercase text-xs md:text-xs lg:text-sm px-6 md:px-4 lg:px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-4 lg:mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="descToShow = 1" v-if="total_desc > 0">View Less</button>
                    </div>
                </div>

                <div class=" w-full lg:w-4/12">
                    <div class="sticky top-0">
                        <div class="overflow-hidden hidden lg:block">
                            <table class="text-[#364958]" v-if="item_cart != ''">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="font-bold py-4 text-left">
                                            Item Name
                                        </th>
                                        <!-- <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                            Rate
                                        </th> -->
                                        <th scope="col" class="font-bold px-6 py-4 text-left">
                                            Qty
                                        </th>
                                        <th scope="col" class="font-bold px-6 py-4 text-left">
                                            Amount
                                        </th>   
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in item_cart"
                                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-sm text-gray-900 py-4 whitespace-nowrap">
                                            {{ item.item }}
                                        </td>
                                        <!-- <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {{ item.rate }}
                                        </td> -->
                                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            {{ item.qty }}
                                        </td>
                                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            {{ item.amount }}
                                        </td>
                                    </tr>                                    
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-gray-900 font-bold py-4 whitespace-nowrap">Total</td>
                                        <td class="text-gray-900 font-bold px-6 py-4 whitespace-nowrap">{{ i_qty }}</td>
                                        <td class="text-gray-900 font-bold px-6 py-4 whitespace-nowrap">₹ {{ numberWithCommas(total_price) }}</td>
                                    </tr>

                                </tbody>
                            </table>
                            <div class="text-center mt-5">
                                <button
                                    class="rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 mb-5 ease-linear transition-all duration-150"
                                    type="button" @click="donate(total_price, anonymous)"> donate now
                                </button>
                                <div v-if="item_cart != ''">
                                    <input type="checkbox" id="anonymous" v-model="anonymous">
                                    <label for="checkbox" class="text-sm pl-2">Make my donation anonymous</label>
                                </div>
                            </div>

                            <!-- <div v-if="total_price != 0" class="text-center font-bold text-lg mt-5">
                                <div class="text-gray-600">Total Donation</div>
                                <div class="text-[#40b751]">₹ {{ numberWithCommas(total_price) }}</div>
                                <div>
                                    <button
                                        class="rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 mb-5 ease-linear transition-all duration-150"
                                        type="button" @click="donate(total_price, anonymous)"> donate now
                                    </button>
                                </div>
                                <div>
                                    <input type="checkbox" id="anonymous" v-model="anonymous">
                                    <label for="checkbox" class="text-sm pl-2">Make my donation anonymous</label>
                                </div>
                                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                            </div> -->
                        </div>

                        <!-- <div style="font-size: 2rem;" class="mt-3 font-medium text-gray-800">Other Donation</div> -->
                        <p class="text-gray-600 mt-4">Donate via</p>


                        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/phonepay.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">Phone Pay</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/gpay.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">Google Pay</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/bhim.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">Bhim UPI</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/paytm.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">Paytm</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/crditcard.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">cr/dr card</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg  pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/banktransfer.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs  text-[#364958]">Bank Transfer</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="cursor-pointer rounded-t-lg pt-4 pb-4">
                                    <div class="grid justify-center">
                                        <img src="../../src/assets/Inter/img/giftcard.png" class="w-12 h-12">
                                    </div>
                                    <div class="text-center pt-2">
                                        <p class="text-xs text-[#364958]">Gift Card</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="bg-white dark:bg-gray-900 flex flex-wrap">
                <div class="lg:w-8/12 md:w-6/12 sm:w-12/12">
                    <div class="bg-white dark:bg-gray-900">
                        <div>
                            <div class="text-gray-700">
                                <div class="px-5 py-10">
                                    <div class="mb-8">
                                        <p
                                            class="text-[30px] md:text-[26px] lg:text-[30px] text-[#40b751] font-semibold text-center title-font mb-4 ">
                                            FAQ
                                        </p>
                                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!
                                        </p>
                                    </div>
                                    <div class="flex flex-wrap sm:mx-auto sm:mb-2 mx-auto">
                                        <div class="w-full py-2">
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium cursor-pointer border-2 border-b-1 border-solid border-b-gray-300 text-xl text-[#40b751] list-none bg-gray-100 rounded py-3 px-4">
                                                    What is Donatekart ?</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 font-normal border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] ">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                        truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                                        squid
                                                        single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                        occaecat craft beer
                                                        farm-to-table.
                                                    </p>
                                                </span>
                                            </details>
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                    How to claim Tax-Exemption for my contributions on Donatekart?</summary>


                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                        truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                                        squid
                                                        single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                        occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                        haven't
                                                        heard of them accusamus labore
                                                        sustainable VHS.</p>
                                                </span>
                                            </details>
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                    How to Donate ?</summary>

                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                        truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                                        squid
                                                        single-origin coffee nulla
                                                        assumenda shoreditch et.</p>
                                                </span>
                                            </details>
                                            <details class="mb-4">
                                                <summary
                                                    class="font-medium border-2 cursor-pointer border-b-1 border-solid border-b-gray-300 text-[#40b751] text-xl list-none bg-gray-100 rounded py-3 px-4">
                                                    How to claim Tax-Exemption ?</summary>


                                                <span>
                                                    <p style="line-height:1.7;"
                                                        class="border-2 border-solid border-gray-200 border-t-0 p-5 text-lg text-[#364958] dark:text-gray-300">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                        truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                                        squid
                                                        single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                        labore wes anderson cred nesciunt
                                                        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                        occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                        haven't
                                                        heard of them accusamus labore
                                                        sustainable VHS.</p>
                                                </span>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:w-4/12 md:w-6/12 sm:w-6/12">
                    <div style="font-size: 2rem;" class="mt-8 font-medium text-gray-800">Donors ({{ total_donors }})</div>
                    <div class="flex flex-wrap shadow">
                        <div class="w-full">
                            <ul class="flex mb-0 list-none flex-wrap flex-row">
                                <li class="-mb-px flex-auto text-center">
                                    <a class="text-sm font-medium  px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
                                        v-on:click="toggleTabs(1)"
                                        v-bind:class="{ 'bg-gray-200': openTab !== 1, 'text-gray-500': openTab === 1 }">
                                        <i class="fas fa-space-shuttle text-base mr-1"></i> Recent
                                    </a>
                                </li>
                                <li class="-mb-px  flex-auto text-center">
                                    <a class=" text-sm font-medium  px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer"
                                        v-on:click="toggleTabs(2)"
                                        v-bind:class="{ 'bg-gray-200': openTab !== 2, 'text-gray-500': openTab === 2 }">
                                        <i class="fas fa-cog text-base mr-1"></i> most generous
                                    </a>
                                </li>
                            </ul>

                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="tab-content tab-space overflow-y-auto h-72">
                                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                            <div class="pb-6" v-for="donation in recent_donation">

                                                <div class="grid grid-cols-[200px_minmax(80px,_1fr)_100px]">

                                                    <div>
                                                        <div class="float-left pr-4">
                                            
                                                            <div v-if="donation.anonymous != 1">
                                                                <Avatar :imageURL="donation.donor_image"
                                                                    :label="donation.donor_name" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                            <div v-else>
                                                                <Avatar imageURL="" label="Anonymous" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <p v-if="donation.anonymous != 1"
                                                                class=" text-gray-900 leading-none text-lg">{{
                                                                    donation.donor_name }}</p>
                                                            <p v-else class="text-gray-900 leading-none text-lg">
                                                                Anonymous</p>
                                                            <p class="text-gray-600 text-sm">{{ formatDate(donation.date) }}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="grid justify-end">
                                                        <p class="">₹ {{ numberWithCommas(donation.amount) }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                            <div class="pb-6" v-for="m_donation in most_generous">
                                                <div class="grid grid-cols-[200px_minmax(80px,_1fr)_100px]">

                                                    <div>
                                                        <div class="float-left pr-4">

                                                            <div v-if="m_donation.anonymous != 1">
                                                                <Avatar :imageURL="m_donation.donor_image"
                                                                    :label="m_donation.donor_name" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                            <div v-else>
                                                                <Avatar imageURL="" label="Anonymous" size="lg"
                                                                    class="w-12 h-12 rounded-full" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <p v-if="m_donation.anonymous != 1"
                                                                class=" text-gray-900 leading-none text-lg">{{
                                                                    m_donation.donor_name }}</p>
                                                            <p v-else class="text-gray-900 leading-none text-lg">
                                                                Anonymous</p>
                                                            <p class="text-gray-600 text-sm">{{ formatDate(m_donation.date) }}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="grid justify-end">
                                                        <p class="">₹ {{ numberWithCommas(m_donation.amount) }}</p>
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
            </section>
        </div>
    
        <div class="md:block sm:block lg:hidden rounded-2xl w-full h-16 bg-white border-t-4 border-green-500
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white text-2xl " v-if="total_price != 0">
        <!-- <div class="">asdfasdfasd</div> -->
        <div class="flex justify-between text-center font-bold text-lg mt-5">
            <div class="flex">
                <div class="text-[#40b751] ml-5">{{ i_qty }} Item(s) |</div>
                <div class="text-[#40b751] ml-2">₹ {{ numberWithCommas(total_price) }}</div>
            </div>
            <!-- <div>
                <input type="checkbox" id="anonymous" v-model="anonymous">
                <label for="checkbox" class="text-sm text-green-500 pl-2">Make my donation anonymous</label>
            </div> -->
            <div>
                <button
                    class="mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150"
                    type="button" @click="donate(total_price, anonymous)"> donate now
                </button>
            </div>
            
        </div> 

        </div>
    </div>
    
    <Dialog :options="{
        title: 'Donation Completed',
        message: `Your donation of ${donated_amount} is successfully completed.`,
        icon: {
            name: 'smile',
            appearance: 'success',
        },
        appearance: 'info',
        size: 'lg',
        actions: [
            {
                label: 'Get 80G Certificate',
                appearance: 'success',
                handler: ({ close }) => {
                    this.download_80g(donation_name)
                    close() // closes dialog
                },
            },
            {
                label: 'View Profile',
                appearance: 'success',
                handler: ({ close }) => {
                    this.view_profile()
                    close() // closes dialog
                },
            },
            { 
                label: 'Cancel',
                handler: ({ close }) => {
                    this.cancel()
                    close() // closes dialog
                },
            },
        ],
    }" v-model="showDialog" />
    <!-- <div>item_cart{{ item_cart }}</div><br> -->
    <!-- {{ a }} -->

    <!-- <input type="text" v-model="name"/>
    <button @click="get_cookies(name)">get</button><br>
    <button @click="delete_cookies('item')">del</button><br>
    <button @click="set_cookies()">set</button><br>  -->
    <!-- {{ item_cart }} -->

    <Footer />
</template>

<script>
// import { ContentMatch } from 'prosemirror-model';
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import { Avatar } from 'frappe-ui'
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { Dialog } from 'frappe-ui'
import { createConditionalExpression } from '@vue/compiler-core';
import { computeStyles } from '@popperjs/core';
// import DonationDetail from "../components/DonationDetail.vue";
// import DonationCheckout from "../components/DonationCheckout.vue";


// import Razorpay from 'razorpay';
// const rzp = new Razorpay({
//     key_id: 'rzp_test_Adc0DsR6E8VV3t',
//     key_secret: 'qxawCeu9WJSdW4XjEK8vqzWO'
// });

export default {
    name: "CampaignDonation",
    components: {
        // DonationDetail,
        // DonationDetailRightside
        Navbar,
        Footer,
        Avatar,
        Dialog,
        // DonationCheckout,
    },    
    setup() {
        const user = inject("user")
        const cookie = Object.fromEntries(
            document.cookie
                .split("; ")
                .map((part) => part.split("="))
                .map((d) => [d[0], decodeURIComponent(d[1])])
        )
        return {
            user,
            cookie
        }
    },
    data() {
        return {
            campaign_detail: '',
            openTab: 1,
            recent_donation: '',
            most_generous: '',
            campaign: '',
            tab2: 'this is tab two content',
            a: 70,
            date: '',

            i_qty: 0,
            item_cart: [],
            total_price: 0,
            item_b: [],

            name: '',
            b: '',

            anonymous: false,
            showDialog: false,
            donated_amount: '',
            donation_name: '',
            loaded: false,
            total_donors: '',
            campaign_days: 0,
            campaign_end_date: '',
            campaign_start_date: '',
            descToShow: 1,
            total_desc: 0,

        }
    },
    created() {
        const name = useRoute();
        this.campaign = name.params.name
        this.get_campaign_donation_detail(name.params.name)
        this.get_recent_donation(name.params.name)
        this.get_generous_donation(name.params.name)

        var item_cart = this.get_cookies('item')
        var i_qty = this.get_cookies('i_qty')
        var total_price = this.get_cookies('total_price')
        var item_b = this.get_cookies('item_b')
        if(item_cart != null){
            this.item_cart = item_cart
        }
        if(i_qty != null){
            this.i_qty = parseInt(i_qty)
        }
        if(total_price != null){
            this.total_price = parseInt(total_price)
        }
        if(item_b != null){
            this.item_b = item_b
        }

        
        // console.log("a", a)
    },
    mounted() {
        // var a = this.get_cookies('item')
        // console.log("a", a)
                // const timeDiff = Math.abs(this.campaign_end_date.getTime() - this.campaign_start_date.getTime());
        // this.campaign_days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    },
    // computed: {
    //     most_generous() {
    //     return this.most_generous.sort((a, b) => b.amount - a.amount);
    //     }
    // },
    resources: {
        // get_campaign_donation_detail(){
        //     return{
        //         // method: '/api/method/sadbhavna_donatekart.api.campaign.get_campaign_detail',
        //         method: "api/resource/Donation Campaign/GIVE-TH-16-01-2023-0001",
        //         onSuccess: (res) => {
        //             console.log(res)
        //             this.campaign_detail = res
        //         },
        //         onError: (error) => {
        //             console.log(error)
        //         }
        //     }
        // },

        download_80g() {
            return {
                method: 'sadbhavna_donatekart.api.donor.download_80g',
                onSuccess: (res) => {
                    // console.log('okey', res)
                    let url = `/api/method/frappe.utils.print_format.download_pdf?doctype=Tax Exemption 80G Certificate&name=${res}&format=80G Certificate for Donation`
                    // window.location = url
                    window.open(url, "_blank");
                },
                onError: (error) => {
                    console.log('somthing want wrong!', error)
                },
            }
        },

        get_recent_donation() {
            return {
                method: "sadbhavna_donatekart.api.api.get_recent_donation",
                onSuccess: (res) => {
                    this.recent_donation = res
                    this.total_donors = res.length
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        },
        get_generous_donation() {
            return {
                method: "sadbhavna_donatekart.api.api.get_generous_donation",
                onSuccess: (res) => {
                    this.most_generous = res
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        },
        set_details_in_doctype_after_donation() {
            return {
                method: "sadbhavna_donatekart.api.api.set_details_in_doctype_after_donation",
                onSuccess: (res) => {
                    this.item_cart = []
                    this.total_price = 0
                    this.qty = 0
                    //    console.log("res", res)
                    // this.$toast({
                    //     title: "Success",
                    //     text: `Your donation of ${d_amount} is successfull, check profile for more details`,
                    //     customIcon: "check",
                    // })
                    this.donated_amount = res[0]
                    this.donation_name = res[1]
                    this.delete_cookies('item')
                    this.delete_cookies('item_b')
                    this.delete_cookies('i_qty')
                    this.delete_cookies('total_price')
                    this.showDialog = true

                    // this.$router.push(`/sadbhavna/donation-success-page/${d_amount}`)
                    // alert("your donation is successfull")
                },
                onError: (error) => {
                    // alert("Something Want Wrong!", error)
                    this.$toast({
                        title: "Error",
                        text: error,
                        customIcon: "circle-fail",
                        appearance: "denger",
                    })
                }
            }
        },

    },
    methods: {
        delete_cookies(name){
            this.$cookies.remove(name, `/sadbhavna/campaign-donation/${this.campaign}`);
        },
        get_cookies(name){
            // console.log("cookies", name, this.$cookies.get(name))
            return this.$cookies.get(name)
        },
        set_cookies(name, value){
            // VueCookies.set('myCookie', '123', '1d', '/THE-ELE-16-01-2023-0001')
            // console.log("campaign", this.campaign)
            this.$cookies.set(name, value,"60 + 30", `/sadbhavna/campaign-donation/${this.campaign}`);
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
        },
        numberWithCommas(x) {
            return x.toLocaleString();
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        get_campaign_donation_detail(name) {
            let url = "/api/resource/Donation Campaign/" + name
            fetch(url, {
                method: 'GET',
            })
                .then(response => {
                    response.json().then(res => {
                        this.campaign_detail = res
                        this.total_desc = res.data.description.length
                        // this.campaign_start_date = new Date(res.data.start_date)
                        var today = new Date()
                        this.campaign_end_date = new Date(res.data.end_date)
                        const timeDiff = this.campaign_end_date.getTime() - today.getTime();
                        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        this.campaign_days = daysDiff;                        
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_recent_donation(name) {
            // let url = `/api/resource/Donation?filters={[['campaign': ${name}], ['anonymous': 0]]}`
            // axios.get(url).then((response) => {
            //   this.recent_donation = response.data['data']
            // }).catch(function (error){
            //   console.log(error);
            // })
            this.$resources.get_recent_donation.submit({
                name: name
            })
        },
        get_generous_donation(name) {
            this.$resources.get_generous_donation.submit({
                name: name
            })
        },
        donate(total_price, anonymous) {
            if (!this.user.isLoggedIn()) {
                this.$cookies.set('route', `/sadbhavna/campaign-donation/${this.campaign}`);
                this.$router.push(`/sadbhavna/auto-login`)
                // return
            }
            else {
                // call razor pay api
                // rzp.open(options)
                var options = {
                    "key": "rzp_test_Adc0DsR6E8VV3t", // Enter the Key ID generated from the Dashboard
                    "amount": total_price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "Crowdfunding",
                    "description": "Test Transaction",
                    "image": "https://crowdfunding.frappe.cloud/files/favicon.ico",
                    // "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    handler: (response) => {
                        this.set_details_in_doctype_after_donation(total_price, anonymous, response.razorpay_payment_id)

                        // this.verifySignature(response);
                    },
                    // "handler": function (response){

                    // },
                    "prefill": {
                        "name": `${this.cookie.full_name}`,
                        "email": `${this.cookie.user_id}`,
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#40b751"
                    }
                };
                var rzp1 = new Razorpay(options);
                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                });
                rzp1.open();


                // ************************main code************************


                // this.$router.push(`/sadbhavna/donate/${name}&${price}`)
            }
        },
        set_details_in_doctype_after_donation(total_price, anonymous, payment_id) {
            this.$resources.set_details_in_doctype_after_donation.submit({
                user_id: this.cookie.user_id,
                campaign: this.campaign,
                item: this.item_cart,
                amount: total_price,
                payment_id: payment_id,
                anonymous: anonymous == true ? 1 : 0
            })
            // this.$resources.set_details_in_doctype_after_donation.submit({
            //     user_id: cookie.user_id,
            //     campaign: this.campaign,
            //     item: this.item_cart,
            //     amount: this.total_price,
            //     payment_id: response.razorpay_payment_id,
            //     anonymous: this.anonymous == true ? 1 : 0
            // })
        },

        download_80g(donation_name) {
            this.$resources.download_80g.submit({
                donor: this.cookie.user_id,
                donation: donation_name,
            })
        },
        view_profile() {
            this.$router.push(`/sadbhavna/profile/${this.cookie.user_id}`)
        },
        cancel(){
            this.$router.push('/sadbhavna')
        },

        increment(item, rate, qty = 1) {
            if(qty){
                this.i_qty += 1
                this.set_cookies("i_qty", this.i_qty)
                if(!this.item_b.includes(item)){
                    this.item_b.push(item)
                    this.set_cookies("item_b", this.item_b)
                }
                let qty1 = 0
                this.item_cart.filter(function (elm) {
                    if (elm.item == item) {
                        qty1 = elm.qty
                    }
                    // else {
                    //     qty1 = 0
                    // }
                });
                let amount = rate * (qty1 + 1)

                var check = this.item_cart.filter(function (elm) {
                    if (elm.item == item) {
                        return elm;
                    }
                });
                if (check.length > 0) {
                    let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                    this.item_cart.splice(i, 1)
                    this.item_cart.push({ item: item, rate: rate, qty: qty1 + 1, amount: amount })
                    // this.get_total_price()
                    this.total_price += rate
                    this.set_cookies("item", this.item_cart)
                    console.log("in if total_price", this.total_price)
                    this.set_cookies("total_price", this.total_price)
                    qty1 = 0
                }
                else {
                    this.item_cart.push({ item: item, rate: rate, qty: qty1 + 1, amount: amount })
                    this.total_price += rate
                    this.set_cookies("item", this.item_cart)
                    console.log("in else total_price", this.total_price)
                    this.set_cookies("total_price", this.total_price)
                    qty1 = 0
                }
            }
        },

        decrement(item, rate) {
            this.i_qty -= 1
            this.set_cookies("i_qty", this.i_qty)
            let qty1 = 0
            this.item_cart.filter(function (elm) {
                if (elm.item == item) {
                    qty1 = elm.qty
                }
                // else {
                //     qty1 = 0
                // }
            });
            let amount = rate * (qty1 - 1)

            var check = this.item_cart.filter(function (elm) {
                if (elm.item == item) {
                    return elm;
                }
            });

            if (check.length > 0) {
                let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                this.item_cart.splice(i, 1)
                this.item_cart.push({ item: item, rate: rate, qty: qty1 - 1, amount: amount })
                this.total_price -= rate
                this.set_cookies("item", this.item_cart)                
                this.set_cookies("total_price", this.total_price)

                if(qty1 == 1){
                    var check = this.item_cart.filter(function (elm) {
                    if (elm.item == item) {
                        return elm;
                    }
                });
                    if (check.length > 0) {
                        let i = this.item_cart.map(item => item.item).indexOf(item) // find index of your object
                        this.item_cart.splice(i, 1)
                        let a = this.item_b.indexOf(item);
                        this.item_b.splice(a, 1)
                        this.set_cookies("item", this.item_cart)
                        this.set_cookies("item_b", this.item_b)
                    }
                }
            }
            // else {
            //     this.item_cart.push({ item: item, rate: rate, qty: qty1 - 1, amount: amount })
            //     this.total_price -= rate
            // }
        },

    }
}
</script>