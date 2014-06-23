angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
})

.factory('CurrentTime', function(){
  	var myVar = setInterval(function(){myTimer();},60000);
  	var currTime;
	function myTimer() {
    	var date = new Date();
  		var minutes = date.getMinutes();
  		var hours = date.getHours();
  		var seconds = date.getSeconds();
    	currTime = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
	}
	return{
		time: function(){
			return currTime;
		} 
	};
});
