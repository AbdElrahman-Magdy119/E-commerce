
<template>
    <div class="row container m-auto d-flex mt-5">

        <div class="col-2">
            <div class="hide1">

                <img src="../../assets/Misk.svg" alt="">

            </div>

            <div class="image-wrapper " id="show1">

                <img src="../../assets/Misk.svg" alt="">

            </div>
        </div>
        <div class="col-2">
            <div class="hide2">

                <img src="../../assets/Misk.svg" alt="">

            </div>
            <div class="image-wrapper show2">

                <img src="../../assets/kinoz.svg" alt="">

            </div>
        </div>
        <div class="col-2">
            <div class="hide3">

                <img src="../../assets/Misk.svg" alt="">

            </div>
            <div class="image-wrapper show3">

                <img src="../../assets/bank.svg" alt="">

            </div>
        </div>
        <div class="col-2">
            <div class="hide4">

                <img src="../../assets/Misk.svg" alt="">

            </div>
            <div class="image-wrapper show4">

                <img src="../../assets/Tawn.svg" alt="">

            </div>
        </div>
        <div class="col-2">
            <div class="hide5">

                <img src="../../assets/Misk.svg" alt="">

            </div>
            <div class="image-wrapper show5">

                <img src="../../assets/Sam.svg" alt="">

            </div>
        </div>
        <div class="col-2">
            <div class="hide6">

                <img src="../../assets/Misk.svg" alt="">

            </div>
            <div class="image-wrapper show6">

                <img src="../../assets/Solut.svg" alt="">

            </div>
        </div>
    </div>


    <div class="row text-center mt-5">
        <small>آلية العمل</small>
        <h2>أفضل قيمة مقابل السعر</h2>
        <h5>فقط أخبرنا ما هو طلبك , ونحن نتكفل بالمهمة</h5>

    </div>

    <div class="row">

        <div class="col leftdiv  text-black">
            <span>الطريقة القديمة</span>

            <div>
                <ul class="list-group ">
                    <li class="list-group-item     d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Feather-arrows-arrow-left.svg.png" class="me-3" alt="Image 1">
                        البحث كثيرا عن الموردين
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Feather-arrows-arrow-left.svg.png" class="me-3" alt="Image 2">
                        عدم ضمان الجودة
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Feather-arrows-arrow-left.svg.png" class="me-3" alt="Image 3">
                        تكاليف إضافية للتصميم
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Feather-arrows-arrow-left.svg.png" class="me-3" alt="Image 3">
                        لا يقدم حلول الشحن والتخزين
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Feather-arrows-arrow-left.svg.png" class="me-3" alt="Image 3">
                        عدم تنوع طرق الدفع
                    </li>

                    <!-- Add more list items as needed -->
                </ul>
            </div>



        </div>
        <div class="col rightDiv  text-white">
            <span> <img src="../../assets/Vector.svg" class="me-3" alt="Image 3">

                طريقةدَرب برنت


            </span>

            <div>
                <ul class="list-group">
                    <li class="list-group-item    d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Vector.svg" class="me-3" alt="Image 1">
                        حدد <b>.منتجاتك</b>
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Vector.svg" class="me-3" alt="Image 2">
                        تلقى <b>تصميمات مجانية </b> مع <b>.عرض أسعار</b>
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Vector.svg" class="me-3" alt="Image 3">
                        بعد <b>الموافقة </b> تنتج <b>.كل طلباتك </b>
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse">
                        <img src="../../assets/Vector.svg" class="me-3" alt="Image 3">
                        بعدالانتاج نقوم<b>بتعبئة وتخزين البضائع </b>.الخاصة بك
                    </li>
                    <li class="list-group-item d-flex align-items-center flex-row-reverse ">
                        <img src="../../assets/Vector.svg" class="me-3" alt="Image 3">
                        اشحن سلعك إلى <b>جميع أنحاء دول العالم</b> فى عبوات مجمعة او فردية
                    </li>

                    <!-- Add more list items as needed -->
                </ul>

                <div class="text-center">
                    <button class="btn btn-dark ">ابدأ الآن</button>
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
div {
    font-family: 'DIN Next LT W23';
}

small {
    color: #00464A;
    font-weight: bold;
}

span {
    font-size: xx-large;
    font-weight: bolder;

}

h5 {
    color: #8D2A46;
    font-size: medium;
    font-weight: bold;
}

.list-group-item {
    background-color: transparent;
    border: none;

}

h2 {
    font-weight: 600;
}

.rightDiv {
    background-color: #009393;

}

.rightDiv .list-group-item {
    color: white;


}

.leftdiv {
    background-color: #F2F2F2;
}

.leftdiv,
.rightDiv {
    margin: 4%;
    padding: 2%;
    text-align: end;
    font-size: small;
}

.list-group-item img {
    width: 5%;
}
.col-2{
    margin-top: auto;
}
button {
    width: 90%;
    border-radius: 0;
}

ul,
li {
    display: inline;
    list-style: none;
}

.hide1,
.hide2,
.hide3,
.hide4,
.hide5,
.hide6 {
    display: none;
}

#show1:hover .hide1{
    display: block;

}

</style>
 