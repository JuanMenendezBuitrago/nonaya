<template>
    <v-row dense>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Autor*" required></v-autocomplete>
        </v-col>        
        
        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Post"></v-autocomplete>
        </v-col>        
        
        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Producto"></v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
            <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Mètodo"></v-autocomplete>
        </v-col>

        <v-col cols="12" md="12" sm="12">
            <v-textarea  label="Comentario"></v-textarea>
        </v-col>

    </v-row>
</template>