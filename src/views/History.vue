<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="box mt-5 mb-5">
        <p class="is-size-4">Payment History</p>

        <!--Search bar-->
        <div class="columns mt-3">
          <div class="column">
            <label for="">Select package</label>
            <div class="select">
              <select style="padding-right: 6em">
                <option selected>----------------</option>
                <option>With options 1</option>
                <option>With options 2</option>
                <option>With options 3</option>
              </select>
            </div>
          </div>

          <div class="column">
            <label for="">First name</label>
            <input class="input" type="text" placeholder="First name" />
          </div>
          <div class="column">
            <label for="">Last name</label>
            <input class="input" type="text" placeholder="Last name" />
          </div>
          <div class="column">
            <label for="">From date</label>
            <input class="input" type="date" placeholder="From date" />
          </div>
          <div class="column">
            <label for="">To date</label>
            <input class="input" type="date" placeholder="To date" />
          </div>
          <div class="column mt-5">
            <button class="button is-info" style="width: 100%">Search</button>
          </div>
        </div>

        <!--History Table-->
        <div>
          <table class="table" style="width:100%">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Payment Date</th>
                <th>Pay Amount - USD</th>
                <th>Paypal Email/Stripe</th>
                <th>Cycle Start Date</th>
                <th>Cycle end Date</th>
              </tr>
            </thead>
            <tbody>
              <!--Blank Space-->
              <div style="height: 700px"></div>
            </tbody>
          </table>
          <nav
            class="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
              <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
            </ul>
          </nav>
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