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
