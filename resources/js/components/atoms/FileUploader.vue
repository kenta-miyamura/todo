<template>
  <div class="card">
    <h5 class="card-header bg-primary text-white">
      ファイルアップロード
      <label class="float-right">
        <i class="fas fa-plus text-white"></i>
        <input @change="selectedFile" type="file" name="send_file" multiple>
      </label>
    </h5>
    <div class="card-body">
      <div v-if="uploadFiles.length === 0">
        アップロードするファイルを選択してください。
      </div>
      <div
        v-for="(uploadFile, index) in uploadFiles"
        :key="`upload-file-${index}`"
        class="uploadImage"
      >
        <button class="btn btn-primary" @click="onClearFile(index)">clear</button>
        <img :src="uploadFile.name" />
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    uploadFiles: [],
  }),
  methods: {
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault()
      const file = e.target.files
      this.uploadFiles.push(file[0])
    },
    onClearFile(index) {
      this.uploadFiles = this.uploadFiles.filter((uploadFile, i) => i !== index)
    },
  },
}
</script>
<style scoped>
input[name="send_file"] {
  display: none;
  cursor: pointer;
}
</style>
