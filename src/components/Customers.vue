<template>
  <div>
    <h1>Customers</h1>
    <div class="d-grip gap-2 d-md-flex justify-content-md-end mb-3">
      <router-link
        to="/customer/create"
        class="btn btn-primary mo-md-2"
        type="button"
      >
        Add New Customer
      </router-link>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Address</th>
          <th>Email</th>
          <th>Game Bought</th>
          <th>&nbsp;</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.connum }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <img
              :src="customer.game.image"
              alt="Game Image"
              style="max-width: 100px; max-height: 100px"
            />
          </td>
          <td>{{ customer.game.name }}</td>
          <td>
            <button @click="deleteCustomer(customer.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const customers = ref([]);
const router = useRouter();

onMounted(async () => {
  await fetchCustomers();
});

const fetchCustomers = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/customers");
    const data = await response.json();
    customers.value = data;
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

const deleteCustomer = async (customerId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/customers/${customerId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // Remove the deleted customer from the list
      customers.value = customers.value.filter(
        (customer) => customer.id !== customerId
      );
      alert("Customer deleted successfully");
      console.log("Customer deleted successfully");
    } else {
      console.error("Error deleting customer:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};
</script>

<style scoped></style>
