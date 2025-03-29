// Gym search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.className = 'md:hidden p-2 text-gray-700';
    document.querySelector('header .container').insertBefore(mobileMenuButton, document.querySelector('header nav'));
    
    mobileMenuButton.addEventListener('click', function() {
        const nav = document.querySelector('header nav');
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
        nav.classList.toggle('flex-col');
        nav.classList.toggle('absolute');
        nav.classList.toggle('top-16');
        nav.classList.toggle('left-0');
        nav.classList.toggle('right-0');
        nav.classList.toggle('bg-white');
        nav.classList.toggle('p-4');
        nav.classList.toggle('shadow-md');
    });

    // Gym card hover effects
    const gymCards = document.querySelectorAll('.grid > div');
    gymCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // QR code functionality placeholder
    document.querySelectorAll('button:contains("View Details")').forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would open a modal with gym details
            alert('Gym details would be shown here with QR code for access');
        });
    });

    // Free trial form submission
    const freeTrialButton = document.querySelector('.bg-white.text-blue-600');
    if (freeTrialButton) {
        freeTrialButton.addEventListener('click', function() {
            // In a real implementation, this would open a signup form
            alert('Free trial signup form would appear here');
        });
    }
});

// Future implementation for gym search
function searchGyms(location, filters) {
    // This would connect to a backend API in a real implementation
    console.log(`Searching for gyms in ${location} with filters:`, filters);
}