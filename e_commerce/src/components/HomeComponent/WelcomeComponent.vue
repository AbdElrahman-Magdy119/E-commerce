<template >
  <div class="row mt-5 " style="--bs-gutter-x: 0rem">


    <div class="col-lg-6  scrollable-container " style="height: 460px; overflow-y: scroll; overflow-x: hidden;">
      <div class="row">
        <div class="col-5 p-3" style="direction: rtl; background-color: #f2f2f2">
          <span style="font-weight: bolder">
            تي شيرت<br />
            <small> دَرب برنت </small>
          </span>
          <div dir="ltr">
            <img src="../../assets/t-shirt.svg" class="mainimg" alt="" />
          </div>
        </div>
        <div style="width: 5%;"></div>
        <div class="col-5 p-3 " style="direction: rtl; background-color: #f2f2f2">
          <span style="font-weight: bolder">
            بوكسات التعبئة و التغليف <br />
            <small> دَرب برنت </small>
          </span>
          <div dir="ltr">
            <img src="../../assets/box.svg" class="mainimg" alt="" />
          </div>
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-5 p-3" style="direction: rtl; background-color: #f2f2f2">
          <span style="font-weight: bolder">
            كروت شخصية <br />
            <small> دَرب برنت </small>
          </span>
          <div dir="ltr">
            <img src="../../assets/mug.svg" class="mainimg" alt="" />
          </div>
        </div>
        <div style="width: 5%;"></div>

        <div class="col-5 p-3" style="direction: rtl; background-color: #f2f2f2">
          <span style="font-weight: bolder">
            طباعة كوب<br />
            <small> دَرب برنت </small>
          </span>
          <div dir="ltr">
            <img src="../../assets/card.svg" class="mainimg" alt="" />
          </div>
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-5 p-3" style="direction: rtl; background-color: #f2f2f2">
          <span style="font-weight: bolder">
            طباعة الملصقات <br />
            <small> دَرب برنت </small>
          </span>
          <div dir="ltr">
            <img src="../../assets/ticket.svg" class="mainimg" alt="" />
          </div>
        </div>
        <div style="width: 5%;"></div>

        <div class="col-5  p-3" style="direction: rtl; background-color: #f2f2f2">
          <span class="" style="font-weight: bolder">
            الطباعة علي الأكياس <br />
            <small> دَرب برنت </small>
          </span>
          <div dir="ltr">
            <img src="../../assets/t-shirt.svg" class="mainimg" alt="" />
          </div>
        </div>
      </div>
    </div>


    <div class="col-lg-6 p-4">
      <div class="container" style="direction: rtl">
        <div class="row">
          <h1 class="mt-4 " style="
            font-family: DIN Next LT W23;
            font-size: 2.5rem;
            font-weight: bold;
            text-align: right;
            color: #00464a;
          ">
            الطباعة حسب الطلب <br />
            ببساطة
          </h1>
        </div>

        <div class="row" style="color: #00464a; margin-top: 5%; font-weight: bold">
          <div class="row">
            <div class="col-md-5">
              <p><i class="fa-solid fa-check"></i> افضل جوده مقابل السعر</p>
            </div>

            <div class="col-md-3">
              <p><i class="fa-solid fa-check"></i> افكار مبتكرة</p>
            </div>

            <div class="col-md-4">
              <p><i class="fa-solid fa-check"></i> خدمات التخزين والشحن</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5" style="color: #00464a">
              <p style="color: #00464a">
                <i class="fa-solid fa-check"></i> من دون حد أدني
              </p>
            </div>

            <div class="col-4" style="color: #00464a">
              <p><i class="fa-solid fa-check"></i> التصميم مجاني</p>
            </div>
          </div>
        </div>

        <div class="row mt-5" style="font-family: DIN Next LT W23">
          <div class="col-md-4">
            <button type="button" class="btnS btn rounded-0" style="
              background-color: #00464a;
              width: 12rem;
              height: 2rem;
              padding: 3%;
              font-weight: bold;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;

            ">
              بناء صندوق الهدايا &nbsp; &nbsp; &nbsp;
              <i class="fa fa-sharp fa-arrow-left" style="color: white"></i>
            </button>
          </div>

          <div class="col-md-6">
            <button type="button" class="btnS btn rounded-0" style="
              background-color: white;
              color: #00464a;
              width: 12rem;
              height: 2rem;
              padding: 3%;
              margin-right: 1%;
              font-weight: bold;
              border: 1px solid black;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
            ">
              تواصل معنا &nbsp; &nbsp; &nbsp;
              <i class="fa fa-light fa-phone"></i>
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-4 image-container">
            <img  src="../../assets/user-1.png.svg" alt="">
<img src="../../assets/user-2.png.png" alt="">
<img src="../../assets/user-3.png.svg" alt="">
          </div>

          <div class="rating col-6">
            <span class="rating-value" style="font-weight: bold; font-size: small">0.5</span>
            <span class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
            <p class="small underline">
              أكثر من 60 تقييمًا تم التحقق منه من Google
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainimg {
  width: 100%;
  height: 100%;
}
.scrollable-container {
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* For Chrome, Edge, and Safari */
}

/* For Chrome, Edge, and Safari */
.scrollable-container::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

/* For Chrome, Edge, and Safari */
.scrollable-container::-webkit-scrollbar-thumb {
  background-color: transparent;
}

/* For Firefox */
.scrollable-container::-moz-scrollbar {
  width: 6px;
  background-color: transparent;
}

/* For Firefox */
.scrollable-container::-moz-scrollbar-thumb {
  background-color: transparent;
}

</style>