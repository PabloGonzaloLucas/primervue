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
        </ul>    
    </div>    
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
    ul#menu{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        list-style: none;
        border: 1px solid black;
        border-radius: 8px;
        background-color: rgb(151, 218, 195);
    }
    ul#menu li {
        border: 1px solid rgb(172, 153, 153);
        padding: 15px;
        margin:10px;
        background-color: aliceblue;
        border-radius: 10px;
    }
</style>