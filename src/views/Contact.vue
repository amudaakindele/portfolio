<template>
  <div>
    <Hero title="Contact Us" />
    <section class="ftco-section bg-light">
      <div class="container-xl">
        <div class="row no-gutters justify-content-center">
          <div class="col-lg-10">
            <div class="wrapper">
              <div class="row g-0">
                <div class="col-lg-12">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3>Let's get in touch</h3>
                    <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p><span>Address:</span> {{detail.address}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p><span>Email:</span> <a :href="`mailto:${detail.email}`" target="_blank">{{detail.email}}</a></p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p><span>Phone:</span> <a :href="`tel:${detail.phone}`">{{detail.phone}}</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form @submit.prevent="submitContact" id="contactForm" name="contactForm" class="contactForm">
                      <div class="row">
                        <div class="col-12 mx-auto">
                          <b-alert :show="alert.show" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged"  dismissible :variant="alert.status ? 'success' : 'danger'"  >
                            {{alert.message}}
                          </b-alert>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-group">
                            <input type="text" class="form-control" required v-model="name" name="name" id="name" placeholder="Name">
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-group">
                            <input type="email" class="form-control" required v-model="email" name="email" id="email" placeholder="Email">
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-group">
                            <input type="text" class="form-control" required v-model="subject" name="subject" id="subject" placeholder="Subject">
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <textarea name="message" class="form-control" required v-model="message" id="message" cols="30" rows="7" placeholder="Create a message here"></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <input type="submit" :disabled="submitting" value="Send Message" class="btn btn-primary">
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="w-100 social-media mt-5">
                      <h3>Follow us here</h3>
                      <p>
                        <a :href="detail.facebook">Facebook</a>
                        <a :href="detail.twitter">Twitter</a>
                        <a :href="detail.instagram">Instagram</a>
                        <a :href="detail.youtube">YouTube</a>
                        <!-- <a href="">Dribbble</a> -->
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 d-flex align-items-stretch">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/commons/Hero'
// const nodemailer = require("nodemailer");
export default {
    name: "Contact",
    props: ["detail"],
    data(){
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
        alert: {
          show: false,
          status: true,
          message: "Hello From here"
        },
        submitting: false
      }
    }, 
    components: {
      Hero,
    },
    methods: {
      submitContact(){
        this.submitting = true;
        this.alert.show = false;
        const data = new FormData();
        data.set("name",this.name);
        data.set("email",this.email);
        data.set("subject",this.subject);
        data.set("message",this.message);
        const settings = {
          method: "POST",
          body: data
        }
        return fetch("https://ravbytes.000webhostapp.com/sendMail.php",settings)
        .then(response => response.json())
        .then( (data) => {
          this.alert = data
          this.alert.show = true;
          this.alert.status && this.resetContact()
          this.submitting = false
        }).catch(err => {
          this.alert.status = false;
          this.alert.message = "There was an error submitting your message, kindly try again."
          this.submitting = false
        });
      },
      resetContact(){
        this.name = ""
        this.email = ""
        this.subject = ""
        this.message = ""
      }
    }
}
</script>