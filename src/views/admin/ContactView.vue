<template>
  <div class="container">
    <div class="container">
      <h1>客戶表單</h1>
       <n-divider />
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>姓名</th>
                <th>電話</th>
                <th>Email</th>
                <th>問題內容</th>
                <th>狀態</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='contact in contacts' :key='contact._id'>
                <tr>
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.phone }}</td>
                  <td>{{ contact.email }}</td>
                  <td style="white-space:pre">{{ contact.text }}</td>
                  <td> <n-switch checked-value="已完成" unchecked-value="未完成" @update:value="handleUpdateValue" /> </td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  import Swal from 'sweetalert2'
  import { apiAuth } from '@/plugins/axios'
  
  const contacts = reactive([])
  const handleUpdateValue = ()=>{
  }
  
  const init = async () => {
    try {
      const { data } = await apiAuth.get('/contacts')
      contacts.push(...data.result)
      console.log(data)
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error.isAxiosError ? error.response.data.message : error.message
      })
    }
  }
  init()
  </script>

<style scoped>
  .wrap{
    margin-left: 250px;
  }
  .container{
    width: 70%;
    margin: auto;
    margin-top: 100px;
  }
  .n-dialog .n-dialog__icon {
    display: none !important;
  }
  /* .done {
    display: none;
  } */
  </style>