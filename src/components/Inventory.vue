<template>
  <div>
    <h1>Inventory</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Game Image</th>
          <th>Game Name</th>
          <th>Order ID</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="inventory in inventorys" :key="inventory.id">
          <td>
            <img
              :src="inventory.game.image"
              alt="Game Image"
              style="max-width: 100px; max-height: 100px"
            />
          </td>
          <td>{{ inventory.game.name }}</td>
          <td>{{ inventory.id }}</td>
          <td>{{ inventory.quantity }}</td>
          <td>₱{{ inventory.total_price }}</td>
          <td>
            <button @click="sellGame(inventory)" class="btn btn-danger">
              Sell
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const inventorys = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/inventorys?include=games"
    );
    const data = await response.json();
    console.log("API response data:", data);
    inventorys.value = data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
  }
});

const buyGame = async (game, quantity) => {
  const existingInventoryIndex = inventorys.value.findIndex(
    (inventory) => inventory.game.id === game.id
  );

  if (existingInventoryIndex !== -1) {
    const existingInventory = inventorys.value[existingInventoryIndex];
    existingInventory.quantity += quantity;
    existingInventory.total_price += game.price * quantity;
    inventorys.value[existingInventoryIndex] = existingInventory;
  } else {
    try {
      const response = await fetch("http://localhost:8000/api/inventorys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          game_id: game.id,
          quantity,
          total_price: game.price * quantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Inventory created successfully:", data.message);
        inventorys.value.push(data);
      } else {
        console.error("Error creating inventory:", data.message);
      }
    } catch (error) {
      console.error("Error creating inventory:", error);
    }
  }
};

const sellGame = async (inventory) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/inventorys/${inventory.id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Game sold successfully.");
      console.log("Game sold successfully:", data.message);
      inventorys.value = inventorys.value.filter(
        (item) => item.id !== inventory.id
      );
    } else {
      console.error("Error selling game:", data.message);
    }
  } catch (error) {
    console.error("Error selling game:", error);
  }
};
</script>
