<template>
    <div class="about">
        <h2 class="about__title">About</h2>
        <p class="about__text">Hey! I'm Muhammad Uvays Sheraliev. I'm front end web developer, I'm 17 years old. All of my skills, I learned in Pro Web!</p>
        <div class="about__info">
            <img src="../assets/img/logo.png" alt="">
            <div class="about__info_block">
                <h2 class="about__info_block-title">Web Developer</h2>
                <p class="about__info_block-text">Even more information about me.</p>
                <div class="about__info_block-gen">
                    <div class="about__info_block-gen-left">
                        <ul>
                            <li><i class="fa-regular fa-chevron-right about__info_block-gen-left-icon"></i></li>
                            <li class="about__info_block-gen-left-fin">Birthday:</li>
                            <li class="about__info_block-gen-left-in">7 July 2006</li>
                        </ul>
                        <ul>
                            <li><i class="fa-regular fa-chevron-right about__info_block-gen-left-icon"></i></li>
                            <li class="about__info_block-gen-left-fin">City:</li>
                            <li class="about__info_block-gen-left-in">Tashkent, Uzbekistan</li>
                        </ul>
                    </div>
                    <div class="about__info_block-gen-right">
                        <ul>
                            <li><i class="fa-regular fa-chevron-right about__info_block-gen-left-icon"></i></li>
                            <li class="about__info_block-gen-left-fin">Age:</li>
                            <li class="about__info_block-gen-left-in">17</li>
                        </ul>
                        <ul>
                            <li><i class="fa-regular fa-chevron-right about__info_block-gen-left-icon"></i></li>
                            <li class="about__info_block-gen-left-fin">Degree:</li>
                            <li class="about__info_block-gen-left-in">School</li>
                        </ul>
                    </div>
                </div>
                <p class="about__info_block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                    nesciunt itaque dolor aspernatur officia voluptatum sunt numquam quas, exercitationem fuga?</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about {
    margin-left: 400px;
    padding: 30px;
    font-family: Poppins;

    &__title {
        color: rgb(0, 38, 255);
        font-size: 70px;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            display: block;
            width: 90px;
            height: 5px;
            background: #149ddd;
            bottom: 0;
            left: 0;
        }
    }

    &__text {
        margin-top: 40px;
        font-size: 20px;
    }

    &__info {
        margin-top: 30px;
        display: flex;

        & img {
            width: 500px;
            height: 400px;
            object-fit: cover;
        }

        &_block {
            display: flex;
            flex-direction: column;
            margin-left: 50px;

            &-title {
                color: rgb(0, 38, 255);
                font-size: 60px;
                margin-top: -20px;
            }

            &-text {
                font-size: 30px;
            }

            &-gen {
                display: flex;
                margin-top: 20px;
                gap: 150px;

                &-left {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;

                    & ul {
                        display: flex;
                        gap: 10px;

                        & li {
                            font-size: 30px;
                        }
                    }

                    &-in {
                        margin-left: 10px;
                    }

                    &-icon {
                        color: #0400ff;
                    }

                    &-fin {
                        font-weight: 700;
                    }
                }

                &-right {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;

                    & ul {
                        display: flex;
                        gap: 10px;

                        & li {
                            font-size: 30px;
                        }
                    }
                }

            }

            &-desc {
                font-size: 20px;
                margin-top: 30px;
            }
        }
    }
}
</style>