<template>
   <div>
        <div>
           <HeaderComponent/>
           <HeaderCatogry/>
        </div>
       
<FilterComponent/>
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
 import Gifthome from '../Gifts/Gifthome.vue'
 import FilterComponent from '../Filter/FilterComponent.vue'
export default {
    components:{
        HeaderComponent,
        FooterComponent,
        HeaderCatogry,
        HometopComponent,
        HomeComponent,
        Footertop,
        WelcomeComponent,
        Gifthome,
        FilterComponent
   
     }
}
</script>

<style scoped>


</style>