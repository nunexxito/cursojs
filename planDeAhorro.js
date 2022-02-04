function calculatePercentage(salary, percentage) {
	const salarySaved = (salary * percentage) / 100;

	return salarySaved;
}

function salaryMonth(salary, percentage) {
	const totalSalary = (salary * (100 - percentage)) /100;

	return totalSalary;
}

const percentageText = document.getElementById("valuePercentage");
const salaryValue = document.getElementById("salary").value;
const percentage = document.getElementById("percentage");
const percentageValue = document.getElementById("percentage").value;

percentage.oninput = ()=> {
	percentageText.innerText = `${percentage.value}%`;
}

function onclickPercentage() {
	const salaryValue = document.getElementById("salary").value;
	const percentageValue = document.getElementById("percentage").value;
	const monthValue = document.getElementById("month").value;

	const saved = calculatePercentage(salaryValue, percentageValue);
	const totalSaved = saved * monthValue;
	const totalSalary = salaryMonth(salaryValue, percentageValue);

	const ahorrado = document.getElementById("saved");
	ahorrado.innerText = `$${saved}`;
	const ahorradoTotal = document.getElementById("total");
	ahorradoTotal.innerText = `$${totalSaved}`;
	const salario = document.getElementById("totalSalary");
	salario.innerText = `$${totalSalary}`;
	const saldo = document.getElementById("balance");
	saldo.innerText = `$${totalSalary}`;
}

const totalSalary = salaryMonth(salaryValue, percentageValue);

// const home = document.getElementById("home");
// const transport = document.getElementById("transport");
// const food = document.getElementById("food");
// const outputs = document.getElementById("outputs");

// function homeLink() {

// 	if(home.classList.contains('home')){
// 		home.classList.remove('home');
// 		idHome.classList.remove('display')
// 	} else {
// 		home.classList.add('home');
// 		idHome.classList.add('display')
// 	}
// }

// function transportLink() {

// 	if(transport.classList.contains('transport')){
// 		transport.classList.remove('transport');
// 		idTransport.classList.remove('display')
// 	} else {
// 		transport.classList.add('transport');
// 		idTransport.classList.add('display')
// 	}
// }

// function foodLink() {

// 	if(food.classList.contains('food')){
// 		food.classList.remove('food');
// 		idFood.classList.remove('display')
// 	} else {
// 		food.classList.add('food');
// 		idFood.classList.add('display')
// 	}
// }

// function outputsLink() {

// 	if(outputs.classList.contains('outputs')){
// 		outputs.classList.remove('outputs');
// 		idOutputs.classList.remove('display')
// 	} else {
// 		outputs.classList.add('outputs');
// 		idOutputs.classList.add('display')
// 	}
// }

// const ph = document.getElementById("inputHome");
// const valueHome = document.getElementById("valueHome");

// const pt = document.getElementById("inputTransport");
// const valueTransport = document.getElementById("valueTransport");

// const pf = document.getElementById("inputFood");
// const valueFood = document.getElementById("valueFood");

// const po = document.getElementById("inputOutputs");
// const valueOutputs = document.getElementById("valueOutputs");

// ph.oninput = ()=> {
// 	valueHome.innerText = `${ph.value}%`;
// }
// pt.oninput = ()=> {
// 	valueTransport.innerText = `${pt.value}%`;
// }
// pf.oninput = ()=> {
// 	valueFood.innerText = `${pf.value}%`;
// }
// po.oninput = ()=> {
// 	valueOutputs.innerText = `${po.value}%`;
// }

// function calculateHome(salary, percentage) {
// 	return (salary * percentage) / 100;
// }

// var percentageHome = document.getElementById("inputHome").value;
// var percentageTransport = document.getElementById("inputTransport").value;
// var percentageFood = document.getElementById("inputFood").value;
// var percentageOutputs = document.getElementById("inputOutputs").value;

// function calculateAdiministration() {

// 	administration.classList.add('display');

// 	const moneyHome = calculateHome(totalSalary, percentageHome);
	// const moneyTransport = ((totalSalary - moneyHome) * percentageTransport) / 100;
	// const moneyFood = ((totalSalary - moneyTransport) * percentageFood) / 100;
	// const moneyOutputs = ((totalSalary - moneyFood) * percentageOutputs) / 100;

	// const hogar = document.getElementById("hogar");
	// hogar.innerText = `$${moneyHome}`;
	// const transporte = document.getElementById("transporte");
	// transporte.innerText = `$${moneyTransport}`;
	// const comida = document.getElementById("comida");
	// comida.innerText = `$${moneyFood}`;
	// const salidas = document.getElementById("salidas");
	// salidas.innerText = `$${moneyOutputs}`;
// }
