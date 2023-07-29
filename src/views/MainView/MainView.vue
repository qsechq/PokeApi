<template>
  <div class="container">
    <div v-if="isLoadig">Идет загрузка</div>
    <section v-else class="pokemons">
      <div class="search">
        <input v-model="searchQuery" type="text" class="search__input" placeholder="Введите имя покемона">
      </div>
      <ul class="pokemons__list">
        <li class="x-pokemon__item" v-for="item in searchedPokemons" :key="item.id">
          <pokemon-item :id="item.id" :name="item.name"
            :img="item.sprites.front_shiny" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import * as api from '../../api'
import { PokemonItem } from "../../components/PokemonItem";

export default {
  name: 'MainView',
  components: {
    PokemonItem
  },
  data() {
    return {
      pokemonsList: [],
      isLoadig: true,
      searchQuery: ''
    }
  },
  methods: {
    async getPokemons() {
      try {
        const { data } = await api.pokemons.getPokemons()
        for (const pocemon of data.results) {
          const { data } = await api.pokemons.getPokemonByList(pocemon.url)
          this.pokemonsList.push(data)
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoadig = false
      }
    }
  },
  mounted() {
    this.getPokemons()
  },
  computed: {
    searchedPokemons() {
      return this.pokemonsList.filter(item => item.name.includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" src="./main-view.scss" scoped></style>