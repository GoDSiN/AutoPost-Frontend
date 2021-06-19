<template>
  <div>
    <div class="hidden">
      <vs-navbar
        shadow
        square
        center-collapsed
        v-model="active"
        style="position: relative"
      >
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar">
            <font-awesome-icon icon="bars" />
          </vs-button>
        </template>

        <template #right>
          <!--Select Account-->
          <vs-select placeholder="Select" v-model="value" style="margin: 10px">
            <vs-option label="Test Test" value="1"> Test Test </vs-option>
          </vs-select>
          <!--Profile image-->
          <vs-avatar square>
            <img src="../assets/bg.jpg" alt="" />
          </vs-avatar>
          <p></p>
        </template>
      </vs-navbar>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo>
          <!-- ...img logo -->
          <img src="../assets/Test.png" />
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <font-awesome-icon icon="tachometer-alt" />
          </template>
          <a href="/dashboard">Home</a>
        </vs-sidebar-item>
        <vs-sidebar-item id="history">
          <template #icon>
            <font-awesome-icon icon="history" />
          </template>
          <a href="/history">Payment History</a>
        </vs-sidebar-item>
        <vs-sidebar-item id="connect">
          <template #icon>
            <font-awesome-icon icon="plus" />
          </template>
          <a href="/isconnectaccount">Connect Account</a>
        </vs-sidebar-item>
        <vs-sidebar-item id="autoPost">
          <template #icon>
            <font-awesome-icon icon="paper-plane" />
          </template>
          Autopost
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <font-awesome-icon icon="sticky-note" />
              </template>
              Report
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="report">
            <template #icon>
              <font-awesome-icon icon="bullseye" />
            </template>
            Autopost Report
          </vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    active: "",
    isActive: false,
    activeSidebar: false,
    value: "",
  }),
};
</script>
