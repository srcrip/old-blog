<template>
  <Layout>
    <h1>Resume</h1>

    <h3>Backend</h3>
    <p>I'm a remote full stack developer with multiple years of experience in Ruby on Rails, in the health care industry.</p>
    <p>I've worked with multiple large hospitals in the Michigan area integrating their EMR systems with other products, and have extensive experience with HL7 and related technologies.</p>
    <p>In addition to backend work in Ruby on Rails, I've worked with other Python and Ruby frameworks like Django and Sinatra. I've also become quite skilled with PostgreSQL.</p>

    <h3>Frontend</h3>
    <p>I've worked extensively with both VueJS (which this blog is made with), Polymer, and React.</p>

    <h3>DevOps</h3>
    <p>Both at work and on my personal projects I use Docker and Kubernetes for literally everything, so I'm pretty skilled with both.</p>

    <h3>Other</h3>
    <p>Like a lot of programmers, I'm pretty interested in stuff like game development and making music.</p>

    <h3>Cool Projects</h3>
    <ul>
      <li>
        <g-link to="https://github.com/Sevensidedmarble/crysh">Crysh - a Unix shell written in Crystal</g-link>
      </li>
    </ul>

    <h3>Links</h3>
    <p class="home-links">
      <a href="https://github.com/sevensidedmarble" target="_blank" rel="noopener">GitHub</a>
      <a href="https://stackoverflow.com/users/8197386/sevensidedmarble" target="_blank" rel="noopener">Stack Overflow</a>
    </p>

    <p>This is just my portfolio site, if you'd like a PDF copy of my resume please let me know.</p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Sevensidedmarble's resume"
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
