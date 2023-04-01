<template>
  <div>facebook login</div>
  <div>test 2</div>
  <!-- <div id="app">
      <h1>Login with Facebook</h1>
      <facebook-login class="button"
        appId="1616534218770661"
        @login="onLogin"
        @logout="onLogout"
        @sdk-loaded="sdkLoaded">
      </facebook-login>
    </div> -->

  <!-- <div class="fb-login-button" data-size="medium" data-button-type="login_with_facebook" data-autologout-link="false" data-use-continue-as="true" @click="loginWithFacebook"></div> -->



  <!-- <facebook-login
appId="1616534218770661"
@loggedIn="handleLogin"
@loginFailed="handleLoginFailed"
>
</facebook-login> -->


  <!-- <div>-----------------------------------</div> -->
  <!-- <facebook-login class="button"
  appId="1616534218770661"
  @login="getUserData"
  @logout="onLogout"
  @get-initial-status="getUserData">
</facebook-login> -->

  <!-- <button :on-click="onLogin()"></button> -->

  <!-- <facebookLogin class="button"
  appId="1616534218770661"
  @login="getUserData"
  @logout="onLogout"
  @get-initial-status="getUserData">
</facebookLogin> -->

  <!-- <div
  class="fb-login-button"
  data-size="medium"
  data-button-type="login_with_facebook"
  data-auto-logout-link="false"
  data-use-continue-as="true"
  @click="loginWithFacebook"
></div> -->

  <div>
    <fb:login-button scope="public_profile,email" size="large" :onlogin="checkLoginState()">
    </fb:login-button>
  </div>

  <div class="container vue">
    <div v-for="index in commentsToShow">
      <div v-if="index < reviews.length">
        <div>{{ reviews[index].name }} says:</div>
        <i>
          <div>{{ reviews[index].description }}</div>
        </i>
        <hr />
      </div>
    </div>
    <div v-if="commentsToShow < reviews.length || reviews.length > commentsToShow">
      <button @click="commentsToShow += 5">show more reviews</button>
    </div>
  </div>
</template>
<script>

export default {
  name: "facebook",
  data() {
    return {
      reviews: [
        { name: 'Derek', description: 'Some comment' },
        { name: 'Joe', description: 'Some comment' },
        { name: 'Mike', description: 'Some comment' },
        { name: 'Ron', description: 'Some comment' },
        { name: 'Dii', description: 'Some comment' },
        { name: 'Lonnie', description: 'Some comment' },
        { name: 'Paul', description: 'Some comment' },
        { name: 'Mike', description: 'Some comment' },
        { name: 'Jody', description: 'Some comment' },
        { name: 'Ryn', description: 'Some comment' },
        { name: 'Jord', description: 'Some comment' },
        { name: 'Milly', description: 'Some comment' },
        { name: 'Judy', description: 'Some comment' },
        { name: 'Vanilly', description: 'Some comment' },
        { name: 'Nolan', description: 'Some comment' },
        { name: 'Pino', description: 'Some comment' },
        { name: 'Ryne', description: 'Some comment' },
        { name: 'Scott', description: 'Some comment' },
        { name: 'Son', description: 'Some comment' },
        { name: 'Bann', description: 'Some comment' },
      ],
      commentsToShow: 5,
      totalComments: 0
    };
  },
  mounted() {
    FB.init({
      appId: '1616534218770661',
      cookie: true,
      xfbml: true,
      version: 'v13.0'
    });
    this.totalComments = this.reviews.length
    console.log(this.reviews.length)
  },
  methods: {
    loginWithFacebook() {
      FB.login(response => {
        if (response.authResponse) {
          // User is logged in
          // Get the user's name and email
          FB.api('/me', { fields: 'name,email' }, response => {
            console.log(response);
          });
        } else {
          // User cancelled login or did not fully authorize
          console.log('User cancelled login or did not fully authorize.');
        }
      }, { scope: 'public_profile,email' });
    },


    //         // handleLogin(response) {
    //         //     console.log("User Successfully Logged In" , response)
    //         // },
    //         // handleLoginFailed() {
    //         //     console.log("User Cancelled or Abort the Login")
    //         // },

    // getUserData() {
    //     console.log("okey")
    //     this.FB.api('/me', 'GET', { fields: 'id,name,email' },
    //       userInformation => {
    //         console.warn("data api",userInformation)
    //         this.personalID = userInformation.id;
    //         this.email = userInformation.email;
    //         this.name = userInformation.name;
    //       }
    //     )
    //   },
    //   sdkLoaded(payload) {
    //     this.isConnected = payload.isConnected
    //     this.FB = payload.FB
    //     if (this.isConnected) this.getUserData()
    //   },
    //   onLogin() {
    //     this.isConnected = true
    //     this.getUserData()
    //   },
    //   onLogout() {
    //     this.isConnected = false;
    //   }
    // }
    checkLoginState() {
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          // User is logged in with Facebook, so you can retrieve user information here
          FB.api('/me', function (userInfo) {
            console.log('UserInfo:', userInfo);
          });
        } else {
          // User is not logged in with Facebook, or user did not grant permission to your app
          console.log('User is not logged in with Facebook');
        }
      });
    }
  },
}
</script>
  
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  position: absolute;
  background: #ccc;
  margin: 0;
  bottom: 0;
  width: 100%;
}

body {
  margin: 0;
}
</style>