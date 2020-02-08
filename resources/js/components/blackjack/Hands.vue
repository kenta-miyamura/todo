<template>
  <div>
    <h3>{{ playerName }}</h3>
    <div class="d-flex">
      <div v-for="(hand, i) in hands" :key="`hand-${i}`">
        <div v-if="isDisp" class="card">
          <h5
            class="card-header"
            v-html="markToTrump(hand[0].mark)"
            :class="{ 'text-danger': hand[0].isChangeColor }"
          ></h5>
          <div class="card-body">
            <p>{{ numberToTrump(hand[0].number) }}</p>
          </div>
        </div>
        <div v-else class="card back-card bg-primary">
        </div>
      </div>
    </div>
    <div v-if="isDisp">
      <h4 class="mt-3">{{ sumCount }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hands: {
      type: Array,
      required: true,
      default: () => [],
    },
    isDisp: {
      type: Boolean,
      required: false,
      default: true,
    },
    playerName: {
      type: String,
      required: true,
      default: '',
    },
    sumCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    /**
     * マーク
     *
     * @param {String} mark
     * @return {String} HTMLエンティティ
     */
    markToTrump() {
      return (mark) => {
        switch (mark) {
          case 'spade':
            return '&#x2660;'
          case 'club':
            return '&#x2663;'
          case 'diamond':
            return '&#x2666;'

          case 'heart':
            return '&#x2665;'

          default:
            return ''
        }
      }
    },

    /**
     * 数字を変換し出力（A, J, Q, K）
     *
     * @param {Number} number
     * @return {String}
     */
    numberToTrump() {
      return (number) => {
        switch (number) {
          case 1:
            return 'A'
          case 11:
            return 'J'
          case 12:
            return 'Q'
          case 13:
            return 'K'
          default:
            return number
        }
      }
    },
  },
}
</script>

<style scoped>
.back-card {
  height: 129px;
  width: 60px;
}
</style>
