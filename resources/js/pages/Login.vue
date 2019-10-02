<template>
  <form
    class="col-12 col-md-6 text-center py-5 mx-auto"
    @submit.prevent="login"
  >
    <p class="h4 mb-4">ログイン</p>

    <!-- <div v-if="loginErrors" class="text-danger text-left">
      <ul v-if="loginErrors.email">
        <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
      </ul>
      <ul v-if="loginErrors.password">
        <li v-for="msg in loginErrors.password" :key="msg">{{ msg }}</li>
      </ul>
    </div> -->

    <input
      v-model="loginForm.email"
      type="email"
      :class="'text-left mb-4'"
      :placeholder="'メールアドレス'"
    />

    <input
      v-model="loginForm.password"
      type="password"
      :class="'text-left mb-4'"
      :placeholder="'パスワード'"
    />

    <button
      type="submit"
      class="btn btn-info btn-block my-4 text-white"
    >
      ログイン
    </button>
  </form>
</template>

<script>
import { authRepository } from '../repositories/AuthRepository'

export default {
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async login () {
      console.log(this.loginForm)
      const response = await authRepository.login(this.loginForm)

      if (response.status === 200) {
        this.$router.push('/')
      }
    }
  }
}
</script>
