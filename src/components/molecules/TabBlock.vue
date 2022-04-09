<template>
  <div class="wrap">
    <Tab
      v-for="title in titles"
      :status="title.status"
      :id="title.id"
      :key="title.id"
      :text="title.text"/>
  </div>
</template>

<script>
import Tab from '@/components/atoms/Tab'
export default {
  name: 'TabBlock',
  components: {
    Tab
  },
  data () {
    return {
      titles: this.$store.state.tabs
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  margin: -46px auto 0;
  max-width: 441px;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .wrap {
    box-sizing: border-box;
    padding: 0 9.3%;
    max-width: inherit;
    width: 100%;
  }
}
</style>
