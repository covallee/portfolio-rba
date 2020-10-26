<template>
  <img :src="imageUrl" :alt="altFromImage" />
</template>

<script>
/* eslint-disable vue/require-default-prop */
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)

export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      default: 'Missing alternative text',
    },
    width: Number,
    height: Number,
    auto: {
      default: 'format',
      type: String,
    },
    fit: {
      default: 'max',
      type: String,
    },
  },
  computed: {
    altFromImage() {
      return this.image.alt
    },
    imageUrl() {
      return builder
        .image(this.image)
        .size(this.width, this.height)
        .auto(this.auto)
        .fit(this.fit)
    },
  },
}
</script>

<style lang="postcss" scoped>
img {
  width: 100%;
}
</style>
