<template>
  <button
    :class="{ active : status }"
    @click="change(id)">&nbsp;</button>
</template>

<script>
export default {
  name: 'Label',
  props: {
    status: {
      type: Boolean,
      default: null
    },
    id: {
      type: Number,
      default: null
    }
  },
  methods: {
    change (id) {
      this.$store.dispatch('change', id)
    }
  }
}
</script>

<style scoped>
button {
  background: #F1F1F1;
  border: 0;
  border-radius: 100%;
  height: 16px;
  padding: 0;
  transition: all 300ms ease-out;
  margin: 0 6px;
  width: 16px;
}
.active {
  background: #C4C4C4;
}
</style>
