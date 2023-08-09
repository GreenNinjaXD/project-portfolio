<template>
    <div class="contact">
        <h2 class="contact__title">Contact</h2>
        <div class="contact__info">
            <div class="contact__info_left">
                <div class="contact__info_left-loc">
                    <i class="fa-light fa-location-dot"></i>
                    <div class="contact__info_left-loc-item">
                        <p>Location:</p>
                        6 Shaykhontohur Street, Tashkent, 26
                    </div>
                </div>
                <div class="contact__info_left-mail">
                    <i class="fa-regular fa-envelope"></i>
                    <div class="contact__info_left-mail-item">
                        <p>Email:</p>
                        greenninjawillbewebprogrammer@gmail.com
                    </div>
                </div>
                <div class="contact__info_left-call">
                    <i class="fa-light fa-mobile"></i>
                    <div class="contact__info_left-call-item">
                        <p>Call:</p>
                        +998 97 417 78 77
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5992.9943145957905!2d69.26380096499531!3d41.31980148850903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3e35ae2d2d%3A0xb3a8024f6c920b30!2s6%20Shaykhontohur%20Street%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1691437059411!5m2!1sen!2s"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <form action="https://formsubmit.co/greenninjawillbewebprogrammer@gmail.com" class="contact__info_right"
                method="POST">
                <div class="contact__info_right-f">
                    <div class="contact__info_right-f-f">
                        Your Name
                        <input type="text" name="name" required>
                    </div>
                    <div class="contact__info_right-f-s">
                        Your Email
                        <input type="email" name="email" required>
                    </div>
                </div>
                <div class="contact__info_right-s">
                    Subject
                    <input type="text" name="subject" required>
                </div>
                <div class="contact__info_right-t">
                    Message
                    <textarea name="msg" required></textarea>
                </div>
                <button>Send Message</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.fa {

    &-mobile {
        width: 30px;
        height: 30px;
        background: #def0ff;
        padding: 15px;
        color: #37a5ff;
        border-radius: 50%;
        transition: .5s;

        &:hover {
            background: #008cff;
            color: #fff;
        }
    }

    &-location-dot {
        width: 30px;
        height: 30px;
        background: #def0ff;
        padding: 15px;
        color: #37a5ff;
        border-radius: 50%;
        transition: .5s;

        &:hover {
            background: #008cff;
            color: #fff;
        }
    }

    &-envelope {
        width: 30px;
        height: 30px;
        background: #def0ff;
        padding: 15px;
        color: #37a5ff;
        border-radius: 50%;
        transition: .5s;

        &:hover {
            background: #008cff;
            color: #fff;
        }
    }
}
.contact {
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

    &__info {
        margin-top: 50px;
        margin-bottom: 100px;
        display: flex;
        justify-content: space-between;

        &_left {
            display: flex;
            flex-direction: column;
            max-width: 690px;
            padding: 40px;
            background: #ffffff;
            box-shadow: 0 0 10px #292929;
            gap: 30px;

            &-loc {
                display: flex;
                align-items: center;
                gap: 20px;

                &-item {
                    font-size: 20px;

                    & p {
                        font-size: 30px;
                        font-weight: 700;
                    }
                }
            }

            &-mail {
                display: flex;
                align-items: center;
                gap: 20px;

                &-item {
                    font-size: 20px;

                    & p {
                        font-size: 30px;
                        font-weight: 700;
                    }
                }
            }

            &-call {
                display: flex;
                align-items: center;
                gap: 20px;

                &-item {
                    font-size: 20px;

                    & p {
                        font-size: 30px;
                        font-weight: 700;
                    }
                }
            }
        }

        &_right {
            display: flex;
            flex-direction: column;
            max-width: 720px;
            padding: 40px;
            background: #ffffff;
            box-shadow: 0 0 10px #292929;

            & button {
                padding: 15px;
                font-size: 30px;
                display: flex;
                justify-content: center;
                margin-top: 40px;
                border: none;
                outline: none;
                background: #000;
                color: #fff;
                border-radius: 10px;
                width: 50%;
                margin-left: 50%;
                transform: translate(-50%);
                cursor: pointer;
                transition: .5s;

                &:hover {
                    background: #008cff;
                }
            }

            &-f {
                display: flex;
                gap: 20px;

                &-f {
                    font-size: 30px;

                    & input {
                        display: flex;
                        flex-direction: column;
                        width: 310px;
                        height: 80px;
                        border: 1px solid #aaaaaa;
                        outline: none;
                        padding: 6px 12px;
                        font-size: 20px;
                    }
                }

                &-s {
                    font-size: 30px;

                    & input {
                        display: flex;
                        flex-direction: column;
                        width: 310px;
                        height: 80px;
                        border: 1px solid #aaaaaa;
                        outline: none;
                        padding: 6px 12px;
                        font-size: 20px;
                    }

                }
            }

            &-s {
                font-size: 30px;
                margin-top: 20px;

                & input {
                    display: flex;
                    flex-direction: column;
                    width: 640px;
                    height: 80px;
                    border: 1px solid #aaaaaa;
                    outline: none;
                    padding: 6px 12px;
                    font-size: 20px;
                }
            }

            &-t {
                margin-top: 20px;
                font-size: 30px;

                & textarea {
                    display: flex;
                    flex-direction: column;
                    width: 640px;
                    height: 300px;
                    border: 1px solid #aaaaaa;
                    outline: none;
                    padding: 6px 12px;
                    resize: none;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>