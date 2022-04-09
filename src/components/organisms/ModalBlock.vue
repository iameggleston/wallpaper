<template>
  <div>
    <transition>
      <div
        v-if="active"
        class="overlay"
        @click="hide">&nbsp;</div>
    </transition>
    <transition>
      <ModalSetup
        v-if="modal_active"
        @hide="hide"/>
    </transition>
    <transition>
      <ModalImg
        v-if="img_active"
        :href="href"
        :src="src"
        :tab="tab"
        @hide="hide"/>
    </transition>
  </div>
</template>

<script>
import ModalSetup from '@/components/molecules/ModalSetup'
import ModalImg from '@/components/molecules/ModalImg'
export default {
  name: 'ModalBlock',
  components: {
    ModalSetup,
    ModalImg
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    img_active: {
      type: Boolean,
      default: false
    },
    modal_active: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    tab: {
      type: String,
      default: ''
    }
  },
  methods: {
    hide () {
      this.$emit('hide')
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms ease-out;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
main {
  text-align: center;
  margin: 0 auto;
  max-width: 900px;
}
.modal {
  text-align: left;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
</style>
