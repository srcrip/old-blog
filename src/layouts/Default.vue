<template>
  <div class="layout">
    <header class="header">
      <div class="main-header">
        <h1 class="main-h1">
          <a href="/">Marble Zone</a>
        </h1>
        <h2 class="sub-header">sevensidedmarble's blog</h2>
      </div>
      <nav class="nav">
        <g-link to="/">Blog</g-link>
        <g-link to="/resume">Resume</g-link>
        <g-link to="https://github.com/sevensidedmarble">GitHub</g-link>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <div class="footer">
      <p class="footer-centered">
        <g-link to="https://github.com/sevensidedmarble">Check out my GitHub!</g-link>
      </p>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@media only screen and (max-width: 580px) {
  .main-header {
    width: 100%;
  }

  nav {
    margin: .75rem auto;
  }
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

main {
  flex: 1;
}

.sub-header {
  margin: 5px;
  font-size: 1.25rem;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main-h1 {
  margin-top: .7rem;
  margin-bottom: .6rem;
}

.header {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.main-header {
  margin-top: 1.4rem;
}

nav a {
  margin: .5rem;
}

.clean-link {
  background: none !important;
}

.clean-link:hover {
  border-bottom: 1px solid black
}

.footer-centered {
  text-align: center;
  font-size: .8rem;
}
</style>
