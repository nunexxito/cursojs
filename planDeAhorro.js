const porcentajeText = document.getElementById("valuePercentage");
const porcentaje = document.getElementById("percentage");


porcentaje.oninput = ()=> {
	porcentajeText.innerText = `${porcentaje.value}%`;
	// porcentajeText.innerText = this.value;
}

function calculatePercentage(salary, percentage) {
	const salarySaved = (salary * percentage) / 100;

	return salarySaved;
}

function salaryMonth(salary, percentage) {
	const totalSalary = (salary * (100 - percentage)) /100;

	return totalSalary;
}

function onclickPercentage() {
	const monthSalary = document.getElementById("salary");
	const savedPercentage = document.getElementById("percentage");
	const totalMonth = document.getElementById("month");

	const salaryValue = monthSalary.value;
	const percentageValue = savedPercentage.value;
	const monthValue = totalMonth.value;

	const saved = calculatePercentage(salaryValue, percentageValue);
	const totalSaved = saved * monthValue;
	const totalSalary = salaryMonth(salaryValue, percentageValue);

	const ahorrado = document.getElementById("saved");
	ahorrado.innerText = `$${saved}`;
	const ahorradoTotal = document.getElementById("total");
	ahorradoTotal.innerText = `$${totalSaved}`;
	const salario = document.getElementById("totalSalary");
	salario.innerText = `$${totalSalary}`;
}