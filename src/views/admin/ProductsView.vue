<template>
  <div class="wrap">
    <div class="container">
    <!-- <n-data-table :columns="columns" :data="data" :pagination="pagination" /> -->
    <n-button color="#ffcb98" @click="openDialog('', -1)">
      新增商品
    </n-button>
  <n-modal v-model:show="showModal" preset="dialog" title="新增商品">
    <n-form v-model="form.valid" @submit.prevent='submitForm'>
      <n-form-item label="圖片">
        <n-upload v-model:file-list="form.image" list-type="image-card">
          <n-button>
            點擊上傳
          </n-button>
        </n-upload>
      </n-form-item>
      <n-form-item label="name">
        <n-input v-model:value='form.name' />
      </n-form-item>
      <n-form-item label="price">
        <n-input-number v-model:value='form.price' />
      </n-form-item>
      <n-form-item label="description">
        <n-input v-model:value='form.description' type="textarea" />
      </n-form-item>
      <n-form-item label="sell">
        <n-switch v-model:value='form.sell' />是否上架
      </n-form-item>
        <n-select v-model:value="form.category" :options="options" />
      <n-button color="#ffcb98" attr-type="submit" @click="showModal=false">
        確認
      </n-button>
    </n-form>
 </n-modal>

  <n-divider />
    <div>
      <n-space vertical>
        <n-table striped>
          <thead>
            <tr>
              <th>圖片</th>
              <th>名稱</th>
              <th>價格</th>
              <th>描述</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <template v-for='(product,idx) in sliceProducts'>
              <tr v-if='sliceProducts.length > 0' :key='product._id'>
                <td><img style="height:150px" :src="product.image"></td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td> <n-button color="#ffcb98" @click="openDialog(product._id, idx)">編輯</n-button></td>
              </tr>
            </template>
          </tbody>
        </n-table>
      </n-space>
    </div>
  <n-divider />
  <n-pagination v-model:page="page" :page-count="Math.ceil(products.length/pageSize)" style="float:right" :default-page-size="6" />
</div>
  </div>
</template>

<script setup>
import { reactive, ref,computed } from "vue";
//import { NInput } from "naive-ui";
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
//const categories = reactive(['肉桂捲', '提拉米蘇','司康','季節限定'])
const products = reactive([])
const showModal = ref(false)
const page = ref(1)
const pageSize = 5
const sliceProducts = computed(()=>{
  return products.slice((page.value*pageSize)-pageSize,(page.value*pageSize))
})
const options= [
        {
          label: "肉桂捲",
          value: "肉桂捲",
        },
        {
          label: "提拉米蘇",
          value: "提拉米蘇",
        },
        {
          label: "季節限定",
          value: "季節限定",
        },
        ]
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
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
        form.name = products[idx].name
        form.price = products[idx].price
        form.description = products[idx].description
        form.sell = products[idx].sell
        form.category = products[idx].category

      } else {
        form.name = ''
        form.price = 0
        form.description = ''
        form.sell = false
        form.category = ''
        // console.log(form.valid)
      }
      form.image = []
      form.idx = idx
      form.dialog = true
      form.valid = false
      form.submitting = false
    }

   const submitForm = async () => {
  // if (!form.valid) return
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    } else {
      fd.append(key, form[key])
    }
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
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
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
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
  margin-top: 50px;
}
td {
  height:150px;
}
td img {
  height: 100%;
}

/* .n-pagination {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 1rem;
} */
</style>