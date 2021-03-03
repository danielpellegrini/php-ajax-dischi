var app = new Vue({
  el: '#app',
  data: {

    songArray: [],
    genres: [],
    selected: '',
    filtered: [],

  },

  methods: {
    filterGenres: function() {

      this.songArray.foreach((item) => {

        if (!this.genres.includes(item.genre)) {
          this.genres.push(item.genre);          
        }

      });
      
      
    },

    getGenres: function() {
      const self = this;

      axios
        .get('app/server.php?genre=' + self.selected)
        .then(function(result) {
          self.songArray = result.data;
          console.log(self.songArray);
        })
      
    }


  },

  mounted(){
    const self = this;

    axios.get('app/server.php')
    .then(function(resp) {
      const songs = resp.data;
      console.log(songs);
      self.songArray = songs;
    });
  }

});

Vue.config.devtools = true;