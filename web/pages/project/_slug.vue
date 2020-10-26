<template>
  <section class="project__container">
    <Carousel v-if="artworks.length > 1" :photos="artworks" />
    <SanityImage
      v-else
      :image="artworks[0].artwork.poster"
      :height="600"
      class="image"
    />
    <div class="project__desc">
      <h2 class="title">{{ title }}</h2>
      <BlockContent v-if="overview" :blocks="overview" />
    </div>
  </section>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import groq from "groq";
import sanityClient from "~/sanityClient";

const query = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ...,
    "id": _id,
    artworks[]{
      artwork-> {
        ...,
        poster-> {
          ...,
          asset->
        }
      }
    }
  }
`;

export default {
  components: {
    BlockContent,
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params);
  },
  computed: {},
  mounted() {},
  head() {
    return {
      title: `Project | `,
      meta: [
        {
          hid: "description",
          name: "description",
          // content: this.plainTextBio
        },
      ],
    };
  },
};
</script>

<style scoped>
/* @import '../../styles/custom-media.css';
@import '../../styles/custom-properties.css'; */

.project__container {
  padding: 8rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.project__desc {
  font-family: "Roboto Slab", serif;
  font-size: 15px;
  line-height: 28px;
  font-weight: 300;
  letter-spacing: 0.02em;
  padding: 0 2rem;
}

.title {
  font-family: "Arial", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: #7f1814;
  padding-bottom: 16px;
  text-transform: uppercase;
}

.bio {
  @nest & p {
    margin: 0.25rem 0 0.5rem;
  }
}

.image {
  margin-bottom: 16px;
}

@media (min-width: 640px) {
  .project__container {
    padding: calc((100vh - 700px) / 2) 0 calc((100vh - 700px) / 2) 316px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .project__desc {
    min-width: 525px;
    padding: 0;
  }
}
</style>
