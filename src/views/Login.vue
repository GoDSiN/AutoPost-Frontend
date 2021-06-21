<template>
  <div>
    <section>
      <div>
        <div>
          <div class="columns">
            <div class="column is-9 p-0">
              <!--Back ground-->
              <img
                src="../assets/bg.jpg"
                style="background-size: cover; height: 100%"
              />
            </div>
            <div class="column p-0">
              <div class="box" style="height: 100%; padding-top: 50%">
                <img
                  src="../assets/Test.png"
                  alt=""
                />

                <template>
                  <div class="center">
                    <vs-button @click="active = !active" style="width:95%;height:50px">
                      <b>SIGN IN</b>
                    </vs-button>
                    <div style="mb-5 mt-5">
                      <center><b>OR</b></center>
                    </div>
                    
                    <vs-button color="rgb(200,200,200)" @click="active2 = !active2" style="width:95%;height:50px">
                      <b>SIGN UP</b>
                    </vs-button>

                    <vs-dialog blur v-model="active">

                      <template #header>
                        <h4 class="not-margin">Welcome to <b>Test Website</b></h4>
                      </template>

                      <div class="con-form">
                        <vs-input v-model="email" placeholder="Email" style="width:100%">
                          <template #icon> @ </template>
                        </vs-input>

                        <vs-input
                          type="password"
                          v-model="password"
                          placeholder="Password"
                          class="mt-3"
                        >
                          <template #icon>
                            <i class="bx bxs-lock"></i>
                          </template>
                        </vs-input>

                        <div class="flex">
                          <vs-checkbox v-model="remember">Remember me</vs-checkbox>
                        </div>

                      </div>
                      <template #footer>
                        <div class="footer-dialog">
                          <vs-button block> Sign In </vs-button>
                          <div class="new">
                            <center><a href="#" style="font-size:14px">Forgot Password?</a></center>
                          </div>
                        </div>
                      </template>
                    </vs-dialog>

                    <vs-dialog blur v-model="active2">

                      <template #header>
                        <h4 class="not-margin">Sign Up to <b>Test Website</b></h4>
                      </template>

                      <div class="con-form">
                        <vs-input v-model="email" placeholder="Email" style="width:100%">
                          <template #icon> @ </template>
                        </vs-input>

                        <vs-input
                          type="password"
                          v-model="password"
                          placeholder="Password"
                          class="mt-3"
                        >
                          <template #icon>
                            <i class="bx bxs-lock"></i>
                          </template>
                        </vs-input>

                        <vs-input
                          type="password"
                          v-model="password"
                          placeholder="Confirm Password"
                          class="mt-3"
                        >
                          <template #icon>
                            <i class="bx bxs-lock"></i>
                          </template>
                        </vs-input>

                      </div>
                      <template #footer>
                        <div class="footer-dialog">
                          <vs-button block> Confirm </vs-button>
                        </div>
                      </template>
                    </vs-dialog>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    active2: false,
    email: "",
    password: "",
    remember: false,
  }),
};
</script>

<style>
  .vs-input{
    width: 100%;
  }
</style>