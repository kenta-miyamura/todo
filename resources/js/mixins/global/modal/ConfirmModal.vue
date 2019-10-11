<template>
  <transition name="modal">
    <div class="modal modal-mask" style="display: block">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h4 class="modal-title">
              {{ title }}
            </h4>
          </div>
          <div class="modal-body">
            {{ content }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              ref="buttonElements"
              v-for="(b, index) in buttons"
              :key="index"
              :class="b.classes"
              @click="b.callback()"
            >
              {{ b.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    title: '',
    content: '',
    buttons: () => ([]),
  }),
}
</script>
