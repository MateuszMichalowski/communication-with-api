<template>
  <pre>
    {{ data }}
  </pre>
</template>

<script>
import {useFetch} from "@vueuse/core/index";
import {onMounted} from "vue";

export default {
  name: "UseFetchOption",
  setup() {
    const { execute, data } = useFetch('https://swapi.dev/api/people/2', { immediate: false })

    onMounted(async () => {
      await execute()
    })

    return { data }
  }
}
</script>

<style scoped>

</style>