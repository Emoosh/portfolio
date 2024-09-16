window.addEventListener('wheel', function(event) {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY * 7.5,  
        behavior: 'smooth'  
    });
}, { passive: false });
