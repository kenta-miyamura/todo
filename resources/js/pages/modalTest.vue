<template>
  <div>
    <button @click="onOpenModal">openModal</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    isModal: false,
  }),
  methods: {
    async onOpenModal() {
      const result = await this.showConfirmModal(this.$modalParams.cancelConfirm)
      if (!result) return
    },
  },
}
</script>
