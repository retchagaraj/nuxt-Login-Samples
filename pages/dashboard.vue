<template>
<div>
  <div class="dashboard_page">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <h2>Users Lists:</h2>
      <div class="col-md-6 col-sm-6 p-2" v-for="list in user" :key="list.id">
        <div class="card">
          <img src="" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title text-center">Name</h5>
            <p class="card-text text-center">
              {{ list.profile.first_name }} {{ list.profile.last_name }}
            </p>
            <p class="text-center">
              <button
                class="btn btn-primary w-50"
                @click.prevent="viewusers(list.user_id)"
              >
                View
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>

    
  </div>
  <div class="row">
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Users Profile</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click.prevent="closeModal"
              ></button>
            </div>
            <div class="modal-body">
              <p>First name: &nbsp;{{ first_name }}</p>
              <p>Last name:  &nbsp;{{ last_name }}</p>
              <p>Date of Birth:  &nbsp;{{ dob }}</p>
              <p>Email:  &nbsp;{{ email }}</p>
              <p>Address1:  &nbsp;{{ address1 }}</p>
              <p>Address2:  &nbsp;{{ address2 }}</p>
              <p>Pin-code:  &nbsp;{{ pincode }}</p>
              <p>Phone:  &nbsp;{{ phone }}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                @click.prevent="closeModal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success" disabled>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      first_name: "",
      last_name: "",
      dob: "",
      email: "",
      address1: "",
      address2: "",
      pincode: "",
      phone: "",
    };
  },
  methods: {
    getUsers: async function () {
      this.$axios.setToken(
        this.$store.state.sessionStorage.accessToken.accessToken,
        "Bearer"
      );
      await this.$axios
        .$get("/auth/user")
        .then((response) => {
          console.log("USers:", response);
          this.user = response;
          console.log("this.user:", this.user);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },

    viewusers: async function (id) {
       $('.dashboard_page').hide();
      this.$axios.setToken(
        this.$store.state.sessionStorage.accessToken.accessToken,
        "Bearer"
      );
      await this.$axios
        .$get("/auth/user/" + id)
        .then((response) => {
          console.log("one user response:", response);
          this.first_name = response.profile.first_name;
          this.last_name = response.profile.last_name;
          this.dob = response.profile.dob;
          this.email = response.account.email;
          this.address1 = response.contact.address1;
          this.address2 = response.contact.address2;
          this.pincode = response.contact.pincode;
          this.phone = response.contact.phone;
          $(".modal").show();
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },

    closeModal: function() {
        $(".modal").hide();
        $('.dashboard_page').show();
    }
  },
  mounted: function () {
    console.log("Token:", this.$store.state.sessionStorage.accessToken);
    this.getUsers();
  },
};
</script>

<style>
</style>