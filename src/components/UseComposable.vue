<template>
<pre>
  {{ singleCharacter }}
  {{ getPeopleNames }}
</pre>
</template>

<script>
import {useSWPeople} from "@/composables/useSWPeople";
import {onMounted} from "vue";
import {getAllSWPeople, getSWPeopleById} from "@/api/service/SWPeople";

export default {
  name: "UseComposable",
  setup() {
    const { setCurrentCharacter, singleCharacter, setAllCharacters, getPeopleNames } = useSWPeople()

    onMounted(async () => {
      const allPeopleApiResponse = await getAllSWPeople()
      setAllCharacters(allPeopleApiResponse.data.results)

      const singleCharApiResponse = await getSWPeopleById(2)
      setCurrentCharacter(singleCharApiResponse.data)

    })

    return {
      singleCharacter,
      getPeopleNames
    }
  }
}
</script>

<style scoped>

</style>