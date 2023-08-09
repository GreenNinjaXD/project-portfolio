<template>
    <div class="project">
        <h2 class="project__title">Projects</h2>
        <div class="project__cinephille">
            <img src="../assets/img/cinephille.png" alt="">
            <div class="project__cinephille_info">
                <h2 class="project__cinephille_info-title">Cinephille</h2>
                <p class="project__cinephille_info-desc">Cinephille online cinema</p>
                <div class="project__icons">
                    <p class="project__icons-title">Languages & Tools used</p>
                    <div class="project__icons-icon">
                        <i class="fa-brands fa-html5 project__icons-icon-i"></i>
                        <i class="fa-brands fa-js project__icons-icon-i"></i>
                        <i class="fa-brands fa-vuejs project__icons-icon-i"></i>
                        <i class="fa-brands fa-sass project__icons-icon-i"></i>
                        <i class="fa-brands fa-npm project__icons-icon-i"></i>
                    </div>
                </div>
                <a href="https://greenninjaxd.github.io/Vue-cinema/" class="project__cinephille_info-link">
                    <button>DEMO</button>
                </a>
            </div>
        </div>
        <div class="project__oku">
            <div class="project__oku_info">
                <h2 class="project__oku_info-title">Oku</h2>
                <p class="project__oku_info-desc">Oku online library</p>
                <div class="project__icons-r">
                    <p class="project__icons-r-title">Languages & Tools used</p>
                    <div class="project__icons-r-icon">
                        <i class="fa-brands fa-html5 project__icons-r-icon-i"></i>
                        <i class="fa-brands fa-css3-alt project__icons-r-icon-i"></i>
                    </div>
                </div>
                <a href="https://greenninjaxd.github.io/oku/" class="project__oku_info-link">
                    <button>DEMO</button>
                </a>
            </div>
            <img src="../assets/img/oku.png" alt="">
        </div>
        <div class="project__premiumcar">
            <img src="../assets/img/premiumcar.png" alt="">
            <div class="project__premiumcar_info">
                <h2 class="project__premiumcar_info-title">Premiumcar</h2>
                <p class="project__premiumcar_info-desc">Premiumcar blog of cars</p>
                <div class="project__icons">
                    <p class="project__icons-title">Languages & Tools used</p>
                    <div class="project__icons-icon">
                        <i class="fa-brands fa-html5 project__icons-icon-i"></i>
                        <i class="fa-brands fa-css3-alt project__icons-icon-i"></i>
                    </div>
                </div>
                <a href="https://greenninjaxd.github.io/Premium-car/" class="project__premiumcar_info-link">
                    <button>DEMO</button>
                </a>
            </div>
        </div>
        <div class="project__aloha">
            <div class="project__aloha_info">
                <h2 class="project__aloha_info-title">To Do List</h2>
                <p class="project__aloha_info-desc">Online To Do List</p>
                <div class="project__icons-r">
                    <p class="project__icons-r-title">Languages & Tools used</p>
                    <div class="project__icons-r-icon">
                        <i class="fa-brands fa-html5 project__icons-r-icon-i"></i>
                        <i class="fa-brands fa-js project__icons-icon-i"></i>
                        <i class="fa-brands fa-sass project__icons-icon-i"></i>
                    </div>
                </div>
                <a href="https://greenninjaxd.github.io/todolist/" class="project__aloha_info-link">
                    <button>DEMO</button>
                </a>
            </div>
            <img src="../assets/img/todo.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.project {
    margin-left: 400px;
    padding: 30px;

    &__icons {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-title {
            font-size: 50px;
            font-weight: 700;
        }

        &-icon {
            display: flex;
            gap: 20px;
            color: #a8a9b4;

            &-i {
                width: 70px;
                height: 70px;
            }
        }
    }

    &__icons-r {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: end;

        &-title {
            font-size: 50px;
            font-weight: 700;
        }

        &-icon {
            display: flex;
            gap: 20px;
            color: #a8a9b4;

            &-i {
                width: 70px;
                height: 70px;
            }
        }
    }

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

    &__cinephille {
        margin-top: 50px;
        display: flex;
        gap: 50px;

        & img {
            width: 400px;
            height: 500px;
            object-fit: cover;
            box-shadow: 0 0 20px #000;
        }

        &_info {
            display: flex;
            flex-direction: column;
            gap: 20px;

            &-title {
                font-size: 50px;
                font-weight: 700;
            }

            &-desc {
                font-size: 30px;
            }

            &-link {
                margin-top: 30px;

                & button {
                    padding: 20px;
                    font-size: 30px;
                    border-radius: 20px;
                    width: 150px;
                    background: #000;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    transition: .5s;

                    &:hover {
                        background: #149ddd;
                    }
                }
            }
        }
    }

    &__oku {
        margin-top: 50px;
        display: flex;
        gap: 50px;
        justify-content: end;

        & img {
            width: 400px;
            height: 500px;
            object-fit: cover;
            box-shadow: 0 0 20px #000;
        }

        &_info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: end;

            &-title {
                font-size: 50px;
                font-weight: 700;
            }

            &-desc {
                font-size: 30px;
            }

            &-link {
                margin-top: 30px;

                & button {
                    padding: 20px;
                    font-size: 30px;
                    border-radius: 20px;
                    width: 150px;
                    background: #000;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    transition: .5s;

                    &:hover {
                        background: #149ddd;
                    }
                }
            }
        }
    }

    &__premiumcar {
        margin-top: 50px;
        display: flex;
        gap: 50px;

        & img {
            width: 400px;
            height: 500px;
            object-fit: cover;
            box-shadow: 0 0 20px #000;
        }

        &_info {
            display: flex;
            flex-direction: column;
            gap: 20px;

            &-title {
                font-size: 50px;
                font-weight: 700;
            }

            &-desc {
                font-size: 30px;
            }

            &-link {
                margin-top: 30px;

                & button {
                    padding: 20px;
                    font-size: 30px;
                    border-radius: 20px;
                    width: 150px;
                    background: #000;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    transition: .5s;

                    &:hover {
                        background: #149ddd;
                    }
                }
            }
        }
    }

    &__aloha {
        margin-top: 50px;
        display: flex;
        gap: 50px;
        justify-content: end;

        & img {
            width: 400px;
            height: 500px;
            object-fit: cover;
            box-shadow: 0 0 20px #000;
        }

        &_info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: end;

            &-title {
                font-size: 50px;
                font-weight: 700;
            }

            &-desc {
                font-size: 30px;
            }

            &-link {
                margin-top: 30px;

                & button {
                    padding: 20px;
                    font-size: 30px;
                    border-radius: 20px;
                    width: 150px;
                    background: #000;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    transition: .5s;

                    &:hover {
                        background: #149ddd;
                    }
                }
            }
        }
    }
}
.fa {

    &-html5 {
        transition: .5s;

        &:hover {
            color: #ff6600;
        }
    }

    &-css3-alt {
        transition: .5s;

        &:hover {
            color: #149ddd;
        }
    }

    &-js {
        transition: .5s;

        &:hover {
            color: #fbff00;
        }
    }

    &-vuejs {
        transition: .5s;

        &:hover {
            color: #1b9744;
        }
    }

    &-sass {
        transition: .5s;

        &:hover {
            color: #ff00b3;
        }
    }

    &-npm {
        transition: .5s;

        &:hover {
            color: #ff0000;
        }
    }
}
</style>