<script setup>
import BaseContainer from "@/components/BaseContainer";
import BaseLogo from "@/components/BaseLogo";
</script>

<template>
    <header class="header">
        <div class="header__top"></div>
        <div class="header__bot">
            <BaseContainer>
                <BaseLogo />
            </BaseContainer>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    display: flex;
    flex-flow: column nowrap;
    .logo{
        width: 51.5px;
        height: 33px;
        @media screen and (min-width: 1024px){
            width: 103px;
            height: 66px;
        }
    }
}
.header__top{
    background: var(--black);
    min-height: 43px;
    padding: 15px 0;
    @media screen and (min-width: 1024px){
        min-height: 53px;
    }
}
.header__bot{
    padding: 15px 0;
    background: var(--gradient);
}
</style>

