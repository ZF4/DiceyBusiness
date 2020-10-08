// let rollBtn = document.getElementById()
const box = document.createElement('div');
document.body.appendChild(box)
let dieBtn = document.querySelector('button');
box.className = 'box';
let sumBtn = document.getElementById('sumBtn');
let rollDice = document.getElementById('rollDice');
let i = 0;
let diceArray = [];


dieBtn.addEventListener('click', function () {
    new Die()
})

rollDice.addEventListener('click', () => {
    diceArray.forEach(die => die.roll())
});

sumBtn.addEventListener('click', () => {
    let sum = 0;
    diceArray.forEach(die => sum += die.value);
    alert(sum);
});

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
    roll() {
        let randomVal = (Math.floor((Math.random() * 6) + 1))
        this.value = randomVal
        this.div.innerHTML = this.value
    }
}
