<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>Buttons</h3>

        <button class="btn btn-primary" @click="button = 'one'">One</button>
        <button class="btn btn-primary" @click="button = 'two'">Two</button>
        <button class="btn btn-primary" @click="button = 'three'">Three</button>
        <button class="btn btn-primary" @click="button = null">Null</button>

        <p>
          selected: {{button}}
        </p>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-body">
        <div class="form-group">
          <label>First name:</label>
          <input class="form-control" placeholder="Your first name" type="text" v-model="fName">
        </div>
        <div class="form-group">
          <label>Last name:</label>
          <input class="form-control" placeholder="Your last name" type="text" v-model="lName">
        </div>
        <pre v-html="form"></pre>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-body">
        <h4>Mouse coordinates sync:</h4>
        <mouse-coordinates></mouse-coordinates>
      </div>
    </div>

  </div>
</template>
<style>

</style>
<script>
  import MouseCoordinates from '../../components/MouseCoordinates.vue'
  export default {
    components: {
      MouseCoordinates
    },
    computed: {
      form () {
        return this.$store.state.form
      },
      fName: {
        get () {
          return this.$store.state.form.firstName
        },
        set (val) {
          this.$store.dispatch('setFirstName', val)
        }
      },
      lName: {
        get () {
          return this.$store.state.form.lastName
        },
        set (val) {
          this.$store.dispatch('setLastName', val)
        }
      },
      button: {
        get () {
          return this.$store.state.button
        },
        set (val) {
          this.$store.dispatch('setButton', val)
        }
      }
    },
    mounted () {
      console.log(this.$logux)
    }
  }
</script>
