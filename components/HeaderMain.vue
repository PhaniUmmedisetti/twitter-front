<template>
  <div class="content">
    <h1>TWITTER</h1>
    <div class="navigation">
      <ul>
        <!-- <nuxt-link to="/todo">TWITTER</nuxt-link> -->
        <nuxt-link to="/CreateTweet">CreateTweet</nuxt-link>
        <nuxt-link to="/Profile">Profile</nuxt-link>
        <nuxt-link to="/">LogOut</nuxt-link>
        <!-- <nuxt-link to="/register">Register</nuxt-link> -->
        <!-- <nuxt-link to="/todo">Todo</nuxt-link> -->
      </ul>
    </div>
  </div>
</template>

<script></script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Bebas Neue', cursive;
  user-select: none;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.content {
  width: 100vw;
  height: 10vh;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  z-index: 100;
  justify-content: space-evenly;
  color: rgb(0, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
}
h1 {
  letter-spacing: 5px;
  font-size: 40px;
  cursor: pointer;
}
.navigation ul {
  display: flex;
  justify-content: space-evenly;
  width: 40vw;
}
a {
  color: rgb(0, 0, 0);
  font-size: 20px;
  transition: 0.5s linear;
}
/* a:hover {
  letter-spacing: 2px;
} */

@media only screen and (max-width: 700px) {
  .content {
    flex-direction: column;
    height: auto;
  }
  .navigation ul {
    width: 200vw;
  }
}
</style>
