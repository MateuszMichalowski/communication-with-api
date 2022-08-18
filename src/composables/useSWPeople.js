import {computed, readonly, ref} from "vue";

export const useSWPeople = () => {

    const allCharacters = ref([])
    const singleCharacter = ref(null)

    const setAllCharacters =  (characterList) => {
        allCharacters.value = characterList
    }

    const setCurrentCharacter =  (character) => {
        singleCharacter.value = character
    }

    const getPeopleNames = computed(() => {
        return allCharacters.value.map(entry => entry.name)
    })

    return {
        setCurrentCharacter,
        setAllCharacters,
        getPeopleNames,
        singleCharacter: readonly(singleCharacter)
    }
}