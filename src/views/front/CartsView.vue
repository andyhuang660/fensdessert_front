<template>
  <div class="container">
    <div class="content">
      <h1>1.購物車內容</h1>
      <n-space vertical>
        <n-table striped>
          <thead>
            <tr>
              <th class="cartImg">圖片</th>
              <th>名稱</th>
              <th>單價</th>
              <th>數量</th>
              <th>小計</th>
              <th>衝動了嗎</th>
            </tr>
          </thead>
          <tbody v-if='cart.length > 0'>
            <tr v-for='(item,idx) in cart' :key='item._id'>
              <td class="cartImg"><n-avatar :size="80" object-fit="cover" :src="item.product.image" /></td>
              <td>{{ item.product.name }}</td>
              <td>{{ item.product.price }}</td>
              <td>
                <n-button-group size="small">
                  <n-button type="warning" @click='updateCart(idx, item.quantity-1)' > - </n-button>
                    <div>
                      <n-button> {{ item.quantity }} </n-button>
                    </div>
                  <n-button type="warning" @click='updateCart(idx, item.quantity+1)' > + </n-button>
                </n-button-group>
              </td>
              <td>{{item.product.price * item.quantity}}</td>
              <td> <n-button @click='updateCart(idx, 0)'>刪除</n-button></td>
            </tr>
          </tbody>
        </n-table>
      </n-space>
      <div class="checkBtn">
        $ {{totalPrice}}
        <n-button strong secondary round type="warning" @click='user.checkout' :disabled='!canCheckout' >
          結帳
        </n-button>
      </div>
    </div>
    <div class="content">
      <h1>2.運送方式</h1>
        <n-radio-group v-model:value="value" name="radiogroup">
          <n-space>
            <n-radio v-for="delivery in deliverys" :key="delivery.value" :value="delivery.value">
              {{ delivery.label }}
            </n-radio>
          </n-space>
        </n-radio-group>
      </div>
      <div class="content">
        <h1>3.匯款資訊</h1>
        <h2>Fens Dessert 匯款帳號</h2>
        <h4>帳號：0000 1234 5678</h4>
        <h4>戶名：芬的甜點股份有限公司台灣分公司</h4>
        <h4>分行名稱：國泰世華銀行 板橋分行</h4>
        <h4>分行代號：013</h4>
      </div>
      <div class="content">
        <h1>4.購買人資訊</h1>
        <form action="" style="display:flex; flex-direction: column;">
          姓名:<input type="text" placeholder="請輸入姓名">
          電話:<input type="text" placeholder="請輸入電話">
          寄送地址:<input type="text" placeholder="請輸入寄送地址">
        </form>
      </div>
    </div>
</template>

<script setup>
import { reactive,computed,ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const cart = reactive([])
const value = ref(null)


const totalPrice = computed(() => {
  // reduce 對cart做累加 a代表現在累加多少 b代表跑的參數
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})


const deliverys = [
        {
          value: "Convenient Store",
          label: "超商取貨(請先付款)"
        },
        {
          value: "Delivery",
          label: "宅配"
        }
      ].map((s) => {
        s.value = s.value.toLowerCase();
        return s;
      })


const updateCart = async (idx, quantity) => {
  const result = await user.updateCart(
    { product: cart[idx].product._id, quantity }
    )
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
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

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.bank{
  width: 600px;
}
.checkBtn{
  position: absolute;
  right: 0;
  padding: 30px;
}
.content{
  margin-bottom: 30px;
  border-image-slice:184 228 167 241;
  border-image-width:50px 50px 50px 50px;
  border-image-outset:0px 0px 0px 0px;
  border-image-repeat:stretch stretch;
  border-style:solid ;
  border-image-source:url(../../assets/border.jpg);
  padding: 50px;
}
input{
  width: 20%;
}

@media (max-width: 768px){
  .bank{
    width: 350px;
  }

  .cartImg{
    display: none;
  }

  input{
    width: 50%;
  }
}

</style>