<script setup>
import { defineProps } from "vue";

defineProps({
    navList: {
        type: Array,
        default: () => ([])
    }
})
</script>

<template>
    <div class="footer__nav">
        <router-link v-for="(navListItem, index) in navList"
                     :key="'nav'+index"
                     :to="navListItem.href"
                     class="footer__nav-item">
            {{ navListItem.title }}
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.footer__nav{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 0;
    &-item{
        font-weight: 500;
        font-size: 14px;
        line-height: 156.69%;
        color: #fff;
        text-decoration: none;
        margin-left: 20px;
        margin-bottom: 10px;
        transition: opacity .3s ease-in;
        &:hover{
            opacity: .7;
        }
        @media screen and (min-width: 1024px){
            font-size: 16px;
        }
    }
}
</style>