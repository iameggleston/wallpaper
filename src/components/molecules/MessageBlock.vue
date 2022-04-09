<template>
  <div class="message">
    <p class="lead">明るくなれるTeams背景</p>
    <p class="text">Teams背景のダウンロードページを開設しました。<br class="sp">自粛生活が長引く中で、ちょこっと明るくなれるような背景を揃えています。</p>
    <Button
      :text="text"
      @modal="modal"/>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button'
export default {
  name: 'MessageBlock',
  components: {
    Button
  },
  data: function () {
    return {
      text: 'Teamsの背景変更方法はこちら'
    }
  },
  methods: {
    modal () {
      this.$emit('modal')
    }
  }
}
</script>

<style scoped>
.message {
  background: #14A83B;
  color: #fff;
  padding: 40px 0 80px;
}
.lead {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
}
.text {
  font-size: 14px;
  line-height: 24px;
  margin: 0 auto 40px;
  max-width: 660px;
}
@media screen and (max-width: 768px) {
  .sp {
    display: none;
  }
  .message {
    padding: 40px 15px 80px;
  }
  .lead {
    font-size: 16px;
    margin-bottom: 35px;
  }
  .text {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 35px;
  }
}
</style>
