<template>
  <div class="mt-5">
    <div>
      <strong><p>Post to your Pages & Groups</p></strong>
      <div class="columns">
        <div class="column">
          <strong
            ><p class="mt-5" style="display: inline-block">
              Select page
            </p></strong
          >
          <div class="select mt-5 ml-2 is-small">
            <select style="padding-right: 10em">
              <option value="" disabled selected>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>

        <div class="column">
          <strong
            ><p class="mt-5" style="display: inline-block">
              Select group
            </p></strong
          >
          <div class="select mt-5 ml-2 is-small">
            <select style="padding-right: 10em">
              <option value="" disabled selected>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <strong><p>Schedule</p></strong>
          <div class="control mt-5">
            <label class="radio">
              <input
                type="radio"
                name="check1"
                v-model="schedule"
                value="now"
              />
              Now
            </label>
            <label class="radio">
              <input
                type="radio"
                name="check1"
                v-model="schedule"
                value="schedule"
              />
              Schedule
            </label>
          </div>

          <div v-if="schedule === 'schedule'">
            <div class="columns">
              <div class="column mt-5">
                <strong><label for="" class="">Schedule time</label></strong>
                <input
                  type="datetime-local"
                  class="input is-small mt-3"
                  v-model="date"
                />
              </div>

              <div class="column mt-5">
                <strong><label for="">TimeZone</label><br></strong>
                <div class="select mt-3 is-small">
                  <select style="padding-right: 20em">
                    <option value="" disabled selected>Select TimeZone</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupSelect",
  data: () => ({
    page: "",
    group: "",
    schedule: "now",
    date: "",
    localDate: "",
  }),
};
</script>

<style>
</style>