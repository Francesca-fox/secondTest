const express = require('express')
const member1 = require('../mocks/mock1.json')
const member2 = require('../mocks/mock2.json')

const members = [ member1, member2]
console.log(members)

const app = express()

app.get('/', (request, response) => {
	response.send('OK')
})

app.get('/members', (request, response) => {
	response.json(members)

})

app.listen(3240, () => console.log("j'écoute sur le port 3240"))

