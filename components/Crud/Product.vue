<template>
    <v-row dense>

        <v-col cols="12">
            <v-text-field label="Nombre*" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Café*" required></v-autocomplete>
        </v-col>

        <v-col cols="12">
            <v-textarea  label="Descripción"></v-textarea>
        </v-col>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Tueste*" required></v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Molienda*" required></v-autocomplete>
        </v-col>
        <v-col cols="12" md="4" sm="6">
            <v-text-field label="Peso*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="6">
            <v-text-field label="Gramos*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="6">
            <v-text-field label="Precio*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="6">
            <FormDatePicker label="Fecha de tueste*" required></FormDatePicker>
        </v-col>

        <v-col cols="12" md="4" sm="6">
            <v-switch label="Disponible*" required></v-switch>
        </v-col>

        
    </v-row>
</template>