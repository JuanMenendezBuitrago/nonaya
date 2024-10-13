<template>
    <v-row dense>
        <v-col cols="12" md="4" sm="6">
            <v-autocomplete
                v-model="countryId"
                :items="store.countries"
                item-title="name"
                item-value="id"
                label="País*" 
                required></v-autocomplete>
        </v-col>
        <v-col cols="12" md="4" sm="6">
            <v-autocomplete
                v-model="regionId"
                :items="filteredRegions"
                :disabled="countryId===''"
                item-title="name"
                item-value="id"
                label="Región*" 
                required></v-autocomplete>
        </v-col>
        <v-col cols="12" md="4" sm="12">
            <v-text-field 
               v-model="name"
               label="Ciudad*" required></v-text-field>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, watch} from 'vue'
import { usePiniaStore } from '~/stores/pinia'

const store   = usePiniaStore() // No necesitas usar ref()

const emit      = defineEmits(['saved'])
const props     = defineProps(['save'])

const name        = ref('')
const countryId   = ref('')
const regionId    = ref('')

const regionsIsActive = computed(() => {
    return (countryId.value !== '')
})

const filteredRegions = computed(() => {
    if (regionsIsActive) {
        return store.regions.filter(region => {
            return region.countryId === countryId.value
        })
    }
    return []
})

watch(() => props.save, (newValue) => {
    if(newValue === true) {
        console.log('Saving...')
        saveData()
    }
    if(newValue === false) {
        console.log('Restored')
    }
})

const saveData = async () => {
    const formData = new FormData()
    formData.append('name',      name.value)
    formData.append('regionId',  regionId.value)
    formData.append('countryId', countryId.value)

    // Hacer una petición POST
    const { data, pending, error } = await useFetch('/api/city', {
        method: 'POST',
        body: formData
    })

    console.log(data, success)
    emit('saved')
}


const fetchData = async () => {
  try {  
    //..
  } catch (error) {
    console.log(error)
  }
}


onMounted(fetchData)
</script>