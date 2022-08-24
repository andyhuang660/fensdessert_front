<template>
  <div class="imgDes" style="text-align:center">
    <!-- <img src="../../assets/IMG_1071.PNG" alt=""> -->
    <h1>-肉桂捲選用材料-</h1>
    <p>
      日本頂級Gaban肉桂粉<br>
      柯克蘭肉桂粉<br>
      日本上白糖<br>
    </p>
  </div>
  
  <input type="search" v-model="search" placeholder="尋找商品" />

  <div class='wrap' style="background:url(../../assets/IMG_1071.PNG)">
    <n-grid cols="1 s:2 m:3" responsive="screen" >
      <n-grid-item v-for="(product,idx) in sliceProducts" :key='idx'>
        <n-card v-if='sliceProducts.length>0'>
          <template #cover>
            <a @click="openDialog(product._id, idx)" >
            <img style="height:300px;" :src="product.image"/>
          </a> 
          <n-modal style="width:400px ;" v-model:show="showModal"  preset="card" >
            <n-avatar :size="300" :src="form.image"/>
            <h1 style="font-size: 32px;">商品名稱:{{form.name}}</h1>
            <h3 style="white-space:pre">商品描述:{{form.description}}</h3>
            <h3>${{form.price}}</h3>
            <n-space vertical>
              <n-input-number v-model:value="form.quantity" :key="form._id" placeholder="購買數量" :min="0"/>
            </n-space>
            <n-button style="margin-top:20px" @click="addCart({ product: form._id, quantity:form.quantity})" strong secondary round color='#893517'>
              加入購物車
            </n-button>
          </n-modal>
        </template>
        <h1>{{product.name}}</h1>
        <h3>NT${{product.price}}</h3>
        <n-form v-model="valid" @submit.prevent='submit'>
          <n-space vertical>
          <n-input-number v-model:value="product.quantity" placeholder="購買數量" :min="0" style="margin-left:80px"/>
        </n-space>
        </n-form>
        <n-button @click="addCart({ product: product._id, quantity:product.quantity})" strong secondary round color='#893517' style="margin-top:20px;margin-left: 80px;">
          加入購物車
        </n-button>
      </n-card>
      </n-grid-item>
    </n-grid>
  </div>
  <n-pagination v-if="search===''" v-model:page="page" :page-count="Math.ceil(products.length/pageSize)" style="float:right" :default-page-size="6" />
  <n-pagination v-else v-model:page="page" :page-count="Math.ceil(sliceProducts.length/pageSize)" style="float:right" :default-page-size="6" />
</template>


<script setup>
import { reactive,ref,computed } from 'vue'
// import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'

// const router = useRouter()
const user = useUserStore()
const showModal = ref(false)
const { addCart } = user


//分頁,搜尋
const products = reactive([])
const page = ref(1)
const pageSize = 6
const search = ref('')
const sliceProducts = computed(()=>{
  return products.slice((page.value*pageSize)-pageSize,(page.value*pageSize)).filter(input => input.name.includes(search.value))
})

// const filterProducts = computed(()=>{
//   return products.filter(input => input.name.includes(search.value))
// })

const form = reactive({
  _id: '',
  image: [],
  name: '',
  description: '',
  price: '',
  idx: -1,
  submitting: false
})

const openDialog = (_id, idx) => {
  showModal.value = true;
  form._id = _id
  if (idx > -1) {
    form.image = products[idx].image
    form.name = products[idx].name
    form.description = products[idx].description
    form.price = products[idx].price
  }
    form.idx = idx
    form.submitting = false
    form.showModal =false
}


const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result.map(d => {
      return {...d,quantity:0}
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  
  }
}
init()
</script>

<style scoped>
.n-card {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border: none;
}
.wrap{
  display:flex;
  margin: auto;
  margin-top: 10px;
}
.n-grid {
  gap: 30px !important;
}
/* 
div{
  width: 300px;
} */
.imgDes {
  background-image: url(../../assets/IMG_1071.PNG);
  margin-top: 20px;
}
.imgDes img{
  height: 200px;
  width: 100%;
  
}

</style>