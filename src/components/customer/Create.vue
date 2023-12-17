<template>
  <div class="row">
    <div id="container" class="col-md-5">
      <form @submit.prevent="createCustomer">
        <div class="game_id">
          <label
            ><i class="fa-solid fa-id-card"></i> Game ID:
            <input
              v-model="formData.game_id"
              required
              class="form-control"
              placeholder="1-10"
          /></label>
        </div>
        <div class="name">
          <label
            ><i class="fa-solid fa-user"></i> Name:
            <input
              v-model="formData.name"
              required
              class="form-control"
              placeholder="Name"
          /></label>
        </div>
        <div class="connum">
          <label
            ><i class="fa-solid fa-address-book"></i> Contact Number:
            <input
              v-model="formData.connum"
              required
              class="form-control"
              placeholder="xxx xxxx xxxx"
          /></label>
        </div>
        <div class="address">
          <label
            ><i class="fa-solid fa-location-dot"></i> Address:
            <input
              v-model="formData.address"
              class="form-control"
              placeholder="Address"
          /></label>
        </div>
        <div class="email">
          <label
            ><i class="fa-solid fa-envelope"></i> Email:
            <input
              v-model="formData.email"
              required
              class="form-control"
              placeholder="Email"
          /></label>
        </div>
        <button type="submit" class="btn btn-primary">
          Create Customer <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  game_id: "",
  name: "",
  connum: "",
  address: "",
  email: "",
});

const createCustomer = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      console.log("Customer created successfully");
      router.push("/customers");
    } else {
      console.error("Error creating customer:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating customer:", error);
  }
};
</script>

<style scoped>
#container {
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.row {
  width: 100%;
}

.name,
.game_id,
.connum,
.address,
.email {
  margin-bottom: 15px;
}

form {
  margin-top: 40px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  background-color: white;
  padding: 20px;
}
</style>
