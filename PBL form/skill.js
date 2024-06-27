// Define an object to store input data
var inputData = {};

function addCodeInput() {
    var codeInputs = document.getElementById('codeInputs');
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'New Code';
    codeInputs.appendChild(newInput);

    // Generate a unique key for each input
    var inputKey = 'input_' + Date.now();

    // Add the input element to the object with the generated key
    inputData[inputKey] = {
        element: newInput,
        value: ''
    };

    // Attach an event listener to update the value in the object when the input changes
    newInput.addEventListener('input', function() {
        inputData[inputKey].value = newInput.value;
    });
}

function submitForm() {
    // Convert the object into an array of values
    var dataArray = Object.values(inputData);

    // Make the fetch request
    fetch('http://localhost:8080/home/skill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataArray)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data sent:', data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}
