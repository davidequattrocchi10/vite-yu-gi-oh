<script>
export default {
    name: 'CardItem',
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url">
        <div>
            <h3>{{ card.name }}</h3>
            {{ card.archetype }}
        </div>
    </div>
</template>



<style scoped>
.card {

    height: 100%;

    >img {
        display: block;
    }

    >div {
        background-color: var(--yugioh-light);
        padding: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
}
</style>