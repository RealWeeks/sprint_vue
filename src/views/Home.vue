<template>
  <v-container fluid>

    <v-flex md2 v-for="user in users">
        <v-card>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{user.first_name}} {{user.last_name}}</h3>
              <div>{{user.user_type}}</div>
            </div>
          </v-card-title>

          <!-- <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>

  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
// import ComponentA from './ComponentA'
export default {
  name: 'home',
  components:{
    // UserActions
  },
  created(){
    this.$store.dispatch('GET_USERS')
  },
  methods:{

  },
  computed:{
    userData () {
      return this.$store.state.userData;
    },
    users () {
      debugger
      return this.$store.state.users;
    }
  },
  data () {
    return {
      // clipped: false,
    }
  }
}
</script>
