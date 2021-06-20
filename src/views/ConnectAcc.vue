<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="columns mt-5">
        <div class="column">
          <center>
            <a href="#"><img src="../assets/facebook.png" style="" /></a>
          </center>
        </div>
        <div class="column is-9">
          <button class="button is-info" style="width: 100%">
            ตรวจสอบหลัง Login
          </button>
        </div>
      </div>
      <div class="box">
        <p class="is-size-4 has-text-centered mt-5">Your Existing Accounts</p>
      </div>
      <!-- Card -->
      <div class="columns">
        <div class="column is-half">
          <div class="card">
            <header class="card-header has-background-info">
              <figure class="image is-48x48">
                <img src="../assets/facebook2.png" alt="Placeholder image" />
              </figure>
              <p class="card-header-title has-text-primary-light">Test Name</p>
              <div class="is-left mt-2">
                <a><font-awesome-icon
                  icon="minus"
                  class="m-3 has-text-primary-light"
                /></a>
                <a><font-awesome-icon
                  icon="times"
                  class="m-3 has-text-primary-light"
                /></a>
              </div>
            </header>
            <div class="card-content" style="max-height: 400px; overflow: auto">
              <!--card contend-->
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/bg.jpg" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <a href="#" style="display: inline-block"
                    ><p class="subtitle is-6">
                      <font-awesome-icon icon="external-link-square-alt" />
                      visit page
                    </p>
                  </a>
                  <font-awesome-icon
                    icon="trash-alt"
                    style="float: right; font-size: 20px"
                  />
                </div>
              </div>

              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/bg.jpg" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <a href="#" style="display: inline-block"
                    ><p class="subtitle is-6">
                      <font-awesome-icon icon="external-link-square-alt" />
                      visit page
                    </p>
                  </a>
                  <font-awesome-icon
                    icon="trash-alt"
                    style="float: right; font-size: 20px"
                  />
                </div>
              </div>

              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/bg.jpg" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <a href="#" style="display: inline-block"
                    ><p class="subtitle is-6">
                      <font-awesome-icon icon="external-link-square-alt" />
                      visit page
                    </p>
                  </a>
                  <font-awesome-icon
                    icon="trash-alt"
                    style="float: right; font-size: 20px"
                  />
                </div>
              </div>

              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/bg.jpg" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <a href="#" style="display: inline-block"
                    ><p class="subtitle is-6">
                      <font-awesome-icon icon="external-link-square-alt" />
                      visit page
                    </p>
                  </a>
                  <font-awesome-icon
                    icon="trash-alt"
                    style="float: right; font-size: 20px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
</style>