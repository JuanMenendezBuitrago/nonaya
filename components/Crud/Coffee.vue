<template>
    <v-row dense>
        <v-col cols="12">
            <v-text-field 
                v-model="name" 
                label="Nombre*" 
                required></v-text-field>
        </v-col>

        <v-col cols="12">
            <v-textarea  
                v-model="description" 
                label="Descripción"
                @update:modelValue="updateDescription"></v-textarea>
        </v-col>
        
        <v-col cols="12" sm="6" md="4">
            <v-autocomplete
                v-model="processId"
                :items="store.processes"
                clearable
                item-title="name"
                item-value="id"
                label="Proceso*"
                required></v-autocomplete>
        </v-col>        
        
        <v-col cols="12" sm="6" md="4">
            <v-autocomplete
                v-model="varietyId"
                :items="store.varieties"
                clearable
                item-title="name"
                item-value="id"
                label="Variedad*"
                required></v-autocomplete>
        </v-col>        
        
        <v-col cols="12" sm="6" md="4">
            <v-autocomplete
                v-model="originId"
                :items="store.origins"
                clearable
                item-title="name"
                item-value="id"
                label="Origen*"
                required></v-autocomplete>
        </v-col>  

        <v-col cols="12" sm="6" md="8">
            <v-autocomplete
                v-model="fermentationId"
                :items="store.fermentations"
                clearable
                item-title="name"
                item-value="id"
                label="Fermentación*"
                required></v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6" md="4" >
            <v-number-input 
            v-if="fermentationId !== null"
            suffix="Horas" :min="0" :step="1"  control-variant="split"
            hint="duración de la fermentación, si la hubo" label="Horas de fermentación"></v-number-input>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, watch}       from 'vue'
import { usePiniaStore }   from '~/stores/pinia'
import { VNumberInput }    from 'vuetify/labs/VNumberInput'

const store   = usePiniaStore() // No necesitas usar ref()

const emit      = defineEmits(['saved'])
const props     = defineProps(['save'])

const methods   = ref([])
const processes = ref([])
const origins   = ref([])
const varieties = ref([])

const name           = ref('')
const description    = ref('')
const varietyId      = ref('')
const originId       = ref('')
const processId      = ref('')
const fermentationId = ref(null)

watch(() => props.save, (newValue) => {
    if(newValue === true) {
        console.log('Saving...')
        saveData()
    }
    if(newValue === false) {
        console.log('Restored')
    }
})

watch(fermentationId, (newValue) => {
    console.log(newValue)
})

const saveData = async () => {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('description', description.value)
    formData.append('varietyId', varietyId.value)
    formData.append('originId', originId.value)
    formData.append('processId', processId.value)

    // Hacer una petición POST
    const { data, pending, error } = await useFetch('/api/coffee', {
        method: 'POST',
        body: formData
    })

    console.log(data, error)
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