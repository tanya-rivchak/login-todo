<script setup>
import BaseContainer from "@/components/BaseContainer.vue"

import { computed, defineProps } from "vue"

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    bannerImg: {
        type: String,
        default: 'login-banner.jpg'
    }
})
const styles = computed(() => ({
    "background-image": `url(${require('@/assets/'+props.bannerImg)})`
}))
</script>

<template>
    <div class="login-banner" :style="styles">
        <BaseContainer>
            <h1 v-html="title"></h1>
        </BaseContainer>
    </div>
</template>

<style lang="scss" scoped>
.login-banner{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    min-height: 257px;
    padding: 35px 0 70px;
    display: flex;
    align-items: flex-end;
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 156.69%;
    }
    @media screen and (min-width: 1024px){
        min-height: 457px;
        padding: 70px 0;
        h1{
            font-size: 55px;
            max-width: calc(58.33% - 30px);
        }
    }
}
</style>