<template>
    <nav>
        <router-link :to="{name:'Home'}"> MAKALE LİSTESİ </router-link>
        <router-link :to="{name:'Ekle'}"> MAKALE OLUŞTUR </router-link>
    </nav>
</template>


<script>

export default{


}

</script>


<style>

nav {
    display: flex;
    justify-content: space-evenly;
    margin-bottom:60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ffe4e1;
    text-transform: uppercase;
}
nav ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}

nav li {
    list-style-type: none;
    margin-left: 20px;
}

nav a {
    color: #6959cd;
}


nav .router-link-active {
    color: red;

}
</style>