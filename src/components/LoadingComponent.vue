<script>
export default {
    name: 'LoadingComponent'

}
</script>

<template>
    <div class="loader">
        Loading...
    </div>
</template>


<style scoped>
div.loader {

    text-align: center;
    padding: 3rem;
    animation-name: load;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes load {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

}
</style>