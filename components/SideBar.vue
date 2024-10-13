<template>
    <v-navigation-drawer expand-on-hover rail mobile-breakpoint="sm">
            <v-list>
                <v-list-item 
                    prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                    subtitle="juan.menendez.buitrago@gmailcom" title="Juan Menendez"></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-account" title="Perfil" value="account" href="/account"></v-list-item>
                <v-list-item prepend-icon="mdi-store-outline" title="Compras" value="orders" href="/orders"></v-list-item>
                <v-list-item prepend-icon="mdi-history" title="Actividad" value="history" href="/history"></v-list-item>
                <v-list-item prepend-icon="mdi-plus-circle-outline" title="Crear contenido" value="create" href="/create"></v-list-item>
            </v-list>
            
            <template #append>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-alpha-n-box" title="Datos Nonaya" value="nonaya" href="/nonaya"></v-list-item>
                    <v-list-item prepend-icon="mdi-currency-usd" title="Registro Pedidos" value="register" href="/register"></v-list-item>
                    <v-list-item prepend-icon="mdi-database-outline" title="Datos" value="admin" href="/data"></v-list-item>
                    <v-list-item prepend-icon="mdi-cog" title="Configuración" value="settings" href="/settings"></v-list-item>
                    <v-list-item prepend-icon="mdi-logout" title="salir" value="home" href="/home"></v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>
</template>

<script setup>
</script>