<template>
    <v-row dense>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Usuario"></v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Estado"></v-autocomplete>
        </v-col>
    </v-row>
</template>