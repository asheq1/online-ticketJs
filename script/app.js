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
