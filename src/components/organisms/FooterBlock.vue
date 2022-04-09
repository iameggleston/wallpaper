<template>
  <div class="footer">
    <p>Copyright © 2020 Wallpaper Team <span class="break">All Rights Reserved.</span></p>
  </div>
</template>

<script>
</script>

<style scoped>
.footer {
  align-items: center;
  border-top: 1px solid #E9E9E9;
  box-sizing: border-box;
  color: #929292;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-top: auto;
}
p {
  font-size: 14px;
  line-height: 21px;
}
@media screen and (max-width: 768px) {
  .footer {
    padding: 15px;
  }
  .break {
    display: inline-block;
  }
}
</style>
