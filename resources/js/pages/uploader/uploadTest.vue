<template>
  <div>
    <div>
      <label for="file" class="btn btn-primary">
        UPLOAD
        <input type="file" name="file" id="file" style="display: none;" @change="setFile">
      </label>
      <img :src="preview" alt="" height="200">
    </div>
    <div>
      <button class="btn btn-default" @click="onSave">保存</button>
    </div>
  </div>
</template>
<script>
import uploadRepository from '../../repositories/UploadRepository'

export default {
  data: () => ({
    file: null,
    preview: '',
    record: {
      name: '',
      age: 0,
    },
  }),
  methods: {
    /**
     * todo
     * setFileタイミングで各fileプロパティにデータを埋める形で
     * その中身が存在する場合にonSaveでuploadメソッドを走らせる感じかな
     */
    setFile(event) {
      const file = event.target.files[0]

      // FileReaderクラスのインスタンスを取得
      const reader = new FileReader()

      // ファイルを読み込み終わったタイミングで実行する処理
      reader.onload = (e) => {
        this.preview = e.target.result
      }

      // ファイルを読み込む
      reader.readAsDataURL(file)

      this.file = file
    },

    async onSave() {
      const formData = new FormData()
      formData.append('file', this.file)
      const response = await uploadRepository.upload(formData)

      console.log(response)
    },
  },
}
</script>
