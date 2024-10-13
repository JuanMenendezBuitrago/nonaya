<template>
    <v-layout :key="$route.fullPath">
        <TopMenu /> 
        <SideBar/>        
        <v-main style="min-height: 300px;" >
            <NuxtPage 
                :page-key="pageKey" />
            <h1 class="urbanist-bold p-4">Gestión de Datos</h1>
            <v-tabs v-model="tab" align-tabs="start">
                <v-tab value="1">Café</v-tab>
                <v-tab value="2">Orígenes</v-tab>
                <v-tab value="3">Productos</v-tab>
                <v-tab value="4">Pedidos</v-tab>
                <v-tab value="5">Posts</v-tab>
                <v-tab value="6">Archivos</v-tab>
                <v-tab value="7">Usuarios</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="1">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="8" class="flex justify-start items-baseline gap-x-2 pb-0">
                                <h2>Cafés <v-icon icon="mdi-plus-circle-outline self-center" size="sm" @click.stop="goTo('/data/coffee/create')"></v-icon></h2>
                                <span class="flex-1"></span>
                                <v-btn density="compact" variant="tonal" color="black" prepend-icon="mdi-reload" @click.stop="fetchData('coffee')"> recargar </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="8">
                                <v-data-table-virtual :headers="headersCoffees" :items="coffees" height="400"
                                    item-value="name" class="sticky-header rounded border ">
                                    <template #item.process="{ value }">
                                        <v-chip label variant="tonal" density="compact" size="small" :color="processColor(value)">{{ value.toUpperCase() }}</v-chip>
                                    </template>
                                    <template #item.actions="{ value }">
                                        <v-icon icon="mdi-pencil"></v-icon>
                                        <v-icon icon="mdi-trash-can-outline"></v-icon>
                                    </template>
                                </v-data-table-virtual>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-expansion-panels variant="accordion">
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Varietales <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/region/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersVarieties" 
                                                :items="varieties" 
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="id" 
                                                item-title="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Procesos <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/process/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersProcesses" 
                                                :items="processes" 
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="id" 
                                                item-title="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Métodos <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/method/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersMethods" 
                                                :items="methods" 
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="id" 
                                                item-title="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>   
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Notas <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/note/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                            :headers="headersNotes" 
                                            :items="notes || []" 
                                            item-value="id"                                                 
                                            item-title="name"                                                 
                                            hover
                                            hide-default-header
                                            density="compact"
                                            class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel> 
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Fermentaciones <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/fermentation/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                            :headers="headersFermentations" 
                                            :items="fermentations || []" 
                                            item-value="id"                                                 
                                            item-title="name"                                                 
                                            hover
                                            hide-default-header
                                            density="compact"
                                            class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>                                                                                                                                            
                                </v-expansion-panels>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item>

                <v-tabs-window-item value="2">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="8" class="flex justify-start items-baseline gap-x-2 pb-0">
                                <h2>Orígenes <v-icon icon="mdi-plus-circle-outline self-center" size="sm" @click.stop="goTo('/data/origin/create')"></v-icon></h2>
                                <span class="flex-1"></span>
                                <v-btn density="compact" variant="tonal" color="black" prepend-icon="mdi-reload" @click.stop="fetchData('origin')"> recargar </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="8">
                                <v-data-table-virtual 
                                    :headers="headersOrigins" 
                                    :items="origins" 
                                    no-data-text="No hay datos"
                                    height="400"
                                    item-value="name" class="sticky-header rounded border ">
                                    <template #item.actions="{ value }">
                                        <v-icon icon="mdi-pencil"></v-icon>
                                        <v-icon icon="mdi-trash-can-outline"></v-icon>
                                    </template>
                                </v-data-table-virtual>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-expansion-panels variant="accordion">
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Paises <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/country/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersCountries" 
                                                :items="countries" 
                                                no-data-text="No hay datos"
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Regiones <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/region/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersRegions" 
                                                :items="regions" 
                                                no-data-text="No hay datos"
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Ciudades / lugares <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/city/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersCities" 
                                                :items="cities" 
                                                no-data-text="No hay datos"
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>   
                                </v-expansion-panels>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item>

                <v-tabs-window-item value="3">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="8" class="flex justify-start items-baseline gap-x-2 pb-0">
                                <h2>Productos <v-icon icon="mdi-plus-circle-outline self-center" size="sm" @click.stop="goTo('/data/product/create')"></v-icon></h2>
                                <span class="flex-1"></span>
                                <v-btn density="compact" variant="tonal" color="black" prepend-icon="mdi-reload" @click.stop="fetchData('product')"> recargar </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="8">
                                <v-data-table-virtual 
                                    :headers="headersProducts" 
                                    :items="products" 
                                    no-data-text="No hay datos"
                                    height="400"
                                    item-value="name" class="sticky-header rounded border ">

                                    <template #item.actions="{ value }">
                                        <v-icon icon="mdi-pencil"></v-icon>
                                        <v-icon icon="mdi-trash-can-outline"></v-icon>
                                    </template>

                                </v-data-table-virtual>
                            </v-col>

                            <v-col cols="12" sm="4">
                                <v-expansion-panels variant="accordion">
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Tuestes <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/roast/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersRoasts" 
                                                :items="roasts" 
                                                no-data-text="No hay datos"
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Moliendas <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/grind/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersGrinds" 
                                                :items="grinds" 
                                                no-data-text="No hay datos"
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="name" 
                                                class="no-height border">
                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>
                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <template #title>
                                            <h3 class="flex items-center gap-x-2">Cupones <v-icon icon="mdi-plus-circle-outline" size="sm" @click.stop="goTo('/data/coupon/create')"></v-icon></h3>
                                        </template>
                                        <template #text>
                                            <v-data-table-virtual 
                                                :headers="headersCoupons" 
                                                :items="coupons" 
                                                no-data-text="No hay datos"
                                                hover
                                                hide-default-header
                                                density="compact"
                                                item-value="name" 
                                                class="no-height border">

                                                <template #item.name="{ value }">
                                                    <span class="urbanistic-bold DataTable__CouponName">{{ value.name }}</span>
                                                    <span class="DataTable__CouponDescription">{{ value.name }}</span>
                                                </template>

                                                <template #item.actions="{ value }">
                                                    <v-icon size="sm" class="icon action" icon="mdi-pencil"></v-icon>
                                                    <v-icon size="sm" class="icon action" icon="mdi-trash-can-outline"></v-icon>
                                                </template>

                                            </v-data-table-virtual>
                                        </template>
                                    </v-expansion-panel>   
                                </v-expansion-panels>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item> 

                <v-tabs-window-item value="4">
                </v-tabs-window-item> 

                <v-tabs-window-item value="5">
                </v-tabs-window-item>  

                <v-tabs-window-item value="6">
                </v-tabs-window-item>

                <v-tabs-window-item value="7">
                </v-tabs-window-item>                                            
            </v-tabs-window>
        </v-main>
    </v-layout>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { FERMENTATION_TYPES }  from '~/constants/texts'
