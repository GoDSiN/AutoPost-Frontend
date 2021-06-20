<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="columns">
        <div class="column is-7">
          <div class="box mt-5">
            <div>
              <strong><p>Autopost</p></strong>
            </div>
            <hr />
            <div class="columns">
              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 0"
                  @click="active = 0"
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon icon="align-left" class="mr-2" /> Text
                </vs-button>
              </div>

              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 1"
                  @click="active = 1"
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon
                    icon="external-link-square-alt"
                    class="mr-2"
                  />Link
                </vs-button>
              </div>

              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 2"
                  @click="active = 2"
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon icon="images" class="mr-2" />Image
                </vs-button>
              </div>

              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 3"
                  @click="active = 3"
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon icon="video" class="mr-2" />Video
                </vs-button>
              </div>
            </div>

            <!--Body-->
            <div>
              <strong><label for="">Text</label></strong>
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  placeholder="textarea"
                  v-model="text"
                ></textarea>
              </div>
            </div>

            <!-- V-IF Body-->
            <div v-if="active === 0">
              <GroupSelect />
            </div>

            <div v-else-if="active === 1">
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Link</label></strong>
                  <input
                    class="input"
                    type="text"
                    placeholder="Paste link"
                    v-model="urlLink"
                  />
                </div>
              </div>
              <GroupSelect />
            </div>

            <div v-else-if="active === 2">
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Image URL</label></strong>
                  <input
                    class="input"
                    type="text"
                    placeholder="Paste link"
                    v-model="urlLink"
                  />
                </div>
                <hr />
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span
                      class="
                        file-cta
                        has-background-info has-text-primary-light
                      "
                    >
                      <span class="file-label"> Choose a file… </span>
                    </span>
                    <span class="file-name">
                      <!--file path / filename-->
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </div>
              <GroupSelect />
            </div>

            <div v-else>
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Video URL</label></strong>
                  <input
                    class="input"
                    type="text"
                    placeholder="Paste link"
                    v-model="urlLink"
                  />
                </div>
                <hr />
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span
                      class="
                        file-cta
                        has-background-info has-text-primary-light
                      "
                    >
                      <span class="file-label"> Choose a file… </span>
                    </span>
                    <span class="file-name">
                      <!--file path / filename-->
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </div>
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Video thumbnail URL</label></strong>
                  <input
                    class="input"
                    type="text"
                    placeholder="Paste link"
                    v-model="urlLink"
                  />
                </div>
                <div class="file has-name is-fullwidth mt-3">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span
                      class="
                        file-cta
                        has-background-info has-text-primary-light
                      "
                    >
                      <span class="file-label"> Choose a file… </span>
                    </span>
                    <span class="file-name">
                      <!--file path / filename-->
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </div>
              <GroupSelect />
            </div>
          </div>
        </div>

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
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import GroupSelect from "@/components/GroupSelect.vue";
export default {
  components: { Navbar, GroupSelect },
  data: () => ({
    active: 0,
    urlLink: "",
    text: "",
  }),
};
</script>

<style>
</style>