<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{title}}</h2>
    <a v-bind:href="url">Google</a>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MSG',
  data () {
    return {
      msg: '流程团队控制台1',
      title: '短信服务',
      url: 'http://www.baidu.com'
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
