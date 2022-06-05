<template>
    <button class="btn btn-primary" type="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.btn-primary{
    padding: 12px 20px;
    text-transform: uppercase;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: #fff;
    background: var(--primary);
    border: 2px solid var(--primary);
    align-items: center;
    &:hover{
        color: var(--primary);
        background: #fff;
    }
    @media screen and (min-width: 1024px){
        font-size: 25px;
        line-height: 29px;
    }
    &.error{
        border-color: var(--error);
        color: #fff;
        background: var(--error);
        &:hover{
            color: var(--error);
            background: #fff;
        }
    }
    &.small {
        padding: 0 5px;
        height: 30px;
        min-width: 30px;
        font-size: 20px;
        line-height: 22px;
    }
}
</style>