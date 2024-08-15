// mobile navbar toggle
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


// booking seat 
const seats = document.querySelectorAll('.btn-select');
seats.forEach((seat) => {
    seat.addEventListener('click', (e)=>{
        // check if the seat hase already been selected 
        if(seat.style.backgroundColor === 'rgb(29, 209, 0)'){
            return;
        }

        // set green seat 
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';
        
        // per seat 
        let seatLevel = e.target.innerText;
        
        //update seat count
        let seatCount = getElementId('seat-count');
        let perSeat =  seatCount + 1;
        setElementId('seat-count', perSeat);
        if(seatCount > 3){
            // alert('No more ticket')
            return 
        }

        // left seat
        let leftSeat = getElementId('seat-left');
        let leftCount = leftSeat - 1;
        setElementId('seat-left', leftCount);
        
        let ticketPrice = 550;
        // seat, class, price
        const container = document.getElementById('selected-container');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                <td>${seatLevel}</td>
                <td>Economy</td>
                <td>${ticketPrice}</td>
        `;
        container.appendChild(newRow);

        // total ticket price 
        let totalPrice = perSeat * ticketPrice;
        setElementId('total-ticket-price', totalPrice);

        // Get the input field and apply button elements
        const couponCode = document.getElementById('coupon-code');
        const applyButton = document.getElementById('apply-now');

        // coupon code 
        couponCode.addEventListener('keyup', ()=>{
            const inputValue = couponCode.value;
            if(inputValue === 'NEW15'){
                applyButton.removeAttribute('disabled')
            } 
            // else {
            //     applyButton.removeAttribute('disabled', true)
            // }
        })
        // coupon discuont 
        applyButton.addEventListener('click', () => {
            const inputValue = couponCode.value;

            if(inputValue === 'NEW15'){
                const discount15 = totalPrice * 0.15;
                setElementId('discount-price', discount15)
                couponCode.value =''
            }
        })

        // grand total
        const grand_Field = getElementId('grand-total');
        const grand_Price = getElementId('total-ticket-price');
        const discount = getElementId('discount-price');
        const grand_total = grand_Price + grand_Field;
        const all_total = grand_total + discount;
        setElementId('grand-total', all_total)

    })
})