fetch('http://localhost:3240/members')
	.then(response => response.json())
	.then (members => {

		console.log(members)
	})




console.log("je suis bien chargé")