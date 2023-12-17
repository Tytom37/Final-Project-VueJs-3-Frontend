<template>
  <h1>Dashboard</h1>
  <div class="container">
    <div class="box">
      <div class="mini-container">
        <div class="texts">
          <p>Games</p>
          <i class="fa-solid fa-gamepad"></i>
        </div>
      </div>
      <div class="router-link">
        <RouterLink to="/games"
          >View Games <i class="fa-solid fa-circle-arrow-right"></i
        ></RouterLink>
      </div>
    </div>

    <div class="box">
      <div class="mini-container">
        <div class="texts">
          <p>Inventory</p>
          <i class="fa-solid fa-box"></i>
        </div>
      </div>
      <div class="router-link">
        <RouterLink to="/inventories"
          >View Inventory <i class="fa-solid fa-circle-arrow-right"></i
        ></RouterLink>
      </div>
    </div>

    <div class="box">
      <div class="mini-container">
        <div class="texts">
          <p>Customers</p>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
      <div class="router-link">
        <RouterLink to="/customers"
          >View Customers <i class="fa-solid fa-circle-arrow-right"></i
        ></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 25px;
}

select {
  border-radius: 5px;
  margin-left: 10px;
}

.container {
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.drop-list {
  padding-top: 15px;
  margin-right: 10px;
}

.texts i {
  font-size: 50px;
  text-shadow: 1px 4px 5px rgba(0, 0, 0, 0.75);
}

.texts {
  color: white;
  margin-left: 10px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  gap: 50px;
}

.router-link a {
  color: white;
}

.router-link {
  text-align: center;
  background-color: rgb(2, 118, 78);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 5px;
}

.mini-container {
  display: flex;
  justify-content: space-between;
  background-color: hsla(160, 100%, 37%, 1);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding-bottom: 15px;
}

.box {
  width: 250px;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  align-items: center;
  gap: 20px;
  justify-content: center;
  border-bottom: 1px solid black;
  display: flex;
}
</style>
