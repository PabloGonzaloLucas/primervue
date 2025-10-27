<template>
    <div>
        <h1>Metodos filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                {{num}},
                {{ $filters.getNumeroDoble(num)}}
            </li>
        </ul>

        <ul>
            <li v-for="name in nombres" :key="name">
                {{name}}
                {{$filters.mayuscula(name)}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MetodosFilters",
    data(){
        return{
            numeros: [55,21,33,44,88],
            nombres: ["Lucía", "Diana", "Antonia", "Carlos"]
        }
    }
}
</script>

<style>

</style>