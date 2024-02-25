import { reactive } from "vue";
import axios from 'axios'

export const state = reactive({
    //  golbal state
    api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: [],
    archetypes: [],
    selectedArchetype: '',


    //Reactive object 
    fetchData(url) {
        // Get all Cards
        axios.get(url)
            .then(response => {
                console.log(response.data.data);
                this.cards = response.data.data;
            })
            .catch(error => {
                console.error(error);
            })


    },
    getArchetypesList(archetype_url) {
        // Get all archetypes
        axios.get(archetype_url)
            .then(responde => {
                console.log(responde.data);
                this.archetypes = responde.data;

            })
            .catch(error => {
                console.error(error);
            })

    }
})
