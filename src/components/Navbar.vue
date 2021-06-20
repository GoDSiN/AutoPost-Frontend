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
            <vs-option label="Test 1" value="1"> Test 1 </vs-option>
            <vs-option label="Test 2" value="2"> Test 2 </vs-option>
            <vs-option label="Test 3" value="3"> Test 3 </vs-option>
          </vs-select>
        </template>
      </vs-navbar>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo>
          <!-- web logo -->
          <img src="../assets/Test.png" />
        </template>

        <!--Home-->
        <vs-sidebar-item id="home">
          <template #icon>
            <font-awesome-icon icon="tachometer-alt" />
          </template>
          <a href="/dashboard" style="color:#555555">Home</a>
        </vs-sidebar-item>

        <!--History-->
        <vs-sidebar-item id="history">
          <template #icon>
            <font-awesome-icon icon="history" />
          </template>
          <a href="/history" style="color:#555555">Payment History</a>
        </vs-sidebar-item>

        <!--ConnectAcc-->
        <vs-sidebar-item id="connect">
          <template #icon>
            <font-awesome-icon icon="plus" />
          </template>
          <a href="/isconnectaccount" style="color:#555555">Connect Account</a>
        </vs-sidebar-item>

        <!--Autopost-->
        <vs-sidebar-item id="autoPost">
          <template #icon>
            <font-awesome-icon icon="paper-plane" />
          </template>
          <a href="/autopost" style="color:#555555">Autopost</a>
        </vs-sidebar-item>

        <!--Report-->
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <font-awesome-icon icon="sticky-note" />
              </template>
              <p style="color:#555555">Report</p>
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="report">
            <template #icon>
              <font-awesome-icon icon="bullseye" />
            </template>
            <a href="/report" style="color:#555555">Autopost Report</a>
          </vs-sidebar-item>
        </vs-sidebar-group>

        <!--Setting-->
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <font-awesome-icon icon="user-cog" />
              </template>
              <p style="color:#555555">Setting</p>
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="profile">
            <template #icon>
              <font-awesome-icon icon="user" />
            </template>
            <a href="/#" style="color:#555555">My Profile</a>
          </vs-sidebar-item>

          <vs-sidebar-item id="accSetting">
            <template #icon>
              <font-awesome-icon icon="cog" />
            </template>
            <a href="/#" style="color:#555555">Account Setting</a>
          </vs-sidebar-item>

          <vs-sidebar-item id="cp">
            <template #icon>
              <font-awesome-icon icon="key" />
            </template>
            <a href="/#" style="color:#555555">Change Password</a>
          </vs-sidebar-item>

          <vs-sidebar-item id="logout">
            <template #icon>
              <font-awesome-icon icon="power-off" />
            </template>
            <a href="/#" style="color:#555555">Logout</a>
          </vs-sidebar-item>
        </vs-sidebar-group>

        <!--Profile image-->
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar class="ml-0">
              <img src="../assets/bg.jpg" alt="">
            </vs-avatar>
            <!--Profile name-->
            <p class="mt-3 mr-3" id='name'><b>Test Name</b></p>
          </vs-row>
        </template>

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
    value: "1",
  }),
};
</script>

<style scoped>
    #name {
      text-overflow: ellipsis; 
      overflow: hidden;
      width:100px;
      white-space: nowrap
    }
</style>
