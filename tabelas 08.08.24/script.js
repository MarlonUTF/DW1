class Calculator {
    constructor(visorElement) {
        this.visorElement = visorElement;
        this.clear();
    }

    clear() {
        this.currentExpression = '';
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
        this.updateVisor('0');
    }

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber += number;
        this.currentExpression += number;
        this.updateVisor(this.currentExpression);
    }

    chooseOperation(operation) {
        if (this.currentNumber === '') return;
        if (this.previousNumber !== '') {
            this.calculate();
        } else {
            this.previousNumber = this.currentNumber;
        }
        this.operation = operation;
        this.currentExpression += ` ${operation} `;
        this.currentNumber = '';
        this.updateVisor(this.currentExpression);
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentNumber = result.toString();
        this.previousNumber = '';
        this.operation = null;
    }

    computeResult() {
        if (this.operation === null) return;
        this.calculate();
        this.currentExpression = this.currentNumber;
        this.updateVisor(this.currentExpression);
    }

    updateVisor(value) {
        this.visorElement.textContent = value;
    }

    handleButtonClick(value) {
        if (!isNaN(value) || value === '.') {
            this.appendNumber(value);
        } else if (value === 'AC') {
            this.clear();
        } else if (value === '=') {
            this.computeResult();
        } else {
            this.chooseOperation(value);
        }
    }
}

// Inicializa a calculadora
const visor = document.querySelector('.numero-visor');
const buttons = document.querySelectorAll('td');
const calculator = new Calculator(visor);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.handleButtonClick(button.textContent);
    });
});
