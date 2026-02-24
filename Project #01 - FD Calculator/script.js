function calculateMaturityAmount() {
    // get input values from the form elements

    let principle;
    principle = parseFloat(document.getElementById('principle').value);

    let interestRate;
    interestRate = parseFloat(document.getElementById('interestRate').value);

    let tenure;
    tenure = parseFloat(document.getElementById('tenure').value);

    // perform the calculation using the logic:
    const maturityAmount = principle * (principle * interestRate * tenure)/100;

    // display results:
    document.getElementById('result').innerText = `MaturityAmount: ${maturityAmount.toFixed(2)}`;
}

// attach event listener to the calculate button
document.getElementById('calcBtn').addEventListener('click', calculateMaturityAmount);