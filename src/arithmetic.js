/* Repo to test the Jest testing framework with simple arithmetic functions
 */


const add = (a, b) => a + b

function subtract(a, b) {
    let difference = a - b;
    return difference;
}

function multiply(a, b) {
    var product = a * b;
    return product;
}

function divide(a, b) {
    if(b == 0) {
	throw new Error("Cannot divide by zero");;
    }
    else {
	return a / b;
    }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
}


