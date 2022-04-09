<template>
  <transition mode="out-in">
    <ul>
      <li
        v-for="list in lists"
        :key="list.id">
        <a
          @click="modal(list.src , num)">
          <div class="layer">
            <span
              v-if="list.new"
              class="new">NEW</span>
            <img :src="'/static/img/' + 'tab' + num + '/' + list.src + '.png'">
          </div>
          <!--<p>
            <span>DL数:</span>
            <span class="em">{{ list.count }}</span>
          </p>-->
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'ImgBlock',
  props: {
    lists: {
      type: Array,
      default: null
    },
    num: {
      type: Number,
      default: null
    }
  },
  methods: {
    modal (img, tab) {
      let box = []
      box.push(img)
      box.push(tab)
      this.$emit('modal', box)
    }
  }
}
</script>

<style scoped>
.v-enter-active {
  transition: opacity 500ms ease-out;
}
.v-leave-active {
  transition: opacity 500ms ease-out;
}
.v-enter {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  margin: 0;
  width: 100%;
}
ul.active.v-leave-active {
  position: absolute;
}
ul.active {
  position: static;
}
li {
  font-size: 0;
  list-style-type: none;
  width: 33%;
}
p {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
}
.em {
  font-size: 15px;
}
a {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  padding: 10px;
  position: relative;
  width: 100%;
}
.layer {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 100%;
}
.layer:after {
  background-color: transparent;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  transition: background-color ease .3s;
  width: 100%;
  z-index: 10;
}
.new {
  position: absolute;
  width: 56px;
  height: 22px;
  left: -4px;
  top: -4px;
  background: #E83428;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 11px 0px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 13px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  z-index: 11;
}
a:hover .layer:after {
  background: rgba(0, 0, 0, 0.51);
}
img {
  width: 100%;
}
@media screen and (max-width: 768px) {
  ul {
    display: block;
    margin: 0 30px;
    overflow: visible;
    width: calc(100% - 60px);
  }
  ul:before {
    background-size: cover;
    height: 52px;
    top: 10px;
    right: -4px;
    width: 54px;
  }
  li {
    margin-bottom: 20px;
    width: 100%;
  }
  a {
    padding: 0;
  }
  a:hover .layer:after {
    background: transparent;
  }
}
</style>
