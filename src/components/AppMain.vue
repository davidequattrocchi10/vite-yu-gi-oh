<script>
import { state } from '../state.js';
import ArchetypesFilter from './ArchetypesFilter.vue';
import CardsList from './CardsList.vue';
import TotalCardResults from './TotalCardResults.vue';

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
        CardsList,
        TotalCardResults
    }

}
</script>

<template>
    <main>

        <!-- filter -->
        <ArchetypesFilter @filter="filterResults"></ArchetypesFilter>

        <!-- total results -->
        <TotalCardResults></TotalCardResults>


        <!-- cards list -->
        <CardsList :cards="state.cards"></CardsList>


    </main>
</template>


<style scoped>
main {
    background-color: orange;
}
</style>