<script>
import CardItem from './CardItem.vue';
import { state } from '../state.js';
import LoadingComponent from './LoadingComponent.vue'


export default {
    name: 'CardsList',
    data() {
        return {
            state
        }
    },
    props: {
        cards: Array
    },
    components: { CardItem, LoadingComponent }
}
</script>

<template>
    <section class="cards">
        <div class="container">
            <div class="row" v-if="!state.loading">
                <div class="col" v-for="card in cards">
                    <CardItem :card="card"></CardItem>
                </div>
            </div>
            <LoadingComponent v-else></LoadingComponent>
        </div>
    </section>
</template>


<style scoped></style>