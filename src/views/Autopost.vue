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
            <!--Header-->
            <div class="columns">
              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 0"
                  @click="
                    active = 0;
                    clear();
                  "
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon icon="align-left" class="mr-2" /> Text
                </vs-button>
              </div>

              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 1"
                  @click="
                    active = 1;
                    clear();
                  "
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
                  @click="
                    active = 2;
                    clear();
                  "
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon icon="images" class="mr-2" />Image
                </vs-button>
              </div>

              <div class="column is-3">
                <vs-button
                  transparent
                  :active="active == 3"
                  @click="
                    active = 3;
                    clear();
                  "
                  style="width: 100%; font-size: 16px"
                >
                  <font-awesome-icon icon="video" class="mr-2" />Video
                </vs-button>
              </div>
            </div>

            <!--Body-->
            <div>
              <!--Text Area-->
              <strong><label for="">Text</label></strong>
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  placeholder="textarea"
                  v-model="text"
                ></textarea>
              </div>
            </div>

            <div v-if="active === 0">
              <GroupSelect />
            </div>

            <!--Link input-->
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

            <!--Image input-->
            <div v-else-if="active === 2">
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Image URL</label></strong>
                  <input
                    class="input"
                    type="text"
                    placeholder="Paste link"
                    v-model="imageUrlLink"
                  />
                </div>
                <hr />
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      name="resume"
                      accept="image/*"
                      @change="previewImage"
                    />
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
                      {{ imageName }}
                    </span>
                  </label>
                </div>
                <button
                  class="button is-warning mt-5"
                  style="width: 100%"
                  @click="clear"
                >
                  Clear All
                </button>
              </div>
              <GroupSelect />
            </div>

            <!--Video input-->
            <div v-else>
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Select Video</label></strong>
                </div>
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input
                      class="file-input"
                      id="file-input"
                      type="file"
                      name="resume"
                      accept="video/*"
                      @change="previewVideo"
                    />
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
                      {{ videoName }}
                    </span>
                  </label>
                </div>
              </div>

              <!--Video thumbnail-->
              <div class="mt-5">
                <div class="control">
                  <strong><label for="">Video thumbnail URL</label></strong>
                  <input
                    class="input"
                    type="text"
                    placeholder="Paste link"
                    v-model="videoThumbData"
                  />
                </div>
                <div class="file has-name is-fullwidth mt-3">
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      name="resume"
                      accept="image/*"
                      @change="previewVideoThumb"
                    />
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
                      {{ videoThumbName }}
                    </span>
                  </label>
                </div>
                <button
                  class="button is-warning mt-5"
                  style="width: 100%"
                  @click="clear"
                >
                  Clear All
                </button>
              </div>
              <GroupSelect />
            </div>
            <button
              class="button is-info mt-5"
              style="width: 100%"
              @click="clear"
            >
              <font-awesome-icon icon="paper-plane" class="mr-2" />Submit
            </button>
          </div>
        </div>

        <!--Preview-->
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
                      <!--Profile image-->
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                        class="is-rounded"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <!--Profile Name-->
                    <p class="title is-5">Test Name</p>
                    <p class="subtitle is-6">now Post</p>
                  </div>
                </div>

                <div class="content">
                  <!--Text preview-->
                  <p>{{ text }}</p>

                  <!--Image preview-->
                  <div class="image-preview" v-if="imageData.length > 0">
                    <img class="preview" :src="imageData" />
                  </div>

                  <div class="image-preview" v-if="imageUrlLink.length > 0">
                    <img class="preview" :src="imageUrlLink" />
                  </div>

                  <!--Video preview-->
                  <div v-if="videoData.length > 0">
                    <video
                      id="video"
                      :src="videoData"
                      :poster="videoThumbData"
                      controls
                    ></video>
                  </div>

                  <!--link preview-->
                  <div v-if="urlLink.length > 0">
                    <link-prevue :url="urlLink">
                      <template slot-scope="props">
                        <div class="card">
                          <img
                            class="card-img-top"
                            :src="props.img"
                            :alt="props.title"
                          />
                          <div class="card-block">
                            <h4 class="card-title ml-2 mt-2">{{ props.title }}</h4>
                            <p class="card-text ml-2 pb-3" style="margin-top: -10px; font-size: 14px">{{ props.description }}</p>
                          </div>
                        </div>
                      </template>
                    </link-prevue>
                  </div>
                  <hr />

                  <div class="columns">
                    <div class="column">
                      <p>
                        <font-awesome-icon icon="thumbs-up" class="mr-2" />Like
                      </p>
                    </div>

                    <div class="column">
                      <p>
                        <font-awesome-icon
                          icon="comments"
                          class="mr-2"
                        />Comment
                      </p>
                    </div>

                    <div class="column">
                      <p>
                        <font-awesome-icon icon="share" class="mr-2" />Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import GroupSelect from "@/components/GroupSelect.vue";
import LinkPrevue from "link-prevue";
export default {
  components: { Navbar, GroupSelect, LinkPrevue },
  data: () => ({
    active: 0,
    urlLink: "",
    imageUrlLink:"",
    text: "",
    imageData: "",
    imageName: "",
    videoName: "",
    videoData: "",
    videoThumbData: "",
    videoThumbName: "",
    videoUrlLink: "",
    videoUrlThumb: "",
  }),
  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
        this.imageName = input.files[0].name;
        console.log(input.files);
      }
    },
    previewVideo: function (event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.videoData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.videoName = input.files[0].name;
      }
    },
    previewVideoThumb: function (event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.videoThumbData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.videoThumbName = input.files[0].name;
      }
    },
    clear() {
      (this.imageName = ""),
        (this.imageData = ""),
        (this.text = ""),
        (this.urlLink = ""),
        (this.videoName = ""),
        (this.videoData = ""),
        (this.videoThumbData = ""),
        (this.videoThumbName = "");
    },
  },
};
</script>

<style>
</style>