import { ref }                 from 'vue'
import { usePiniaStore }       from '~/stores/pinia'
import { formatNumber }        from '~/utils/formatNumber'

const store   = usePiniaStore() // No necesitas usar ref()
const pageKey = ref('')
const tab     = ref(1)
const router  = useRouter()
const route   = useRoute()

const methods   = ref([])
const notes     = ref([])
const varieties = ref([])
const processes = ref([])
const countries = ref([])
const regions   = ref([])
const cities    = ref([])
const grinds    = ref([])
const roasts    = ref([])
const fermentations    = ref([])

const headersCoffees = ref([
    { title: 'Nombre',   align: 'start', key: 'name' },
    { title: 'Origen',   align: 'end', key: 'origin' },
    { title: 'Varietal', align: 'end', key: 'variety' },
    { title: 'Proceso',  align: 'end', key: 'process' },
    { title: '',         align: 'end', key: 'actions' },
])

const headersOrigins = ref([
    { title: 'Origen', align: 'start', key: 'name' },
    { title: 'Ciudad', align: 'end', key: 'city' },
    { title: 'Región', align: 'end', key: 'region' },
    { title: 'MSNM',   align: 'end', key: 'msnm' },
    { title: '',       align: 'end', key: 'actions' },
])

const headersProducts = ref([
    { title: 'Origen',   align: 'start', key: 'name' },
    { title: 'Molienda', align: 'end', key: 'grind' },
    { title: 'Tueste',   align: 'end', key: 'roast' },
    { title: '',         align: 'end', key: 'actions' },
])

