<template>
  <div class="container mt-4">
    <div class="card mb-4">
      <div class="card-header">
        {{ posts.title }}
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ posts.body }}
        </p>
      </div>
      <div class="card-footer">
        <span class="mr-2">
          投稿日時 {{ posts.created_at }}
        </span>
      </div>
    </div>
    <div class="com-md-12 mb-4">
      <button class="btn-primary" @click="onOpenModal">コメントを投稿する</button>
    </div>
    <Modal
      v-if="showModal"
      @post="onOpenConfirmModal"
      @cancel="onCloseModal"
    >
      <template slot="header">
        <p>新規コメント</p>
      </template>
      <template slot="body">
        <div class="form-group">
          <label for="body" class="col-sm-2 col-form-label">コメント</label>
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
      v-for="(comment, index) in posts.comments"
      :key="`comment-index-${index}`"
      class="card mb-4"
      >
      <div class="card-header">
        {{ index + 1 }}
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <span class="mr-2">
          投稿日時 {{ comment.created_at }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import postRepository from '../../repositories/PostRepository'
import commentRepository from '../../repositories/CommentRepository'
import Modal from '../../components/modal/modal.vue'

export default {
  components: {
    Modal,
  },
  data: () => ({
    posts: [],
    inputForm: {
      post_id: '',
      body: '',
    },
    showModal: false,
    showConfirmModal: false,
    showCompleteModal: false,
  }),

  async mounted() {
    const response = await postRepository.show(this.$route.params.id)
    if (response.data.status && response.data.status !== 200) this.$router.push('/notFound')

    this.posts = response.data
    this.inputForm.post_id = this.$route.params.id
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
      const response = await commentRepository.store(this.inputForm)
      this.completeMesagge = response.status === 200 ? 'success' : 'error'
      this.showCompleteModal = true
    },
  },
}
</script>
