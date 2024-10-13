<template>
    <v-row dense>
        <v-col cols="12" md="6" sm="6">
            <v-text-field label="Categoría*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6" sm="6">
            <v-switch label="Disponible"></v-switch>
        </v-col>
        
        <v-col cols="12" md="12" sm="12">
            <v-textarea  label="Descripción"></v-textarea>
        </v-col>

    </v-row>
</template>