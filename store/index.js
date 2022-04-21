const state = () => ({
    token: null,
    userid: null,
    fullname: null,
    email: null,
    tweet: [],
    tweets: [],
    post_id: null,
    comments: [],
})

const getters = {}

const mutations = {
    Login(state, data) {
        state.token = data.token
        state.userid = data.user_id
        state.fullname = data.full_name
        state.email = data.email
    },
    allPosts(state, data) {
        state.tweets = data;
        console.log(state.tweets);
    },
    allComments(state, data) {
        state.comments = data;
        console.log(state.comments);
    },
    CreatePost(state, data) {
        //    state.CreateTodo = data;
    },
    setName(state,data){
        state.fullname = data
    },
    setPostId(state,data){
        state.post_id = data
    },
    setTweet(state,data){
        state.tweet = data
    },
    updatePost(state, data){
        state.tweet.title = data
    }
}

const actions = {

    async login({ commit }, data) {
        const res = await this.$axios.post('http://localhost:5000/api/user/login', data)
        console.log(res.data)
        commit("Login", res.data)
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
    },
    async registerUser({ commit, state }, data) {
        console.log(data);
        const res = await this.$axios.post('http://localhost:5000/api/user', data).then((res) => {
            // commit('createUser', res.data)
        })

    },

    async getAllTweet({ commit, state }) {
        await this.$axios.get('http://localhost:5000/api/post').then((res) => {
            console.log(res.data);
            // this.$router.push('/');
            commit('allPosts', res.data);
        })
    },

    async CreateTweet({ commit, state }, data) {

        await this.$axios.post('http://localhost:5000/api/post', {
            title: data.title,
        }, { headers: { 'Authorization': 'Bearer ' + state.token } }).then((res) => {
            console.log(res.data);
            commit('CreatePost', res.data);
        })
    },

    async PostTitle({ commit, state }) {
        const res = await this.$axios.get('post')
        commit('setList', res.data)
        this.$router.push("/UserHome")
    },
    async getAllComments({commit,state}, data){
        await this.$axios.get("http://localhost:5000/api/comment/" + state.post_id).then((res) => {
            console.log(res.data);
            // this.$router.push('/');
            commit('allComments', res.data);
        })
    },

    async addComment({ commit, state }, data) {
        const res = await this.$axios.post('http://localhost:5000/api/comment', {text:data, post_id: state.post_id})
        // commit('createdNewPost', res.data)
      },
    
      async deleteComment({ commit, state }, data) {
        const res = await this.$axios.delete('http://localhost:5000/api/comment/'+data)
        // commit('createdNewPost', res.data)
    },

    async updateProfile({state}, data) {
        try {
        const res = await this.$axios.put('http://localhost:5000/api/user', data)
        //     // Hit the backend api.
        //     const res = await this.$axios.put('user/', data)
  
        //     if (res.status == 404) {
        //         console.log(res)
  
        //         // Set the name after the call is success.
        //         this.commit('setName', data.full_name)
  
  
        //     } else {
        //         alert('Cannot update profile')
        //     }
        } catch (e) {
        //     console.log(' error while updating profile : ' + e)
            alert(' Cannot update profile right now, please try again later')
        }
    },
    async getTweet({commit,state}, data){
        const res = await this.$axios.get('http://localhost:5000/api/post/'+data);
        commit('setTweet', res.data);
    },
    async updatePost({commit,state}, data){
        const res = await this.$axios.put('http://localhost:5000/api/post/'+state.post_id,{title: data});
    },
    async deletePost({commit,state}, data){
        
        const res = await this.$axios.delete('http://localhost:5000/api/post/'+state.post_id);
    }

}


export default {
    state,
    mutations,
    actions,
    getters,

}