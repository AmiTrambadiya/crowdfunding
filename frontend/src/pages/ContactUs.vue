<template>
    <!-- <div class="bg-green-100 bg-auto w-full h-full bg-local bg-center bg-cover">
        <Navbar />
        <div class=" text-center  sm:p-8 md:p-16 lg:p-32">
            <p class="text-green-600 uppercase text-xs">
                contact
            </p>
            <p class="text-green-600 text-3xl drop-shadow-lg shadow-black-600/50 pb-4">
                Get In Touch
            </p>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit
                    praesentium porro consectetur optio!
                </p>
                <p>

                </p>
            </div>
        </div>
    </div> -->

    <div class="bg-[#ebf8ec] bg-auto w-full h-full bg-local bg-center bg-cover">
        <Navbar />
        <div class="grid justify-items-center">
            <div class="px-4 pb-28 md:pb-32 lg:pb-48 pt-8 md:pt-32 lg:pt-32">
                <p class="text-[#40b751] tracking-widest text-center uppercase font-bold text-xs">
                    contact
                </p>
                <h1 style="text-shadow:3px 6px 6px #c9c9c9;"
                    class="text-[#40b751] font-sans text-center font-semibold pb-1 text-[28px] md:text-[32px] lg:text-[43px] [text-shadow:3px 6px 6px #c9c9c9]">
                    Get In Touch
                </h1>
                <p class="text-gray-600 text-center leading-7 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit
                    praesentium porro consectetur optio!
                </p>
            </div>
        </div>
    </div>

    <!-- Container for demo purpose -->
    <div class="container my-24 px-6 mx-auto">

        <!-- Section: Design Block -->
        <section class="mb-32 text-gray-800">
            <div class="flex flex-wrap">


                <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                    <!-- <p v-if="error.length">
                        <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in error">{{ error }}</li>
                    </ul>
                    </p> -->

                    <div class="grid grid-cols-2">


                        <div class="form-group pr-3 mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="username">
                                First name <span class="text-red-600">*</span>
                            </label>
                            <input v-model="first_name" type="text"
                                class="form-control block hover:border-[#40b751] w-full px-3  py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none">
                            <p class="text-red-600">{{ firstNameError }}</p>
                            <!-- <p>{{ error }}</p> -->
                        </div>

                        <div class="form-group pl-4 mb-6">
                            <label class="block text-gray-700 text-sm mb-2" for="username">
                                Last name
                            </label>
                            <input v-model="last_name" type="text"
                                class="form-control block hover:border-[#40b751] w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none">

                        </div>
                    </div>
                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="username">
                            Email <span class="text-red-600">*</span>
                        </label>
                        <input v-model="email_id" type="email"
                            class="form-control block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <!-- <span v-if="msg.email_id" className="text-danger mrgnbtn">{{ msg.email_id }}</span> -->
                        <p class="text-red-600">{{ emailError }}</p>
                        <!-- <p>{{ error }}</p> -->
                    </div>

                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="username">
                            Subject <span class="text-red-600">*</span>
                        </label>
                        <input v-model="subject" type="text"
                            class="form-control block hover:border-[#40b751] w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none">
                        <p class="text-red-600">{{ subjectError }}</p>
                        <!-- <p>{{ error }}</p> -->
                    </div>

                    <div class="form-group mb-6">
                        <label class="block text-gray-700 text-sm mb-2" for="username">
                            Message
                        </label>
                        <textarea v-model="message"
                            class="hover:border-[#40b751] form-control block w-full px-3 py-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                            rows="3"></textarea>
                    </div>

                    <button type="submit"
                        class=" px-6 py-2.5 bg-[#40b751] text-white text-xs leading-tight  uppercase rounded shadow-md hover:bg-transparent  hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition  duration-150 ease-in-out"
                        @click="contact_us()">submit
                    </button>

                </div>



                <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 pl-0 md:pl-16 lg:pl-32">
                    <p class="text-base font-bold mb-6">Quick info</p>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left  grid justify-items-center ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/location.png" />
                        </div>
                        <p class="text-black-500 mb-2 pt-2 pl-14">Fake street, 3929, London</p>
                    </div>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left bg-center  grid justify-items-center  ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/phonecall.png" />
                        </div>
                        <a href="#">
                            <p class="cursor-pointer text-[#40b751] mb-2 pt-2 pl-14">+ 1 291 2909 392</p>
                        </a>
                    </div>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left grid justify-items-center  ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/email1.png" />
                        </div>
                        <a href="#">
                            <p class="cursor-pointer text-[#40b751] mb-2 pt-2 pl-14">info@mydomain.com</p>
                        </a>
                    </div>
                    <div class="pb-4">
                        <div class="bg-zinc-100 rounded-full w-10 h-10 float-left  grid justify-items-center  ">
                            <img class="p-1 mt-2 h-6" src="../../src/assets/Inter/img/icon/worldwide.png" />
                        </div>
                        <a href="#">
                            <p class="cursor-pointer text-[#40b751] mb-2 pt-2 pl-14">https://mywebsite.com</p>
                        </a>
                    </div>
                </div>

            </div>
        </section>
        <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->
    <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Contact Us",
    components: { Navbar, Footer },
    data() {
        return {
            first_name: '',
            firstNameError: '',
            last_name: '',
            email_id: '',
            emailError: '',
            subject: '',
            subjectError: '',
            message: '',
            // errorMessage: '',
            error: '',
            // errors: false,
        }
    },
    // watch: {
    //     email_id(value) {
    //         this.email_id = value;
    //         this.validateEmail(value);
    //     }
    // },
    resources: {
        contact_us() {
            return {
                method: 'sadbhavna_donatekart.api.contactus.contact_us',
                onSuccess: (res) => {
                    // this.recent_donation = res
                    if (confirm("Your message is successfully sent to sadbhavna donatekart") == true) {
                        this.$router.push(`/sadbhavna`)
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
                // onSuccess: (res) => {
                //     this.$toast({
                //         title: "Success",
                //         text: "Your message is successfully sent to sadbhavna donatekart",
                //         customIcon: "check",
                //     })

                // },
                // onError: (error) => {
                //     console.log(error)
                //     this.$toast({
                //         title: "Error",
                //         text: error,
                //         customIcon: "circle-fail",
                //         appearance: "denger",
                //     })
                // }
            }
        }
    },
    methods: {
        // checkForm: function (e) {
        //     if (this.first_name && this.email_id) {
        //         return true;
        //     }

        //     this.error = [];
        //     if (!this.first_name) {
        //         this.error.push('First name required.');
        //     }
        //     if (!this.email_id) {
        //         this.error.push('Email required.');
        //     }

        //     e.preventDefault();
        // },



        validEmail: function (email_id) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email_id);
        },

        validName: function (first_name) {
            var re = /^[A-Za-z]+$/;
            return re.test(first_name)
        },
        contact_us() {
            // if (this.first_name && this.email_id && this.subject) {
            //     this.error == false
            //     return true;
            // }

            // this.error = [];
            // if (!this.first_name) {
            //     this.error.push('First name required.');
            //     this.error == true
            // }
            // if (!this.email_id) {
            //     this.error.push('Email required.');
            //     this.error == true
            // }
            // if (!this.subject) {
            //     this.error.push('Subject required');
            //     this.error == true
            // }
            // if (this.error == false) {
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            // }



            // e.preventDefault();
            // if (this.first_name == '') {
            //     this.firstNameError = 'Invalid first name!'
            // }
            // if (this.email_id == '' || this.email_id == '') {
            //     this.emailError = 'Invalid email!'
            // }
            // if (this.subject == '') {
            //     this.subjectError = 'Invalid subject!'
            // }
            // else {
            //     alert("Message sent successfully")
            // }
            // /^[A-Za-z]+$/



            // if (!/^[a-zA-Z]*$/.test(first_name)) {
            //     this.firstNameError = ''
            // } else {
            //     this.firstNameError = 'Invalid first name!'
            // }

            // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id)) {
            //     this.emailError = ''
            // } else {
            //     this.emailError = 'Invalid email!'
            // }



            // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id)) {
            //     this.emailError = ''
            // } else {
            //     this.emailError = 'invalid'
            //     this.error = true
            //     console.log('email')
            // }

            // if (!this.email) {
            //     this.errors.push('Email required.');
            // } else if (!this.validEmail(this.email)) {
            //     this.errors.push('Valid email required.');
            // }
            if (!this.first_name && !this.email_id && !this.subject) {
                this.firstNameError = 'Enter valid firstname!'
                this.emailError = 'Enter valid email!'
                this.subjectError = 'Enter valid subject!'
                this.error == true
                // return true;
            }

            else if (this.first_name == '' || !this.validName(this.first_name)) {
                // this.first_name == this.error
                this.firstNameError = 'Enter valid firstname!'
                this.error = true
                console.log('firstname')
            }
            else if (this.email_id == '' || !this.validEmail(this.email_id)) {
                // this.email_id == this.error
                this.emailError = 'Enter valid email!'
                this.error = true
                console.log('email')
            }
            else if (this.subject == '') {
                // this.subject == this.error
                this.subjectError = 'Enter valid subject!'
                this.error = true
                console.log('subject')
            }
            // else if (this.error == true) {
            //     console.log('error')
            // }
            else {
                console.log('done')
                this.$resources.contact_us.submit({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email_id: this.email_id,
                    subject: this.subject,
                    message: this.message,
                })
                this.error == false
            }



            // if (this.first_name == this.error) {
            //     this.first_name == ''
            //     this.firstNameError = 'invalid'
            //     console.log('fnm')
            // }
            // if (this.email_id == this.error) {
            //     this.email_id == ''
            //     this.emailError = 'invalid'
            //     console.log('e-mail')
            // }
            // if (this.subject == this.error) {
            //     this.subject == ''
            //     this.subjectError = 'invalid'
            //     console.log('sub')
            // }
            // else {
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            //     this.error = false
            //     console.log('done')
            // }


            // else {
            //     this.$resources.contact_us.submit({
            //         first_name: this.first_name,
            //         last_name: this.last_name,
            //         email_id: this.email_id,
            //         subject: this.subject,
            //         message: this.message,
            //     })
            // }
            // this.submitForm()


        }

    }
}
</script>