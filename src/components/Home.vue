<template>
    <div class="home">
        <img src="../assets/img/back.png" alt="" class="home__bg">
        <h2 class="home__title">Hey! I'm Muhammad Uvays Sheraliev</h2>
        <h2 class="home__text">I'm Web Developer</h2>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home {

    &__bg {
        object-fit: cover;
        width: 100%;
    }

    &__title {
        position: absolute;
        top: 40%;
        left: 550px;
        color: #fff;
        font-size: 50px;
        text-shadow: 0 0 10px #000000,
                0 0 20px #000000,
                0 0 40px #000000,
                0 0 80px #000000,
                0 0 160px #000000;
    }

    &__text {
        position: absolute;
        top: 50%;
        left: 550px;
        color: #fff;
        font-size: 50px;
        text-shadow: 0 0 10px #000000,
                0 0 20px #000000,
                0 0 40px #000000,
                0 0 80px #000000,
                0 0 160px #000000;
    }
}
</style>