<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li :key="brand" v-for="brand in brands">{{brand}}</li>
      </ul>
    </div>

    <div id="app-5">
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">切换语言</button>
      <router-link to="/HelloFromVux">HelloFromVux</router-link>
      <router-link to="/TestVux">TestVux</router-link>
      <router-link to="/TestVux/Actionsheet">Actionsheet</router-link>
      <router-link to="/TestVux/Alert">Alert</router-link>
      <router-link to="/Actionsheet">Actionsheet</router-link>
      <router-link to="/Alert">Alert</router-link>
      <router-view/>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js111111111 App',
      brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
      console.log(this.$store.state)
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    },
    TestVux: function () {
      console.log('TestVux')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
