function validateForm() {
    var photo = document.getElementById("photo").value;
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var pname = document.getElementById("pname").value;

    if (photo === "" || fname === "" || lname === "" || pname === "") {
        alert("Please fill in all the required fields.");
        return false;
    }
    var circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle) {
        circle.classList.add('submitted');
    });

    return true;
}

function addCodeInput() {
    var codeInputs = document.getElementById('codeInputs');
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'New Code';
    codeInputs.appendChild(newInput);
}

// Save form data to localStorage
function saveFormData() {
    var formData = {
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}

document.getElementById('btn').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home';
});

document.getElementById('btnc').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/personal';
});

document.getElementById('btnedu').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/contact';
});

document.getElementById('edu').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/secondary';
});

document.getElementById('seco').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/highsecondary';
});

document.getElementById('unde').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/ug';
});

document.getElementById('ski').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/skills';
});

document.getElementById('exp').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default behavior of the anchor tag
    // Redirect the user to the signup page
    window.location.href = '/home/experience';
});


// Retrieve form data from localStorage
function retrieveFormData() {
    var formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        document.getElementById('mobile').value = formData.mobile;
        document.getElementById('email').value = formData.email;
        document.getElementById('address').value = formData.address;
    }
}

