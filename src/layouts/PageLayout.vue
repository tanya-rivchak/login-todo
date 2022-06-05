<script setup>
import BaseLogo from "@/components/BaseLogo";
import BaseContainer from "@/components/BaseContainer";
import BaseFooter from "@/components/BaseFooter";
</script>

<template>
    <BaseLogo class="page-logo"/>
    <main class="main">
        <BaseContainer>
            <slot></slot>
        </BaseContainer>
    </main>
    <BaseFooter />
</template>

<style lang="scss" scoped>
.page-logo{
    margin: 35px auto;
    height: 59.5px;
    width: 93px;
    @media screen and (min-width: 1024px){
        margin: 65px auto;
        height: 119px;
        width: 186px;
    }
}
.main{
    display: flex;
    flex-flow: column nowrap;
    min-height: 70vh;
    >.container{
        background: #fff;
        display: flex;
        flex-flow: column nowrap;
        flex: 1;
        margin-bottom: 40px;
        padding: 32px 15px;
        @media screen and (min-width: 768px){
            padding-left: 30px;
            padding-right: 30px;
        }
    }
    &::before, &::after{
        content: '';
        width: 100%;
        top: 0px;
        left: 0;
        right: 0;
    }
    &::before{
        background: #FAF7F7;
        position: fixed;
        z-index: -2;
        height: 100vh;
    }
    &::after{
        min-height: 300px;
        height: 73.8vh;
        max-height: 797px;
        background: var(--gradient);
        position: absolute;
        z-index: -1;
        @media screen and (min-width: 1024px){
            min-height: 300px;
        }
    }
}
</style>

