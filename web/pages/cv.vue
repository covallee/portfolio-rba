<template>
  <section class="project__container">
    <div class="slide__container">
      <div class="about__block">
        <h3 class="title">Selected Solo Exhibitons</h3>
        <BlockContent
          v-if="mainArtist.soloExhibitions"
          :blocks="mainArtist.soloExhibitions"
        />
      </div>
      <div class="about__block">
        <h3 class="title">Selected Group Exhibitons</h3>
        <BlockContent
          v-if="mainArtist.groupExhibitions"
          :blocks="mainArtist.groupExhibitions"
        />
      </div>
      <div class="about__block">
        <h3 class="title">Awards & Prizes</h3>
        <BlockContent
          v-if="mainArtist.awards"
          :blocks="mainArtist.awards"
        />
      </div>
      <div class="about__block">
        <h3 class="title">Selected Collections</h3>
        <BlockContent
          v-if="mainArtist.collections"
          :blocks="mainArtist.collections"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_type == "siteSettings"][0]{
    mainArtist-> {
      bio,
      soloExhibitions,
      groupExhibitions,
      awards,
      collections
    }
  }
`
export default {
  components: {
    BlockContent,
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
}
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
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  line-height: 1.4;
  padding-bottom: 29px;

  @nest & p {
    margin: 0.25rem 0 0.5rem;
  }
}

.slide__container {
  display: flex;
  flex-direction: column;
}

.title {
  font-family: "Arial", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: #7f1814;
  padding-bottom: 16px;
  text-transform: uppercase;
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
    padding: 66px 1.5rem 2rem 316px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .about__block {
    font-size: 15px;
    line-height: 28px;
    font-weight: 300;
    min-width: 700px;
    padding-bottom: 29px;
    font-family: 'Roboto Slab', serif;
  }
}
</style>
