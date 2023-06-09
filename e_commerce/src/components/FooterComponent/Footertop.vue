
<template>
 <div class="container mt-5 mb-5">
    <p class="text-end small " style="font-weight: bold;">تواصل معنا</p>
    <h5 class="text-end " style="font-weight: 600;">يمكنك الطلب والاستفسار على اي من قنواتنا التالية</h5>
    <p class="text-end">اختر الأنسب لك</p>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100 rounded-0 border-0">
            <div class="card-body text-end ">
                <div class="text-end d-inline-block rounded">
                    <div  style="width: 33px;" ><i class="fa-regular fa-message"></i></div>
                 </div>
                <h5 class="card-title pt-5">اترك معلومات التواصل</h5>
              <p class="card-text pt-5"><i class="fa-solid fa-arrow-left mx-3"></i>اضغط هنا</p>
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card h-100 rounded-0 border-0">
              <div class="card-body text-end ">
                  <div class="text-end d-inline-block rounded">
                      <div  style="width: 33px;" ><i class="fa-solid fa-phone"></i></div>
                   </div>
                  <h5 class="card-title pt-5">إتصال</h5>
                <p class="card-text pt-5"><i class="fa-solid fa-arrow-left mx-3"></i>+966 50 550 2047</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 rounded-0 border-0">
              <div class="card-body text-end ">
                  <div class="text-end d-inline-block rounded">
                      <div  style="width: 33px;" ><i class="fa-regular fa-envelope"></i></div>
                   </div>
                  <h5 class="card-title pt-5">البريدالإلكترونى</h5>
                <p class="card-text pt-5"><i class="fa-solid fa-arrow-left mx-3"></i>+966 50 550 2047</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 rounded-0 border-0">
              <div class="card-body text-end ">
                  <div class="text-end d-inline-block rounded">
                      <div  style="width: 33px;" ><i class="fa-brands fa-whatsapp " ></i></div>
                   </div>
                  <h5 class="card-title pt-5">واتس آب</h5>
                <p class="card-text pt-5"><i class="fa-solid fa-arrow-left mx-3"></i>+966 50 550 2047</p>
              </div>
            </div>
          </div>
      </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    font-family: 'DIN Next LT W23';
}
    .d-inline-block{
        background-color: #8d2a46;
    }
    .card{
      background-color: #f2f2f2;
    }
    .fa-whatsapp ,.fa-envelope,.fa-phone, .fa-message{
        margin: 8px; color: white;
    }
    .card:hover {
    background-color: #009393;
    transition: background-color 1s;
}

.card-text{
  color: #00464A;
  font-weight: 600;
}
.card:hover h5,
.card:hover p {
    color: white;
    transition: color 1s;
}

.card:hover .rounded {
    background-color: white;
    transition: background-color 1s;
}

.card:hover .fa-whatsapp , .card:hover .fa-envelope ,.card:hover .fa-phone ,.card:hover .fa-message{
    color: #8d2a46;
    transition: color 1s;
}
.fa-arrow-left{
    color: #f2f2f2;
}
.card:hover .fa-arrow-left {
    color: white;
    transition: color 1s;
}
   </style>