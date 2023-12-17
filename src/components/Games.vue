<template>
  <div>
    <div class="header">
      <h1>Games</h1>
    </div>

    <div class="container">
      <div v-for="singleGame in games" :key="singleGame.id" class="games-info">
        <div class="mini-container">
          <img :src="singleGame.image" alt="Game Image" class="game-image" />
          <h1 class="title">{{ singleGame.name }}</h1>
          <div class="q-p">
            <div class="container1">
              <p>Available Quantity: {{ singleGame.quantity }}</p>
              <p>Price: ₱{{ singleGame.price }}</p>
            </div>
            <div class="container2">
              <button
                @click="promptForQuantity(singleGame)"
                type="button"
                class="btn btn-success"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const games = ref([]);
const inventorys = ref([]);
const selectedQuantity = ref(1);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/games");
    const data = await response.json();
    games.value = data;
  } catch (error) {
    console.error("Error fetching games:", error);
  }
});

const promptForQuantity = (game) => {
  const availableQuantity = game.quantity;
  const inputQuantity = prompt(`How many game(s) do you want to purchase?`);

  if (inputQuantity !== null) {
    const quantity = parseInt(inputQuantity, 10);

    if (!isNaN(quantity) && quantity > 0 && quantity <= availableQuantity) {
      if (game.quantity - quantity >= 0) {
        buyGame(game, quantity);
      } else {
        alert("Not enough stock. Please enter a valid quantity.");
      }
    } else if (quantity === 0) {
      alert("You can't have a 0 quantity. Please enter a valid quantity.");
    } else {
      alert(
        `Sorry, there are only ${availableQuantity} available games each. Please try again.`
      );
    }
  }
};

const buyGame = async (game, quantity) => {
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
      game.quantity -= quantity;

      const successMessage =
        quantity > 1
          ? `Successfully bought ${quantity} copies of ${game.name}(s). Check your Inventory.`
          : `Successfully bought 1 copy of ${game.name}. Check your Inventory.`;

      console.log("Inventory created successfully:", data.message);
      alert(successMessage);
    } else {
      console.error("Error creating inventory:", data.message);
    }
  } catch (error) {
    console.error("Error creating inventory:", error);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
  justify-content: space-between;
}

.title {
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin-top: -20px;
  text-shadow: 1px 4px 5px rgba(0, 0, 0, 0.75);
}

.mini-container {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  width: 300px;
  margin: 10px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
}

.q-p {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: lightgrey;
}

.games-info {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  margin: 15px;
  background-color: white;
}

.game-image {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 50%;
  object-fit: cover;
}
</style>
