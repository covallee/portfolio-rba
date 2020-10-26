<template>
  <section class="project__container">
    <div class="about__block">
      <h2 class="title">Contact:</h2>
      <BlockContent v-if="mainArtist.contact" :blocks="mainArtist.contact" />
    </div>
  </section>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import groq from "groq";
import sanityClient from "~/sanityClient";

const query = groq`
  *[_type == "siteSettings"][0]{
    mainArtist-> {
      contact
    }
  }
`;
export default {
  components: {
    BlockContent,
  },
  async asyncData() {
    return await sanityClient.fetch(query);
  },
};
</script>

<style scoped>
.project__container {
  padding: 8rem 2rem;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.about__block {
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  line-height: 1.4;

  @nest & p {
    margin: 0.25rem 0 0.5rem;
  }
}

.title {
  display: block;
  font-weight: 700;
  font-size: 45px;
  font-style: normal;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (min-width: 640px) {
  .project__container {
    padding: 50px 1.5rem 2rem 316px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .about__block {
    padding: 16px;
    font-size: 15px;
    line-height: 28px;
    font-weight: 300;
    min-width: 700px;
    padding: 1rem;
    font-family: "Roboto Slab", serif;
  }

  .title {
    font-family: "Arial", Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 800;
    color: #7f1814;
    padding-bottom: 16px;
    text-transform: uppercase;
  }
}
</style>
