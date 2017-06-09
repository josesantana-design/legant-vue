<template lang="html">
  <div class="">
    <template v-if="persona">
      <h1 class="title" v-text="datosPersona.nombre"></h1>
      <h2 v-text="datosPersona.correoe"></h2>
      <img :src="datosPersona.foto">
    </template>
  </div>
</template>

<script src="./persona.js"></script>

<style src="./persona.scss" scoped=""></style>
