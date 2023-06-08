<template>
 <!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Footer</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="./bootstrap-5.3.0-dist/bootstrap-5.3.0-dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet">

</head>

<body>

  <footer class="footer bg-white text-dark mt-4">
    <div class="container-fluid">
      <div class="row" dir="rtl">
        <div class="col-md-2 ">
             <div class="section_1">
          <h5>دَرْب برنت</h5>
          <section>
            مبيعات الشركات<br>
            من نحن<br>
            تواصل معنا<br>

          </section>
        </div>
    </div>

        <div class="col-md-7 ">
          <h5>روابط مهمة</h5>
          <section>
            سياسة الخصوصية<br>
            سياسة الإستبدال والإرجاع <br>

          </section>
          
        </div>

        <div class="col-md-3 ">
          
            <h5>حسابات التواصل الإجتماعي</h5>
            <ul class="list-unstyled d-flex text-center">
              <li><a class="text-dark Link m-2 rounded-circle border border-light " href="#"><i
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

        <div class="col-md-5 d-flex container mediaquery">
         <div class="overlay-div">
          <div class="whatsapp-icon">
            <i class="fab fa-whatsapp"></i>
          </div>

          <h5 class="bg-white me-4 p-2" dir="rtl">
            حياك👋<br>
            يمكنك الطلب والاستفسار مباشرة<br>
            عن طريق الواتس اب<br>
          </h5>
        </div>
        </div>

        <div class="col-md-4" dir="rtl">
          <p> الحقوق محفوظة © 2023 دَرْب برنت - شركه درب برودكشنز</p>
        </div>

        <div class="col-md-2 section_2">
          <p>صُنع بواسطة روّاد</p>
        </div>
        

      </div>
    </div>
  </footer>

  
</body>

</html>
</template>

<script>
export default {

}
</script>

<style scoped>
.Link {
  text-decoration: none;
}
body
{
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
  height: 48px;
  border-radius: 65%;
  top:40px;
  right:-20px;
}

.whatsapp-icon i {
  color: white;
  font-size: 150%;
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