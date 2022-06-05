<script setup>
import BaseInput from "@/components/BaseInput";
import PrimaryButton from "@/components/PrimaryButton";

import LoginService from "@/services/login";

import { reactive, toRaw } from "vue";

// constructor for login form fields store
function FormFields(name = "", password = ""){
    this.name = name;
    this.password = password;
}

//login form fields 
const loginForm = reactive(new FormFields)
const loginErrors = reactive(new FormFields)

const submitLogin = async() => {
    try{
        const response = await LoginService.login(toRaw(loginForm));
        Object.keys(loginErrors).forEach(key => {
            updateInputError(key, response[key])
        })
    }catch(error){
        console.log(error)
    }
}

const updateInputError = (key, newValue="") => {
    loginErrors[key] = newValue
}
</script>

<template>
    <form @submit.prevent="submitLogin" class="login-form">
        <div class="login-form__body">
            <BaseInput v-model="loginForm.name"
                       inputLabel="Name" 
                       :inputError="loginErrors.name"
                       @removeError="updateInputError('name')" />
            <BaseInput v-model="loginForm.password" 
                       inputLabel="Password" 
                       inputType="password"
                       :inputError="loginErrors.password"
                       @removeError="updateInputError('password')" />
            <PrimaryButton type="submit">Login</PrimaryButton>
            <router-link to="" class="btn btn-forgot">Forgot Password</router-link>
        </div>
        <router-link to="" class="btn btn-register">Register now</router-link>
    </form>
</template>

<style lang="scss" scoped>
.login-form{
    background: #FFF;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-top: -80px;
    @media screen and (min-width: 768px){
        margin-top: -180px;
    }
    &__body{
        padding: 40px 15px 0;
        display: flex;
        flex-flow: column nowrap;
        @media screen and (min-width: 768px){
            padding-left: 30px;
            padding-right: 30px;
        }
    }
}
.btn-register{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: var(--black);
    padding: 17px 20px;
    background: #F6F6F6;
    width: 100%;
    @media screen and (min-width: 1024px){
        font-size: 25px;
        line-height: 29px;
    }
    &:hover{
        color: var(--primary)
    }
}
.btn-forgot{
    margin: 20px auto 23px;
}
</style>