<template>
  <div class="container">
    <h1>1.購物車內容</h1>
    <div class="content">
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
        <img class="bank" src="http://osas.npust.edu.tw/alltop/skin/default27/passbook_cover.jpg" >
      </div>
      <div class="content">
        <h1>4.購買人資訊</h1>
        <p>11111111111111111</p>
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
}
.content{
  margin-bottom: 30px;
}

@media (max-width: 768px){
  .bank{
    width: 350px;
  }

  .cartImg{
    display: none;
  }
}

</style>