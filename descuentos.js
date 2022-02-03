
function calcularDescuento(precio, descuento) {
	const porcentajeDescuento = 100 - descuento;
	const precioDescuento = (precio * porcentajeDescuento) / 100;

	return precioDescuento;
}

const coupons = [
		{
				name: "nepe",
				discount: 15,
		},
		{
				name: "nepecito",
				discount: 25,
		},
		{
				name: "neperzon",
				discount: 35,
		},
];

function onclickDiscount() {
	const price = document.getElementById("inputPrice");
	const coupon = document.getElementById("inputCoupon");

	const valuePrice = price.value;
	const valueCoupon = coupon.value;

	const couponValid = function (coupon) {
		return coupon.name === valueCoupon;
	};

	const userCoupon = coupons.find(couponValid);

	if (!userCoupon) {
			alert("El cupón " + valueCoupon + "no es válido");
	} else {
			const descuento = userCoupon.discount;
			const priceDiscount = calcularDescuento(valuePrice, descuento);

			const resultado = document.getElementById("result");
			resultado.innerText = `El valor con descuento es: $${priceDiscount}`;

			const discount = document.getElementById("discount");
			discount.innerText = `Su descuento fue del: ${descuento}%`;
	}
}