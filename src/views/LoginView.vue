<script setup>
import MainLayout from "@/layouts/MainLayout"

import LoginBanner from "@/components/LoginBanner"
import BaseContainer from "@/components/BaseContainer"
import LoginCols from "@/components/LoginCols"
import LoginText from "@/components/LoginText"
import LoginForm from "@/components/LoginForm"

import { ref } from "vue";

const pageTitle = ref("Welcome to<br>Business Analytics Online");
const text = ref(`<p><strong>Business Analytics</strong> — a new, 
                  convenient tool for managing and forecasting your business performance, 
                  which will help analyze your own finances and cash flows, visualize 
                  your reporting, business processes, KPI's</p>
                  <ul>
                    <li>
                      <b>Interactive Reporting</b>
                      <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</p>
                    </li>
                    <li>
                      <b>Automated data updates</b>
                      <p>The application automatically updates and structures the data in just 60 seconds, saving you time and money.</p>
                    </li>
                    <li>
                      <b>Data Security</b>
                      <p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
                    </li>
                  </ul>`);
</script>

<template>
  <MainLayout>
    <LoginBanner :title="pageTitle" />
    <BaseContainer>
      <LoginCols>
        <template v-slot:left>
          <LoginText :text="text" />
        </template>
        <template v-slot:right>
          <LoginForm />
        </template>
      </LoginCols>
    </BaseContainer>
  </MainLayout>
</template>
