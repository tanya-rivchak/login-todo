<script setup>
import { defineProps } from "vue";

defineProps({
    src: {
        type: String,
        default: "logo.svg"
    }
})
</script>

<template>
    <div class="logo">
        <img :src="require(`@/assets/${src}`)" alt="logo">
    </div>
</template>

<style lang="scss" scoped>
.logo{
    display: inline-flex;
    width: 103px;
    height: 66px;
    align-items: center;
    img{
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
}
</style>

