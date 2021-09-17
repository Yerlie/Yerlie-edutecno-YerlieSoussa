<template>
  <div id="app">
    <h1>Crea una nueva tarea</h1>
    <label>Tarea </label>
    <input type="text" v-model="nuevaTarea" placeholder="Ingresa una nueva tarea" />
    <button @click="crear">Crear</button>
    <br />
    <h1>Lista</h1>
    <br />
    <ul>
      <li v-for="tarea in lista">{{ tarea }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "App",
  data: function() {
    return {
      nuevaTarea: "",
      lista: [],
    };
  },
  methods: {
    crear: function() {
      this.nuevaTarea = this.nuevaTarea.trim();
      if (this.nuevaTarea !== "") {
        this.lista.push(this.nuevaTarea);
        this.nuevaTarea = "";
      }
    },
  },
};
</script>
<style>
* {
  text-align: center;
}

h1 {
  color: #888;
}

label {
  font-size: 20px;
}

ul {
  display: inline-block;
}
</style>
