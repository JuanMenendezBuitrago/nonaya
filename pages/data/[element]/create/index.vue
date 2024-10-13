<template>
    <v-dialog v-model="dialog" max-width="600" activator="#create-activator">

        <v-card :title="DIALOGS_HEADERS[route.params.element.toUpperCase()].CREATE.ES">
            <v-card-text>

                <component 
                    :is="currentComponent" 
                    :save="save" 
                    @saved="saved"/>

                <small class="text-caption text-medium-emphasis">*indica que es un dato necesario</small>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

                <v-btn 
                    color="primary" 
                    text="Save" 
                    variant="tonal" 
                    @click="save = true"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>



<script setup>
import { ref, onMounted, computed } from 'vue'
import { DIALOGS_HEADERS }          from '~/constants/texts'
import CrudCoffee                   from '~/components/Crud/Coffee'
import CrudMethod                   from '~/components/Crud/Method'
import CrudVariety                  from '~/components/Crud/Variety'
import CrudProcess                  from '~/components/Crud/Process'
import CrudNote                     from '~/components/Crud/Note'
import CrudOrigin                   from '~/components/Crud/Origin'
import CrudCountry                  from '~/components/Crud/Country'
import CrudRegion                   from '~/components/Crud/Region'
import CrudCity                     from '~/components/Crud/City'
import CrudCoupon                   from '~/components/Crud/Coupon'

const route  = useRoute()
const dialog = ref(true)
const save   = ref(false)

let currentComponent = computed(() => {
    const elements = {
        coffee:  CrudCoffee,
        method:  CrudMethod,
        variety: CrudVariety,
        process: CrudProcess,
        note:    CrudNote,
        origin:  CrudOrigin,
        country: CrudCountry,
        region:  CrudRegion,
        city:    CrudCity,
        coupon:  CrudCoupon,
    }
    return elements[route.params.element]
})

const saved = () => {
    save.value = false
    console.log('saved')
}

onMounted(() => {
  // You can perform any DOM manipulations or API calls here
})
</script>~/constants/texts