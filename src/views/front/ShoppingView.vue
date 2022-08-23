<template>
  <div class="container">
    <n-col class="order">
      <h1>1.</h1>
      <p class="orderText"><n-icon size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"></circle><circle cx="400" cy="416" r="32" fill="currentColor"></circle><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z" fill="currentColor"></path></svg></n-icon>商品加入購物車</p>
    </n-col>
      <n-icon class="arrow arrow1"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" fill="currentColor"></path></svg></n-icon>
    <n-col class="order">
      <h1>2.</h1>
      <p class="orderText"><n-icon size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z" fill="currentColor"></path></svg></n-icon>結帳選擇運送方式</p>
    </n-col>
    <n-col class="order">
      <h1>3.</h1>
      <p class="orderText"><n-icon size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88v48z" fill="currentColor"></path></svg></n-icon>匯款後回傳後五碼</p>
    </n-col>
      <n-icon class="arrow arrow2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" fill="currentColor"></path></svg></n-icon>
    <n-col class="order">
      <h1>4.</h1>
      <p class="orderText"><n-icon size="40"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z" fill="currentColor"></path><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" fill="currentColor"></path></svg></n-icon>等待甜點送上</p>
    </n-col>
  </div>
  <div class="div"></div>
</template>

<style scoped>
.container{
  height: calc(100vh - 300px) ;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
}
/* n-timeline{
  width: 100%;
} */
.order{
  width: 50%;
  padding: 3rem !important;
}
h1 {
  font-size: 3rem;
  color:#893517;
}
.orderText{
  font-size: 2rem;
  color:#893517;
}
.arrow{
  font-size: 3rem;
  position: absolute;
  left: 45%;
  transform: translateX(-45%);
  color:#893517;
}
.arrow1{
  top: 18%;
}
.arrow2{
  bottom: 35%;
}
</style>