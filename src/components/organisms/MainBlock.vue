<template>
  <div class="main">
    <MessageBlock @modal="modal"/>
    <TabBlock/>
    <TextBlock/>
    <div class="box">
      <template v-for="tab in tabs">
        <ImgBlock
          v-if="tab.status"
          :lists="lists[tab.id - 1]"
          :class="[tab.status == true ? 'active' : '']"
          :num="tab.id"
          :key="tab.id"
          @modal="modal"/>
      </template>
    </div>
    <LabelBlock/>
  </div>
</template>

<script>
import MessageBlock from '@/components/molecules/MessageBlock'
import TabBlock from '@/components/molecules/TabBlock'
import TextBlock from '@/components/molecules/TextBlock'
import ImgBlock from '@/components/molecules/ImgBlock'
import LabelBlock from '@/components/molecules/LabelBlock'
export default {
  name: 'MainBlock',
  components: {
    MessageBlock,
    TabBlock,
    TextBlock,
    ImgBlock,
    LabelBlock
  },
  data: function () {
    return {
      lists: this.$store.state.lists,
      tabs: this.$store.state.tabs
    }
  },
  methods: {
    modal (box) {
      this.$emit('modal', box)
    }
  }
}
</script>

<style scoped>
.box {
  box-sizing: border-box;
  margin: 0 auto 40px;
  max-width: 960px;
  position: relative;
  width: 100%;
}
.box:before {
  background: url(/static/img/logo.svg);
  content: "";
  display: block;
  height: 86px;
  position: absolute;
  top: -36px;
  right: -36px;
  width: 89px;
}
main {
  text-align: center;
  margin: 0 auto;
  max-width: 900px;
}
@media screen and (max-width: 768px) {
  .main {
    overflow: hidden;
  }
  .box {
    margin: 0 auto 76px;
    width: 100%;
  }
  .box:before {
    background-size: cover;
    height: 52px;
    top: -29px;
    right: -4px;
    width: 54px;
  }
}
</style>
