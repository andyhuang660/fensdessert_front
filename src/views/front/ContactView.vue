<template>
  <div class='container'>
    <div class="contactForm">
      <n-space vertical>
      <n-input v-model:value="name" type="text" placeholder="姓名" />
      <n-input v-model:value="phone" type="text" placeholder="電話" />
      <n-input v-model:value="email" type="text" placeholder="信箱" />
      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="想問芬什麼問題"
      />
    </n-space>
        <n-button strong secondary round type="warning">
          送出
        </n-button>
    </div>
  </div>
</template>

<script setup>
import {  ref } from 'vue'
const name= ref(null)
const phone= ref(null)
const email= ref(null)
const value= ref(null)

</script>

<style scoped>
.n-card {
  max-width: 300px;
  margin:10px;
}
.contactForm{
  width: 50%;
  margin: auto;
  margin-top: 120px;
  position: relative;
}

.container{
  width: 480px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 365px) ;
  border-image-source: url(../../assets/1111.png) ;
  border-image-slice: 300;
  border-image-width: 200px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-style: solid;
  margin: auto;
}
.n-button{
  margin-top: 20px !important;
}

@media (max-width:576px){
  .container{
    width: auto;
    height: calc(100vh - 270px) ;
    border-image-source: url(../../assets/1111.png) ;
    border-image-slice: 300;
    border-image-width: 200px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-style: solid;
    margin: auto;
  }

}

</style>