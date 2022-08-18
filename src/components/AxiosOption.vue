<template>
  <pre>
    {{ resultRequest }}
  </pre>
</template>

<script>
// import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: "AxiosOption",
  // setup() {
  //   const requestResult = ref(null)
  //
  //   onMounted(async () => {
  //     requestResult.value = await axios.get('https://swapi.dev/api/people/2')
  //   })
  //
  //   return { requestResult }
  // },
  data() {
    return {
      resultRequest: null
    }
  },
  async mounted() {
    const respData = await axios.get('https://swapi.dev/api/people/2')
    this.resultRequest = respData.data
  }
}
</script>

<style scoped>

</style>