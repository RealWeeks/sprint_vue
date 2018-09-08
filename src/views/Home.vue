<template>
  <div>
    <v-container fluid>
      <v-layout row>
      <v-flex md2>
        <v-flex md12>
            <v-card>
              <v-card-actions>
                <v-btn @click="showModal = true" flat color="blue">Quick add User</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        <v-flex md12 v-for="user in users">
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
        </v-flex>

        <v-flex md6>
          <v-card>
            <v-card-actions>
              <v-flex>

                <v-flex md12>
                  <v-text-field
                    placeholder="Placeholder"
                    v-model="task"
                    append-outer-icon="queue"
                    
                    @click:append-outer="handleTaskModal"

                    @keyup.enter="handleTaskModal"
                  ></v-text-field>
                  <!-- <v-icon>library_add</v-icon> -->
                </v-flex>


                <!-- <v-flex md12>
                  <v-text-field
                    placeholder="Placeholder"
                    v-model="task_type"
                  ></v-text-field>
                </v-flex> -->
              <!-- <v-btn @click="showModal = true" flat color="blue">Quick add User</v-btn> -->
            </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>

      <UserActions :createOnly="true" v-if="showModal" @closeUserActions="closeUserActions"/>
      <addTask v-if="showTask" @close="showTask = false"/>
    </v-layout>

    <!-- <v-layout row md5>

    </v-layout> -->

    </v-container>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
// import ComponentA from './ComponentA'
import UserActions from '../components/user-modal-actions.vue'
import addTask from '../components/add-task.vue'
export default {
  name: 'home',
  components:{
    UserActions,
    addTask
  },
  created(){
    this.handleFetchUsers()
  },
  methods:{
    handleTaskModal(){
      this.showTask = true
    },
    handleFetchUsers(){
      this.$store.dispatch('GET_USERS')
    },
    closeUserActions(){
      debugger
      this.handleFetchUsers()
      this.$nextTick(() => {
        this.showModal = false;
      })

    }

  },
  watch:{
  },
  computed:{
    userData () {
      return this.$store.state.userData;
    },
    users () {
      return this.$store.state.users;
    }
  },
  data () {
    return {
      showModal:false,
      task:'',
      task_type:'',
      showTask:false,
      // clipped: false,
    }
  }
}
</script>
