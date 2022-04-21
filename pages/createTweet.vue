<template>
  <div>
    <HeaderMain />
    <br />
    <br />
    <br />

    <div class="container">
      <form class="form" @submit.prevent="CreateTweet">
        <span class="top-text">CreatTweet</span>

        <input
          v-model="formData.title"
          type="text"
          placeholder="Title"
          class="password"
        />

        <input type="submit" class="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
// import Header from "~/components/Header.vue";
export default {
  // components: { Header },
  data() {
    return {
      title: '',

      //   created_at: "",
      user_id: '',
      formData: {
        title: this.title,

        // created_at: this.created_at,
      },
    }
  },

  methods: {
    CreateTweet() {
      // console.log(this.formData.tweet_id)
      console.log(this.formData.title)
      // console.log(this.formData.description)
      //   console.log(this.formData.created_at);
      // console.log(this.formData.user_id)
      this.$store.dispatch('CreateTweet', this.formData)
      this.$router.push({ path: '/UserHome' })
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  height: 20vh;
  background-color: rgb(230, 230, 230);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  width: 420px;
  height: 520px;
  padding-top: 60px;
  background-color: rgb(230, 230, 230);
  border: rgb(255, 255, 255) 3px solid;
  border-radius: 0px 50px 0px 50px;
  box-shadow: 15px 15px 20px 5px rgba(119, 119, 119, 0.3),
    -15px -15px 20px 5px rgba(255, 255, 255, 0.8),
    inset 5px 5px 20px 5px rgba(119, 119, 119, 0.3),
    inset -15px -15px 20px 5px rgba(255, 255, 255, 0.8);
}
.top-text,
.username,
.password,
.submit {
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  outline: none;
}
.top-text {
  font-size: 80px;
}
.username,
.password {
  font-size: 15px;
  margin-top: 50px;
  padding: 15px;
  background-color: rgb(233, 231, 231);
  width: 350px;
  border-radius: 30px;
  border: solid 3px rgb(255, 255, 255);
  box-shadow: inset 10px 10px 20px 0px rgba(119, 119, 119, 0.3),
    inset -10px -10px 20px 0px rgba(255, 255, 255, 0.8),
    15px 15px 20px 5px rgba(119, 119, 119, 0.3),
    -15px -15px 20px 5px rgba(255, 255, 255, 0.8);
  text-align: left;
}
.submit {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  padding: 8px 15px;
  margin-top: 50px;
  background-color: rgb(233, 231, 231);
  transition: 0.5s;
  border: solid 3px rgba(255, 255, 255, 0);
  border-radius: 30px;
  color: rgb(0, 0, 0);
  text-shadow: 0 0 1px rgb(68, 68, 68);
}
.submit:hover {
  border: solid 3px rgb(255, 255, 255);
  box-shadow: 15px 15px 20px 5px rgba(119, 119, 119, 0.3),
    -15px -15px 20px 5px rgba(255, 255, 255, 0.8);
}
</style>
