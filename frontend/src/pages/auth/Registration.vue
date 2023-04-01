<template>
    <Navbar />
    <div class="container mx-auto h-full pb-[48px]">
        <div class="absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[630px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat"
            style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                 background-image: url('https://crowdfunding.frappe.cloud/files/bg-tree.png');
                                                                                                                                                                                                                                                                                                                                                                                                                                              ">
        </div>
        <div class="w-full sm:pt-0 md:pt-5 lg:pt-12">
            <div class="container mx-auto py-0">
                <div class="w-4/6 lg:w:4/6 mx-auto bg-white">
                    <h1
                        class="text-[20px] md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-gray-600 text-bold text-center">
                        Donor Registration
                    </h1>
                    <div class="relative z-0">
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            <div class="mr-2">
                                <label class="block text-gray-600 text-base  mb-2">First
                                    Name <span class="text-red-600">*</span></label>
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="first_name" type="text" required>
                                <p class="text-red-600">{{ firstNameError }}</p>
                            </div>
                            <div>
                                <label class="block text-gray-600 text-base  mb-2">Last
                                    Name</label>
                                <input
                                    class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                    v-model="last_name" type="text" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Email
                                Address <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="email" type="email" required>
                            <p class="text-red-600">{{ emailError }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Password <span
                                    class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="password" type="password" required>
                            <p class="text-red-600">{{ passwordError }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Confirm
                                Password <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="conform_password" type="password" required>
                            <p class="text-red-600">{{ confirmPasswordError }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Phone
                                Number <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="phone_number" type="number" required>
                            <p class="text-red-600">{{ phoneNumberError }}</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-base  mb-2">Pan
                                Number <span class="text-red-600">*</span></label>
                            <input
                                class="appearance-none border-gray-300  ho ver:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker"
                                v-model="pan_number" type="text" required>
                            <p class="text-red-600">{{ panError }}</p>
                        </div>
                        <div class="flex items-center justify-between mt-8">
                            <button
                                class="bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg"
                                type="submit" @click="register()">
                                Register
                            </button>
                        </div>
                        <span class="block text-gray-600 text-base  mb-2"> Already have an account? <router-link
                                to="/sadbhavna/login" class="text-[#40b751]">Sign In</router-link></span>
                        <!-- <a href="/sadbhavna/login">Already have an account? Sign In</a> -->

                        <!-- <p class="text-grey text-xs mt-1"></p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
export default {
    name: 'Registration',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            first_name: '',
            firstNameError: '',
            last_name: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            conform_password: '',
            confirmPasswordError: '',
            phone_number: '',
            phoneNumberError: '',
            pan_number: '',
            panError: '',
            error: false,

        }
    },
    resources: {
        register() {
            return {
                method: 'sadbhavna_donatekart.api.api.register',
                onSuccess: (res) => {
                    // this.recent_donation = res
                    if (confirm("your registration is successfully now you can login") == true) {
                        this.$router.push(`/sadbhavna/login`)
                    } else {
                        this.$router.go(-1)
                    }
                },
                onError: (error) => {
                    this.$toast({
                        title: "Error",
                        text: error,
                        customIcon: "circle-fail",
                        appearance: "denger",
                    })
                    console.log(error)
                }
            }
        }
    },
    methods: {

        validPassword: function (password) {
            var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            return re.test(password);
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        validPhone: function (phone_number) {
            var re = /^[6-9][0-9]{9}$/;
            return re.test(phone_number);
        },
        validName: function (first_name) {
            var re = /^[A-Za-z]+$/;
            return re.test(first_name)
        },
        validPAN: function (pan_number) {
            var re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
            return re.test(pan_number)
        },
        register() {
            if (!this.first_name && !this.email && !this.password && !this.conform_password && !this.phone_number && !this.pan_number) {
                this.firstNameError = 'Enter valid firstname!'
                this.emailError = 'Enter valid email!'
                this.passwordError = 'Enter strong password, minimum eight characters, at least one letter, one number and one special character!'
                this.confirmPasswordError = 'Your password is not match!'
                this.phoneNumberError = 'Enter valid phone number!'
                this.panError = 'Enter valid PAN number'
                this.error == true
                // return true;
            }
            else if (this.first_name == '' || !this.validName(this.first_name)) {
                // this.first_name == this.error
                this.firstNameError = 'Enter valid firstname!'
                this.error = true
                console.log('firstname')
            }
            else if (this.email == '' || !this.validEmail(this.email)) {
                // this.email_id == this.error
                this.emailError = 'Enter valid email!'
                this.error = true
                console.log('email')
            }
            else if (this.password == '' || !this.validPassword(this.password)) {
                // this.subject == this.error
                this.passwordError = 'Enter strong password, minimum eight characters, at least one letter, one number and one special character!'
                this.error = true
                console.log('password')
            }
            else if (this.conform_password == '' || this.conform_password != this.password) {
                // this.subject == this.error
                this.confirmPasswordError = 'Your password is not match!'
                this.error = true
                console.log('con_pw')
            }
            else if (this.phone_number == '' || !this.validPhone(this.phone_number)) {
                // this.subject == this.error
                this.phoneNumberError = 'Enter valid phone number!'
                this.error = true
                console.log('phone')
            }
            else if (this.pan_number == '' || !this.validPAN(this.pan_number)) {
                // this.subject == this.error
                this.panError = 'Enter valid PAN number'
                this.error = true
                console.log('pan')
            }
            else {
                console.log('done')
                this.$resources.register.submit({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    phone_number: this.phone_number,
                    pan_number: this.pan_number
                })
                this.error == false


            }


            // if (this.first_name == '') {
            //     this.firstNameError = 'Invalid first name!'
            // }

            // if (this.email == '') {
            //     this.emailError = 'Invalid email!'
            // }

            // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            //     this.emailError = ''
            // } else {
            //     this.emailError = 'Invalid email!'
            // }

            // if (this.phone_number == '') {
            //     this.phoneNumberError = 'Invalid password!'
            // }

            // if (this.password == '') {
            //     this.passwordError = 'Invalid password!'
            // }

            // if (this.conform_password == '') {
            //     this.confirmPasswordError = 'Invalid confirm password!'
            // }
            // else if (this.password == this.conform_password) {
            //     this.$resources.register.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email: this.email,
            //         password: this.password,
            //         phone_number: this.phone_number,
            //         pan_number: this.pan_number
            //     })
            // }

            // if (this.password == this.conform_password) {
            //     this.$resources.register.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email: this.email,
            //         password: this.password,
            //         phone_number: this.phone_number,
            //         pan_number: this.pan_number
            //     })
            // }
            // else {
            //     // alert("Your password is not match")
            //     this.$toast({
            //         title: "Error",
            //         text: "Your password is not match",
            //         customIcon: "circle-fail",
            //         appearance: "denger",
            //     })
            //     this.password = ''
            //     this.conform_password = ''
            // }
        }
    }
}
</script>