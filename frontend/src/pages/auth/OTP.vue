<template>
    <Navbar />
    <div class="container mx-auto h-full">
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-12 bg-grey-lightest">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <div class="py-8 px-10 text-gray-600 text-black text-center text-4xl">Verify your contact detail
                    </div>
                    <div class="py-4 px-8">
                        <div class="mb-7">
                            <span class="block text-gray-600 text-base  mb-2" for="email">{{ message }}</span>
                            <!-- <span class="text-sm text-gray-400"> Whats app Number : {{ message.number }}</span> -->
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2" for="email">Enter OTP</label>
                            <input class="appearance-none border-gray-300 rounded w-full py-2 px-3 text-grey-darker"
                                v-model="otp" type="number">
                        </div>
                        <div class="mb-4">
                            <button
                                class="appearance-none border-gray-600 rounded w-auto text-grey-darker bg-green-500 hover:bg-transparent text-white hover:text-green-500 px-7 py-2 tracking-wide border border-green-500 hover:border-green-500 text-xs uppercase rounded"
                                @click="verify_otp()"
                                >Verify
                                OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import { useRoute } from 'vue-router';
export default {
    name: 'OTP',
    components: {
        Navbar,
        Footer
    },
    data(){
        return{
            message: '',
            number: '',
            otp: '',
        }
    },
    mounted(){
        const name = useRoute();
        this.message = name.params.message
        this.number = name.params.number
        console.log("message", this.message)
        // this.number = name.params.message.number
    },
    resources:{
        verify_otp(){
            return{
                method: 'sadbhavna_donatekart.api.api.verify_otp',
                onSuccess: (res) => {
                    var route = this.$cookies.get('route');
                    console.log("route", route)
                    if (route != null){
                        this.$router.go(-2)
                        // this.$router.push(route)
                    }
                    else{
                        this.$router.push(`/sadbhavna`);
                    }
                    // console.log("verified", res)
                    // this.$router.push('/sadbhavna')
                },
                onError: (error) => {
                    console.log("error", error)
                }
            }
        }
    },

    methods:{
        verify_otp(){
            this.$resources.verify_otp.submit({
                number:this.number,
                otp: this.otp
            })
        }
    }

}
</script>