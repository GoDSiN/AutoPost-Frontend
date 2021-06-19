<template>
  <div>
    <section>
      <div>
        <div>
          <div class="columns">
            <div class="column is-9 p-0" >
                <!--Back ground-->
              <img
                src="../assets/bg.jpg"
                style="background-size: cover; height: 100%;"
              />
            </div>
            <div class="column p-0">
              <form action="" class="box" style="height:100%;padding-top:50%">
                  <!--Test Logo-->
                  <img src="../assets/Test.png" alt=""/>
                <!--Login form-->
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      placeholder="*******"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="field columns">
                  <label for="" class="checkbox column">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="" class="column has-text-right"><font-awesome-icon icon="lock" /> forgot password</a>
                </div>
                <div class="field">
                  <button class="button is-success" style="width: 100%">Login</button>
                </div>
                <p class='has-text-centered'>Don't have an account? <a href="/Signup">Sign Up</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>