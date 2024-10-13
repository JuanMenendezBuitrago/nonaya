<template>
    <v-row dense>
        <v-col cols="12">
            <v-text-field 
                v-model="name" 
                label="Variedad*" 
                required></v-text-field>
        </v-col>

        <v-col cols="12">
            <v-textarea 
                v-model="description" 
                label="Descripción"></v-textarea>
        </v-col>

    </v-row>
</template>

<script setup>
import { ref, watch} from 'vue'

const emit      = defineEmits(['saved'])
const props     = defineProps(['save'])

const name        = ref('')
const description = ref('')


watch(() => props.save, (newValue) => {
    if(newValue === true) {
        console.log('Saving...')
        emit('saved')
    }
    if(newValue === false) {
        console.log('Restored')
    }
})


</script>