<template>
  <div class="wrap">
    <div class="container">
      <n-button color="#ffcb98" @click="openDialog('', -1)">
        新增最新消息
      </n-button>
       <n-divider />
      <h1>最新消息管理</h1>
      <div>
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>圖片</th>
                <th>標題</th>
                <th>描述</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <template v-for='(artical, idx) in news'>
                <tr v-if='news.length > 0' :key='artical._id'>
                  <td><n-avatar :size="48" :src="artical.image"/></td>
                  <td>{{ artical.title }}</td>
                  <td style="white-space:pre">{{ artical.description }}</td>
                  <td><n-button color="#ffcb98" @click="openDialog(artical._id, idx)"> 編輯 </n-button></td>
                </tr>
              </template>
            </tbody>
          </n-table>
        </n-space>
      </div>
    <div>
      
  <n-modal v-model:show="showModal" preset="dialog" color="#ffcb98" title="新增最新消息">
    <n-form v-model="form.valid" @submit.prevent='submitForm'>
          <n-form-item label="圖片">
            <n-upload v-model:file-list='form.image' list-type="image-card">
                <n-button>點擊上傳</n-button>
            </n-upload>
          </n-form-item>
          <n-form-item label="最新消息標題">
            <n-input v-model:value='form.title' placeholder="請輸入標題"/>
          </n-form-item>
          <n-form-item label="內容">
            <n-input type='textarea' autosize v-model:value='form.description' placeholder="請輸入描述"/>
          </n-form-item>
          <n-button color="#ffcb98" attr-type="submit" @click="showModal=false">
            確認
          </n-button>
      </n-form>
    </n-modal>
<n-divider />
      
 </div>
    </div>  
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const news = reactive([])
// form裡面要多一個 index(idx) 要修改表單內容比較方便
const showModal = ref(false);

const form = reactive({
  _id: '',
  title: '',
  image: [],
  description: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const openDialog = (_id, idx) => {
  showModal.value = true;
  form._id = _id
  if (idx > -1) {
    form.title = news[idx].title
    form.description = news[idx].description

  } else {
    form.title = ''
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  form.submitting = true

  const fd = new FormData()

  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    }
    else fd.append(key, form[key])
  }

  try {
    // 把編輯跟新增都放同一個對話框裡面 用form._id的長度判斷
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fd)
      news.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fd)
      news[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}
const init = async () => {
  try {
    const { data } = await apiAuth.get('/news')
    news.push(...data.result)
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
}
.n-dialog .n-dialog__icon {
  display: none !important;
}

.n-button .n-button--default-type .n-button--medium-type .n-button--color{
  display: block;
}
.n-button{
  margin: 20px 0px 5px 0px;
}
</style>