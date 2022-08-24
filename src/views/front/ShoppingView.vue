<template>
<div class="container">
  <n-grid cols="1 s:2 m:6" responsive="screen" >
    <n-grid-item class="shopping">
      <n-icon size="90" color="white" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></path><path d="M26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></path></svg></n-icon>
      <h1>STEP 01</h1>
      <h3>註冊/登入會員</h3>
    </n-grid-item>
    <n-grid-item class="shopping">
      <n-icon size="90" color="white"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994c-29.823-.429-54.35-24.631-55.155-54.447c-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938c-28.54-1.325-51.751-24.385-53.251-52.917c-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z" fill="currentColor"></path></svg></n-icon>
      <h1>STEP 02</h1>
      <h3>選購商品/加入購物車</h3>
    </n-grid-item>
    <n-grid-item class="shopping">
      <n-icon size="90" color="white"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM332.49 274l-89.6 112a16 16 0 0 1-12.23 6h-.26a16 16 0 0 1-12.16-5.6l-38.4-44.88a16 16 0 1 1 24.32-20.8L230 350.91L307.51 254a16 16 0 0 1 25 20zM336 160H176v-16a80 80 0 0 1 160 0z" fill="currentColor"></path></svg></n-icon>
      <h1>STEP 03</h1>
      <h3>結帳/選擇配送方式</h3>
    </n-grid-item>
    <n-grid-item class="shopping">
      <n-icon size="90" color="white"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h2.721c-.21-.39-.285-.86-.164-1.347l.375-1.498c.14-.562.43-1.075.84-1.485l4.83-4.83A2.86 2.86 0 0 1 16 8.004V8h-4.5A1.5 1.5 0 0 1 10 6.5zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5zm6.454 3.048a1.87 1.87 0 0 0-2.645 0l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374c.386-.097.739-.296 1.02-.578l4.83-4.83a1.87 1.87 0 0 0 0-2.644z" fill="currentColor"></path></g></svg></n-icon>
      <h1>STEP 04</h1>
      <h3>填寫收/寄件人資料</h3>
    </n-grid-item>
    <n-grid-item class="shopping">
      <n-icon size="90" color="white"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.42 0 2.13.54 2.39 1.4c.12.4.45.7.87.7h.3c.66 0 1.13-.65.9-1.27c-.42-1.18-1.4-2.16-2.96-2.54V4.5c0-.83-.67-1.5-1.5-1.5S10 3.67 10 4.5v.66c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-1.65 0-2.5-.59-2.83-1.43c-.15-.39-.49-.67-.9-.67h-.28c-.67 0-1.14.68-.89 1.3c.57 1.39 1.9 2.21 3.4 2.53v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"></path></svg></n-icon>
      <h1>STEP 05</h1>
      <h3>匯款回傳後五碼</h3>
    </n-grid-item>
    <n-grid-item class="shopping">
      <n-icon size="90" color="white"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M4 16h12v2H4z" fill="currentColor"></path><path d="M2 11h10v2H2z" fill="currentColor"></path><path d="M29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394zM9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm14-15h2.34l2.144 5H23zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5z" fill="currentColor"></path></svg></n-icon>
      <h1>STEP 06</h1>
      <h3>訂單完成，等待商品到貨</h3>
    </n-grid-item>
  </n-grid>
</div>
  <div class="div"></div>
</template>

<style scoped>
.container{
  height: calc(100vh - 300px) ;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: nowrap;
  position: relative;
}

h1 {
  font-size: 1.5rem;
  color:#893517;
  padding-top: 20px;
}

.shopping{
  border: 2px solid #893517;
  border-bottom: 4px solid #893517;
  width: 90%;
  position: relative;
  height: 60%;
  margin: auto;
  text-align:center;
  padding: 100px 5px;
}
.shopping .n-icon svg{
  padding: 20px;
}
.n-icon{
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #893517;
  border-radius: 50%;
}

</style>