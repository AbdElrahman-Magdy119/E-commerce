<template>
    <div>
      <ul class="nav nav-fill justify-content-between mx-5">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">العروض</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for العروض</div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">منتجات بتصاميم جاهزة</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for منتجات بتصاميم جاهزة</div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">معارض ومؤتمرات</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for الهدايا الدعائية</div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">طباعة الكانفاس</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for مطبوعات ورقية</div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">طباعة كبيرة الحجم</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for مطبوعات ورقية</div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">التغليف والتعبئة</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for التغليف والتعبئة</div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">مطبوعات ورقية</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for مطبوعات ورقية</div>
        </li>
    
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">الهدايا الدعائية</a>
          <div v-if="isHovered" class="hover-div bg-light">Content for مطبوعات ورقية</div>
        </li>
     
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" @mouseover="showDiv" @mouseout="hideDiv">كروت شخصية</a>
          <div v-if="isHovered" class="hover-div bg-light row">
            <!-- Content for كروت شخصية -->
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        isHovered: false
      };
    },
    methods: {
      showDiv() {
        this.isHovered = true;
      },
      hideDiv() {
        this.isHovered = false;
      }
    }
  };
  </script>
  
  <style>
  
  div{
    font-family: 'DIN Next LT W23';
    font-weight:600
  }
  .hover-div {
    display: none;
    position: absolute;
    padding: 10px;
    border: 1px solid #ccc;
    z-index: 1;
  }
  
  li:hover .hover-div {
    display: block;
  }
  </style>
  