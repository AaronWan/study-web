<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-html="title"></h2>
    <a v-bind:href="url">baidu</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '流程团队控制台',
      title: '<h1>引擎<h/1>',
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
