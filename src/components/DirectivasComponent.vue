<template>
    <div>
        <h3>{{$data}}</h3>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero"/> 
        <label>Introduzca un nombre</label>
        <input type="text" v-model="nombre"/>
        <h3 v-if="numero > 0" style="color:green">Positivo</h3> 
        <h3 v-else-if="numero < 0" style="color:red">Negativo</h3> 
        <h3 v-else style="color:darkblue">Cero</h3> 
        <label>Introduzca una serie</label>
        <input type="text" v-model="serieNueva"/>
        <button @click="nuevaSerie">NuevaSerie</button>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DirectivasComponent",
    data(){
        return{
            mostrar : true,
            numero: 0,
            nombre: "Alumno",
            series: ["Breaking Bad", "Futurama", "The Boys", "Stranger Things", "Bleach"],
            serieNueva: ""
        }
    },
    methods: {
        nuevaSerie(){
            this.series.push(this.serieNueva)
        }
    }
}
</script>

<style>
    ul{
        list-style: none;
    }
</style>