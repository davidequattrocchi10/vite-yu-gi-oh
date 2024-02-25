<script>
import { state } from '../state.js';

export default {
    name: 'TotalCardResults',
    data() {
        return {
            state
        }
    },
    computed: {
        getTotatlResults() {
            return state.cards.length
        }
    },

}
</script>


<template>
    <div class="container">
        <div>
            Found total results: {{ getTotatlResults }}
        </div>
    </div>
</template>


<style scoped>
.container {
    >div {
        background-color: var(--yugioh-dark);
        padding: 0.5rem;
        color: var(--yugioh-light);


    }
}
</style>