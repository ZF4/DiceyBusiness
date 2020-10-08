/////////////////GLOBAL VARIABLES/////////////////////
const box = document.createElement('div');          //
document.body.appendChild(box)                      //
let dieBtn = document.querySelector('button');      //
box.className = 'box';                              //
let sumBtn = document.getElementById('sumBtn');     //
let rollDice = document.getElementById('rollDice'); //
let i = 0;                                          //
let diceArray = [];                                 //
/////////////////////////////////////////////////////
//Listens for 'click' on die button, produces new die on click.
dieBtn.addEventListener('click', function () {
    new Die()
})
//Listens for 'click' on roll dice button, rolls all dice on the screen with one click.
rollDice.addEventListener('click', () => {
    diceArray.forEach(die => die.roll())
});
//Calculates the sum of all die displayed on the screen.
sumBtn.addEventListener('click', () => {
    let sum = 0;
    diceArray.forEach(die => sum += die.value);
    alert(sum);
});
//Class for all die
class Die {
    constructor(value) {
        this.value = value
        this.div = document.createElement('div');
        this.div.addEventListener('click', () => this.roll());
        this.div.className = 'dice';
        this.roll();
        box.appendChild(this.div);
        diceArray.push(this);
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let test = diceArray.indexOf(this)
            diceArray.splice(test, 1)
            console.log(diceArray);

        })
    }
    //Method for giving die a numerical value.
    roll() {
        let randomVal = (Math.floor((Math.random() * 6) + 1))
        this.value = randomVal
        this.div.innerHTML = this.value
    }
}
