$(document).ready(function(){

$("#button").click(function(){
	// console.log("click")
	$.ajax({
		type: 'GET',
		url: 'https://api.chucknorris.io/jokes/random',
			//anyword

	}).done(function(i){
		// console.log(i.value)
		$("#chuckFacts").text(i.value)
	})
})


})



