<template>
  <div class="carousel__wrapper">
    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
      <div
        class="slide"
        v-for="(photo, index) in photos"
        :key="index"
        :class="`slide--${index}`"
      >
        <SanityImage
          :image="photo.artwork.poster"
          :height="400"
          class="image"
        />
        <div class="caption">{{ photo.artwork.poster.caption }}</div>
      </div>
      <template slot="prevButton"
        ><svg
          fill="none"
          stroke="#0E1A27"
          stroke-width="10"
          stroke-dashoffset="0"
          stroke-dasharray="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polyline fill="none" points="70,10 20,50 70,90 " /></svg
      ></template>
      <template slot="nextButton"
        ><svg
          fill="none"
          stroke="#0E1A27"
          stroke-width="10"
          stroke-dashoffset="0"
          stroke-dasharray="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polyline fill="none" points="30,10 80,50 30,90 " /></svg
      ></template>
    </agile>
    <div class="thumbnails">
      <div
        class="slide slide--thumbnail"
        v-for="(photo, index) in photos"
        :key="index"
        :class="`slide--${index}`"
        @click="$refs.main.goTo(index)"
      >
        <SanityImage
          :image="photo.artwork.poster"
          :height="200"
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Carousel",
  components: {
    agile: VueAgile,
  },
  props: {
    photos: { type: Array, required: true },
  },
  data: function () {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: true,
      },
    };
  },
  created() {},
  mounted() {},
};
</script>

<style lang="postcss">
.carousel__wrapper {
  max-width: 900px;
  position: relative;
}

.agile {
  & .agile__nav-button {
    background: transparent;
    border: none;
    cursor: pointer;
    transition-duration: 0.3s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px;

    & .agile__nav-button--prev {
    }
    &.agile__nav-button--next {
      right: 0;
    }

    & svg {
      width: 44px;
      stroke: rgb(216, 216, 216);
    }

    &:hover svg {
      stroke: #fff;
    }
  }

  &.thumbnails {
    margin: 20px auto;
    width: 800px;

    & .agile__slides {
      flex-grow: 1;
    }
  }
}

.slide {
  align-items: flex-start;
  box-sizing: border-box;
  color: #000;
  display: flex;
  height: 290px;
  justify-content: space-between;
  flex-direction: column;

  & img {
    background-color: #ccc;
    padding: 10px;
    height: 80%;
    object-fit: contain;
    object-position: center;
    width: 100%;
  }

  &.slide--thumbnail {
    cursor: pointer;
    height: 40px;
    transition: opacity 0.3s;
    flex-direction: row;
    opacity: 0.75;
    padding: 0 5px;
    justify-content: center;

    &:hover {
      opacity: 1;
    }

    & img {
      height: 100%;
      background-color: unset;
      padding: unset;
      width: unset;
    }
  }
}

.caption {
  font-size: 13px;
  font-weight: 700;
  padding: 0 16px 8px;
  line-height: 1.2;
}

.thumbnails {
  display: flex;
  padding: 20px 0;
  /* justify-content: center; */
  overflow-x: auto;
}

@media (min-width: 640px) {
  .agile {
    & .agile__nav-button {
      padding: 16px;
    }
  }

  .slide {
    height: 450px;

    & img {
      padding: 10px 2rem;
      height: 90%;
    }
  }

  .caption {
    padding: 0 0 16px 0;
  }
}
</style>
