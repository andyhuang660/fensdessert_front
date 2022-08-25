<template>
<div class="container">
  <n-form v-model="valid" :model="form" :rules='rules' @submit.prevent='login'>
  <n-icon color='rgb(255,203,152)' size='30'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="10" r="3"></circle><path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855"></path></g></svg></n-icon>
    <n-form-item path="account"  style="border-color:rgb(255,203,152)">
      <n-input type="text" placeholder="請輸入帳號" v-model:value="form.account" ></n-input>
    </n-form-item>
    <n-icon color='rgb(255,203,152)' size='30'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z" fill="currentColor"></path><circle cx="22" cy="10" r="2" fill="currentColor"></circle></svg></n-icon>
    <n-form-item path="password">
      <n-input  type="password" name="password" placeholder="請輸入密碼" v-model:value="form.password"></n-input>
    </n-form-item>
    <n-form-item>
     <div style='display:flex'>
      <n-button class="forgetPWD"   color="rgb(255,203,152)" @click="retrievePWD" :loading="loading">忘記密碼</n-button>
      <n-button class="login" color="rgb(255,203,152)" attr-type="submit" :loading="loading">登入</n-button>
     </div>
    </n-form-item>
     <h3 style="text-align:center;color:#893517;">如果沒有帳號請按<RouterLink to="/register">註冊</RouterLink></h3>
  </n-form>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)

const form = reactive({
  account: '',
  password: ''
})

const rules = reactive({
   account: [{
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
})

const login = () => {
  user.login(form)
}

</script>

<style scoped>
.n-form {
  width: auto;
  margin: auto;
  border: 3px solid rgb(255,203,152);
  border-radius: 30px;
  padding: 30px;
}

.container{
  height: calc(100vh - 365px) ;
  margin-top: 30px;
}
.forgetPWD{
  margin-left: 30px;
  margin-right: 35px;
}

@media (max-width:768px){
  .container{
    width: 100% !important;
  }
  .n-form {
  margin: auto;
  border: 3px solid rgb(255,203,152);
  border-radius: 30px;
  padding: 30px;
}
  .forgetPWD{
    margin-left: -5px;
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
}
}
</style>