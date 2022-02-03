// function numeracion() {
// 	for (i = 0; i < 0; i++) {
// 			createInputs();
// 	}
// }

function createInputs() {
	const createInput = document.createElement("div");
	createInput.innerHTML = `<input type="number" class="input" placeholder="Agrega numero">`;
	input.appendChild(createInput);
}

//Media

function calcularMedia(lista) {
	// let sumarLista = 0;

	// for(i = 0; i < lista.length; i++) {
	// 	sumarLista = sumarLista + lista[i];
	// }

	const sumarLista = lista.reduce((valorAcumulado = 0, nuevoElemento)=> {
		return valorAcumulado + nuevoElemento;
	});

	const promedioLista = sumarLista / lista.length;

	return promedioLista;
}

function mostrarMedia() {
	const array = document.getElementById("media");
	const arrayValue = Array(array.value);
	console.log(arrayValue);

	// let numberArray = stringArray.map(el=>parseInt(el))
	// const resultadoMedia = calcularMedia();
	// console.log(resultadoMedia)
}

//Mediana

function esPar(numero) {
	if(numero % 2 === 0){
		return true;
	} else {
		return false;
	}
}

function calcularMediana(lista) {

	const ordenado = lista.sort((a, b)=> {return a - b});
	const mitad = parseInt(ordenado.length / 2);
	let mediana;

	if(esPar(ordenado.length)){
		const elemento1 = ordenado[mitad];
		const elemento2 = ordenado[mitad - 1];

		const resultado = calcularMedia([elemento1, elemento2]);
		return mediana = resultado
	} else {
		return mediana = ordenado[mitad];
	}
}

//Moda

function calcularModa(lista) {
	const listCount = {};

	lista.map((elemento) => {
		if(listCount[elemento]) {
			listCount[elemento] += 1;
		} else {
			listCount[elemento] = 1;
		}
	});

	const arrayList = Object.entries(listCount).sort((a, b)=> {return a[1] - b[1]});

	const moda = arrayList[arrayList.length - 1];

	return moda
}