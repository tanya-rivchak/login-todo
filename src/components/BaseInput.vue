<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
    inputType: {
        default: "text"
    },
    modelValue: {
        default: ""
    },
    inputLabel: {
        type: String,
        default: "Input"
    },
    inputError: {
        type: String,
        default: ""
    }
});
const emit = defineEmits(['update:modelValue', 
                          'removeError']);

const updateInput = (newVal) => {
    emit('update:modelValue', newVal);
    emit('removeError');
}

const classList = computed(() => ({
    "error": props.inputError.trim().length > 0 ? true : null
}))
</script>

<template>
    <div class="input" :class="classList">
        <label class="input__label">{{ inputLabel }}</label>
        <input :type="inputType" 
               :value="modelValue"
               @input="updateInput($event.target.value)" />
        <span class="input__error" v-show="classList.error">{{ inputError }}</span>
    </div>
</template>

<style lang="scss" scoped>
.input{
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 18px;
    input{
        border-radius: 0;
        border: 1px solid var(--gray);
        min-height: 43px;
        padding: 0 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 18px;
        transition: border-color .3s ease-in;
        &:focus, &:active{
            border-color: #101010;
        }
    }
    &__label{
        color: var(--black);
        margin-bottom: 7px;
        font-weight: 300;
    }
    &__error{
        position: absolute;
        left: 0;
        top: calc(100% + 2px);
        color: var(--error);
        padding-left: 15px;
        font-size: 14px;
        line-height: 16px;
        &::before, &::after{
            content: '';
            display: block;
            width: 10px;
            height: 2px;
            background: var(--error);
            position: absolute;
            top: 7px;
            left: 0px
        }
        &::before{
            transform: rotate(45deg);
        }
        &::after{
            transform: rotate(-45deg);
        }
    }
    &.error{
        input{
            border-color: var(--error)
        }
    }
    @media screen and (min-width: 1024px){
        margin-bottom: 40px;
        font-size: 18px;
        line-height: 21px;
        input{
            font-size: 18px;
            line-height: 21px;
            min-height: 53px;
        }
        &__error{
            font-size: 16px;
            line-height: 19px;
            padding-left: 22px;
            top: calc(100% + 5px);
            &::before, &::after{
                width: 14px;
                top: 8px;
            }
        }
    }
}
</style>