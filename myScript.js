// Question One
// Create a basic calculator using html, css and javaScript

class Calculator {
    constructor (previuosOperandTextElement,currentOperandTextElement){
        this.previuosOperandTextElement = previuosOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear (){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }
    delete (){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber (number){
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOperation (operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
        this.compute()
    }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand  = '';

    }
    compute (){
        let computation;
        const prev = parseFloat (this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev)|| isNaN (current)) return
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break
            case '*':
                computation = prev * current;
                break
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    updateDisplay (){
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null){
            this.previuosOperandTextElement.innerText = this.previousOperand + this.operation
        }

    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allclearButton = document.querySelector('[data-all-clear]');
const previuosOperandTextElement = document.querySelector('[data-previuos-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operend]');

const calculator = new Calculator(previuosOperandTextElement, currentOperandTextElement);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})
allclearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})


// Question Two
// write a program that allows user to select color and the background color of the side should be changed based on the color selected


// Question Three
// Write a program that use Tenary operator to compute result
const result_tenary = () =>{
    var score;
    var grade;
    score = prompt ("Enter Your Grade");
    (score >= 70 && score <= 100 ) ? grade =
    "Congratulation, you scored 'A'" : (score >= 60 && score < 70) ? grade =
    "Congratulation, you scored 'B' " : (score >= 50 && score < 60) ? grade =
    "Congratulation, you scored 'C'. You need to study hard " : (score >= 40 && score < 50) ? grade =
    "Congratulation, you scored 'D'. You need to Study harder " : (score >= 35 && score < 40) ? grade =
    "Congratulation, you scored 'E'. You need to seriously concentrate on you academics activities " : (score >= 0 && score < 35) ? grade =
    "Sorry, you scored 'F' " : grade = "Invalid";

    console.log(grade);
}
result_tenary();

// Question Four
// Write a program that allows user to enter his score, compute the result and display back the result. e.g Congratulation you score A.
// const computeResult = (score) => {
//     // Get Exam Score from user Input
//     score = document.getElementById("score").value;
//     var a = "Congratulation, you scored 'A' ";
//     var b = "Congratulation, you scored 'B' ";
//     var c = "Congratulation, you scored 'C'. You need to study hard ";
//     var d = "Congratulation, you scored 'D'. You need to Study harder ";
//     var e = "Congratulation, you scored 'E'. You need to seriously concentrate on you academics activities ";
//     var f = "Sorry, you scored 'F' ";
    
//     // compute grade
//     if (score >= 70 && score <= 100 ) {
//         document.getElementById("examGrade").innerHTML = a;
//     } else if (score >= 60 && score < 70){
//         document.getElementById("examGrade").innerHTML = b;
//     } else if ( score >= 50 && score < 60){
//         document.getElementById("examGrade").innerHTML = c;
//     }else if (score >= 40 && score < 50){
//         document.getElementById("examGrade").innerHTML = d;
//     } else if (score >= 35 && score < 40){
//         document.getElementById("examGrade").innerHTML = e;
//     } else if (score >= 0 && score < 35){
//         document.getElementById("examGrade").innerHTML = f;
//     } else{
//         document.getElementById("examGrade").innerHTML = "Invalid";
//     }
// }



