let price = 19.5;
let cid = [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
];

const denom = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
}

const cashInput = document.getElementById("cash")
const purchaseBtn = document.getElementById("purchase-btn")
const changeDue = document.getElementById("change-due")

purchaseBtn.addEventListener("click", (e) => {
    e.preventDefault()

    changeDue.textContent = ""

    const cash = parseFloat(cashInput.value)

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item")
        return
    } else if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash"
        return
    } else { // cash > price, need to return change to customer
        console.log(`open register to return change...`)

        let change = cash - price // total change to be returned to customer

        console.log(`change due: ${change}`)

        let totalCashInDrawer = Math.round(calcTotalCash(cid) * 100) / 100

        let changeArr = []

        let changeArrTotal = 0

        for (let i = cid.length - 1; i >= 0; i--) {

            let currency = cid[i][0]
            console.log(`currency denom: ${cid[i][0]}`)

            let currencyTotal = 0

            while (cid[i][1] > 0 && change >= denom[currency]) {
                console.log(`enough currencyValue in drawer section`)
                console.log(`substracting ${denom[currency]} from change due...`)
                change -= denom[currency]

                console.log(`rounding change...`)
                change = Math.round(change * 100) / 100

                console.log(`current change due: ${change}`)
                console.log(`substracting ${denom[currency]} from drawer...`)
                cid[i][1] -= denom[currency]
                currencyTotal += denom[currency]
                currencyTotal = Math.round(currencyTotal * 100) / 100

                console.log(`current currencyTotal: ${currencyTotal}`)
            }

            if (currencyTotal > 0) {
                changeArr.push([currency, currencyTotal])
                changeArrTotal += currencyTotal
                console.log(`current changeArr: ${changeArr}`)
            }
        }

        let totalChangeArr = Math.round(calcTotalCash(changeArr) * 100) / 100

        console.log(`change-due: ${change}, cash-in-drawer: ${totalCashInDrawer}, change-total: ${totalChangeArr}`)

        if (change > 0) {
            changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
            return
        } else if (totalChangeArr == totalCashInDrawer) {
            changeDue.textContent = "Status: CLOSED"
        } else {
            changeDue.textContent = `Status: OPEN`
        }
        changeArr.forEach((element) => {
            changeDue.textContent += ` ${element[0]}: $${element[1]} `
        })
        return
    }
}
)

const calcTotalCash = (arr) => {
    let totalCash = 0
    arr.forEach((element) => {
        totalCash += element[1]
    })
    console.log(`total cash: ${totalCash}`)
    return totalCash
}