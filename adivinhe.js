	var random

		function ranNum(){
			var random = (num) => Math.floor(Math.random() * num)
			return random(101)
		}

		document.addEventListener('DOMContentLoaded', function (){
			random = ranNum()
			var res = document.getElementById('resultado')
			res.innerHTML = random
			res.style.display = 'none'
		})

		function verify(){

		var addNumber = document.getElementById('numero')
		var rec = document.getElementById('recep')

		if (addNumber.value === '') {
			alert('Digite um número, por favor')
			return
		}

		if (addNumber.value > random) {
			rec.innerHTML = 'Menos'
			addNumber.value = ''
		} else if (addNumber.value < random) {
			rec.innerHTML = 'Mais'
			addNumber.value = ''
		} else if (addNumber.value == random) {
			rec.innerHTML = 'Você acertou!!!'
		}

	}