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
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">スレタイトル</label>
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
      </template>
    </Modal>
    <Modal
      v-if="showConfirmModal"
      @post="onPost"
      @cancel="onCloseConfirmModal"
    >
    </Modal>
    <div
      v-for="(post, index) in posts"
      :key="`post-index-${index}`"
      class="card mb-4"
      >
      <div class="card-header">
        {{ post.title }}
        <button class="btn btn-danger btn-sm" @click="onDelete(post.id)">削除</button>
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
    },
    message: '',
    showModal: false,
    showConfirmModal: true,
  }),

  async mounted() {
    const response = await postRepository.index()
    this.posts = response.data
  },
  methods: {
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
    onPost() {
      console.log(this.inputForm)
    },
    onDelete(id) {
      const response = postRepository.destory(id)

      if (response.status !== 200) {
        // todo error処理
      }

      // todo success処理
    },
  },
}
</script>
