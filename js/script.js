var app = new Vue({
  el: '#app',
  data: {

    songArray: [],
    genres: [],
    selected: '',
    filtered: [],

  },


  mounted(){
    const self = this;

    axios
      .get('app/server.php')
      .then(function(result) {
        //push genre in genres array
        result.data.forEach((item => {

          if (!self.genres.includes(item.genre)) {
            self.genres.push(item.genre);
            
          }
          
        }));

        return self.songArray = result.data;
          
        });       
    

  },

  
  methods: {  

    getGenres: function() {
      const self = this;

      axios
        .get('app/server.php?genre=' + self.selected)
        .then(function(result) {
          return self.songArray = result.data;
        })
        
      
    },

  },

});

Vue.config.devtools = true;