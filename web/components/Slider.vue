<template>
  <div class="slide__container">
    <div v-for="photo in photos" :key="photo.artwork._id" class="block">
      <SanityImage
        :image="photo.artwork.poster"
        :height="700"
        class="image"
      />
      <div class="caption">{{photo.artwork.poster.caption}}</div>
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage,
  },
  props: {
    photos: { type: Array, required: true },
  },
}
</script>

<style lang="postcss" scoped>
.slide__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
}
img {
  width: 100%;
}

.caption {
  font-size: 12px;
  font-weight: 700;
}

.block {
  padding-bottom: 2rem;
}

@media (min-width: 640px) {
  .slide__container {
    /* flex-direction: row; */
    width: unset;
  }
  .block {
    position: relative;
    /* height: 700px; */
  }
  img {
    width: unset;
  }
}
</style>
