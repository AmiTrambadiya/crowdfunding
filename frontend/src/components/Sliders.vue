<template>
  <div class="slider">
    <!-- <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <img :src="image" alt="slider image">
        </div>
      </div> -->

    <div class="slides" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
      <div v-for="(data, index) in featured_campaigns" :key="index" class="slide">
        <div class="grid  p-[30px] sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div class="md:col-span-2 lg:col-span-1">
            <img class="pl-3 pt-3 md:h-80 lg:h-56 h-80 sm:w-full md:w-96 lg:w-96" :src="data.campain_image" alt="Mountain"
              @click="donate(data.name)">
          </div>
          <div class="md:col-span-2 lg:col-span-3 pr-0 lg:pr-16">
            <button
              class="bg-[#364958] text-base rounded-lg pl-4 pr-4 pt-2 pb-2 text-white mb-2 md:mt-3">Featured</button>
            <h5 class="text-[#364958] text-2xl font-bold mb-2">{{ data.campaign_title }}</h5>
            <p class="text-[#364958] mb-[16px] font-normal">
              {{ data.short_description }}
            </p>
            <button class="text-[#40b751] font-bold" type="button" @click="donate(data.name)">Donate Now</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AutoSlider',
  props: {
    featured_campaigns: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  setup(props) {
    const currentSlide = ref(0);
    const slideWidth = ref(0);
    let timerId = null;

    const updateSlideWidth = () => {
      slideWidth.value = document.querySelector('.slider').offsetWidth;
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % props.featured_campaigns.length;
    };

    const startAutoPlay = () => {
      timerId = setInterval(nextSlide, props.interval);
    };

    const stopAutoPlay = () => {
      clearInterval(timerId);
    };

    onMounted(() => {
      updateSlideWidth();
      startAutoPlay();
    });

    onUnmounted(() => {
      stopAutoPlay();
    });

    return {
      currentSlide,
      slideWidth,
      updateSlideWidth
    };
  },
  methods: {
    donate(name) {
      this.$router.push(`/sadbhavna/campaign-donation/${name}`)
    }
  }
};
</script>
  
<style>
.slider {
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.3s ease-out;
}

.slide {
  flex: 0 0 100%;
}
</style>