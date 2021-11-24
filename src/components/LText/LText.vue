<template>
  <div class="hello" style="color: red;">
  {{text}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { add } from 'lodash-es'

export default defineComponent({
  name: 'LText',
  props: {
    text: String
  },
  setup(){
    // add()
    return {}
  }
})
</script>
<style scoped>
.hello{
  color: red;
}
</style>
