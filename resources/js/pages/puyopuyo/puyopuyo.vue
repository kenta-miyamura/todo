<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div
          v-for="(line, lineIndex) in lineCount"
          :key="`lines-${lineIndex}`"
          class="d-flex flex-wrap"
        >
          <!-- <div
            v-for="(column, columnIndex) in columnCount"
            :key="`columns-${columnIndex}`"
            class="border"
            :style="{
              width: `${100 / columnCount}%`,
              height: '80px'
            }"
            @click="setPuyo(lineIndex, columnIndex)"
          ></div> -->
        </div>
      </div>
      <div class="col-6">
        <p
          class="bg-info text-white rounded-circle p-3"
          style="width: 100px;height: 100px;"
          @click="selectPuyo('info')"></p>
        <p
          class="bg-warning text-white rounded-circle p-3"
          style="width: 100px;height: 100px;"
          @click="selectPuyo('warning')"></p>
        <p
          class="bg-danger text-white rounded-circle p-3"
          style="width: 100px;height: 100px;"
          @click="selectPuyo('danger')"></p>
        <p
          class="bg-success text-white rounded-circle p-3"
          style="width: 100px;height: 100px;"
          @click="selectPuyo('success')"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    columnCount: 6,
    lineCount: 12,
    puyopuyos: [],
    selectedPuyo: '',
  }),
  mounted() {
    this.init()
  },
  methods: {
    // init() {
    //   this.puyopuyos =
    // },
    selectPuyo(puyo) {
      this.selectedPuyo = puyo
    },
    // setPuyo(lineIndex, columnIndex) {
    //   console.log(lineIndex, columnIndex)
    // },
  },
}
</script>
