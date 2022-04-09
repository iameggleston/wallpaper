<template>
  <div
    class="position">
    <div
      class="cross"
      @click="hide">
      <button>&#215;</button>
    </div>
    <div
      id="modal_2"
      ref="modal"
      class="modal">
      <img :src="'/static/img/' + tab + '/' + src + '.png'">
      <Button
        :tab="tab"
        :text="text"
        :href="href"
        :black="black"
        class="black"/>
      <div class="wrap">
        <p class="lead">・ご利用に当たって</p>
        <p>1.権利者の許可なく複製、転用、販売などの二次利用することはおやめください。</p>
        <p>2.ダウンロードした画像を素材として再配布したり、加工・改造して再配布することはおやめください。</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button'
export default {
  name: 'ModalImg',
  components: {
    Button
  },
  props: {
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
  data: function () {
    return {
      text: '背景をダウンロード',
      black: 'true'
    }
  },
  mounted () {
    let wWidth = window.innerWidth
    let pcAdjust = null
    let modal2 = document.getElementById('modal_2')
    let pcMyHeight = modal2.clientHeight
    if (wWidth > 768) {
      window.addEventListener('resize', function () {
        let wHeight = window.innerHeight
        if (document.querySelector('#modal_2')) {
          if (wHeight < pcMyHeight) {
            pcAdjust = wHeight
            modal2.style.height = pcAdjust + 'px'
            modal2.style.overflow = 'scroll'
            return
          }
          modal2.removeAttribute('style')
        }
      })
    } else {
      let wHeight = window.innerHeight
      let myHeight = this.$refs.modal.clientHeight + 95
      if (wHeight < myHeight) {
        this.adjust = wHeight - 95
        this.$refs.modal.style.height = this.adjust + 'px'
        return
      }
      this.$refs.modal.style.height = this.adjust
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
button {
  background: url(/static/img/cross.svg);
  background-size: cover;
  border: 0;
  cursor: pointer;
  font-size: 0;
  height: 17px;
  width: 17px;
}
.cross {
  cursor: pointer;
  font-size: 0;
  padding: 15px;
  position: absolute;
  top: 9px;
  right: 9px;
}
.position {
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.2);
  flex-flow: column nowrap;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 940px;
  width: 100%;
  z-index: 100;
}
.modal {
  box-sizing: border-box;
  padding: 60px 50px 50px;
}
img {
  box-shadow: 0 0 6px rgba(0,0,0,.15);
  width: 100%;
}
.wrap {
  margin: 0 auto;
  max-width: 565px;
}
.lead {
  font-weight: bold;
  text-align: left;
}
p {
  color: #808080;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .cross {
    top: 7px;
    right: 7px;
  }
  .position {
    border-radius: 6px;
    left: 10px;
    top: 95px;
    transform: translate(0, 0);
    width: calc(100% - 20px);
  }
  .modal {
    overflow-y: scroll;
    padding: 55px 15px 40px;
  }
}
</style>
