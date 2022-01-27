// formulas del cuadrado para sacar perimetro y area
function perimetroCuadrado(lado) {
	return lado * 4;
};
function areaCuadrado(lado) {
	return lado * lado;
};

function calcularCuadrado() {
	const input = document.getElementById("inputCube");
	const value = input.value;

	const perimetro = perimetroCuadrado(value);
	const area = areaCuadrado(value);

	alert(`El perimetro de tu cuadrado es ${perimetro}cm y su area es ${area}cm^2`);
};


// formulas del triangulo para sacar perimetro y area
function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}
function calcularAltura(ladoA, ladoB, baseA) {
		if (ladoA != ladoB) {
				console.error("Los lados a y b no son iguales");
		} else {
				const lado2 = baseA / 2;
				const baseB = ladoA;

				const lado2Cuadrado = lado2 * lado2;
				const baseBCuadrado = baseB * baseB;

				const lado1 = Math.sqrt(baseBCuadrado - lado2Cuadrado);

				const alturaTriangulo = lado1;
				return alturaTriangulo;
		}
}

function calcularTriangulo() {
	const ladoA = document.getElementById("ladoA");
	const ladoB = document.getElementById("ladoB");
	const base = document.getElementById("base");
	const valueA = parseInt(ladoA.value);
	const valueB = parseInt(ladoB.value);
	const valueBase = parseInt(base.value);

	const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
	const altura = calcularAltura(valueA, valueB, valueBase);
	const area = areaTriangulo(valueBase, altura);

	alert(`El perimetro de tu triangulo es ${perimetro}cm y su area es ${area}cm^2`);
};


// formulas del circulo para sacar perimetro y area
function diametro(radio) {
	return radio * 2;
}
function perimetroCirculo(radio) {
	const diametroCirculo = diametro(radio)
	return diametroCirculo * Math.PI;
}
function areaCirculo(radio) {
	return (radio * radio) * Math.PI;
}

function calcularCirculo() {
	const input = document.getElementById("inputCircle");
	const value = input.value;

	const perimetro = perimetroCirculo(value);
	const area = areaCirculo(value);

	alert(`El perimetro de tu circulo es ${perimetro}cm y su area es ${area}cm^2`);
};


