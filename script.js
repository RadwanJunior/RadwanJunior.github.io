// Get the form, confirmation message, and rebook button elements
var form = document.getElementById('bookingForm');
var confirmationMessageElement = document.getElementById('confirmationMessage');
var rebookButton = document.getElementById('rebookButton');

// Attach an event listener to the form submit event
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting (and the page from refreshing)
event.preventDefault();

    // Get all the values from the form
    var firstName = form.elements.firstName.value;
    var lastName = form.elements.lastName.value;
    var emailInfo = form.elements.emailInfo.value;
    var phoneNumber = form.elements.phoneNumber.value;
    var date = form.elements.date.value;
    var time = form.elements.time.value;
    var comments = form.elements.comments.value;

    var service = form.elements.service.options[form.elements.service.selectedIndex].text;
    var vehicle = form.elements.vehicle.options[form.elements.vehicle.selectedIndex].text;

    var addonServices = Array.from(form.elements.addonService.selectedOptions)
        .map(function(option) {
            return option.text;
        })
        .join(', ');

    // Build the confirmation message
    var confirmationMessage = `
        <h3>Your booking has been confirmed!</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-mail:</strong> ${emailInfo}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Add-On Services:</strong> ${addonServices}</p>
        <p><strong>Vehicle Size:</strong> ${vehicle}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Additional Comments:</strong> ${comments}</p>
    `;

    // Update the confirmation message element's content
    confirmationMessageElement.innerHTML = confirmationMessage;

    // Show the confirmation message and hide the form
    confirmationMessageElement.style.display = 'block';
    form.style.display = 'none';

    // Show the rebook button
    rebookButton.style.display = 'block';
});

// Attach an event listener to the rebook button click event
rebookButton.addEventListener('click', function() {
    // Hide the confirmation message and show the form
    confirmationMessageElement.style.display = 'none';
    form.style.display = 'block';
    rebookButton.style.display = 'none';

    // Reset the form
    form.reset();
});
