<template>
  <div class="button">
    <a
      v-if="black"
      :href="'/static/img/' + tab + '/' + href + '.png'"
      class="link"
      download
      @click="analytics">
      {{ text }}
    </a>
    <a
      v-else
      class="link"
      @click="modal">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: ''
    },
    tab: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    black: {
      type: String,
      default: null
    }
  },
  methods: {
    modal () {
      this.$emit('modal')
    },
    analytics () {
      this.$ga.event('send', 'downloaded', this.href)
    }
  }
}
</script>

<style scoped>
.link {
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid #FFFFFF;
  border-radius: 32px;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  display: flex;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  margin: 0 auto;
  max-width: 300px;
}
.black .link {
  background-color: #fff;
  border: 2px solid #333333;
  color: #000000;
  margin: 32px auto 20px;
}
@media screen and (max-width: 768px) {
  .link {
    width: 80%;
  }
  .black .link {
    margin: 40px auto 20px;
  }
}
</style>
