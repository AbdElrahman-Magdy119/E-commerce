<template>
 <nav class="navbar navbar-expand-lg  ">
    <div class="container p-2">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <div class="row">
                        <div class="col-2 me-2" style="padding-left: 1px;">
                            <h5>السلة</h5>
                            <h5>ر.س</h5>
                            <div class="notification">1</div>
                        </div>
                        <i class="fa-solid fa-bag-shopping col-1 mt-2"></i>
                    </div>
                </li>
                <li class="nav-item ">
                    <div class="row ms-3">
                        <div class="col-2 me-5 ">
                            <h5>حسابى</h5>
                            <h5>تسجيل الدخول</h5>

                        </div>
                        <i class="fa-regular fa-user mt-2 mx-3 col-1"></i>

                    </div>
                </li>
                <li class="nav-item d-flex me-3">
                    <div class="dropdown ">
                        <select class="language-select ">
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                        </select>
                    </div>
                    <div>
                        <img src="../../assets/flag.svg" alt="Saudi Arabia Flag" style="    margin-top: 10px;">
                    </div>
                </li>
            </ul>
            <div class="col-6 me-2">
                <form class="d-flex input-group w-auto" style="height: 53px;">
                    <input type="search" class="form-control rounded-0 border-0 bg-light text-end"
                        placeholder="أدخل كلمة البحث" aria-label="Search" />
                    <button class="btn btn-outline-primary rounded-0 border-0" type="button"
                        data-mdb-ripple-color="dark" style="background-color: #00464a;width: 69px;">
                        <i class="fa-solid fa-magnifying-glass" style="color: white;"></i>
                    </button>
                </form>
            </div>

            <div class="d-flex">
                <img src="../../assets/newLogo.svg" style="height: 70px;" alt="">
            </div>


        </div>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>

  div {
  font-family: 'DIN Next LT W23';
}

.icon {
  position: relative;
  display: inline-block;
  font-size: 24px;
  /* Adjust the size as needed */
}

.icon::before {
  content: "<i class=" fa-solid fa-bag-shopping"></i>";
  /* Unicode value for the desired Font Awesome icon */
  font-family: "Font Awesome";
  /* Font Awesome font family */
}

.icon sub,
.icon sup {
  position: absolute;
  font-size: 12px;
  /* Adjust the size as needed */
  color: #888;
  /* Adjust the color as needed */
}

.icon sub {
  bottom: -8px;
  /* Adjust the position as needed */
}

.icon sup {
  top: -8px;
  /* Adjust the position as needed */
}

i:nth-child(2) {
  font-size: xx-large;
  margin: 3%;
  margin-top: 30%;
  position: relative;
}

/*                         */
.dropdown {
  display: inline-block;
  position: relative;
}

/* CSS for the language select */
.language-select {
  color: black;
  padding: 12px 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
}

/* CSS for the arrow icon */
.dropdown::after {
  content: "\25BE";
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
}

/* CSS for the dropdown list options */
.language-select option {
  padding: 8px 16px;
  background-color: #fff;
  color: #000;
}

.language-select option:hover {
  background-color: #f1f1f1;
}

.form-control-borderless {
  border: none;
}

.form-control-borderless:hover,
.form-control-borderless:active,
.form-control-borderless:focus {
  border: none;
  outline: none;
  box-shadow: none;
}
.notification {
  position: absolute;
    /* top: 61%; */
    z-index: 244;
    margin-left: 56px;
   
    /* transform: translate(-50%, -50%); */
    background-color: red;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 50%;
}

#search {
  padding: 0;
  text-align: right;
  margin: 0;
}

.col-auto button {
  background-color: #00464A;
  color: white;
  font-size: smaller;


}

.fa-user {
  color: #8D2A46;
}

.me-5 h5:first-child {

  color: #00464A;

  opacity: 0.5;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  text-align: right;
}

.me-5 h5:nth-child(2) {
  text-align: right;
  text-transform: uppercase;

  color: #00464A;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  position: absolute;
}

.me-2 h5:first-child {

  color: #00464A;

  opacity: 0.5;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  text-align: right;
}

.me-2 h5:nth-child(2) {
  text-align: right;
  text-transform: uppercase;

  color: #00464A;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  position: absolute;
}
</style>