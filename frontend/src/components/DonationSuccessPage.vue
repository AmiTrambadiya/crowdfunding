<template>
  <Navbar />
  <section>
    <div class="container mx-auto h-full">
      <div class="">
        <div class="px-6 mb-40 mt-40">

          <div class="text-center mt-12">
            <div class="grid place-content-center"><img class="h-16 w-16" src="../../src/assets/Inter/img/check.png" />
            </div>
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Thanks for your Support
            </h3>
            <p class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Your donation of <span class="text-green-500">{{ total_donation }}</span> has been processed
            </p>

            <p class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              100% of your money will fund for people in need and also make a real difference to people's lives.
            </p>

            <router-link to="/sadbhavna" class="text-green-500">Explore More Campaign</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Donation Success Page',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      total_donation: 100,
    }
  },
  mounted() {
    const name = useRoute();
    this.total_donation = name.params.donation
    console.log("route", name)
  }
}

</script>