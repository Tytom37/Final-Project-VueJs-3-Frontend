<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      this.isDropdownOpen = false;
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<template>
  <div class="top-nav">
    <div class="title">
      <a id="menu" @click="toggleDropdown" :class="{ change: isDropdownOpen }"
        ><i class="fa fa-bars"></i
      ></a>
    </div>
  </div>

  <div class="container" :class="{ 'show-nav': isDropdownOpen }">
    <div class="close">
      <a id="close" @click="toggleDropdown" :class="{ change: isDropdownOpen }"
        ><i class="fa-sharp fa-solid fa-xmark"></i
      ></a>
    </div>

    <div class="mini-container">
      <div class="name">
        <h1>Game Shopping Inventory Management</h1>
      </div>

      <div class="user">
        <div class="pic-container">
          <img src="/profile.jpg" alt="Profile Picture" class="circular-pic" />
        </div>

        <h1>Thitom Buligan</h1>
      </div>
    </div>

    <nav>
      <RouterLink to="/"
        ><i class="fa-solid fa-house"></i><strong>Dashboard</strong></RouterLink
      >
      <RouterLink to="/games">
        <i class="fa-solid fa-gamepad"></i><strong>Games</strong></RouterLink
      >
      <RouterLink to="/inventories"
        ><i class="fa-solid fa-box"></i><strong>Inventory</strong></RouterLink
      >
      <RouterLink to="/customers"
        ><i class="fa-solid fa-user"></i><strong>Customers</strong></RouterLink
      >
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.name h1 {
  font-size: 15px;
  color: white;
  text-align: center;
}

.top-nav {
  background-color: white;
}

nav a:hover {
  background-color: blue;
}

nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

#menu i:hover {
  background-color: black;
  color: white;
  border-radius: 5px;
}

.user h1 {
  font-size: 20px;
  color: white;
}

.circular-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.pic-container {
  padding-right: 15px;
}

.mini-container {
  margin-bottom: -20px;
}

.user {
  padding: 15px;
  margin-top: 10px;
  display: flex;
  border-bottom: 1px solid white;
  align-items: center;
  text-align: center;
}

#menu i {
  color: black;
  padding: 5px;
  border-radius: 5px;
}

h3 {
  color: lightgray;
}

#close {
  padding-right: 15px;
  background-color: rgba(56, 50, 82, 0.986);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.top-nav {
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

a {
  cursor: pointer;
}

.close {
  padding-left: 290px;
  transform: translate(1px, 1px);
}

.close i {
  color: white;
  font-size: 20px;
}

.close i:hover {
  color: red;
}

.name {
  border-bottom: 1px solid white;
  padding: 5px;
}
.container {
  width: 25%;
  padding: 10px;
  background-color: rgb(56, 50, 82);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transform: translate(-115%, -53px);
  transition: transform 0.3s ease;
  height: 1000px;
  position: fixed;
  z-index: 1;
}

.container.show-nav {
  transform: translate(0, -53px);
  height: 1000px;
}

nav {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
