<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click="handleSideNav(item)"
        >
        <!-- <span> -->
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          <!-- </span> -->
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->
      <v-layout align-center justify-end>
        <v-btn @click="displayActions=true" icon>
          <v-icon>account_circle</v-icon>
        </v-btn>
        <span v-if="userData.first_name">{{userData.first_name}}</span>
      </v-layout>

    </v-toolbar>
    <v-content>
      <UserActions v-if="displayActions" @closeUserActions="displayActions=false" />
      <router-view v-if="!displayActions && userData.email"/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
// import ComponentA from './ComponentA'
import UserActions from './components/user-modal-actions.vue'
export default {
  name: 'App',
  components:{
    UserActions
  },
  methods:{
    handleSideNav(item){
      // debugger
      this.$router.push({ name: 'sprintConfig'})
    }
  },
  computed:{
    userData () {
      return this.$store.state.userData;
    }
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'New sprint',
        route_name: 'sprintConfig'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Sprint Planning',
      displayActions: false,
    }
  }
}
</script>
