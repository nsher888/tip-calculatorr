const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const tips = document.querySelectorAll('input[name="tip"]');
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

bill.addEventListener("input", function () {
	console.log(bill.value);
	total.innerText = bill.value;
});
