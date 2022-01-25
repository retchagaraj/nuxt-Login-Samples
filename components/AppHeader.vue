<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Dashboard</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ></a
                >
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-user"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">User: {{login_user}}</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="" @click.prevent="logout">logout &nbsp;<i class="fas fa-sign-out-alt"></i></a></li>
                </ul>
                </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

    data() {
        return {
            login_user: ""
        }
    },
    methods: {
        logout: function() {
            this.$router.push('/');
        }
    },

    mounted: function() {
        console.log('###',this.$store.state.sessionStorage.accessToken.username);
        this.login_user = this.$store.state.sessionStorage.accessToken.username;
    }
}
</script>

<style>

</style>