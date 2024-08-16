// Mobile navbar toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');

    // Toggle between hamburger and cross icon
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        this.innerHTML = '<span class="block w-8 h-1 bg-slate-800 mb-1 transform rotate-45 translate-y-2"></span><span class="block w-8 h-1 bg-slate-800 mb-1 opacity-0"></span><span class="block w-8 h-1 bg-slate-800 transform -rotate-45 -translate-y-2"></span>';
    } else {
        this.innerHTML = '<span class="block w-8 h-1 bg-slate-800 mb-1"></span><span class="block w-8 h-1 bg-slate-800 mb-1"></span><span class="block w-8 h-1 bg-slate-800"></span>';
    }
});

// Booking seat 
const seats = document.querySelectorAll('.btn-select');
seats.forEach((seat) => {
    seat.addEventListener('click', (e) => {
        // Check if the seat has already been selected
        if (seat.style.backgroundColor === 'rgb(29, 209, 0)') {
            return;
        }

        // Update seat count and check if the limit has been reached
        const seatUpdated = updateSeatCount();
        if (!seatUpdated) {
            return; // Exit if seat count limit is reached
        }

        // Set green seat 
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        // Get seat level 
        let seatLevel = e.target.innerText;

        // Update the left seat count
        let leftSeat = getElementId('seat-left');
        let leftCount = leftSeat - 1;
        setElementId('seat-left', leftCount);

        let ticketPrice = 550;
        // Update the table with selected seat details
        const container = document.getElementById('selected-container');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                <td>${seatLevel}</td>
                <td>Economy</td>
                <td>${ticketPrice}</td>
        `;
        container.appendChild(newRow);

        // Update total ticket price 
        let totalPrice = getElementId('seat-count') * ticketPrice;
        setElementId('total-ticket-price', totalPrice);

        // Handle coupon code
        const couponCode = document.getElementById('coupon-code');
        const applyButton = document.getElementById('apply-now');

        // Enable the apply button if the correct coupon code is entered
        couponCode.addEventListener('keyup', () => {
            const inputValue = couponCode.value;
            if (inputValue === 'NEW15') {
                applyButton.removeAttribute('disabled');
            }
        });

        // Apply coupon discount 
        applyButton.addEventListener('click', () => {
            const inputValue = couponCode.value;

            if (inputValue === 'NEW15') {
                const discount15 = totalPrice * 0.15;
                setElementId('discount-price', discount15);
                couponCode.value = '';

                // Update grand total
                const grand_price = getElementId('total-ticket-price');
                const grand_total = grand_price - discount15;
                setElementId('grand-total', grand_total)
            }
        });
    });
});


// form validation 


// Get the current date
const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Set the date in the modal
document.getElementById('booking-date').innerText = currentDate;
