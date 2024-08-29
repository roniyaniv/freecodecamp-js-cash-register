let price = 19.5;
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

const cashInput = document.getElementById("cash")
const purchaseBtn = document.getElementById("purchase-btn")
const changeDue = document.getElementById("change-due")

const processTransaction = (cash) => {
    if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash"
        return
    }
}


const isEnoughCash = (cash, price) => cash >= price

purchaseBtn.addEventListener("click", (e) => {
    e.preventDefault()

    changeDue.textContent = ""

    const cash = parseFloat(cashInput.value)

    if (!isEnoughCash(cash, price)) {
        alert("Customer does not have enough money to purchase the item")
        return
    } else {
        processTransaction(cash)
    }
})
