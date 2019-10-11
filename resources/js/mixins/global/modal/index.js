/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/**
 * モーダル処理を行うミックスイン
 */
import Vue from 'vue'

export default {
  methods: {
    /**
     * 確認モーダル
     * @param {Object} props モーダルに表示させるデータ
     */
    showConfirmModal(props) {
      const actualProps = {
        type: 'ConfirmModal',
        title: props.title,
        content: props.content,
        buttons: props.buttons,
      }
      return this.showModal(actualProps)
    },
    /**
     * ユーザ情報
     * @param {Array} response モーダルに表示させるデータ
     */
    showUserDatasModal(response) {
      const actualProps = {
        type: 'UserDatasModal',
        record: response,
        buttons: [
          { label: '閉じる', classes: 'btn btn-light' },
        ],
      }
      return this.showModal(actualProps)
    },
    /**
     * モーダル表示
     * @param {Object} props モーダルに表示させるデータ
     */
    showModal(props) {
      // 多重実行を防ぐため, フォーカスされている要素からフォーカスを外す
      return new Promise((resolve) => {
        props.type = props.type || 'ConfirmModal'
        const Dialog = Vue.component('modal-dialog', require(`./${props.type}.vue`).default)
        let dialog = new Dialog()
        const defaultButtons = this.getDefaultButtons()
        // ボタン設定を整理 (ボタンが定義されていなければ既定のボタン (OK & キャンセル) にする)
        props.buttons = (props.buttons || defaultButtons || props.cancelButton).map((b, index) => {
          // n: デフォルトボタンの要素数でシーリングした要素番号
          const n = (index < defaultButtons.length) ? index : defaultButtons.length - 1
          // 要素が文字列ならラベルだけ設定
          if (typeof b === 'string') b = { label: b }
          // 要素がオブジェクトの場合、存在するプロパティのみ上書き
          const label = Object.hasOwnProperty.call(b, 'label') ? b.label : defaultButtons[n].label
          const classes = Object.hasOwnProperty.call(b, 'classes') ? b.classes : defaultButtons[n].classes
          const resultSelector = Object.hasOwnProperty.call(b, 'resultSelector') ? b.resultSelector : defaultButtons[n].resultSelector
          return {
            label,
            classes,
            // 関数の呼び出し後にダイアログを閉じる処理を追加
            callback: () => {
              // Promise を resolve
              resolve(resultSelector(dialog))
              // ダイアログを閉じる
              document.body.removeChild(dialog.$el)
              dialog.$destroy()
              dialog = null
            },
          }
        })
        // ダイアログの data に値を設定
        Object.keys(props).filter((k) => k in dialog).forEach((k) => {
          this.$set(dialog, k, props[k])
        })
        dialog.$mount()
        document.body.appendChild(dialog.$el)
        this.$nextTick(() => {
          // 表示したボタンの最初のボタンをアクティブにする
          const dialogButtons = dialog.$refs.buttonElements
          if (dialogButtons && dialogButtons.length > 0) {
            dialogButtons[0].focus()
          }
        })
      })
    },
    /**
     * デフォルトの OK ボタンとキャンセルボタンを返す関数
     */
    getDefaultButtons() {
      return [
        { label: 'キャンセル', classes: 'btn', resultSelector: () => false },
        { label: 'OK', classes: 'btn', resultSelector: () => true },
      ]
    },
  },
}
