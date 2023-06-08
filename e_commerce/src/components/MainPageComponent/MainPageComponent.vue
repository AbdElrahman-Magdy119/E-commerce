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
          <FooterComponent/>
        </div>

    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import HeaderCatogry from '@/components/HeaderComponent/HeaderCatogry.vue'
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'
export default {
    components:{
        HeaderComponent,
        FooterComponent,
        HeaderCatogry
     }
}
</script>

<style scoped>
@import url('@/assets/Style/Gstyle\ .css');

</style>