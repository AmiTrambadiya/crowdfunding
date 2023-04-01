<template>
    <Navbar />

    <div class="container mx-auto">
        <div class="absolute bg-no-repeat z-1 sm:h-0 md:h-0 lg:h-0 xl:h-96 sm:w-0 md:w-0 lg:w-0 xl:w-80 sm:top-60 md:top-96 lg:top-80 xl:top-[350px] sm:right-0 md:right-5 lg:right-32 bg-no-repeat opacity-40 bg-white bg-cover"
            style="
                background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png');
              ">
        </div>
        <div class="container mx-auto h-full">
            <div class="w-full sm:pt-0 md:pt-5 lg:pt-12 bg-gray-lightest">
                <div class="container mx-auto py-0 sm:pb-0 md:pb-0 lg:pb-4 xl:pb-32">
                    <div class="w-5/6 md:w-5/6 lg:w-2/3 xl:w-5/6 mx-auto bg-white">
                        <h1
                            class="text-[28px]  md:text-[32px] lg:text-[40px] py-8  text-gray-600 text-black font-bold text-center">
                            Verify your contact detail
                        </h1>
                        <div class="relative pt-4 pb-12 z-0 px-2 md:px-4 lg:px-8">
                            <p class="mb-7">
                                <span class="block text-gray-600 text-base  mb-2">An OTP has been sent to your whatsapp
                                    number</span>
                                <span class="text-sm text-gray-400"> Whats app Number :+91 8200676989</span>
                            </p>
                            <div class="mb-4">
                                <label class="block text-gray-600 text-base  mb-2">Enter OTP</label>
                                <input
                                    class="appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="enter_otp" type="number">
                            </div>
                            <div class="mb-4">
                                <button
                                    class="cursor-pointer appearance-none border-gray-600 rounded w-auto text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] px-7 py-3 tracking-wide border border-[#40b751] hover:border-[#40b751] text-xs uppercase rounded">Verify
                                    OTP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "requester_type",
    components: {
        Navbar,
        Footer
    }
}
</script>