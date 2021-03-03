var app = new Vue({
  el: '#app',
  data: {

    songArray: [],
    selected: ''

  },

  mounted() {
    const self = this;

    axios.get('http://localhost/php-ajax-dischi/app/server.php')
    .then(function(resp) {
      const songs = resp.data;
      console.log(songs);
      self.songArray = songs;
    });
  }

});

Vue.config.devtools = true;