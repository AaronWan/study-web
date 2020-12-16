<template>
  <div  class="container align-content-center">
    <div class="card">
      <div class="card-header">
        {{title}}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{msg}}</p>
          <footer class="blockquote-footer">{{create_at}} <cite title="Source Title">{{create_time | date('YYYY-MM-DD')}}</cite></footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about_blog',
  data () {
    return {
      title: '使用技术',
      msg: '    "vue": "^2.5.2",\n' +
        '    "vue-router": "^3.0.1",\n' +
        '    "bootstrap-vue": "^2.21.0",\n' +
        '    "bootstrap-sass": "^3.4.1"',
      create_time: 1608096322000,
      create_at: '北京'
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
