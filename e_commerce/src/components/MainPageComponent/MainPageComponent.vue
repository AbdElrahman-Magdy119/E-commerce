<template>
   <div>
        <div>
           <HeaderComponent/>
           <HeaderCatogry/>
        </div>
       

        <div> 
       
            <RouterView></RouterView>
        </div>

        <div>
            <Footertop/>
          <FooterComponent/>
        </div>

    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import HeaderCatogry from '@/components/HeaderComponent/HeaderCatogry.vue'
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'
import HometopComponent from '../HomeComponent/HometopComponent.vue'
import HomeComponent from '../HomeComponent/HomeComponent.vue'
import Footertop from '../FooterComponent/Footertop.vue'
import WelcomeComponent from '../HomeComponent/WelcomeComponent.vue'
 
export default {
    components:{
        HeaderComponent,
        FooterComponent,
        HeaderCatogry,
        HometopComponent,
        HomeComponent,
        Footertop,
        WelcomeComponent,
   
     }
}
</script>

<style scoped>


</style>