<template>
  <pre>
    {{ requestResult }}
  </pre>
</template>

<script>
import axios from "axios";

export default {
  name: "SuspenseAxiosOption",
  async setup() {
    const requestResult = await axios.get('https://swapi.dev/api/people')

    return { requestResult }
  }
}
</script>

<style scoped>

</style>