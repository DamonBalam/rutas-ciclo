import { default } from '../../../App.vue';
<template>
    <h1>Pokemon <span>#{{ id }}</span></h1>
    <div v-if="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // id: null
            pokemon: null
        }
    },
    created() {

        // this.id = id;
        this.getPokemon();
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
                this.pokemon = pokemon;
            } catch (error) {
                this.$router.push('/');
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>