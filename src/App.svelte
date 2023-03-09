<script lang="ts">
  import Home from "./lib/Home.svelte";
  import Footer from "./lib/Footer.svelte";
  import Contact from "./lib/Contact.svelte";
  import Projects from "./lib/Projects.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import About from "./lib/About.svelte";
</script>

<Navbar />

<main>
  <Home />

  <About />

  <Projects />

  <Contact />
</main>

<Footer />

<style lang="scss">
</style>
