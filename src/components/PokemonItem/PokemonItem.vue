<template>
    <div class="c-pokemon__item">
        <img :src='img' :alt="img" class="pokemon__img">
        <div class="pokemon__name">{{ name }}</div>
        <router-link :to="{ name: 'detail', params: { id: id } }">
            подробнее
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'PokemonItem',
        props: {
            name: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" src="./pokemon-item.scss" scoped>

</style>