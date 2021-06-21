<template>
  <div>
      <Navbar/>
      <div class="container">
        <div style="margin-top: 10px">
          <strong><p class="is-size-4">Account Setting</p></strong>
        </div>
        <section  >
            <div class="column is-10 " style="width:100%">
              <form action="" class="box" style="height:100%;padding-top:5%;padding-left:30%;padding-right:30%">

                <!--Sign up form-->

                <div class="field">
                  <label for="" class="label">Name*</label>
                  <div class="control has-icons-left">
                    <input
                      type="name"
                      placeholder="wandee sreepenruk"
                      class="input"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Mobile*</label>
                  <div class="control has-icons-left">
                    <input
                      type="Mobile"
                      placeholder="xxx-xxx-xxxx"
                      class="input"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Email*</label>
                  <div class="control has-icons-left">
                    <input
                      type="email"
                      placeholder="misternt.code@gmail.com"
                      class="input"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Address</label>
                  <div class="control has-icons-left">
                    <textarea name="Text1" cols="80" rows="3"></textarea>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label"> Gender</label>
                  <div class="select">
                    <select>
                        <option selected>----------------</option>
                        <option>Male  </option>
                        <option>Female  </option>
                    </select>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Profile picture</label>
                  <div class="control has-icons-left">
                    <input
                      type="file"
                      placeholder="xxx-xxx-xxxx"
                      class="input"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label" >My note</label>
                  <div class="control has-icons-left" >
                      <textarea name="Text1" cols="80" rows="5"></textarea>
                  </div>
                </div>
                <!-- end form -->
                <br>
                <div class="field">
                  <button class="button is-success" style="width: 45%;">Save</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button class="button is-fail" style="width: 45%;" >cancel</button>
                </div>
              </form>
            </div>
          </section>
        </div>
    
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Navbar, Footer },

}
</script>

<style>
</style>