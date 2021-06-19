<template>
  <div>
      <Navbar/>
      <div class="container">
        <div style="margin-top: 10px">
          <strong><p class="is-size-4">Dashboard</p></strong>
          <p>Welcome to PostJing Member panel !</p>
        </div>
        <div class="columns">
          <div class="column is-4" >
            <div class="box mt-5">
              <font-awesome-icon icon="user-circle" style="font-size:5rem;display: inline-block;color: #61ced4"/>
              <div class="has-text-right" style="display: inline-block;margin-left: 50%">
                <strong><p class='is-size-4'>1</p></strong>
                <p>Total Accounts</p>
              </div>
            </div>
          </div>

          <div class="column is-4" >
            <div class="box mt-5">
              <font-awesome-icon icon="pager" style="font-size:5rem;display: inline-block;color: #5c49b8"/>
              <div class="has-text-right" style="display: inline-block;margin-left: 50%">
                <strong><p class='is-size-4'>1</p></strong>
                <p>Total pages</p>
              </div>
            </div>
          </div>

          <div class="column is-4" >
            <div class="box mt-5">
              <font-awesome-icon icon="users" style="font-size:5rem;display: inline-block; color: #e6a432"/>
              <div class="has-text-right" style="display: inline-block;margin-left: 50%">
                <strong><p class='is-size-4'>1</p></strong>
                <p>Total group</p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class='column is-6'>
            <div class="box" >
              <div>
                <strong><p class="is-size-5">AUTO POST ( TEXT )</p></strong>
              </div>
              <div style="height:300px">
                  <!--Blank Area-->
              </div>
            </div>
          </div>

          <div class='column is-6'>
            <div class="box" >
              <div>
                <strong><p class="is-size-5">AUTO POST ( LINK )</p></strong>
              </div>
              <div style="height:300px">
                  <!--Blank Area-->
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class='column is-6'>
            <div class="box" >
              <div>
                <strong><p class="is-size-5">AUTO POST ( IMAGE )</p></strong>
              </div>
              <div style="height:300px">
                  <!--Blank Area-->
              </div>
            </div>
          </div>

          <div class='column is-6'>
            <div class="box" >
              <div>
                <strong><p class="is-size-5">AUTO POST ( VIDEO )</p></strong>
              </div>
              <div style="height:300px">
                  <!--Blank Area-->
              </div>
            </div>
          </div>
        </div>
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