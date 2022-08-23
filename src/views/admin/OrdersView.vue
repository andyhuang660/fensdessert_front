<template>
  <div class="wrap">
    <div class="container">
      <h1>訂單管理</h1>
      <n-divider />
        <n-space vertical>
          <n-table striped>
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>日期</th>
                <th>使用者</th>
                <th>金額</th>
                <th>商品</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
                <template v-for='(order,idx) in orders'>
                  <tr v-if='orders.length > 0' :key='order._id'>
                    <td>{{order._id}}</td>
                    <td>{{ new Date(order.date).toLocaleDateString() }}</td>
                    <td>{{ order.user.account }}</td>
                    <td>{{order.totalPrice  }}</td>
                    <td> 
                      <ul>
                        <li v-for='product in order.products' :key='product._id'>
                        {{product.product.name }} x {{ product.quantity}}
                        </li>
                      </ul>
                    </td>
                    <td> <n-button color="#ffcb98" @click="delBtn(order._id, idx)">刪除</n-button></td>
                  </tr>
                </template>
              </tbody>
          </n-table>
        </n-space>
        <n-divider />
        <div>
          <br>
          <n-button color="#ffcb98" @click="calc">統計</n-button>
          
          <td v-for="product in newData" :key='product'>
            <ul>
              <li>{{product}}</li>
            </ul>
            <!-- <ul v-for="(product,idx) in newData" :key=idx>
              <li>{{product[idx]}}</li>
            </ul> -->
          </td>
        
          <Bar :chart-data="chartData"></Bar>
        </div>
      </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartData = {
      labels: [
        '奶油乳酪',
        '原味肉桂捲',
        '焦糖口味',
        '草莓盒子',
      ],
      datasets: [
        {
          label: '銷售量',
          backgroundColor: '#ffcb98',
          data: [6, 6, 2, 3,]
        }    
      ],
      width: {
        type: Number,
        default: 200
      },
      height: {
        type: Number,
        default: 200
      },
    }

const orders = reactive([])
const obj = reactive({})
const newData = reactive([])

const delBtn = async (_id, idx) => {
  try {
    await apiAuth.delete('/orders/' + _id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    orders.splice(idx, 1)
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
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}

const calc = async() =>{
  try {
    // const total = []
    const {data} = await apiAuth.get('/orders/all')
    // const newData = data.result
    // const newArr = newData.map(item=> item.products.map(itemProduct => itemProduct.product.name))
    // console.log(newArr)
    data.result.forEach(function(item){
      
      item.products.forEach(function(productItem){
        // console.log(productItem.product.name)//商品名
        if(obj[productItem.product.name] == undefined){
          obj[productItem.product.name]= productItem.quantity
        }else{
        obj[productItem.product.name] += productItem.quantity
        }
      })
    })
    let categoryAry = Object.keys(obj)
    categoryAry.forEach(function (item) {
      let ary = [];
      ary.push(item);
      ary.push(obj[item]);
      newData.push(ary);
    })
  //  console.log(_.groupBy(['奶油乳酪','原味肉桂捲','焦糖口味']),newData)
  //  _.groupBy(newData)
  }catch (error) {
   console.log(error)
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
.n-dialog .n-dialog__icon {
  display: none !important;
}
</style>