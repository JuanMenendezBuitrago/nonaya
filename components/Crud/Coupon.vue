<template>
    <v-row dense>
        <v-col cols="12" md="4" sm="6">
            <v-text-field label="Nombre*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="6">
            <v-number-input 
            suffix="%" :min="1" :max="100" :step="1"  control-variant="split"
            hint="idica el porcentaje de descuento a aplicar" label="Descuento*" requied></v-number-input>
        </v-col>

        <v-col cols="12" md="4" sm="6">
            <v-number-input 
            :min="0"  :step="1"  control-variant="split"
            hint="indica cuantos cupones vas a emitir (0 = sin límite)" label="Cantidad*" required></v-number-input>
        </v-col>

        <v-col cols="12" md="6" sm="6">
            <v-textarea label="Descripción*" required></v-textarea>
        </v-col>

        <v-col cols="12" md="6" sm="6">
            <v-radio-group inline label="Cupón de pedido o de producto" v-model="couponType">
                <v-radio label="Pedido"   value="pedido"></v-radio>
                <v-radio label="Producto" value="producto"></v-radio>
            </v-radio-group>

            <v-autocomplete v-if="couponType === 'producto'"
                multiple 
                label="Productos" 
                :items="store.products || []" 
                item-title="name" 
                item-value="id" 
                v-model="couponProducts">

            </v-autocomplete>
        </v-col>

    </v-row>
</template>

<script setup>
import { ref }                 from 'vue'
import { VNumberInput }        from 'vuetify/labs/VNumberInput'
import { usePiniaStore }       from '~/stores/pinia'

const store          = usePiniaStore()

const couponType     = ref('pedido')
const couponProducts = ref([])

</script>