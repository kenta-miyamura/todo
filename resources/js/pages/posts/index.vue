<template>
  <div class="container mt-4">
    <div class="com-md-12 mb-4">
      <button class="btn-primary" @click="onOpenModal">新規作成</button>
    </div>
    <Modal
      v-if="showModal"
      @post="onOpenConfirmModal"
      @cancel="onCloseModal"
    >
      <template slot="header">
        <p>新しい記事を作成する</p>
      </template>
      <template slot="body">
        <div class="form-group">
          <label for="title" class="col-sm-2 col-form-label">タイトル</label>
          <div class="col-sm-10">
            <input
              v-model="inputForm.title"
              id="title"
              type="text"
              class="form-control"
              placeholder="新規のスレタイトル"
              required
            >
          </div>
        </div>
        <div class="form-group">
          <label for="body" class="col-sm-2 col-form-label">内容</label>
          <div class="col-sm-10">
            <textarea
              v-model="inputForm.body"
              id="body"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>
      </template>
    </Modal>
    <Modal
      v-if="showConfirmModal"
      @post="onPost"
      @cancel="onCloseConfirmModal"
    >
    </Modal>
    <Modal
      v-if="showCompleteModal"
    >
      <template slot="header">
        処理が完了しました
      </template>
      <template slot="body">
        {{ completeMesagge }}
      </template>
      <template slot="footer">
        <button class="btn btn-danger" @click="reload">
          閉じる
        </button>
      </template>
    </Modal>
    <div
      v-for="(post, index) in posts"
      :key="`post-index-${index}`"
      class="card mb-4"
      >
      <div class="card-header">
        <router-link
          :to="`/posts/${post.id}`"
          class="text-dark">
          {{ post.title }}
        </router-link>
        <button
          class="btn btn-danger btn-sm float-right"
          @click="onDelete(post.id)"
        >
          削除{{ post.id }}
        </button>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ post.body }}
        </p>
      </div>
      <div class="card-footer">
        <span class="mr-2">
          投稿日時 {{ post.created_at }}
        </span>

        <span
          v-if="post.comments.length > 0"
          class="badge badge-primary">
            <router-link
              :to="`/posts/${post.id}`"
              class="text-white">
              コメント {{ post.comments.length }}件
            </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import postRepository from '../../repositories/PostRepository'
import Modal from '../../components/modal/modal.vue'

export default {
  components: {
    Modal,
  },
  data: () => ({
    posts: [],
    inputForm: {
      title: '',
      body: '',
    },
    showModal: false,
    showConfirmModal: false,
    showCompleteModal: false,
  }),

  async mounted() {
    const response = await postRepository.index()
    this.posts = response.data
  },
  methods: {
    // todo modal周りをもっと簡素にしたい！！！
    onOpenModal() {
      this.showModal = true
    },
    onCloseModal() {
      this.showModal = false
    },
    onOpenConfirmModal() {
      this.showConfirmModal = true
    },
    onCloseConfirmModal() {
      this.showConfirmModal = false
    },
    reload() {
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    },
    async onPost() {
      const response = await postRepository.store(this.inputForm)

      if (response.status === 200) {
        this.completeMesagge = 'success'
      } else {
        this.completeMesagge = 'error'
      }
      this.showCompleteModal = true
    },
    async onDelete(id) {
      const response = await postRepository.destroy(id)

      if (response.status === 200) {
        this.completeMesagge = 'success'
      } else {
        this.completeMesagge = 'error'
      }
      this.showCompleteModal = true
    },
  },
}
</script>
