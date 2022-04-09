<template>
  <keep-alive>
    <component :is="current"/>
  </keep-alive>
</template>

<script>
import Text1 from '@/components/atoms/Text1'
import Text2 from '@/components/atoms/Text2'
export default {
  name: 'TextBlock',
  components: {
    Text1,
    Text2
  },
  data: function () {
    return {
      tabs: this.$store.state.tabs
    }
  },
  computed: {
    current: function () {
      let arr = this.tabs
      arr = arr.find(item => item.status === true)
      return 'Text' + arr.id
    }
  }
}
</script>

<style scoped>
</style>
