<template>
  <div>
    <nav>
    <div class="navLeft">
      <RouterLink to="/">  <n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" fill="currentColor"></path></svg></n-icon>首頁 </RouterLink>
      <RouterLink to="/products"><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M696 472c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88H400v88c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88h-96v456h560V384h-96v88z" fill-opacity=".15" fill="currentColor"></path><path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z" fill="currentColor"></path></svg></n-icon>產品介紹</RouterLink>
      <RouterLink to="/shopping"><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M3.684 1.01c.193.045.33.21.33.402v3.294a.42.42 0 0 1-.428.412a.42.42 0 0 1-.428-.412V2.58a3.11 3.11 0 0 1-.664.435a.436.436 0 0 1-.574-.184a.405.405 0 0 1 .192-.552c.353-.17.629-.432.82-.661a2.884 2.884 0 0 0 .27-.388a.44.44 0 0 1 .482-.22zm-1.53 6.046a.401.401 0 0 1 0-.582l.002-.001V6.47l.004-.002l.008-.008a1.12 1.12 0 0 1 .103-.084a2.2 2.2 0 0 1 1.313-.435h.007c.32.004.668.084.947.283c.295.21.485.536.485.951c0 .452-.207.767-.488.992c-.214.173-.49.303-.714.409c-.036.016-.07.033-.103.049c-.267.128-.468.24-.61.39a.763.763 0 0 0-.147.22h1.635a.42.42 0 0 1 .427.411a.42.42 0 0 1-.428.412H2.457a.42.42 0 0 1-.428-.412c0-.51.17-.893.446-1.184c.259-.275.592-.445.86-.574c.043-.02.085-.04.124-.06c.231-.11.4-.19.529-.293c.12-.097.18-.193.18-.36c0-.148-.057-.23-.14-.289a.816.816 0 0 0-.448-.122a1.32 1.32 0 0 0-.818.289l-.005.005a.44.44 0 0 1-.602-.003zm.94 5.885a.42.42 0 0 1 .427-.412c.294 0 .456-.08.537-.15a.303.303 0 0 0 .11-.246c-.006-.16-.158-.427-.647-.427c-.352 0-.535.084-.618.137a.349.349 0 0 0-.076.062l-.003.004a.435.435 0 0 0 .01-.018v.001l-.002.002l-.002.004l-.003.006l-.005.008l.002-.003a.436.436 0 0 1-.563.165a.405.405 0 0 1-.191-.552v-.002l.002-.003l.003-.006l.008-.013a.71.71 0 0 1 .087-.12c.058-.067.142-.146.259-.22c.238-.153.59-.276 1.092-.276c.88 0 1.477.556 1.502 1.22c.012.303-.1.606-.339.84c.238.232.351.535.34.838c-.026.664-.622 1.22-1.503 1.22c-.502 0-.854-.122-1.092-.275a1.19 1.19 0 0 1-.326-.308a.71.71 0 0 1-.02-.033l-.008-.013l-.003-.005l-.001-.003v-.001l-.001-.001a.405.405 0 0 1 .19-.553a.436.436 0 0 1 .564.165l.003.004c.01.01.033.035.076.063c.083.053.266.137.618.137c.489 0 .641-.268.648-.428a.303.303 0 0 0-.11-.245c-.082-.072-.244-.151-.538-.151a.42.42 0 0 1-.427-.412zM7.75 3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5zm0 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5zm0 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5z" fill="currentColor"></path></g></svg></n-icon>訂購流程</RouterLink>
    </div>
    <img src="../assets/logo.jpg" class="image">
    <div class="navRight">
      <RouterLink to="/contact"><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" fill="currentColor"></path></svg></n-icon>聯絡我們</RouterLink>
      <RouterLink to="/register" v-if='!isLogin'><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M285.363 207.475c0 18.6-9.831 28.431-28.431 28.431h-29.876v-56.14h23.378c28.668 0 34.929 8.773 34.929 27.709zM504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248zM363.411 360.414c-46.729-84.825-43.299-78.636-44.702-80.98c23.432-15.172 37.945-42.979 37.945-74.486c0-54.244-31.5-89.252-105.498-89.252h-70.667c-13.255 0-24 10.745-24 24V372c0 13.255 10.745 24 24 24h22.567c13.255 0 24-10.745 24-24v-71.663h25.556l44.129 82.937a24.001 24.001 0 0 0 21.188 12.727h24.464c18.261-.001 29.829-19.591 21.018-35.587z" fill="currentColor"></path></svg></n-icon>註冊</RouterLink>
      <RouterLink to="/carts" v-if='isLogin && isUser'><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"></circle><circle cx="400" cy="416" r="32" fill="currentColor"></circle><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z" fill="currentColor"></path></svg></n-icon>購物車</RouterLink>
      <RouterLink to="/order" v-if='isLogin && isUser'><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41l2.12 2.12l4.24-4.24L22 5.34L16.34 11zm0 8l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L22 13.34L16.34 19z" fill="currentColor"></path></svg></n-icon>訂單</RouterLink>
      <RouterLink v-if='isLogin && isAdmin' to="/admin"><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z" fill="currentColor"></path></svg></n-icon>後台管理</RouterLink>
      <RouterLink to="/login" v-if='!isLogin'><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"></path><path d="M20 12H7l3-3m0 6l-3-3"></path></g></svg></n-icon>登入</RouterLink>
      <RouterLink to="/" v-if='isLogin' @click='logout'><n-icon :size="20"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"></path><path d="M7 12h14l-3-3m0 6l3-3"></path></g></svg></n-icon>登出</RouterLink>
    </div>
  </nav>
  </div>
  <div>
    <n-carousel autoplay :draggable="true">
      <img class="carousel-img" src="@/assets/carousel1-text-1.jpg">
      <img class="carousel-img" src="../assets/carousel2-text.jpg">
      <img class="carousel-img" src="../assets/carousel3-text.jpg">
      <img class="carousel-img" src="../assets/carousel5-text.jpg">
  </n-carousel>
  </div>

  <n-divider />

   <div class="wrap" data-aos="fade-up" data-aos-duration="500">
    <h1 style="font-family:'華康布丁體'">最新消息</h1>
    <n-grid cols="1 s:2 m:3" responsive="screen">
      <n-grid-item v-for='artical in news' :key='artical._id' hoverable>
        <n-card>
          <template #cover>
            <img :src="artical.image"/>
            <h1>{{ artical.title }}</h1>
          </template>
        <p style="white-space:pre">{{ artical.description }}</p>
      </n-card>
      </n-grid-item>
    </n-grid>
   </div>
  <n-divider />

  <div style="background-color:#ffeeca;position: relative; width: ;">
  <div style="width:100%;height: 300px;">
  <h1 style="color:#893517;font-family:'華康布丁體';position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;">一位業餘媽媽的手作甜點
  <br>希望療癒你的味覺 </h1>
   <!-- <img style="position: absolute; right: 450px;" src="../assets/3.jpg" alt=""> -->
  </div>
  </div>

  <div class="wrap">
    <h1 style="font-family:'華康布丁體'">顧客分享</h1>
    <n-grid cols="1 s:2 m:4" responsive="screen">
      <n-grid-item>
        <n-card title="九月開學活動">
          <template #cover>
            <img src="../assets/news.png">
          </template>
          一盒就免運
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card title="九月開學活動">
          <template #cover>
            <img src="../assets/news.png">
          </template>
          一盒就免運
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card title="九月開學活動">
          <template #cover>
            <img src="../assets/news.png">
          </template>
          一盒就免運
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <n-card title="九月開學活動">
          <template #cover>
            <img src="../assets/news.png">
          </template>
          一盒就免運
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
  
  <n-divider />

   <n-layout-footer style="background-color: #ffee98;justify-content: space-around; padding-top: 30px;" >
    <div class="container">
       <n-grid cols="1 s:2 l:4" responsive="screen">
        <n-grid-item>
          <div class="footer-box">
            <img src="../assets/logo.jpg" style="margin-right:auto;width: 100px;"><br>
            <h2>FENS DESSERT</h2>
            <h4>地址:新北市板橋區</h4> 
            <h4>Email:fensdessert@gmail.com</h4>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="footer-box">
            <h2>Fens Dessert資訊</h2>
            <h4>關於我們</h4>
            <h4>FAQ</h4>
            <h4>聯絡我們</h4>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="footer-box">
            <h2>更多消息</h2>
            <h4>徵才資訊</h4>
            <h4>隱私權條款</h4>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="footer-box">
            <h2>追蹤Fens Dessert</h2>
            <div class="footer-icon">
              <n-icon :size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="currentColor"></path><path d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28z" fill="currentColor"></path><path d="M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112z" fill="currentColor"></path></svg></n-icon>
              <n-icon :size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" fill="currentColor"></path></svg></n-icon>
              <n-icon :size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2c.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4c-89.9 0-163.1 59.4-163.1 132.4c0 65.4 58 120.2 136.4 130.6c19.1 4.1 16.9 11.1 12.6 36.8c-.7 4.1-3.3 16.1 14.1 8.8c17.4-7.3 93.9-55.3 128.2-94.7c23.6-26 34.9-52.3 34.9-81.5z" fill="currentColor"></path></svg></n-icon>
            </div>
          </div>
        </n-grid-item>
        </n-grid>
    </div>
    <!-- <img style="position: absolute; right: 450px; top: 0px;" src="../assets/footer text.jpg" alt="文字"> -->
    <p style="text-align:center;margin-top:20px">@copyright Fens Dessert 2022</p>
  </n-layout-footer>
</template>


<style scoped>
.carousel-img {
  width:100%;
  height: 850px;
  object-fit: cover;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  /* width: 100vh; */
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  background-color: #ffee98;
  margin-left: auto;
  margin-right: auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.n-grid {
    gap: 30px !important;
  }
.wrap{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 50px;
  margin-bottom: 50px; */
}
.image{
  width:100px;
  height:100px;
  /* position: absolute;
  left: 50%; */
  /* transform: translate(-50%); */
  /* top: 10px; */
}
a {
  color:#893517;
  margin: 15px;
}
.container{
  display: flex;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.footer-box{
  display: flex;
  flex-direction: column;
}

.footer-icon{
  display: flex;
  flex-direction: row;
}

h2 {
  padding-bottom: 15px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1rem;
    /* padding: 1.5rem 0; */
    /* width: 100vw; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { apiAuth } from '@/plugins/axios'
import { reactive} from "vue";


const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, isUser } = storeToRefs(user)
const news = reactive([])

// const { data } = apiAuth.post('/products')
// products.push(data.result)
const init = async () => {
  try {
    const { data } = await apiAuth.get('/news')
    news.push(...data.result)
  } catch (error) {
    console.log(error)
  }
}
init()
</script>

