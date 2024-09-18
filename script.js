const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;
let isScrolling = false;

function scrollToSection(index) {
    console.log(`Scrolling to section ${index}`); // Test için eklenen satır
    sections[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
}

window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Varsayılan kaydırmayı durdurur
    if (isScrolling) return; 

    isScrolling = true;

    if (event.deltaY > 0) {
        // Aşağı kaydırma
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        }
    } else {
        // Yukarı kaydırma
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
        }
    }

    scrollToSection(currentSectionIndex);

    setTimeout(() => {
        isScrolling = false; 
    }, 1000);
}, { passive: false });



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1  
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

