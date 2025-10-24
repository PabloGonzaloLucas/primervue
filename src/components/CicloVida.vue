<template>
    <div>
        <h2 style="color:red">{{mensaje}}</h2>
        <button @click="cambiarMensaje()">cambiarMensaje</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mensaje: "Hoy es viernes!!!"
        }
    },
    methods: {
        cambiarMensaje(){
            this.mensaje = "HOY SE SALE"
        }
    },
    mounted(){
        console.log("montado")
    },
    created(){
        console.log("creado")
    },
    updated() {
        console.log("actualizao")
    },
    unmounted(){
        console.log("desmontao")
    }

}
</script>

<style>

</style>