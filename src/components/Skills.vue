<template>
    <div class="skilleduc">
        <div class="skills">
            <h2 class="skills__title">Skills</h2>
            <p class="skills__text">Programming languages & Tools</p>
            <div class="skills__info">
                <i class="fa-brands fa-html5 skills__info_icon"></i>
                <i class="fa-brands fa-css3-alt skills__info_icon"></i>
                <i class="fa-brands fa-js skills__info_icon"></i>
                <i class="fa-brands fa-vuejs skills__info_icon"></i>
                <i class="fa-brands fa-sass skills__info_icon"></i>
                <i class="fa-brands fa-npm skills__info_icon"></i>
                <i class="fa-brands fa-figma skills__info_icon"></i>
                <i class="fa-brands fa-codepen skills__info_icon"></i>
            </div>
            <div class="skills__desc">
                <div class="skills__desc_left">
                    <span>Workflow</span>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Responsive Design</li>
                    </ul>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Website Layout</li>
                    </ul>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Front End</li>
                    </ul>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Unique Design</li>
                    </ul>
                </div>
                <div class="skills__desc_right">
                    <span>Other Skills</span>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Adobe</li>
                    </ul>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Video Editing</li>
                    </ul>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Design</li>
                    </ul>
                    <ul>
                        <li><i class="fa-duotone fa-check"></i> Gaming</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="learn">
            <h2 class="learn__title">Education</h2>
            <div>
                <div class="learn__info">
                    <p class="learn__info_title">PRO WEB</p>
                    <p class="learn__info_data">October 2022 - August 2023</p>
                </div>
                <p class="learn__text">Computer Science - Front End Web Development</p>
            </div>
            <div>
                <div class="learn__info">
                    <p class="learn__info_title">50's School</p>
                    <p class="learn__info_data">September 2022 - May 2024</p>
                </div>
                <p class="learn__text">Science - Math & Physics</p>
            </div>
            <div>
                <div class="learn__info">
                    <p class="learn__info_title">AIS</p>
                    <p class="learn__info_data">September 2021 - May 2022</p>
                </div>
                <p class="learn__text">Computer Science - Python, Chinese</p>
            </div>
            <div>
                <div class="learn__info">
                    <p class="learn__info_title">21's School</p>
                    <p class="learn__info_data">September 2013 - May 2021</p>
                </div>
                <p class="learn__text">School Subjects</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.skilleduc {
    display: flex;
    gap: 20px;
    background: #e5f1ec;
}

.learn {
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

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
        font-size: 20px;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        align-items: center;

        &_title {
            font-size: 40px;
            font-weight: 700;
        }

        &_data {
            font-size: 30px;
            color: #ff6600;
        }
    }
}

.skills {
    margin-left: 400px;
    padding: 30px;

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

    & span {
        font-size: 40px;
    }

    &__text {
        margin-top: 40px;
        font-size: 40px;
    }

    &__info {
        color: #a8a9b4;
        display: flex;
        gap: 20px;
        margin-top: 40px;
        margin-bottom: 50px;

        &_icon {
            width: 70px;
            height: 70px;
        }
    }

    &__desc {
        display: flex;
        gap: 100px;

        &_left {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 25px;

            & ul {
                font-size: 25px;
            }
        }

        &_right {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 25px;

            & ul {
                font-size: 25px;
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

    &-figma {
        transition: .5s;

        &:hover {
            color: #333333;
        }
    }

    &-codepen {
        transition: .5s;

        &:hover {
            color: #000000;
        }
    }
}
</style>