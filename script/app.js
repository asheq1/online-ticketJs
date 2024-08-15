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

    })
})