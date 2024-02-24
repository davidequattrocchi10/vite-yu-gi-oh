<script >
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { state } from './state.js'

export default {
  name: 'App',
  data() {
    return {
      cards: {},
      state
    }
  },
  components: {
    AppHeader,
    AppMain
  },

  mounted() {
    console.log(state.api_url)
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
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <div>

    <div class="card" v-for="card in cards">
      <img :src="card.card_images[0].image_url">
      <h3>{{ card.name }}</h3>
      <div> {{ card.archetype }}</div>
    </div>
  </div>
</template>

<style ></style>
