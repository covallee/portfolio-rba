<template>
  <div class="nav__wrapper">
    <div class="nav__top">
      <h1>
        <nuxt-link to="/" class="logo">Richard Bell</nuxt-link>
      </h1>
      <button
        class="nav__burger"
        aria-label="open menu"
        @click="isBurger = !isBurger"
      >
        <Burger :is-open="isBurger" />
      </button>
    </div>
    <nav>
      <ul class="nav__inner" :class="{ visible: isBurger }">
        <li>
          <button class="nav__item" @click="isVisible = !isVisible">
            Selected Works
          </button>
          <ul class="nav__dropdown" :class="{ visible: isVisible }">
            <li v-for="project in projects" :key="project._id">
              <nuxt-link
                :to="'/project/' + project.link"
                class="nav__item nav__item--small"
                @click.native="handler"
                >{{ project.title }}</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/about" class="nav__item" @click.native="handler"
            >about</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/cv" class="nav__item" @click.native="handler"
            >cv</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/contact" class="nav__item" @click.native="handler"
            >contact</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Burger from './Burger'

export default {
  components: {
    Burger,
  },
  data() {
    return {
      isVisible: false,
      isBurger: false,
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
  },
  methods: {
    handler() {
      this.isBurger = !this.isBurger
    },
  },
}
</script>

<style>
.nav__wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 16px;
  width: 100%;
  z-index: 5;
  background-color: #fff;
}

.nav__top {
  display: flex;
  justify-content: space-between;
}

.logo {
  font-family: "Arial", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 33px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  line-height: 1.2;
  letter-spacing: 3.1px;
  width: 240px;
  display: block;
  text-shadow: -4px 1px 0px #dd3333;
  /* text-align: center; */
}

.nav__burger {
  display: block;
}

.nav__inner {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
}

.nav__inner.visible {
  display: flex;
}

.nav__dropdown {
  display: none;
  width: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 640px) {
  .nav__wrapper {
    top: 50px;
    left: 16px;
    width: unset;
  }

  .logo {
    font-size: 43px;
    padding-bottom: 30px;
  }
  .nav__burger {
    display: none;
  }

  .nav__inner {
    text-align: right;
    display: flex;
    align-items: flex-end;
  }

  .nav__dropdown {
    align-items: flex-end;
  }
}

.visible {
  display: flex;
}

.nav__item {
  display: inline-block;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-family: "Arial", Arial, "Helvetica Neue", Helvetica, sans-serif;
  letter-spacing: 2px;
  padding: 10px 0;
  font-weight: 800;
  font-size: 17px;
}

.nav__item--small {
  font-size: 13px;
}

.nav__item:hover,
.nav__item:focus {
  color: #7f1814;
}

ul {
  list-style-type: none;
}

.nav__copy {
  margin: 10px 0;
  font-size: 12px;
}
</style>
