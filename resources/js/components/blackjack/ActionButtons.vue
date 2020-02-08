<template>
  <div>
    <button
      class="btn btn-light btn-block ml-5 mb-2"
      @click="$emit('onPlayerDraw')"
    >
      カードを引く
    </button>
    <button
      v-if="isDisp"
      class="btn btn-light btn-block ml-5 mb-2"
      @click="$emit('onDispDealer', false)"
    >
      相手のカードを隠す
    </button>
    <button
      v-else
      class="btn btn-light btn-block ml-5 mb-2"
      @click="$emit('onDispDealer', true)"
    >
      相手のカードを見る
    </button>
    <button
      class="btn btn-light btn-block ml-5 mb-2"
      @click="$emit('onGame')"
    >
      勝負！
    </button>
    <button
      class="btn btn-light btn-block ml-5 mb-2"
      @click="$emit('onInit')"
    >
      リスタート
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isDisp: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>
