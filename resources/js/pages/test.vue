<template>
  <router-link
    to="/posts"
  >posts
  </router-link>
</template>

<script>
import authRepository from '../repositories/AuthRepository'

export default {
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
