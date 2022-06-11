// (Totalbill + Tip) / Number of people

const totalPerPersonLabel = document.getElementById("valuePerPerson");
const tipAmountValue = document.getElementById("tipAmountPerPerson");
const customTipInput = document.getElementById("customTip");

const bill = document.querySelector("#bill");
const tipButton = document.getElementsByClassName("tipValue");
const calculateButton = document.querySelector("#calc");
const NOP = document.querySelector("#NOP");
var tip = 0;

function removeSelectedTip() {
    let array = Array.from(tipButton);
    array.map((button) => button.classList.remove("tipSelected"));
}

tipButton[0].addEventListener("click", function () {
    removeSelectedTip();
    tipButton[0].classList.add("tipSelected");
    tip = 5;
});
tipButton[1].addEventListener("click", function () {
    removeSelectedTip();
    tipButton[1].classList.add("tipSelected");
    tip = 10;
});
tipButton[2].addEventListener("click", function () {
    removeSelectedTip();
    tipButton[2].classList.add("tipSelected");
    tip = 15;
});
tipButton[3].addEventListener("click", function () {
    removeSelectedTip();
    tipButton[3].classList.add("tipSelected");
    tip = 25;
});
tipButton[4].addEventListener("click", function () {
    removeSelectedTip();
    tipButton[4].classList.add("tipSelected");
    tip = 50;
});
tipButton[5].addEventListener("click", function () {
    removeSelectedTip();
    tipButton[5].classList.add("tipSelected");
    tip = customTipInput.value;
});


calculateButton.addEventListener("click", function () {

    let totalPerPerson = (Number(bill.value) + (bill.value * (tip / 100))) / NOP.value;

    totalPerPersonLabel.innerText = totalPerPerson.toFixed(2);
    tipAmountValue.innerText = (bill.value * (tip / 100)).toFixed(2);
});
