<template>
<div class="container reg">
  <n-form ref="formRef" :model="form" :rules="rules" v-model="valid" @submit.prevent='register'>
  <n-icon color='rgb(255,203,152)' size='30'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="10" r="3"></circle><path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855"></path></g></svg></n-icon>
    <n-form-item path="account">
      <n-input type="text" placeholder="請輸入帳號" v-model:value="form.account"></n-input>
    </n-form-item>
    <n-icon color='rgb(255,203,152)' size='30'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z" fill="currentColor"></path><circle cx="22" cy="10" r="2" fill="currentColor"></circle></svg></n-icon>
    <n-form-item path="password">
      <n-input type="password" name="password" placeholder="請輸入密碼" v-model:value="form.password"></n-input>
    </n-form-item>
    <n-icon color='rgb(255,203,152)' size='30'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" fill="currentColor"></path></svg></n-icon>
    <n-form-item path="email" >
      <n-input type="email" name="email" v-model:value="form.email" placeholder="請輸入信箱"/>
    </n-form-item>
    <n-form-item >
      <n-button attr-type="submit" :loading="loading">註冊</n-button>
    </n-form-item>
    <h3 style="text-align:center;color:#893517;margin-top:10px">如果有帳號請按<RouterLink to="/login">登入</RouterLink></h3>
  </n-form>
</div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { isEmail } from 'validator'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Swal from "sweetalert2"

const router = useRouter()

const valid = ref(false)
const loading = ref(false)
const formRef = ref(null)

const form = reactive({
  account: null,
  password: null,
  email: null
})

const rules = reactive({
      account: [{
        required: true,
        validator (rule, value) {
          if (!value) {
            return new Error('帳號必填')
          } else if (value.length < 4 || value.length > 20) {
            return new Error('帳號長度為 4 到 20 個字')
          } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            return new Error('帳號只能有英文和數字')
          }
        },
        trigger: ["input", "blur"],
      }],
      password: [{
        required: true,
        validator (rule, value) {
          if (!value) {
            return new Error('密碼必填')
          } else if (value.length < 4 || value.length > 20) {
            return new Error('密碼長度為 4 到 20 個字')
          } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            return new Error('密碼只能有英文和數字')
          }
        },
        trigger: ["input", "blur"],
      }],
      email: [{
        required: true,
        validator (rule, value) {
          if (!value) {
            return new Error('信箱必填')
          } else if (!isEmail(value)) {
            return new Error('信箱格式錯誤')
          }
        },
        trigger: ["input", "blur"],
      }]
    })

const register = async () => {
  //  if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}
</script>

<style scoped>
.container{
  /* height: calc(100vh - 365px) ; */
  margin: auto;
  margin-top: 30px;
}
.n-form {
  width: auto;
  margin: auto;
  border: 3px solid rgb(255,203,152);
  border-radius: 30px;
  padding: 30px;
}
.n-button{
  margin-left:auto;
  margin-right:auto;
  background-color: rgb(255,203,152) ;
}
.n-form-item.n-form-item--top-labelled{
  margin-bottom: -15px;
}
@media (max-width:768px){
  .container{
    width: 100% !important;
    height: calc(100vh - 365px) ;
  }
  .n-form {
  width: 50%;
  margin: auto;
  border: 3px solid rgb(255,203,152);
  border-radius: 30px;
  padding: 30px;
}
}

@media (max-width:576px){
  .container{
    width: 100% !important;
    height: calc(100vh - 150px) ;
  }
  .n-form {
  width: 80%;
  margin: auto;
  border: 3px solid rgb(255,203,152);
  border-radius: 30px;
  padding: 30px;
}
}

@media (min-height:400px){
  .container[data-v-23a4ffce]{
    height: 100% !important;
  }
}

@media (min-height:768px){
  .container[data-v-d7a17ed0]{
    height: calc(100vh - 365px) ;
  }
}



</style>