// console.log(localStorage.getItem('name'))
let answers = {
    name: '',
    text: ''
}
let tempResult = ''
let milesOrMeters = '';
let alertMessage = document.querySelector('.finalMessage');
metersCheckbox = document.getElementById('meters');
metersCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
        milesOrMeters = 0.000621371;
    }
});
inputs = document.querySelectorAll('input')
btn = document.querySelector('#btn')
milesCheckbox = document.getElementById('miles');
milesCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
        milesOrMeters = 1609.34;
    }
});
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        answers[e.target.name] = e.target.value
    })
})
btn.addEventListener('click',
    (e) => {
        e.preventDefault();
        localStorage.setItem('name', answers.name);
        let result = calcMilesVsMeters(Number(answers.name), milesOrMeters);
        console.log(result);
        console.log(milesOrMeters);
    })
function calcMilesVsMeters(howMany, coefficient) {
    tempResult = howMany * coefficient;
    if (howMany >= 0) {
        if (coefficient === 1609.34) {
            alertMessage.innerHTML = tempResult + " meters in " + howMany + " miles";
        } else if (coefficient === 0.000621371) {
            alertMessage.innerHTML = tempResult + " miles in " + howMany + " meters";
        } else {
            alertMessage.innerHTML = " unable to read data";
        }
    } else {
        alertMessage.innerHTML = "Please enter a valid number!";
    }
    return alertMessage;
}