<template>
  <div >
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <div id="app-5">
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">切换语言</button>
    </div>
    <h1>{{ $t('hello') }}</h1>

    <router-link to="/Actionsheet">Actionsheet</router-link>
    <router-link to="/TestVux/Actionsheet">Actionsheet</router-link>
    <router-link to="/TestVux/Alert">Alert</router-link>
    <router-link to="/Alert">Alert</router-link>
    <router-view/>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vux!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
