<template>
  <div class="header_wrap">
    <div class="header">
      ヘッダーロゴ
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.header_wrap {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
}
.header {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 49px;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 940px;
}
@media screen and (max-width: 768px) {
  .header {
    height: 50px;
    padding: 0 14px;
  }
}
</style>
