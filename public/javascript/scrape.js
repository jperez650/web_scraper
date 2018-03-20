$(document).ready(function(){
	$.ajax({
		method:"GET",
		url: "/scrape"
	}).done(function(data){
		console.log(data)
	})
})