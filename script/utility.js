function getElementId(elementId) {
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText, 10); // Ensure the parsed value is a number
    return value;
}

function setElementId(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function updateSeatCount() {
    let seatCount = getElementId('seat-count');
    
    if (seatCount >= 4) {
        alert('No more tickets available');
        return false; // Return false to indicate the limit has been reached
    }

    let perSeat = seatCount + 1;
    setElementId('seat-count', perSeat);
    return true; // Return true to indicate the seat count was successfully updated
}

// Get the current date
const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Set the date in the modal
document.getElementById('booking-date').innerText = currentDate;

// update modal content
function updateModalContent(){
    const seatLevels = document.querySelectorAll('.seat-level');
    const totalCost = document.getElementById('total-ticket-price').innerText.trim();
  
    let seatDetails = `<h3 class="font-semibold text-xl text-[#4A4A4A]">Seat Details:</h3><ul>`;
    seatLevels.forEach(seat => {
        seatDetails += `<li>${seat.innerText}</li>`;
    });
    seatDetails += `</ul>`;

    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerHTML = `
        ${seatDetails}
        <p class="font-semibold text-xl text-[#4A4A4A]">Grand Total: $${totalCost}</P>
    `;
}
