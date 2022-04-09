<template>
  <button
    :class="{ active : status }"
    @click="change(id)">{{ text }}</button>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    text: {
      type: String,
      default: null
    },
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
  background: linear-gradient(180deg, #EDEDED 79.17%, #D9D9D9 100%);
  border: 0;
  border-radius: 5px 5px 0px 0px;
  color: #333333;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  margin: 6px 1.5px 0;
  max-width: 218px;
  width: 100%;
}
.active {
  background: #FFFFFF;
  color: #000000;
  height: 46px;
  font-weight: bold;
  font-size: 14px;
  line-height: 46px;
  margin-top: 0;
}
@media screen and (max-width: 768px) {
  button {
     margin: 6px 5px 0 0;
  }
  button:nth-child(2) {
    margin-right: 0;
  }
  .active {
    margin-top: 0;
  }
}
</style>
