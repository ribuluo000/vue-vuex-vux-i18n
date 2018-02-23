<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<!--<template>-->
  <!--<div>-->
    <!--<div>{{ $t('hello') }}</div>-->
    <!--<div>{{ $t('aaa') }}</div>-->
    <!--<h1>{{ $store.state.isLoading }}</h1>-->

    <!--<div class="vux-demo">-->
      <!--<img class="logo" src="../assets/vux_logo.png">-->
      <!--<h1> </h1>-->
    <!--</div>-->
    <!--<group title="cell demo">-->
      <!--<cell title="VUX" value="cool" is-link></cell>-->
    <!--</group>-->

    <!--<div id="app-5">-->
      <!--<p>{{ msg }}</p>-->
      <!--<p>{{ $t('hello') }}</p>-->
      <!--<div>{{ $t('hello') }}</div>-->
      <!--<button v-on:click="reverseMessage">切换语言</button>-->
      <!--<h1>{{ $t('hello') }}</h1>-->
      <!--<h1>{{ $t('hello', 'Default information text') }}</h1>-->
      <!--<div>-->
        <!--// will return: "You have 5 new messages"-->
        <!--{{ $t('You have {count} new messages', {count: 5}) }}-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<template>
  <div class="hello">

    <div id="app-5">
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">切换语言</button>
    </div>
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.isLoading }}</h1>
    <h1>{{ $t('hello') }}</h1>
    <h1>{{ $t('Deleted~') }}</h1>

    <group>
      <cell title="title" value="value"></cell>
    </group>
    <router-link to="/Actionsheet">Actionsheet</router-link>
    <router-link to="/Actionsheet">Actionsheet</router-link>
    <router-view/>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import Vue from 'vue'
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
      msg: 'Hello World!'
    }
  },
  template: `
<div>
    <h1>{{ 'My nice title' | translate }}</h1>
    <p>{{ $t('hello', {'type': 'nice'}) }}</p>

      <div class="hello">

    <div id="app-5">
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">切换语言</button>
    </div>
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.isLoading }}</h1>
    <h1>{{ $t('hello') }}</h1>
    <h1>{{ $t('Deleted~') }}</h1>
    <h1>{{ $t('vux.x-header.back_text') }}</h1>

    <group>
      <cell title="title" value="value"></cell>
    </group>
    <router-link to="/Actionsheet">Actionsheet</router-link>
    <router-link to="/Actionsheet">Actionsheet</router-link>
    <router-view/>
  </div>
</div>
`,
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
      console.log(this.$store.state)
      console.log(this.$t)
      console.log(this.$t('hello'))
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
