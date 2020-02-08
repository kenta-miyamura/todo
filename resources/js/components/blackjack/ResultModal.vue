<template>
  <transition name="fade">
    <div v-if="result">
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <h4 class="text-center mb-5">結果</h4>
              <h3 class="text-center mb-5">{{ result }}</h3>
              <p>あなた：{{ playerCount }}</p>
              <p>ディーラー：{{ dealerCount }}</p>
              <div class="col-6 offset-2">
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  @click="$emit('onInit')"
                >
                  やり直す
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop show"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      required: true,
      default: '',
    },
    playerCount: {
      type: Number,
      required: true,
      default: 0,
    },
    dealerCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>

<style scoped>
 .modal {
  top: 20%;
  display: block;
}
</style>
