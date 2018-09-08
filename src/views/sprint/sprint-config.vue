<template>
  <div>
    Testtt
  </div>
</template>

<script>
// import ComponentA from './ComponentA'
// import UserActions from './components/user-modal-actions.vue'
export default {
  name: 'spring-config',
  components:{
    // UserActions
  },
  computed:{
    userData () {
      return this.$store.state.userData;
    }
  },
  data () {
    return {
    // foo:''
    }
  }
}
</script>
