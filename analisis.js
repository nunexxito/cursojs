//helpers
function esPar(numero) {return (numero % 2 === 0)};

function calcularMedia(lista) {
	const sumarLista = lista.reduce((valorAcumulado = 0, nuevoElemento)=> {
		return valorAcumulado + nuevoElemento;
	});
	const promedioLista = sumarLista / lista.length;

	return promedioLista;
}

//mediana general
const salaryCol = colombia.map((personas) => {
	return personas.salary;
});

const salaryColSorted = salaryCol.sort((a, b)=> {return a - b});

function medianaSalary(lista) {
	const mitad = parseInt(lista.length / 2);
	let mediana;

	if(esPar(lista.length)){
		const elemento1 = lista[mitad];
		const elemento2 = lista[mitad - 1];

		const resultado = calcularMedia([elemento1, elemento2]);
		return mediana = resultado
	} else {
		return mediana = lista[mitad];
	}
}

const medianaGeneralCol = medianaSalary(salaryColSorted);

//mediana top 10%
const spliceStart = (salaryColSorted.length * 90) / 100;
const spliceCount = salaryColSorted.length - spliceStart

const top10Salary = salaryColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalary(top10Salary);

console.log({medianaGeneralCol, medianaTop10Col});