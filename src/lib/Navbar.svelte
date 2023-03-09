<!--
    - About
    - Projects
    - Contact Me
 -->
<script lang="ts">
  import logo from "../assets/logo.svg";

  function scroll_to_top() {
    window.scrollTo(0, 0);
    return;
  }
</script>

<nav id="navbar">
  <a href="#home" on:click={() => scroll_to_top()}>
    <img src={logo} class="logo" alt="Logo" id="logo" />
  </a>
  <a href="#about">about me</a>
  <a href="#projects">projects</a>
  <a href="#contact">contact me</a>
</nav>

<style lang="scss">
  nav {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .logo {
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 1em #ff4000);
  }
</style>
