<template>
    <div class="c-avatar">
        <img :src="img" :alt="name" class="avatar__img">
    </div>
</template>

<script>
    export default {
        name: 'PokemonAvatar',
        props: {
            img: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped src="./pokemon-avatar.scss">

</style>