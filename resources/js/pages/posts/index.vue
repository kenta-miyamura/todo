<template>
  <div class="container mt-4">
    <div
      v-for="(post, index) in posts"
      :key="`post-index-${index}`"
      class="card mb-4"
      >
      <div class="card-header">
        {{ post.title }}
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

export default {
  data: () => ({
    posts: [],
  }),

  async mounted() {
    const response = await postRepository.index()
    this.posts = response.data
  },
}
</script>