const coffees = computed(() => {
    const storedCoffees = store.coffees
    return storedCoffees.map(coffee => {
        const origin    = store.origins.find(origin => origin.id === coffee.originId)
        const variety   = store.varieties.find(variety => variety.id === coffee.varietyId)
        const process   = store.processes.find(process => process.id === coffee.processId)
        return {name: coffee?.name, origin: origin?.name, variety: variety?.name, process: process?.name}
    }) 
})

const origins = computed(() => {
    const storedOrigins = store.origins
    return storedOrigins.map(origin => {
        const city    = store.cities.find(city => city.id === origin.cityId)
        const region  = store.regions.find(region => region.id === city.regionId)
        const country = store.countries.find(country => country.id === region.countryId)
        const msnm    = `${formatNumber(origin.msnm)}`
        return {name: origin.name, city: city.name, region: region.name, country: country.name, msnm: msnm}
    }) 
})

const products = computed(() => {
    const storedProducts = store.products
    return storedProducts.map(product => {
        const origin  = store.origins.find(origin => origin.id === product.originId)
        const grind   = store.grinds.find(grind => grind.id    === product.grindId)
        const roast   = store.grinds.find(grind => grind.id    === product.grindId)
        return {...product, origin: origin.name, grind: grind.name, roast: roast.name}
    }) 
})


const headersVarieties     = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersProcesses     = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersMethods       = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersNotes         = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersFermentations = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])

const headersCountries = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersRegions   = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersCities    = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])

const headersGrinds    = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersRoasts    = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])
const headersCoupons   = ref([{ title: 'Nombre', align: 'start', key: 'name' },{ title: '', align: 'end', key: 'actions' }])

const processColor = (value) => {
    switch (value){
        case 'lavado':
            return 'blue'
        case 'honey':
            return 'amber'
        default:
            return 'green'
    }
}

const goTo = (path) => {
    if(path == route.fullPath){
        pageKey.value = Date.now().toString()
    }
    
    router.push(path)
}

