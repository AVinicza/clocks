function getTime () {
  	var date = new Date();
  	var minutes = date.getMinutes();
  	var hours = date.getHours();
  	var seconds = date.getSeconds();
  	return hours.toString() + minutes.toString() + seconds.toString();
}