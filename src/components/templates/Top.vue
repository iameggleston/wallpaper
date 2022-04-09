<template>
  <div class="wrap">
    <HeaderBlock/>
    <MainBlock @modal="modal"/>
    <ModalBlock
      :src="img"
      :tab="tab"
      :href="img"
      :active="flug"
      :img_active="flug_1"
      :modal_active="flug_2"
      @hide="hide"/>
    <FooterBlock/>
  </div>
</template>

<script>
import HeaderBlock from '@/components/organisms/HeaderBlock'
import MainBlock from '@/components/organisms/MainBlock'
import ModalBlock from '@/components/organisms/ModalBlock'
import FooterBlock from '@/components/organisms/FooterBlock'

export default {
  name: 'Top',
  components: {
    HeaderBlock,
    MainBlock,
    ModalBlock,
    FooterBlock
  },
  data: function () {
    return {
      img: null,
      tab: null,
      flug: false,
      flug_1: false,
      flug_2: false
    }
  },
  methods: {
    modal (box) {
      document.body.classList.toggle('fixed')
      this.flug = true
      if (box) {
        this.img = box[0]
        this.tab = 'tab' + box[1]
        this.flug_1 = true
      } else {
        this.flug_2 = true
      }
    },
    hide () {
      document.body.classList.toggle('fixed')
      this.flug = false
      this.flug_1 = false
      this.flug_2 = false
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
</style>

<style>
.fixed {
  overflow: hidden;
}
</style>
