let price = 20;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];
let cash = 0;

const cashInput = document.getElementById("cash")
const purchaseBtn = document.getElementById("purchase-btn")



purchaseBtn.addEventListener("click", () => {
    if (parseInt(cashInput.value) < price) {
        alert("Customer does not have enough money to purchase the item")
        return
    }
})
