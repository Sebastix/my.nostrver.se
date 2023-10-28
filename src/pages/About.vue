<script setup>

</script>

<template>
  <div class="about">
    <h2>About</h2>
    <p>
      This is a Nostr client (hard)forked from <a href="https://hamstr.to" target="_blank">Hamstr</a>.
    </p>
    <p>
      I'm modifying this client to scratch some own itches while using lots of other clients. I know my way around with Vue and Javascript building web applications.
      Please have a look at the list of <a href="https://github.com/Sebastix/my.nostrver.se/milestones" target="_blank">milestones</a> which I would pick up if I'm able to spend some time on this client. Or checkout the <a href="https://github.com/Sebastix/my.nostrver.se" target="_blank">readme</a> with some goals in mind for this client.
    </p>
    <p class="text-center">
      Built with 💜 by <router-link to="profile/npub1qe3e5wrvnsgpggtkytxteaqfprz0rgxr8c3l34kk3a9t7e2l3acslezefe">@sebastix</router-link>
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "assets/theme/colors.scss";
.about {
  margin: 0 1rem;
  p {
    font-size: 1.2em;
  }
  a {
    color: $color-fg;
  }
}
</style>
