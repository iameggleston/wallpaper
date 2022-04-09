<template>
  <div
    class="position">
    <div class="heading">
      <div
        class="cross"
        @click="hide">
        <button>&#215;</button>
      </div>
      <h2>＜オリジナル背景画像の設定方法＞</h2>
    </div>
    <div
      id="modal_1"
      ref="modal"
      class="modal">
      <p class="lead">※背景画像格納のフォルダは、Windows、Macともに非表示フォルダになっています。
      <br>以下の手順をお読みになり、格納を行ってください。</p>
      <h3>Windows</h3>
      <p>1.画面左下のWindowsボタンを右クリックし、「エクスプローラー」をクリックします。</p>
      <p>2.左側の一覧から「PC」を選択し、右側に表示されたデバイスとドライブから「ローカルディスク（C:）」をクリックします。</p>
      <p>3.上部のタブから「表示」をクリックし、「隠しファイル」にチェックを入れます。</p>
      <p>4.表示されるフォルダ一覧から、ユーザーネーム（ログイン時のアカウント名）をクリックします。
      <br>&nbsp;※1台のPCで複数アカウントを設定している場合は「ユーザー」中から該当のユーザーネームを選択します。</p>
      <p>5.ユーザーネームフォルダ以下、AppData>Roaming>Microsoft>Teams>Background>Uploadsを選択し、背景画像に設定したい画像ファイルを格納します。</p>
      <p>6.Teams会議の背景画像設定メニューで、画像を選択できるようになります。</p>
      <p class="attention">参考「Microsoft Teamsの会議背景をオリジナル画像に変わる」
        <a
          href="https://www.kan.co.jp/publics/index/150/detail=1/b_id=808/r_id=345/"
          target="_blank">https://www.kan.co.jp/publics/index/150/detail=1/b_id=808/r_id=345/</a></p>
      <h3>Mac</h3>
      <p>1.Finder で、画面上部にあるメニューバーの「移動」をクリックし、下に表示される一覧で「フォルダへ移動」をクリックします。</p>
      <p>2.「フォルダの場所を入力」テキストボックスに ~/Library と入力し、「移動」ボタンをクリックします。</p>
      <p>3.Option キーを押しながらもう一度メニューバーの「移動」をクリックします。すると「移動」のメニュー内にライブラリフォルダーが表示されます。</p>
      <p>4.ライブラリフォルダ以下、Application Support>Microsoft>Teams>Backgrounds>Uploadsを選択し、背景画像に設定したい画像ファイルを格納します。</p>
      <p>5.Teams会議の背景画像設定メニューで、画像を選択できるようになります。</p>
      <p class="attention">参考「非表示のユーザーライブラリフォルダーにアクセスする方法（Mac OS X 10.7 以降）」
        <a
          href="https://helpx.adobe.com/jp/x-productkb/global/cpsid_91195.html"
          target="_blank">https://helpx.adobe.com/jp/x-productkb/global/cpsid_91195.html</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSetup',
  data () {
    return {
      adjust: ''
    }
  },
  mounted () {
    let wWidth = window.innerWidth
    let pcAdjust = null
    let modal1 = document.getElementById('modal_1')
    let pcMyHeight = modal1.clientHeight
    if (wWidth > 768) {
      window.addEventListener('resize', function () {
        let wHeight = window.innerHeight
        if (document.querySelector('#modal_1')) {
          if (wHeight < pcMyHeight) {
            pcAdjust = wHeight
            modal1.style.height = pcAdjust + 'px'
            modal1.style.overflow = 'scroll'
            return
          }
          modal1.removeAttribute('style')
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
.heading {
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 64px;
  line-height: 64px;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  position: fixed;
  max-width: 940px;
  width: 100%;
}
.cross {
  cursor: pointer;
  font-size: 0;
  line-height: normal;
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
  padding: 84px 50px 50px;
}
h2, .lead {
  text-align: center;
}
h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
.lead {
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 -14px;
}
h3 {
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  margin: 50px 0 0;
}
p {
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  margin-top: 3px;
  word-break: break-all;
}
.attention {
  margin-top: 25px;
}
p a {
  color: #14A83B;
  display: block;
  text-decoration: underline;
  word-break: break-all;
}
@media screen and (max-width: 768px) {
  .heading {
    border-radius: 6px 6px 0 0;
    height: 47px;
    left: 0;
    line-height: 47px;
    transform: translate(0, 0);
  }
  .cross {
    top: 0px;
    right: 0px;
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
    padding: 65px 15px 40px;
  }
  h2 {
    font-size: 16px;
  }
  .lead {
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    margin: 0;
  }
  h3 {
    font-size: 12px;
    line-height: 20px;
    margin: 30px 0 0;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    margin-top: 2px;
  }
  .attention {
    margin-top: 15px;
  }
}
</style>
