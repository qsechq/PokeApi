<template>
    <div class="container">
        <div class="back">
            <router-link :to="{ name: 'main' }" class="back__link">
                назад
            </router-link>
        </div>
        <div class="cart">
            <div class="picture">
                <img :alt="pokemonCart.name" class="picture__img" :src='pokemonCart.sprites.front_shiny'>
            </div>

            <div class="info">
                <div class="char">
                    <stats-item :isName="true" class="char__item char__item-name" :name="'name'" :pocemon="pokemonCart.name"/>
                    <ul class="char__list">
                        <li class="x-char__item" v-for="item in pokemonCart.stats" :key="item.stat.name">
                            <stats-item :name="item.stat.name" :value="item.base_stat" />
                        </li>
                    </ul>
                </div>

                <div class="abilities">
                    <div class="abilities__sub char__sub">abilities</div>
                    <ul class="abilities__list">
                        <li class="x-abilities__item" v-for="item in pokemonCart.abilities" :key="item.ability.name">
                            <stats-item :isAbility="true" class="char__item" :name="item.ability.name"/>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import * as api from '../../api'
import { StatsItem } from '../../components/StatsItem'

export default {
    name: 'DetailView',
    components: {
        StatsItem
    },
    data() {
        return {
            pokemonCart: null
        }
    },
    methods: {
        async getPokemonById() {
            try {
                const { data } = await api.pokemons.getPokemonById(this.$route.params.id)
                this.pokemonCart = data
            } catch (e) {
                console.log(e);
            }
        }
    },
    mounted() {
        this.getPokemonById()
    },
}
</script>

<style src="./detail-view.scss" lang="scss" scoped></style>