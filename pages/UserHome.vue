<template>
  <div class="container">
    <HeaderMain />
    <br />
    <br />
    <br />
    <br />
    <div class="title">
      <h1>All TWEETS</h1>
    </div>
    <main class="list">
      <ul id="list" v-for="(tweets, i) in $store.state.tweets" :key="i">
        <!-- <li class="listElement">{{ i + 1 }}. {{ todo.title }}</li> -->
        <li class="listElement">{{ i + 1 }}</li>
        <li>
          {{ tweets.title
          }}<button class="button" @click="goToTweet(tweets.post_id)"></button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {
    await this.$store.dispatch('getAllTweet')

    return
  },
  methods: {
    async goToTweet(id) {
      console.log(id)
      await this.$store.dispatch('getTweet', id)
      await this.$store.commit('setPostId', id)
      await this.$router.push('/tweet')
    },
  },
}
</script>
<style scoped>
#list {
  text-align: center;
}
.button {
  border-radius: 40px;
  padding: 8px;
  border: 0px solid gray;
  /* color: rgb(12, 12, 45); */
  background-color: #629fb3;
  color: white;
  float: right;
  cursor: pointer;
}
</style>
