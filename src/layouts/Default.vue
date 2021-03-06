<template>
  <div class="layout">
    <div class="top">
      <header>
        <h1>
          <a href="/">Marble Zone</a>
        </h1>
        <h2>sevensidedmarble's blog</h2>
      </header>
      <nav class="nav">
        <g-link to="/">Blog</g-link>
        <g-link to="/resume">Resume</g-link>
        <g-link to="https://github.com/sevensidedmarble">GitHub</g-link>
      </nav>
    </div>
    <transition name="fade" appear>
      <main class="main">
        <slot/>
      </main>
   </transition>
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
  header {
    width: 100%;
  }

  nav {
    margin: .75rem auto;
  }
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  overflow-wrap: break-word;
}

main {
  flex: 1;
}

header > h1 {
  font-family: var(--font-serif);
  margin: 0;
}

header > h1 > a {
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
  transition: all .2s ease-in-out;
}

header > h1 > a:hover {
  color: mediumslateblue;
}

header > h2 {
  font-size: 1.25rem;
  font-style: italic;
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

.top {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

header {
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
