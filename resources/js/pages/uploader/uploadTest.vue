<template>
  <div>
    <div>
      <label for="file" class="btn btn-primary">
        UPLOAD
        <input type="file" name="file" id="file" style="display: none;" @change="upload">
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    file: null,
  }),
  methods: {
    upload(event) {
      const file = event.target.files[0]
      console.log(file)
    },
  },
}
</script>
