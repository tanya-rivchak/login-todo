<template>
    <div class="login-cols">
        <div class="login-cols__left">
            <slot name="left"></slot>
        </div>
        <div class="login-cols__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-cols{
    display: flex;
    flex-flow: column-reverse nowrap;
    padding: 40px 0 0;
    >*{
        width: 100%;
        margin-bottom: 40px;
    }
    @media screen and (min-width: 768px){
        flex-flow: row nowrap;
        justify-content: space-between;
        &__left{
            max-width: calc(58.33% - 8px);
        }
        &__right{
            max-width: calc(41.67% - 8px);
        }
    }
}
</style>