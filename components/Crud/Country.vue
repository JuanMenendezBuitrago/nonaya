<template>
    <v-row dense>
        <v-col cols="12" md="12" sm="12">
            <v-text-field v-model="name" label="País*" required></v-text-field>
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

    // Hacer una petición POST
    const { data, pending, error } = await useFetch('/api/country', {
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