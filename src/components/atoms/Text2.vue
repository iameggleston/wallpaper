<template>
  <div>
    <p class="text">社内間でのミーティングや、オンライン飲み会などの<br class="sp">コミュニケーションでご利用いただける背景です。</p>
    <p class="attention">※社内利用限定の背景なので、社外では利用しないようお願いいたします。</p>
  </div>
</template>

<script>
export default {
  name: 'Text2'
}
</script>

<style scoped>
div {
  margin: 25px 0;
}
.text {
  color: #000000;
  font-size: 14px;
  line-height: 24px;
}
.attention {
  color: #000000;
  font-size: 11px;
  line-height: 24px;
  margin-top: 7px;
}
@media screen and (max-width: 768px) {
  div {
    padding: 0 30px;
  }
  .attention {
    line-height: 20px;
    text-align: left;
    margin-top: 5px;
  }
  .text {
    text-align: left;
  }
  .sp {
    display: none;
  }
}
</style>
