<template>
    <div class="c-pokemon__item">
        <pokemon-avatar :img='img' :name="name" class="pokemon__img" />
        <div class="pokemon__name">{{ name }}</div>
        <router-link :to="{ name: 'detail', params: { id: id } }">
            подробнее
        </router-link>
    </div>
</template>

<script>
import { PokemonAvatar } from '../PokemonAvatar'

    export default {
        name: 'PokemonItem',
        components: {
            PokemonAvatar
        },
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