<template>
  <div class="about">
    <ElementSectionTitle :title="$t('about')" :subtitle="$t('subtitle')" />
    <div>
      {{ $t('whyme') }}
      <ul>
        <li>{{ $t('ilike') }}</li>
        <li>{{ $t('focus') }}</li>
        <li>{{ $t('goal') }}</li>
        <li>{{ $t('whatiuse') }}</li>
        <li>{{ $t('mobile') }}</li>
        <li>{{ $t('morereasons') }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
// import sectionTitle from "~/components/Section_Title.vue"

export default {
}
</script>
<i18n>
{
  "en": {
    "job": "Full Stack App- & Webdeveloper",
    "about": "About",
    "subtitle": "me, just another german dev",
    "contact": "Contact",
    "legalnotice": "Legal Notice",
    "interested": "Interested?",
    "whyme": "Why me?",
    "ilike": "I like creating stuff and i love coding",
    "focus": "Full stack web and app developer",
    "goal": "Good products that make people happy",
    "whatiuse": "I use cutting edge technology like vue.js and nestJS for fast, scalable web apps",
    "mobile": "Experience with native and cross-platform mobile development",
    "morereasons": "Need more reasons? See some of my work below"
  },
  "de": {
    "job": "Full Stack App- & Webentwickler",
    "about": "Über mich",
    "subtitle": "Dynamischer & junger Entwickler",
    "contact": "Kontakt",
    "legalnotice": "Impressum",
    "interested": "Interessiert?",
    "whyme": "Warum ich?",
    "ilike": "Ich mag es Dinge zu erstellen und ich liebe es zu programmieren",
    "focus": "Full Stack Web- und App-Entwickler",
    "goal": "Mein Ziel ist es, gute Produkte zu entwickeln, die die Menschen glücklich machen",
    "whatiuse": "Ich verwende modernste Technologien wie vue.js und nestJS",
    "mobile": "Erfahrung mit nativer und cross-platform App-Entwicklung",
    "morereasons": "Brauchen Sie weitere Gründe? Sehen Sie unten einige meiner Projekte"
  }
}
</i18n>
<style>
p {
  line-height: 30px
}
</style>
