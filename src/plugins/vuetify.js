import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VDialog,
  VTextField,
  VSelect,
  VAutocomplete,
  VTabs,
  VInput,
  // VTab,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    // VTab,
    VInput,
    VTabs,
    VAutocomplete,
    VSelect,
    VTextField,
    VDialog,
    VCard,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
})
