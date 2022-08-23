<template>
  <div class="wrap">
     <div class="container">
      <h1>會員資料管理</h1>
       <n-divider />
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>帳號</th>
                <th>Email</th>
                <th>刪除會員</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(user, idx) in users' :key='user._id'>
                <tr>
                  <td>{{user.account }}</td>
                  <td style="white-space:pre">{{ user.email }}</td>
                  <n-button color="#ffcb98" @click="del(user._id, idx)">刪除</n-button>
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

const users = reactive([])
// form裡面要多一個 index(idx) 要修改表單內容比較方便

const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/users/' + _id)
    Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    users.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
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
</style>