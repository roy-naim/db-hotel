Vue.config.devtools = true;

var app = new Vue(
  {
  el: '#root',
  data: {
    rooms: [],
    room: [],
  },

  mounted() {
    axios.get('http://localhost/db-hotel/db-query.php')
      .then((response) =>{
        this.rooms = response.data.response;
        // console.log(response);
      });
  },
  methods: {
    roomDetails: function(id) {
      // console.log(id);
      axios.get(`http://localhost/db-hotel/db-query.php?id=${id}`)
      .then((response) =>{
      this.room = response.data.response[0];
      });
    }
  },

});
