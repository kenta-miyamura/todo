<template>
  <button
      type="button"
      class="btn btn-info btn-block my-4 text-white"
      @click="logout"
    >
      ログアウト
    </button>
</template>

<script>
import { authRepository } from '../repositories/AuthRepository'

export default {
  methods: {
    async logout () {
      const response = await authRepository.logout()

      if (response.status === 200) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
