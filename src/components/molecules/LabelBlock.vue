<template>
  <div class="wrap">
    <Label
      v-for="title in titles"
      :status="title.status"
      :id="title.id"
      :key="title.id"/>
  </div>
</template>

<script>
import Label from '@/components/atoms/Label'
export default {
  name: 'LabelBlock',
  components: {
    Label
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
  margin: 0 auto 40px;
  max-width: 84px;
}
</style>
