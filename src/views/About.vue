<template>
  <div>
    <Hero title="About Us" />
    <AboutUs :mores="mores" style="margin-top:50px" :showBtn="false" />
  </div>
</template>

<script>
import AboutUs from '@/components/commons/AboutUs'
import Hero from '@/components/commons/Hero'
export default {
    name:"About",
    data(){
      return {
        mores: [
          {
            id: 1,
            text: `Our mission from the very first day has been to cultivate professional relationships with our clients to provide effective and reliable information technology solutions for their needs. 
            The team at Ravbytes is equipped with highly developed skills in information technology and also in business processes across a range of industry sectors.`
          },
          {
            id: 2,
            text: `These experiences make us uniquely positioned to offer solutions promising greater operational efficiency, productivity gains and cost savings for each of our clients, regardless of their industry.
`
          }
        ]
      }
    },
    components:{
      Hero,
      AboutUs
    }

}
</script>

<style>

</style>