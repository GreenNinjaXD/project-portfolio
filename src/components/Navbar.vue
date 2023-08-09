<template>
    <div class="navbar">
        <div class="navbar__top">
            <img src="../assets/img/logo.png" alt="" class="navbar__top_img">
            <h2 class="navbar__top_title">Uvays Sheraliev</h2>
            <div class="navbar__top_links">
                <a href="https://t.me/greenninjaoff"><i class="fa-brands fa-telegram navbar__top_links-icon"></i></a>
                <a href="https://www.instagram.com/greenninjaxd/"><i
                        class="fa-brands fa-instagram navbar__top_links-icon"></i></a>
                <a href="https://www.youtube.com/@greenninjaoff"><i
                        class="fa-brands fa-youtube navbar__top_links-icon"></i></a>
                <a href="https://twitter.com/greenninjaxdoff"><i
                        class="fa-brands fa-twitter navbar__top_links-icon"></i></a>
                <a href="https://github.com/GreenNinjaXD"><i class="fa-brands fa-github navbar__top_links-icon"></i></a>
            </div>
        </div>
        <div class="navbar__bottom">

            <router-link to="/" class="navbar__bottom_link">
                <i class="fa-regular fa-house navbar__bottom_link-icon"></i><p class="title-fff"> Home</p>
            </router-link>
            <router-link to="/about" class="navbar__bottom_link">
                <i class="fa-regular fa-user navbar__bottom_link-icon"></i><p class="title-fff"> About</p>
            </router-link>
            <router-link to="/skills" class="navbar__bottom_link">
                <i class="fa-sharp fa-light fa-bolt navbar__bottom_link-icon"></i><p class="title-fff"> Skills & Education</p>
            </router-link>
            <router-link to="/projects" class="navbar__bottom_link">
                <i class="fa-sharp fa-light fa-rectangle-vertical-history navbar__bottom_link-icon"></i><p class="title-fff"> Projects</p>
            </router-link>
            <router-link to="/contact" class="navbar__bottom_link">
                <i class="fa-sharp fa-regular fa-envelope navbar__bottom_link-icon"></i><p class="title-fff"> Contact</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    background: #040b14;
    width: 400px;
    height: 100%;

    &__top {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

        &_img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 10px solid #212431;
        }

        &_title {
            color: #fff;
            font-size: 40px;
            text-align: center;
            margin-top: 20px;
        }

        &_links {
            display: flex;
            gap: 10px;
            margin-top: 30px;

            &-icon {
                width: 30px;
                height: 30px;
                color: #fff;
                background: #212431;
                padding: 10px;
                border-radius: 50%;
                transition: .5s;

                &:hover {
                    background: #00b7ff;
                }
            }
        }
    }

    &__bottom {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        margin-left: 50px;
        color: #a8a9b4;
        cursor: pointer;
        font-size: 25px;
        gap: 40px;

        &_link {
            width: max-content;
            transition: .5s;
            display: flex;
            gap: 20px;
            align-items: center;
            color: #a8a9b4;

            &:hover .navbar__bottom_link-icon {
                color: #00b7ff;
            }

            &:hover {
                color: #fff;
            }

            &-icon {
                width: 30px;
                height: 30px;
            }
        }
    }
}
.router-link-exact-active .navbar__bottom_link-icon{
    color: #00b7ff;
}
.router-link-exact-active .title-fff{
    color: #fff;
}

</style>