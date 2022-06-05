<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    width: 1164px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 30px);
}
</style>