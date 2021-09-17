<template>
  <div>
    <br>
    <img :src="src">
    <h2>Movimientos</h2>
    <div v-for="(item,index) in moves" :key="index">{{item.move.name}}</div>
    <h2>Habilidades</h2>
    <div v-for="(item,index) in abilities" :key="'sss'+index">{{item.ability.name}}</div>
  </div>
</template>

<script>
export default {
  name: "pokemon",
  data(){
    return {
      abilities:[],
      moves:[],
      src:""
    }
  },
  props: ["nombre"],
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon/"+this.nombre)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.abilities = res.abilities;
        this.moves=res.moves;
        this.src=res.sprites.front_default;
      })
      .catch(() => {
        this.abilities = [];
        this.moves=[];
        this.src="";
        alert("Pokemon no encontrado")
      });
  },
};
</script>


<style scoped>
</style>
