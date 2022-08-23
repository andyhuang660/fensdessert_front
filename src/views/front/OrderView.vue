<template>
  <div class="container">
    <n-row>
      <n-col :span="24">
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th class="order_id">訂單編號</th>
                <th>日期</th>
                <th>總額</th>
                <th>商品</th>
              </tr>
            </thead>
            <tbody v-if='orders.length > 0' >
                <tr v-for='order in orders' :key='order._id'>
                  <td class="order_id">{{order._id}}</td>
                  <td>{{ new Date(order.date).toLocaleDateString() }}</td>
                  <td>{{ order.totalPrice }}</td>
                  <td> 
                    <ul>
                      <li v-for='product in order.products' :key='product._id'>
                      {{product.product.name }} x {{ product.quantity}}
                      </li>
                    </ul>
                  </td>
                </tr>
            </tbody>
          </n-table>
        </n-space>
      </n-col>
    </n-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
    console.log(orders)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()

</script>

<style scoped>
.container{
  height: calc(100vh - 365px) ;
  margin: auto;
  margin-top: 30px;
}
@media screen and (max-width:768px) {
  .order_id{
    display: none;
  }
  .container{
  height: calc(100vh - 149px);
}
}
</style>