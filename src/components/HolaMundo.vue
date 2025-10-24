<template>
    <div>
        <h1>Mi primer vue de viernes, que ilusion</h1>
        <img src="../assets/images/hk.jpg" alt="hk">
        <h1>Su nombre es {{nombre}}</h1>
        <h1>Su edad es {{edad}}</h1>
        <h1>Su array es {{miArray}}</h1>
    </div>
</template>

<script>
    
    export default {
        name: "HolaMundo",
        data() {
            return {
                nombre : "Alumno",
                edad: 25,
                miArray: [5,8,7],
                objeto: {}
            }   
        }
    }
</script>

<style>
    h1 {color: blue}
    @import '../assets/css/estilos.css';
</style>


