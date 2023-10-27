console.log(document);


const emailElement = document.getElementById('email');
const labelElements = document.querySelectorAll('label');
const title = document.querySelector('h2');

emailElement.addEventListener('focus', function() {
    title.style.color = 'green';
});

emailElement.addEventListener('blur', function() {
    title.style.color = 'black';
});


labelElements.forEach((label) => {
    const associatedInputId = label.getAttribute('for');
    if (associatedInputId) {
        const associatedInput = document.getElementById(associatedInputId);

        associatedInput.addEventListener('focus', function() {
            label.style.fontWeight = 'bold';
        });

        associatedInput.addEventListener('blur', function() {
            label.style.fontWeight = 'normal';
        });
    }
});


const submitBtn = document.querySelector('button[type="submit"]');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Form submitted! (Not really, this is just a demonstration)');
});


const newElement = document.createElement('p');
newElement.textContent = 'Note: This form is for demonstration purposes only.';
document.body.appendChild(newElement);


document.addEventListener("DOMContentLoaded", function() {
    const birthDateElement = document.getElementById('birthDate');
    const ageElement = document.getElementById('age');
    
    birthDateElement.addEventListener('change', function() {
        const birthYear = new Date(birthDateElement.value).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        ageElement.value = age;
    });
});