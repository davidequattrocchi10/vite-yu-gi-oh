<script>
export default {
    name: 'AppHeader'
}
</script>


<template>
    <header>
        <div class="container">
            <img src="https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png" alt="">
            <h1> Yu-Gi-Oh Api </h1>
        </div>

    </header>
</template>



<style scoped>
header {
    background-color: var(--yugioh-light);
    color: var(--yugioh-dark);
    padding: 0.5rem 0;

    .container {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
    }

    & h1 {
        font-weight: 600;
    }
}
</style>