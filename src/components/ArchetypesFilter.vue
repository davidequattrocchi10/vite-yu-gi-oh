<script>
import { state } from '../state.js';

export default {
    name: 'ArchetypesFilter',
    data() {
        return {
            state
        }
    },
    emits: ['filter'],
    created() {
        state.getArchetypesList('https://db.ygoprodeck.com/api/v7/archetypes.php')

    }

}
</script>

<template>
    <div class="container">
        <select name="archetype" id="archetype" v-model="state.selectedArchetype" @change="$emit('filter')">
            <option value="">All</option>
            <!-- all archetype here -->
            <option :value="archetype.archetype_name" v-for="archetype in state.archetypes">
                {{ archetype.archetype_name }}

            </option>
        </select>

    </div>
</template>



<style scoped>
select {
    margin: 1rem 0;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border-style: none;
}
</style>