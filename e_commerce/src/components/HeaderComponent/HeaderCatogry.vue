<template>
    <div>
        <ul class="nav nav-fill justify-content-between mx-5">
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">العروض</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">منتجات بتصاميم جاهزة</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">معارض ومؤتمرات</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">طباعة الكانفاس</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">طباعة كبيرة الحجم</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">التغليف والتعبئة</a>
                <div v-if="isHovered" class="hover-div bg-light">Content for التغليف والتعبئة</div>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">مطبوعات ورقية</a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-dark" href="#" @mouseover="showDiv2" @mouseout="hideDiv2">الهدايا الدعائية</a>
                <div v-if="isHovered2" class="hover-div  position-fixed top-0 start-0 bg-white end-0 d-flex ">
                    <div class="col-1  mx-2">

                    </div>
                    <div class="col-2 mt-4  ">

                        <div class="card border-0 rounded-0  ">
                            <img src="../../assets/Tobuy.svg" class="card-img-top p-1 rounded-0" alt="...">

                        </div>
                        <a href="#" class=" btn text-end w-100 border border-0 rounded-0 mt-2" style="font-weight: bold;">
                            <i class=" p-1 fa-solid fa-arrow-left "></i>كروت شخصية</a>


                    </div>
                    <div class="col-1  mx-2">

                    </div>
                    <div class="col-2  ">

                    </div>
                    <div class="col-2">

                    </div>
                    <div class="col-2 ">
                        <ul class="nav flex-column list-unstyled mt-5">
                            <li class="nav-item text-end mt-5">
                                <a class="nav-link text-dark" href="#">كاب </a>
                            </li>
                            <li class="nav-item text-end">
                                <a class=" nav-link text-dark" href="#">نوية</a>
                            </li>
                            <li class="nav-item text-end">
                                <a class="nav-link text-dark" href="#">زجاجات شرب </a>
                            </li>
                            <li class="nav-item text-end">
                                <a class="nav-link text-dark" href="#"> حقائب </a>
                            </li>
                        </ul>



                    </div>
                    <div class="col-2 ">

                        <ul class="nav flex-column list-unstyled me-5 ">
                            <li class="nav-item mt-5 ">
                                <a class="nav-link text-dark" href="#">الهدايا الدعائية</a>
                            </li>
                            <li class=" text-end nav-item">
                                <a class="nav-link text-dark " href="#">أفلام</a>
                            </li>
                            <li class=" text-end nav-item">
                                <a class="nav-link text-dark" href="#">أكياس</a>
                            </li>
                            <li class=" text-end nav-item">
                                <a class="nav-link text-dark" href="#">بروشات</a>
                            </li>
                            <li class="text-end nav-item">
                                <a class="nav-link text-dark" href="#">تي شيرت</a>
                            </li>
                            <li class="text-end nav-item">
                                <a class="nav-link text-dark" href="#">شريط تعليق</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">كروت شخصية</a>
                <div v-if="isHovered"
                    class="hover-div  position-fixed top-0 start-0 bg-white end-0 d-flex justify-content-between ">
                    <div class="col-2  ">
                        <div class="card border-0 rounded-0 p-2">
                            <img src="../../assets/Tobuy.svg" class="card-img-top p-1" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">كروت بزاوية دائرية</p>
                                <h5 class="card-title fw-3 text-center ">200 ر.س</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col-2  mx-2">
                        <div class="card  border-0 rounded-0 p-2">
                            <img src="../../assets/Tobuy.svg" class="card-img-top p-1" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">كروت بزاوية دائرية</p>
                                <h5 class="card-title fw-3 text-center ">200 ر.س</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col-2  ">
                        <div class="card  border-0 rounded-0 p-2">
                            <img src="../../assets/Tobuy.svg" class="card-img-top p-1" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">كروت بزاوية دائرية</p>
                                <h5 class="card-title fw-3 text-center ">200 ر.س</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col-2">

                    </div>
                    <div class="col-2">
                        <ul class="nav flex-column list-unstyled mt-5">
                            <li class="nav-item text-end mt-5">
                                <a class="nav-link text-dark" href="#">كروت داى كت </a>
                            </li>
                            <li class="nav-item text-end">
                                <a class=" nav-link text-dark" href="#">كروت بزاويا دائرية</a>
                            </li>
                            <li class="nav-item text-end">
                                <a class="nav-link text-dark" href="#">كروت داى كت زاويتين </a>
                            </li>
                        </ul>



                    </div>
                    <div class="col-2">

                        <ul class="nav flex-column list-unstyled ">
                            <li class="nav-item mt-5 ">
                                <a class="nav-link text-dark" href="#">كروت شخصية</a>
                            </li>
                            <li class=" text-end nav-item">
                                <a class="nav-link text-dark " href="#">كرت شخصى استاندر</a>
                            </li>
                            <li class=" text-end nav-item">
                                <a class="nav-link text-dark" href="#">كرت برساتون</a>
                            </li>
                            <li class=" text-end nav-item">
                                <a class="nav-link text-dark" href="#">كرت مقمش</a>
                            </li>
                            <li class="text-end nav-item">
                                <a class="nav-link text-dark" href="#">كرت بلاستيك</a>
                            </li>
                            <li class="text-end nav-item">
                                <a class="nav-link text-dark" href="#">كرت مربع بزوايا دائرية</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
  
<script>
export default {
    data() {
        return {
            isHovered: false,
            isHovered2: false

        };
    },
    methods: {
        showDiv() {
            this.isHovered = true;
        },
        hideDiv() {
            this.isHovered = false;
        },
        showDiv2() {
            this.isHovered2 = true;
        },
        hideDiv2() {
            this.isHovered2 = false;
        }
    }
};
</script>
  
<style scoped>
div {
    font-family: 'DIN Next LT W23';
    font-weight: 600
}

.card {
    background-color: #f2f2f2;
    border: 1px solid gray;
}

.text-end {
    font-weight: 100;
    font-size: small;
    margin: 0;
    padding: 0;

    margin-right: 25%;

}


.hover-div {
  display: none;
  position: absolute;
  padding: 10px;
  margin-top: 10%;
  height: 50%;
  border: 1px solid #ffffff;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

li:hover .hover-div {
  display: block;
  opacity: 1;
}
</style>
  