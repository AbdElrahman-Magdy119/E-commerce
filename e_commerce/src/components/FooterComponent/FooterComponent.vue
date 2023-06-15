<template>
 

<body>

  <footer class="footer bg-white text-dark mt-4">
    <div class="container-fluid">
      <div class="row" dir="rtl">
        <div class="col-md-2 me-5 col-5">
             <div class="section_1">
          <h5  style="font-weight: 600;">دَرْب برنت</h5>
          <section>
            مبيعات الشركات<br>
            من نحن<br>
            تواصل معنا<br>

          </section>
        </div>
    </div>

        <div class="col-md-6  col-4 me-5">
          <h5 style="font-weight: 600;" >روابط مهمة</h5>
          <section>
            سياسة الخصوصية<br>
            سياسة الإستبدال والإرجاع <br>

          </section>
          
        </div>

        <div class="col-md-3 col-12 text-center ">
          
            <h5>حسابات التواصل الإجتماعي</h5>
            <div class="col-sm-4"></div>
            <ul class="list-unstyled col-md-9 col-5  m-auto d-flex  ">
              <li class="me-sm-3"><a class="text-dark Link m-2 rounded-circle border border-light " href="#"><i
                    class="fab fa-facebook-f"></i></a></li>
              <li><a class="text-dark Link  m-2 rounded-circle border border-light " href="#"><i
                    class="fa-brands fa-instagram"></i></a></li>
              <li><a class="text-dark Link  m-2 rounded-circle border border-light  " href="#"><i
                    class="fab fa-twitter"></i></a></li>
              <li><a class="text-dark Link  m-2 rounded-circle border border-light " href="#"><i
                    class="fa-brands fa-snapchat"></i></a></li>
              <li><a class="text-dark Link  m-2 rounded-circle border border-light " href="#"><i
                    class="fab fa-tiktok"></i></a></li>

            </ul>
         
        </div>
       
       
      </div>

     

      <div class="row down pt-3 mt-5 "  dir="rtl">

        <div class="col-1"></div>
        <div class="col-md-1 mx-4 d-flex container mediaquery">
         <div class="overlay-div">
          <div class="whatsapp-icon">
            <i class="fab fa-whatsapp"></i>
          </div>

          <h5 class="bg-white welcome me-4 mt-2 p-2" dir="rtl">
            حياك👋<br>
            يمكنك الطلب والاستفسار مباشرة<br>
            عن طريق الواتس اب<br>
          </h5>
        </div>
        </div>

        <div class="col-md-4 col-12 text-center" dir="rtl" >
          <small>الحقوق محفوظة<b>  © 2023 دَرْب برنت - شركه درب برودكشنز</b></small>
        </div>

        <div class="col-md-2 section_2 col-12">
          <small>صُنع بواسطة روّاد </small>
        </div>
        

      </div>
    </div>
  </footer>

  
</body>


</template>

<script>
export default {

}
</script>

<style scoped>

.section_2 {
  text-align: center;
  }
.Link {
  text-decoration: none;
}
body
{
  font-family: 'DIN Next LT W23';
  overflow-x:hidden ;
}
.down{
  background-color: #F2F2F2;
}

@media screen and (min-width: 800px) {
  .section_2 {
    margin-left: 8%;
  }
}


.whatsapp-icon {
  position: absolute;
  background-color:  #04AF48;
;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13%;
    height: 73%;
    border-radius: 50%;
    top: 49%;
  
    left: 92%;
}

.whatsapp-icon i {
  color: white;
  font-size: 150%;
}
.welcome{
  font-size: smaller;
    width: max-content;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 2%;
}
.down div:nth-child(3){
  position: relative;
    left: 4%;
}

@media screen and (min-width: 800px) {
  .section_1 {
    margin-right: 40%;
  }
}

@media screen and (max-width: 550px) {
  .mediaquery {
    margin-left: 15%;
  }
}

.overlay-div
{
  position: absolute;
  top: -80px;
  left: 0;
  color: black;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.container {
  position: relative;
  width: 400px;
  height: 70px;
}
</style>