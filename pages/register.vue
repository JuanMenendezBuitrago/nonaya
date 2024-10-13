<template>
    <v-layout>
        <TopMenu />
        <SideBar />
        <v-main style="min-height: 300px;">
            <h1 class="urbanist-bold p-4">Gestión de Pedidos</h1>
            <v-tabs v-model="tab" align-tabs="start">
                <v-tab :value="1" prepend-icon="mdi-plus-circle-outline">Nuevo</v-tab>
                <v-tab :value="2" prepend-icon="mdi-table">Ver</v-tab>
                <v-tab :value="3" prepend-icon="mdi-magnify">Buscar</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
                </v-tabs-window-item>
            </v-tabs-window>
        </v-main>
    </v-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref(1)

</script>

<style>
</style>