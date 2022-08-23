<template>
<div class="side">
  <n-menu v-model:value="activeKey" :options="menuOptions" />
</div>
 <RouterView></RouterView>
 <n-back-top :right="100"  :visibility-height="10"/>
</template>


<script setup>
import { h, ref } from "vue";
import { RouterLink } from 'vue-router'
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'

// const user = useUserStore
// const { logout } = user
// const { isLogin, isAdmin } = storeToRefs(user)
const activeKey = ref(null)

const menuOptions = [
  {
    label: () => h(RouterLink, {
      to:{ 
        path:"/"
        }
    }, {default:()=>"首頁"}),
    key:"home"
  },
  {
    label: () => h(RouterLink, {
      to:{ 
        path:"/admin/newsAdmin"
        }
    }, {default:()=>"最新消息管理"}),
    key:"newsAdmin"
  },
  {
    label: () => h(RouterLink, {
      to:{ 
        path:"/admin/membersAdmin"
        }
    }, {default:()=>"會員資料管理"}),
    key:"membersAdmin"
  },
  {
    label: () => h(RouterLink, {
      to:{ 
        path:"/admin/ordersAdmin"
        }
    }, {default:()=>"訂單管理"}),
    key:"ordersAdmin"
  },
  {
    label: () => h(RouterLink, {
      to:{ 
        path:"/admin/productsAdmin"
        }
    }, {default:()=>"商品管理"}),
    key:"productsAdmin"
  },
];

</script>


<style >
.side{
  position: fixed;
  background-color:rgb(255,238,202) ;
  width:250px;
  height: 100vh; 
}


</style>