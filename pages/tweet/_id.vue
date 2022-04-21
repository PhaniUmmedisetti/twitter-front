<template>
  <div>
    <HeaderMain />
    <div>
      <div>
        <b-navbar toggleable="sm" type="primary" variant="light">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-navbar-brand>TWITTER</b-navbar-brand>
        </b-navbar>
      </div>
      <div>
        <div v-if="isUpdating">
          <p>
            <input type="text" v-model="title" />
          </p>
        </div>
        <h1 v-else>{{ tweet.title }}</h1>
        <div class="btns" v-if="tweet.user_id == $store.state.userid">
          <button v-if="!isUpdating" class="btn" @click="updatePost">
            Update
          </button>
          <button
            v-if="!isUpdating"
            class="btn-danger"
            @click="deletePost(tweet.id)"
          >
            Delete
          </button>
          <button class="button" v-else @click="submitPost">Submit</button>
        </div>
      </div>
      <div>
        <b-collapse visible id="collapse-3">
          <h3>Comments</h3>
          <b-card v-for="(comment, i) in comments" :key="i"
            >{{ comment.text }}
            <button
              @click="deleteComment(comment.comment_id)"
              v-if="comment.user_id == userid"
            >
              delete
            </button>
          </b-card>
        </b-collapse>
        <input type="text" v-model="text" /><button @click="AddComment">
          Add Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      text: '',
      isUpdating: false,
      title: '',
    }
  },
  computed: {
    ...mapState(['comments', 'tweet', 'userid']),
  },
  methods: {
    AddComment() {
      this.$store.dispatch('addComment', this.text)
    },
    async deleteComment(id) {
      await this.$store.dispatch('deleteComment', id)
      await this.$store.dispatch('getAllComments')
    },
    updatePost() {
      this.isUpdating = true
      this.title = this.tweet.title
    },
    async submitPost() {
      this.isUpdating = false
      await this.$store.dispatch('updatePost', this.title)
      this.$store.commit('updatePost', this.title)
    },
    async deletePost(id) {
      await this.$store.dispatch('deletePost', id)
      this.$router.push('/UserHome')
    },
  },
  async created() {
    await this.$store.dispatch('getAllComments')
  },
}
</script>

<style lang="scss" scoped></style>
