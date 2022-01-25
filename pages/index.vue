<template>
  <div class="container mt-5">
    <form id="login_signin_form">
      <div class="row p-2">
        <div class="col-lg-4 col-md-4"></div>
        <div class="col-lg-4">
          <span id="alert_form"></span>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <input
            class="form-control mb-2"
            type="text"
            placeholder="Email"
            aria-label="default input example"
            v-model.trim="$v.email.$model"
            :class="{ 'form-control--error': $v.email.$error }"
          />
          <div v-if="this.$v.email.$dirty">
            <div class="error-txt" v-if="!$v.email.required">
              Email is required
            </div>
            <p class="error-txt" v-if="!$v.email.validemail">
              Enter valid email
            </p>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row p-2">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="input-group">
            <input
              class="form-control mb-2"
              v-model.trim="$v.password.$model"
              :type="showType ? 'password' : 'text'"
              placeholder="Password"
              aria-label="default input example"
              :class="{ 'form-control--error': $v.password.$error }"
            />
            <div class="input-group-append mb-2" @click="showType = !showType">
              <span
                class="input-group-text"
                :class="{ 'form-icon--error': $v.password.$error }"
              >
                <i :class="showType ? 'far fa-eye' : 'far fa-eye-slash'"></i>
              </span>
            </div>
          </div>
          <span v-if="this.$v.password.$dirty">
            <span class="error-txt" v-if="!$v.password.required"
              >Password is required</span
            >
          </span>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row p-2">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <button
            class="btn btn-success w-100"
            id="loginBtn"
            @click.prevent="login"
          >
            Login
          </button>
        </div>
        <div class="col-md-4 mt-5"></div>
      </div>

      <div class="row p-2">
        <div class="col-lg-4 col-md-4"></div>
        <div class="col-lg-4 col-md-6 col-sm-12 setup-survery-form">
          <span>
            <p>
              If you have not an account<a href="/signup" class=""> signup?</a>
            </p>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, helpers } from "vuelidate/lib/validators";
const validemail = helpers.regex(
  "validemail",
  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
);
export default {
  layout: "layoutb",
  mixins: [validationMixin],
  data: function () {
    return {
      email: "",
      password: "",
      showType: true,
    };
  },
  validations: {
    email: {
      required,
      email,
      validemail,
    },
    password: {
      required,
    },
  },

  methods: {
    login: function (e) {
      console.log("Event:", e);
      e.preventDefault();
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log("error form ", this.$v);
        } else {
          var login_data = {
            username: this.email,
            password: this.password,
            grant_type: "password",
          };
          console.log("login_data Data", e.view);
          this.$axios
            .$post("/auth/login", login_data)
            .then((response) => {
              console.log("response Data", response);
              this.$store.commit("sessionStorage/accessToken", response);
              window.location.replace("/dashboard");
            })
            .catch((error) => {
              console.log("Error $$$$$", error.response);
            });
        }
      } catch (e) {
        console.log("login catch", e);
      }
    },
  },
};
</script>

<style scoped>
input.form-control.form-control--error {
  border-color: red !important;
}
.error-txt {
  color: red !important;
  font-size: 14px;
}
.error-txt {
  color: red !important;
}

#login_signin_form {
  margin-top: 10rem;
  border: 1px solid black;
  background-color: rgb(233, 233, 233);
  border-color: rgb(231, 231, 231);
  border-radius: 6px;
}

.form-icon--error {
  border-color: red;
  /* border-left-color: transparent !important; */
}

a {
  text-decoration: none;
}

a:hover {
  color: blue;
}
</style>