// Función para esperar un tiempo determinado (en milisegundos)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const fetchData = async (param) => {
  try {
    if(!param || param === 'origin' || (isArray(param) && param.contains('origin'))){
        const { data: originData, status: originStatus } = await useFetch('/api/origin')

        console.log('origins', originStatus.value)
        store.origins = originData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }
    
    if(!param || param === 'coffee' || (isArray(param) && param.contains('coffee'))){
        const { data: coffeeData, status: coffeeStatus } = await useFetch('/api/coffee')

        console.log('coffees', coffeeStatus.value)
        store.coffees = coffeeData.value || [] // Asegúrate de acceder a value    
        await delay(500) // Esperar 0.5 segundos
    }
    
    if(!param || param === 'product' || (isArray(param) && param.contains('product'))){
        const { data: productData, status: productStatus } = await useFetch('/api/product')

        console.log('products', productStatus.value)
        store.products = productData.value || [] // Asegúrate de acceder a value    
        await delay(500) // Esperar 0.5 segundos
    }



    if(!param || param === 'method' || (isArray(param) && param.contains('method'))){
        const { data: methodData, status: methodStatus } = await useFetch('/api/method')

        console.log('methods', methodStatus.value)
        methods.value = methodData.value || [] // Asegúrate de acceder a value
        store.methods = methodData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }
    if(!param || param === 'process' || (isArray(param) && param.contains('process'))){
        const { data: processData, status: processStatus } = await useFetch('/api/process')

        console.log('processes', processStatus.value)
        processes.value = processData.value || [] // Asegúrate de acceder a value
        store.processes = processData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }
    if(!param || param === 'variety' || (isArray(param) && param.contains('variety'))){
        const { data: varietyData, status: varietyStatus } = await useFetch('/api/variety')

        console.log('varieties', varietyStatus.value)
        varieties.value = varietyData.value || [] // Asegúrate de acceder a value
        store.varieties = varietyData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }

    if(!param || param === 'note' || (isArray(param) && param.contains('note'))){
        const { data: noteData, status: noteStatus } = await useFetch('/api/note')

        console.log('notes', noteStatus.value)
        notes.value = noteData.value || [] // Asegúrate de acceder a value
        store.notes = noteData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }

    if(!param || param === 'fermentation' || (isArray(param) && param.contains('fermentation'))){
        const { data: fermentationData, status: fermentationStatus } = await useFetch('/api/fermentation')

        console.log('fermentations', fermentationStatus.value)
        fermentations.value = fermentationData.value.map(fermentation => {
            return {...fermentation, name: FERMENTATION_TYPES[fermentation.name].ES}
        }) || [] 
        store.fermentations = fermentations.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }

    if(!param || param === 'country' || (isArray(param) && param.contains('country'))){
        const { data: countryData, status: countryStatus } = await useFetch('/api/country')

        console.log('countries', countryStatus.value)
        countries.value = countryData.value || [] // Asegúrate de acceder a value
        store.countries = countryData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }

    if(!param || param === 'region' || (isArray(param) && param.contains('region'))){
        const { data: regionData, status: regionStatus } = await useFetch('/api/region')

        console.log('regions', regionStatus.value)
        regions.value = regionData.value || [] // Asegúrate de acceder a value
        store.regions = regionData.value || [] // Asegúrate de acceder a value
        await delay(500) // Esperar 0.5 segundos
    }

    if(!param || param === 'city' || (isArray(param) && param.contains('city'))){
        const { data: cityData, status: cityStatus } = await useFetch('/api/city')

        console.log('cities', cityStatus.value)
        cities.value = cityData.value || [] // Asegúrate de acceder a value
        store.cities = cityData.value || [] // Asegúrate de acceder a value
    }

    if(!param || param === 'grind' || (isArray(param) && param.contains('grind'))){
        const { data: grindData, status: grindStatus } = await useFetch('/api/grind')

        console.log('grinds', grindStatus.value)
        grinds.value = grindData.value || [] // Asegúrate de acceder a value
        store.grinds = grindData.value || [] // Asegúrate de acceder a value
    }
    
    if(!param || param === 'roast' || (isArray(param) && param.contains('roast'))){
        const { data: roastData, status: roastStatus } = await useFetch('/api/roast')

        console.log('roasts', roastStatus.value)
        roasts.value = roastData.value || [] // Asegúrate de acceder a value
        store.roasts = roastData.value || [] // Asegúrate de acceder a value
    }   

    if(!param || param === 'coupons' || (isArray(param) && param.contains('coupon'))){
        const { data: couponData, status: couponStatus } = await useFetch('/api/coupon')

        console.log('coupons', couponStatus.value)
        coupons.value = couponData.value || [] // Asegúrate de acceder a value
        store.coupons = couponData.value || [] // Asegúrate de acceder a value
    }    
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchData)
</script>

<style>
.sticky-header th {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: rgba(189, 241, 245, 0.698);
    font-weight: 700 !important;
}

.sticky-header tr:hover td{
    cursor: pointer;
    background: rgba(231, 231, 231, 0.8);
}

.sticky-header tr:hover th{
    cursor: default;
    background-color: rgba(189, 241, 245, 0.698);

}

.v-expansion-panel-text__wrapper {
    padding: 5px !important;
}

.no-height{
    height: max-content;
}

.no-height th {
    background: rgba(231, 231, 231, 0.8);
    font-weight: 700 !important;
}

.icon.action{
    cursor: pointer;
    color:black
}

.icon.action:hover{
    color:rgb(255, 144, 26)
}

.DataTable__CouponName{
    text-transform: uppercase;
    color: gray;
    font-size:0.8rem;
    display: flex;
}

.DataTable__CouponName{
    font-size:0.8rem;
    display: flex;
    text-wrap: wrap;
}
</style>