const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
const yourTipDiv = document.getElementById('youTip')

// get number of people from number of people
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculate the total bill per person
const calculateBill = () => {

const bill = Number(billInput.value)


const tipPercentage = Number(tipInput.value) / 100


const tipAmount = bill * tipPercentage

const yTipv = tipAmount
yourTipDiv.innerText = `R${yTipv.toFixed(2)}`

const total = tipAmount + bill


const perPersonTotal = total / numberOfPeople


perPersonTotalDiv.innerText = `R${perPersonTotal.toFixed(2)}`
}

// ** slit the bill betwwen more people **
const increasePeople = () => {
    //increment num of people
    numberOfPeople += 1

    // update the dom with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate bill based o newn num of people
    calculateBill()
}

// ** Slits the bill between fewer people **
const decreasePeople = () => {
    //guard clause
    //if num is 1 or < 1 simply return
    //num people can't be 0 and less
    if (numberOfPeople <= 1 ) {
        return
    }
    
    //decrement num of people
    numberOfPeople -= 1

    // update the dom with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
    
    // calculate bill based o newn num of people
    calculateBill()
}

