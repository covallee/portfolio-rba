<template>
  <div class="burger__container" :class="{ 'menu-opened': isOpen }">
    <div id="burger">
      <div class="bar bar--top"></div>
      <div class="bar bar--btm"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.burger__container {
  position: relative;
  display: inline-block;
  height: 50px;
  width: 50px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

#burger {
  width: 20px;
  height: 8px;
  position: relative;
  display: block;
  margin: -4px auto 0;
  top: 50%;
}

.bar {
  width: 100%;
  height: 2px;
  display: block;
  position: relative;
  background: #6a6052;
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0s;
  &.bar--top {
    transform: translateY(0px) rotate(0deg);
  }
  &.bar--btm {
    transform: translateY(6px) rotate(0deg);
  }
}

.burger__container.menu-opened {
  transform: rotate(90deg);
  & #burger {
    & .bar {
      transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      transition-delay: 0.2s;
      &.bar--top {
        transform: translateY(5px) rotate(45deg);
      }
      &.bar--btm {
        transform: translateY(3px) rotate(-45deg);
      }
    }
  }
}
</style>
