<template>
    <nav class="flex p-4">
        <NonayaHorizontalMonoBlack style="width: auto; height: 2rem;"/>
        <div class="flex flex-1 gap-x-4 justify-end items-center">
          <nuxt-link to="/inicio" class="px-4">inicio</nuxt-link>
          <nuxt-link to="/blog" class="px-4">blog</nuxt-link>
          <nuxt-link to="/origenes" class="px-4">origenes</nuxt-link>
          <nuxt-link to="/contacto" class="px-4">contacto</nuxt-link>
          <nuxt-link to="/tienda" class="px-4">tienda</nuxt-link>
          
          <v-btn flat base-color="#000" rounded="0" prepend-icon="mdi-shopping-outline">$120.000</v-btn>
          <button class="rounded uppercase flex items-center justify center gap-x-3 py-1"> <v-icon icon="mdi-account-circle-outline"></v-icon></button>
        </div>
    </nav>
</template> 
  
<script setup>
  import NonayaHorizontalMonoBlack from '~/assets/svg/nonaya-horizontal-mono-black.svg'
</script>

<style>

.ripple {
  background-color: #000;
  color: #fff;
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #000 radial-gradient(circle, transparent 1%, #000 1%) center/15000%;
}
.ripple:active {
  background-color: #999;
  background-size: 100%;
  transition: background 0s;
}
  
</style>