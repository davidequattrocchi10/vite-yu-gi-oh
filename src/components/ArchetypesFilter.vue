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
    <select name="archetype" id="archetype" v-model="state.selectedArchetype" @change="$emit('filter')">
        <option value="">All</option>
        <!-- all archetype here -->
        <option :value="archetype.archetype_name" v-for="archetype in state.archetypes">
            {{ archetype.archetype_name }}

        </option>
    </select>
</template>



<style scoped></style>