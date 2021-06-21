<template>
  <div>
    <Navbar />
    <div class="container">
        <div style="margin-top: 10px">
            <strong><p class="is-size-4">Myprofile</p></strong>
        </div>
        <div class="columns">
            
            <div class="column is-2">
            <div class="box mt-5">
                <img src="../assets/avatar.png" />
                <div align = "center">
                  <p>wandee</p>
                <p>misternt.code@gmail.com</p>
                </div>
            </div>
            </div>
           
            <table class="table">
            <thead>
              <tr>
                <th>Full name
                    <br>
                    wandee sreepenruk
                </th>
                <th>Mobile
                    <br>
                    xxx-xxx-xxxx
                </th>
                <th>email
                    <br>
                    misternt.code@gmail.com
                </th>
                <th>location
                    <br>
                    on earth 19/34343 
                </th>
              </tr>
            </thead>
            <tbody>
              <!--Blank Space-->
              <div style="height: 700px"></div>
            </tbody>
          </table>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style>
</style>