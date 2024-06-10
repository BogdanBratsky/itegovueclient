<template>
  <button
    title="Наверх"
    v-if="isVisible"
    @click="scrollToTop"
    class="scroll-to-top-button"
  >
    <img src="../assets/images/interface/up.svg" alt="">
  </button>
</template>

<script>
export default {
  name: 'ScrollToTopBtn',
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 1000;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.scroll-to-top-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: $buttonColor;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #b4b4b4;
  transition: opacity 0.3s ease;
  &:hover {
    background-color: $btnHoverCol;
    transition: 0.2s;
  }
  img {
    max-width: 20px;
  }
}

</style>
