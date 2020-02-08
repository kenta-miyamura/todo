<template>
  <transition name="fade">
    <div v-if="isBurst">
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <h3 class="text-center mb-5">BURST!!</h3>
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
    isBurst: {
      type: Boolean,
      required: true,
      default: false,
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
