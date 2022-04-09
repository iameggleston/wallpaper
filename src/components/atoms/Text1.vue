<template>
  <div>
    <p class="text">社外でもご利用いただけるエムティーアイロゴ入り背景です。<br class="sp">取材やクライアントとのミーティングなどでご使用頂けます。</p>
  </div>
</template>

<script>
export default {
  name: 'Text1'
}
</script>

<style scoped>
div {
  margin: 40.5px 0;
}
.text {
  color: #000000;
  font-size: 14px;
  line-height: 24px;
}
@media screen and (max-width: 768px) {
  div {
    padding: 0 30px;
  }
  .text {
    text-align: left;
  }
  .sp {
    display: none;
  }
}
</style>
