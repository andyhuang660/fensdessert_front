<template>
  <div class='container' >
    <n-form class="contactForm" @submit.prevent='send' ref="formRef">
      <n-space vertical>
      <n-input v-model:value="form.name" type="text" placeholder="姓名" />
      <n-input v-model:value="form.phone" type="text" placeholder="電話" />
      <n-input v-model:value="form.email" type="text" placeholder="信箱" />
      <n-input
        v-model:value="form.text"
        type="textarea"
        placeholder="想問芬什麼問題"
      />
    </n-space>
        <n-button strong secondary round attr-type="submit" type="warning">
          送出
        </n-button>
    </n-form>
  </div>
</template>

<script setup>
import {  ref,reactive } from 'vue'
import { api } from '@/plugins/axios'
// import { useRouter } from 'vue-router'
import Swal from "sweetalert2"

// const router = useRouter()
// const value= ref(null)
const loading = ref(false)
const formRef = ref(null)
const form = reactive({
  name: '',
  phone: '',
  email: '',
  text:''
})

const send = async () => {
  loading.value = true
  console.log(form.name)
  try {
    await api.post('/contacts', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '送出成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  form.name=''
  form.phone=''
  form.email=''
  form.text=''
  loading.value = false
}


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