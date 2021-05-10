<template>
<div>
  <!-- <b-overlay id="site-loader" show :variant="variant" :opacity="opacity" 
  :blur="blur" rounded="sm" spinner-variant="primary" spinner-type="grow" > 
  </b-overlay>-->
    <Header />
    <router-view :detail="detail" />
    <Footer :detail="detail" />
</div>
  
 
  

</template>

<script>
import Header from '@/components/commons/Header.vue'
import Footer from '@/components/commons/Footer.vue'
export default {
  name: "App",
  components:{
    Header,
    Footer
  },
  data(){
    return {
      show: true,
      defaultTitle: "Ravbytes Technology",
      detail: {phone: "+234 704 086 1356", email: "info@ravbytes.com",address: "Address Here"}
    }
  },
  watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = `${this.defaultTitle} | ${to.name}` || this.defaultTitle;
            }
        },
    }
}
</script>
<style lang="scss">
body{
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
