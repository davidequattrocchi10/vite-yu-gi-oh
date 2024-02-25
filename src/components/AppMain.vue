<script>
import axios from 'axios'
import { state } from '../state.js'
import ArchetypesFilter from './ArchetypesFilter.vue'
import CardsList from './CardsList.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    methods: {
        filterResults() {
            let url;
            if (state.selectedArchetype === '') {
                url = state.api_url;
            } else {
                url = state.api_url + '&archetype=' + state.selectedArchetype;
            }
            state.fetchData(url);



        }
    },
    mounted() {

        // Get all Cards
        state.fetchData(state.api_url)

    },
    components: {
        ArchetypesFilter,
        CardsList
    }

}
</script>

<template>
    <main>

        <!-- filter -->
        <ArchetypesFilter @filter="filterResults"></ArchetypesFilter>

        <!-- total results -->
        <div>
            {{ state.cards.length }}
        </div>


        <!-- cards list -->
        <CardsList :cards="state.cards"></CardsList>


    </main>
</template>


<style scoped></style>