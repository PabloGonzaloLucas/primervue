<template>
    <div>
        <button @click="generarNumero">Generar impar</button>
        <h1>{{numeroRandom}}</h1>
        <h2 v-if="numeroRandom % 2 == 0">Par</h2>
        <h2 v-else-if="numeroRandom % 2 == 1">Impar</h2>
    </div>
</template>

<script>
export default {
    name:"ParImpar",
    data(){
        return{
            numeroRandom: 0
        }
    },
    methods : {
        generarNumero(){
            this.numeroRandom = parseInt(Math.random() * 100)
        }
    }
}
</script>

<style>

</style>