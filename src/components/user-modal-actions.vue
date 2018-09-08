<template>
  <div>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>

            <v-tabs
              color="cyan"
              dark
              slider-color="yellow"
              v-model="tabs"
            >
              <v-tab ripple>
                Sign Up
              </v-tab>
              <v-tab v-if="!createOnly" ripple>
                Sign In
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <!-- <v-card-text>Contents for Item 1 go here</v-card-text> -->

                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="userData.first_name" label="First name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="userData.last_name"
                        label="Last name"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="userData.email" label="Email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="userData.password" label="Password" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="userData.password_confirmation" label="Password" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        :items="['Planner', 'Admin', 'Dev', 'Tester']"
                        label="User type"
                        hint="Prerms control"
                        required
                        v-model="userData.user_type"
                      ></v-select>
                    </v-flex>
                  </v-layout>


                </v-card>
              </v-tab-item>
              <v-tab-item v-if="!createOnly">
                <v-card flat>
                  <!-- <v-card-text>Contents for Item 2 go here</v-card-text> -->

                  <v-layout wrap>

                    <v-flex xs12>
                      <v-text-field v-model="userData.email" label="Email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="userData.password" label="Password" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                    </v-flex>
                  </v-layout>


                </v-card>
              </v-tab-item>
            </v-tabs>


          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="handleClose()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="handleSubmit()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script>
// import ComponentA from './ComponentA'
// import UserActions from './components/user-modal-actions.vue'
export default {
  name: 'useractions',
  props:['createOnly'],
  components:{
    // UserActions
  },
  methods:{
    handleSubmit(){
      if (this.tabs === 1) {
        this.$store.dispatch('SIGN_IN', this.userData)
        this.$emit('closeUserActions')
      }else{
        this.$store.dispatch('SIGN_UP', this.userData)
        .then((resp)=>{
          this.$nextTick(() => {
            if (!this.createOnly) {
              this.$store.dispatch('SIGN_IN', this.userData)
            }

          });

        })
        .then(()=>{
          this.$emit('closeUserActions')
        })
      }

    },
    handleClose(){
      // dialog = false;
      this.$emit('closeUserActions')
      // debugger
      // this.$emit('')
    },
    next () {
       const active = parseInt(this.active)
       this.active = (active < 2 ? active + 1 : 0)
     },
  },
  data () {
    return {
      tabs:'',
      dialog: true,
      active: null,
      userData:{
        first_name:'',
        last_name:'',
        user_type:'',
        email:'',
        password:'',
      }
    }
  }
}
</script>
