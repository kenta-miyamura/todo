<template>
  <div>
    <router-link
      to="/posts"
    >
      posts
    </router-link>

    <router-link
      to="/modal_test"
    >
      モーダルテスト
    </router-link>
    <FileUploader />
  </div>
</template>

<script>
import authRepository from '../repositories/AuthRepository'
// todo app.jsで読ませれるようにすること
import FileUploader from '../components/atoms/FileUploader.vue'

export default {
  components: {
    FileUploader,
  },
  methods: {
    async logout() {
      const response = await authRepository.logout()

      if (response.status === 200) {
        this.$router.push('/login')
      }
    },
  },
}
</script>
