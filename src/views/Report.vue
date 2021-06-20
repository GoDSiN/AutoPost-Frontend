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
        <nav
          class="pagination is-small"
          role="navigation"
          aria-label="pagination"
        >
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
              <p>Showing 0 to 0 of 0 entries</p>
          </ul>
        </nav>
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