<template>
    <v-row dense>
        <v-col cols="12">
            <v-text-field 
                v-model="name"
                label="Origen*" required></v-text-field>
        </v-col>

        <v-col cols="12">
            <v-text-field 
                v-model="msnm"
                label="MSNM*" required></v-text-field>
        </v-col>

        <v-col cols="12">
            <v-textarea  
                v-model="description"
                label="Descripción"></v-textarea>
        </v-col>

        <v-col cols="12" sm="6">
            <v-autocomplete
                v-model="cityId"
                :items="store.cities"
                item-title="name"
                item-value="id"
                label="Ciudad*" required auto-select-first></v-autocomplete>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, watch} from 'vue'
import { usePiniaStore } from '~/stores/pinia'

const store     = usePiniaStore() // No necesitas usar ref()

const emit      = defineEmits(['saved'])
const props     = defineProps(['save'])

const name        = ref('')
const msnm        = ref('')
const description = ref('')
const cityId      = ref('')


watch(() => props.save, (newValue) => {
    if(newValue === true) {
        console.log('Saving...')
        saveData()
        emit('saved')
    }
    if(newValue === false) {
        console.log('Restored')
    }
})

const saveData = async () => {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('msnm', msnm.value)
    formData.append('description', description.value)
    formData.append('cityId', cityId.value)

    // Hacer una petición POST
    const { data, success } = await useFetch('/api/origin', {
        method: 'POST',
        body: formData
    })

    if(success === true) {
        console.log(data)
        store.addOrigin(data)
        emit('saved')
    }
}


const fetchData = async () => {
  try {  
    //..
  } catch (error) {
    console.log(error)
  }
}
</script>