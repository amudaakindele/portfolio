<template>
  <div>
    <!-- <b-overlay id="site-loader" show :variant="variant" :opacity="opacity" 
    :blur="blur" rounded="sm" spinner-variant="primary" spinner-type="grow" > 
    </b-overlay>-->
      <Header />
      <router-view :detail="detail" :featuredServices="featuredServices" :services="services" />
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
      detail: {
        phone: "+234 704 086 1356", 
        email: "info@ravbytes.com",
        address: "34, Zone B' Mokin Irepodun LCDA, 230004, Erin Osun",
        twitter: "https://twitter.com/ravbytes",
        facebook: "https://facebook.com/ravbytes",
        instagram: "https://instagram.com/official_ravbytes",
        youtube: "https://www.youtube.com/channel/UComDZAF2ox7GbqajhyXEU-g/"
      },
      services: [
          // {
          //     id: 1,
          //     name: "Website/Software Development",
          //     desc: "We can build all manners of custom software including web apps, mobile apps, and websites."
          // },
          // {
          //     id: 2,
          //     name: "Web Hosting",
          //     desc: "If you are planning to build new website and want it hosted appropriately, then we are here for you."
          // },
          // {
          //     id: 3,
          //     name: "SEO & Digital Marketing",
          //     desc: "With digital marketing, your business can expand into new areas, and achieve tremendous accomplishments in your industry."
          // },
          // {
          //     id: 4,
          //     name: "Graphic Design",
          //     desc: "Our graphic designers create a positive brand image for your business that helps you attract new customers."
          // },
          // {
          //     id: 5,
          //     name: "Content Creation",
          //     desc: "Identify "
          // },
          {
              id: 6,
              icon: "fas fa-tasks",
              name: "Social Media Management",
              desc: "We plan, implement, manage and monitor Social Media strategy to increase brand awareness, and sales."
          },
          {
              id: 7,
              icon: "fas fa-business-time",
              name: "IT Consulting",
              desc: "We offer IT consulting services that will help organisations work smarter and grow faster."
          },
          {
              id: 8,
              icon: "fas fa-school",
              name: "IT Training",
              desc: "IT Training is a fundamental requirement for improving the competency of the resources. We that corporate IT training is different from the other.."
          }
      ],
      featuredServices:[
          {
              id: 1,
              icon: "fas fa-code",
              title: "Website/Software Development",
              desc: "We can build all manners of custom software including web apps, mobile apps, and websites."
          },
          {
              id: 2,
              icon: "fas fa-server",
              title: "Web Hosting",
              desc: "If you are planning to build new website and want it hosted appropriately, then we are here for you."
          },
          {
              id: 3,
              icon: "fas fa-chart-line",
              title: "SEO & Digital Marketing",
              desc: "With digital marketing, your business can expand into new areas, and achieve tremendous accomplishments in your industry."
          },
          {
              id: 4,
              icon: "fas fa-palette",
              title: "Graphic Design",
              desc: "Our graphic designers create a positive brand image for your business that helps you attract new customers."
          }
      ],
      blogs: [
        {
          id: 1,
          title: "Blog One Here...",
          posted_on: "Mar 12 2021",
          author: "Admin",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
          url: "/blog/1"
        },
        {
          id: 2,
          title: "Blog Two Here...",
          posted_on: "Mar 12 2021",
          author: "Admin",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
          url: "/blog/1"
        },
        {
          id: 3,
          title: "Blog Three Here...",
          posted_on: "Mar 12 2021",
          author: "Admin",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia.",
          url: "/blog/1"
        },
      ]
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
