<template>
    <div>
        <!-- <RouterLink :to="{ name: 'home' }">Pokemon List</RouterLink> |
                            <RouterLink :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon ID</RouterLink> |
                            <RouterLink :to="{ name: 'about' }">About</RouterLink> -->
        <CustomLink v-for="link in links" :key="link.to" :link="link"/>
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    },
    data() {
        return {
            links: [
                { to: '/home', name: 'Pokemons' },
                { to: '/50', name: 'Pokemon by ID' },
                { to: '/about', name: 'About' },
                { to: 'https://google.com', name: 'Google' },
            ]
        }
    }

}
</script>


<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;

}

/* a.router-link-exact-active {
    color: #42b983
} */
</style>