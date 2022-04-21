<template>
  <div>
    <HeaderMain />
    <br />
    <br />
    <br />
    <br />

    <h5>Full Name : {{ fullname }}</h5>
    <h5>Email : {{ email }}</h5>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Update your name here</label>
      <textarea
        v-model="newName"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="updateProfile">
      Update Profile
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['email', 'fullname']),
  },

  methods: {
    moveToLogin() {
      this.$router.push('/')
    },
    moveToHomePage() {
      this.$router.push('/HomePage')
    },

    moveToProfile() {
      this.$router.push('/ProfilePage')
    },

    moveToCreatePost() {
      this.$router.push('/CreatePost')
    },

    async updateProfile() {
      await this.$store.dispatch('updateProfile', {
        full_name: this.newName,
      })
      this.$store.commit('setName', this.newName)
      this.newName = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
