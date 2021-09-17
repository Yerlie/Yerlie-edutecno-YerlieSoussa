<template>
  <div id="app">
    <img src="assets/img/titulo.png" />
    <h1>PokeGuía</h1>
    Nombre:
    <input v-model="nombre" />
    <button @click="buscar">Buscar</button>
    <pokemon v-for="item in pokemones" :key="item" :nombre='item'></pokemon>
  </div>
</template>

<script>
import pokemon from "./components/pokemon.vue";

export default {
  name: "App",
  components: {
    pokemon,
  },
  data() {
    return {
      nombre: "pikachu",
      pokemones:["pikachu"]
    };
  },methods:{
    buscar(){
      this.pokemones=[this.nombre]
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
