<template>
    <div class="c-char__item c-char__item-ability" v-if="isAbility">
        <div class="char__val">{{ name }}</div>
    </div>
    <div class="c-char__item " v-else-if="isName">
        <div class="char__sub">{{ name }}</div>
        <div class="char__val">{{ pocemon }}</div>
    </div>
    <div class="c-char__item" v-else>
        <div class="char__sub">{{ name }}</div>
        <div class="char__val">{{ value }}</div>
    </div>
</template>

<script>
export default {
    name: 'StatsItem',
    props: {
        name: {
            type: String,
            default: ''
        },
        pocemon: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: null
        },
        isAbility: {
            type: Boolean,
            default: false
        },
        isName: {
            type: Boolean,
            default: false
        }
    }

}
</script>

<style src="./stats-item.scss" lang="scss" scoped></style>