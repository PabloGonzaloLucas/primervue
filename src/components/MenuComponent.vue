<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to='/'>Home</router-link>
            </li>
            <li>
                <router-link to='/cine'>Cine</router-link>
            </li>
            <li>
                <router-link to='/musica'>Musica</router-link>
            </li>
            <li>
                <router-link to='/ciclovida'>ciclo vida</router-link>
            </li>
            <li>
                <router-link to='/directivas'>Directivas</router-link>
            </li>
            <li>
                <router-link to='/parimpar'>ParImpar</router-link>
            </li>
            <li>
                <router-link to='/conmutada'>Propiedad Conmutada</router-link>
            </li>
            <li>
                <router-link to='/filters'>Filters</router-link>
            </li>
        </ul>    
    </div>    
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
    ul#menu {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        list-style: none;
        background-color: rgb(151, 218, 195);
        padding: 0;
        margin: 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    ul#menu li {
        padding: 15px 25px;
        margin: 0;
        transition: background-color 0.3s ease;
        border: 1px solid black; 
        margin-left:5px;
        margin-right:5px;
        border-radius: 4px;
        background-color: rgb(81, 255, 197);
    }

    ul#menu li:hover {
        background-color: rgb(131, 198, 175);
    }

    ul#menu a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
    }

    ul#menu a:hover {
        color: white;
    }
</style>