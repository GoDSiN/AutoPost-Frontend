<template>
  <div>
    <Navbar />
    <div class='container'>
        <div class='columns mt-5'>
            <div class='column'>
                <center><a href="#"><img src="../assets/facebook.png" style=""></a></center>
            </div>
            <div class='column is-9'>
                <button class='button is-info ' style="width:100%;">ตรวจสอบหลัง Login</button>
            </div>
        </div>
        <div class="box">
            <p class="is-size-4 has-text-centered mt-5">Your Existing Accounts</p>
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