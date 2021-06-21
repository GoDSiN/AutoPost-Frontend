<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="box mt-5">
        <strong
          ><p class="is-size-5" style="display: inline-block">
            Auto Post Report
          </p></strong
        >
        <div style="display: inline-block; float: right">
          <input class="input is-small" placeholder="Search" />
        </div>
        <hr />
        <table class="table" style="width: 100%">
          <thead>
            <tr>
              <th>Message</th>
              <th>Publisher</th>
              <th>Post Type</th>
              <th>Schedule At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!--Blank Space-->
          </tbody>
        </table>

        <!--pagination-->
        <template>
          <div class="center">
            <vs-pagination v-model="page" :length="20" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  data: () => ({
    page: 1,
  }),
};
</script>

<style>
</style>