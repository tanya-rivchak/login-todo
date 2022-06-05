<script setup>
import BaseHeader from "@/components/BaseHeader"
import BaseFooter from "@/components/BaseFooter"
</script>

<template>
    <BaseHeader />
    <main class="main">
        <slot></slot>
    </main>
    <BaseFooter />
</template>

