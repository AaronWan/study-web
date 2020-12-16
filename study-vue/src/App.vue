<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :to="{path:'about_blog'}" href="#">学习</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="技术学习" right>
          <b-dropdown-item :to="{name:'MSG'}" href="#">Redis</b-dropdown-item>
          <b-dropdown-item href="#">RocketMQ</b-dropdown-item>
          <b-dropdown-item href="#">NIO</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="文学" right>
          <b-dropdown-item :to="{path:'poem'}" href="#">诗书</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
