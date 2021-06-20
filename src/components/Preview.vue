<template>
    <div class="column mt-5">
          <div class="box">
            <div class="">
              <strong>Preview</strong>
            </div>
            <hr />

            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Test Name</p>
                    <p class="subtitle is-6">now Post</p>
                  </div>
                </div>

                <div class="content">
                  <p>{{text}}</p><hr>
                  <div class="columns">
                      <div class="column">
                          <p>Like</p> 
                      </div>

                      <div class="column">
                          <p>Comment</p>
                      </div>

                      <div class="column">
                          <p>Share</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
</template>

<script>
export default {
    name: 'Preview'
}
</script>

<style>

</style>