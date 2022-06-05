<script setup>
import BaseContainer from "@/components/BaseContainer";
import BaseLogo from "@/components/BaseLogo";
import FooterNav from "@/components/FooterNav";

import { ref } from "vue";

const copyright = ref("Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.")
const navList = ref([
    { title: "Terms & Conditions", href: "" },
    { title: "Privacy", href: "" },
    { title: "Notice at Collection", href: "" },
    { title: "CA Privacy Hub", href: "" },
    { title: "Contact Us", href: "" },
    { title: "Sitemap", href: "" }
])
</script>

<template>
    <footer class="footer">
        <BaseContainer>
            <div class="footer__top">
                <BaseLogo />
                <FooterNav :navList="navList" />
            </div>
            <div class="footer__bot">
                <p class="copyright">{{ copyright }}</p>
            </div>
        </BaseContainer>
    </footer>
</template>

<style lang="scss" scoped>
.footer{
    background: var(--black);
    padding: 30px 0;
    color: #fff;
    .logo{
        width: 56px;
        height: 35px;
        margin-bottom: 10px;
    }
    .container{
        display: flex;
        flex-flow: column nowrap;
    }
}
.footer__top{
    border-bottom: 1px solid #fff;
    padding-bottom: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}
.copyright{
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
}
</style>