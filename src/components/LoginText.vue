<script setup>
import { defineProps } from "vue";

defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <div class="login-text" v-html="text"></div>
</template>

<style lang="scss" scoped>
.login-text ::v-deep{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 156.69%;
    *{
        margin-bottom: 15px;
        &:last-child{
            margin-bottom: 0;
        }
    }
    strong, b{
        font-weight: 500;
    }
    ul{
        list-style: none;
        li{
            padding-left: 40px;
            position: relative;
            font-size: 14px;
            >b{
                font-size: 16px;
                display: block;
                margin-bottom: 10px;
            }
            &::before{
                content: '';
                display: block;
                width: 20px;
                height: 12px;
                box-sizing: border-box;
                border-bottom: 4px solid var(--primary);
                border-left: 4px solid var(--primary);
                position: absolute;
                left: 2px;
                top: 4px;
                transform: rotate(-45deg);
            }
        }
    }
}
</style>