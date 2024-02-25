<script>
import axios from 'axios'
import { state } from '../state.js'

export default {
    name: 'AppMain',
    data() {
        return {
            cards: {},
            state,
            archetypes: [],
            selectedArchetype: ''
        }
    },
    methods: {
        filterResults() {
            console.log('filter all cards')
            const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&archetype=' + this.selectedArchetype
            console.log(url)

            axios.get(url)
                .then(response => {
                    console.log(response.data.data);
                    this.cards = response.data.data;
                })
                .catch(error => {
                    console.error(error);
                })

        }

    },
    mounted() {
        // Get all archetypes
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(responde => {
                console.log(responde.data);
                this.archetypes = responde.data;

            })
            .catch(error => {
                console.error(error);
            })



        // Get all Cards
        axios.get(state.api_url)
            .then(response => {
                console.log(response.data.data);
                this.cards = response.data.data;
            })
            .catch(error => {
                console.error(error);
            })


    }

}
</script>

<template>
    <main>

        <!-- filter -->
        <select name="archetype" id="archetype" v-model="selectedArchetype" @change="filterResults">
            <option value="">All</option>
            <!-- all archetype here -->
            <option :value="archetype.archetype_name" v-for="archetype in archetypes">
                {{ archetype.archetype_name }}

            </option>
        </select>

        <!-- total results -->


        <!-- cards list -->
        <section class="cards">
            <div class="container">
                <div class="row">
                    <div class="col" v-for="card in cards">
                        <div class="card">
                            <img :src="card.card_images[0].image_url">
                            <h3>{{ card.name }}</h3>
                            <div> {{ card.archetype }}</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </main>
</template>


<style scoped></style>