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
      // todo:
      // eslint-disable-next-line no-unused-vars
      const result = await this.showConfirmModal(this.$modalParams.cancelConfirm)
    },
  },
}
</script>
