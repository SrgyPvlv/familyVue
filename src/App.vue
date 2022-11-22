<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <RouterLink to="/" class="navbar-brand">SrgyPvlv</RouterLink>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink to="/family" class="nav-link">Family</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/add" class="nav-link">Add</RouterLink>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

