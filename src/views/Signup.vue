<template>
  <div>
    <div class="hidden">
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar">
            <font-awesome-icon icon="bars" />
          </vs-button>
        </template>

        <template #right>
          <vs-select placeholder="Select" v-model="value" style="margin: 10px">
            <vs-option label="Test Test" value="1" > Test Test </vs-option>
          </vs-select>
          <vs-avatar>
            <img src="../assets/bg.jpg" alt="" />
          </vs-avatar>
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
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="history">
          <template #icon>
            <font-awesome-icon icon="history" />
          </template>
          Payment History
        </vs-sidebar-item>
        <vs-sidebar-item id="connect">
          <template #icon>
            <font-awesome-icon icon="plus" />
          </template>
          Connect Account
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
  data: () => ({
    active: "home",
    activeSidebar: false,
    value: '',
  }),
};
</script>