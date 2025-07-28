// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
// Social links will be handled by event listeners
const calendarGrid = document.getElementById('calendarGrid');
const currentMonthElement = document.getElementById('currentMonth');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
        updateActiveNavLink(link);
    });
});

function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function updateActiveNavLink(activeLink) {
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    activeLink.classList.add('active');
}

// Calendar Functionality
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Sample concert data
const concerts = [
    { date: '2024-12-15', title: 'Vianočný koncert', location: 'Kostol sv. Martina' },
    { date: '2024-12-31', title: 'Silvestrovský koncert', location: 'Hlavné námestie' },
    { date: '2025-01-20', title: 'Novoročný koncert', location: 'Koncertná sieň' },
    { date: '2025-02-14', title: 'Valentínsky koncert', location: 'Mestský park' },
    { date: '2025-03-15', title: 'Jarný koncert', location: 'Kultúrny dom' },
    { date: '2025-08-10', title: 'Letný koncert v Bardejove', location: 'Bardejov', time: '13:00 - 15:00' }
];

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    const monthLength = lastDay.getDate();
    
    const monthNames = [
        'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún',
        'Júl', 'August', 'September', 'Október', 'November', 'December'
    ];
    
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;
    
    // Clear calendar grid
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Ne', 'Po', 'Út', 'St', 'Št', 'Pi', 'So'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day header';
        dayHeader.textContent = day;
        dayHeader.style.fontWeight = 'bold';
        dayHeader.style.backgroundColor = '#f3f4f6';
        calendarGrid.appendChild(dayHeader);
    });
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day other-month';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= monthLength; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Check if this day has a concert
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const hasConcert = concerts.some(concert => concert.date === dateString);
        
        if (hasConcert) {
            dayElement.classList.add('has-concert');
            dayElement.title = `Koncert: ${concerts.find(concert => concert.date === dateString).title}`;
        }
        
        // Highlight today
        if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
            dayElement.classList.add('today');
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

// Calendar navigation
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
    updateCalendarClickEvents();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
    updateCalendarClickEvents();
});

// Social Links (placeholder for future functionality)
document.querySelectorAll('.social-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = item.querySelector('.social-text').textContent;
        console.log(`Social link clicked: ${platform}`);
        // Future: Add actual social media links here
        alert(`Odkaz na ${platform} bude pridaný neskôr.`);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.news-card, .concert-item, .timeline-item, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(30, 58, 138, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize calendar
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentMonth, currentYear);
    
    // Add some interactive features
    addConcertDetails();
    
    // Debug logo loading
    const logoImages = document.querySelectorAll('img[src*="logo"]');
    console.log('Found logo images:', logoImages.length);
    logoImages.forEach((img, index) => {
        console.log(`Logo ${index + 1}:`, img.src, img.alt);
        img.addEventListener('load', () => {
            console.log(`Logo ${index + 1} loaded successfully`);
        });
        img.addEventListener('error', (e) => {
            console.error(`Logo ${index + 1} failed to load:`, e);
        });
    });
});

// Add concert details to calendar days
function addConcertDetails() {
    const calendarDays = document.querySelectorAll('.calendar-day.has-concert');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', () => {
            const dayNumber = day.textContent;
            const month = currentMonth + 1;
            const year = currentYear;
            const dateString = `${year}-${String(month).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;
            
            const concert = concerts.find(c => c.date === dateString);
            if (concert) {
                showConcertModal(concert);
            }
        });
    });
}

// Update calendar click events when month changes
function updateCalendarClickEvents() {
    // Remove old event listeners
    const oldDays = document.querySelectorAll('.calendar-day.has-concert');
    oldDays.forEach(day => {
        day.replaceWith(day.cloneNode(true));
    });
    
    // Add new event listeners
    addConcertDetails();
}

// Simple modal for concert details
function showConcertModal(concert) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 400px;
        text-align: center;
        position: relative;
    `;
    
    modalContent.innerHTML = `
        <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">${concert.title}</h3>
        <p><strong>Dátum:</strong> ${formatDate(concert.date)}</p>
        <p><strong>Miesto:</strong> ${concert.location}</p>
        ${concert.time ? `<p><strong>Čas:</strong> ${concert.time}</p>` : ''}
        <button onclick="this.closest('.modal').remove()" style="
            background: var(--primary-red);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            cursor: pointer;
        ">Zavrieť</button>
    `;
    
    modal.className = 'modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return date.toLocaleDateString('sk-SK', options);
}

// Add some dynamic content loading
function loadMoreConcerts() {
    // This could be used to load more concerts from an API
    console.log('Loading more concerts...');
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.remove();
        }
    }
});

// Add loading states
function showLoading(element) {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Export functions for potential use
window.brassBandWebsite = {
    showSection,
    generateCalendar,
    showConcertModal,
    loadMoreConcerts
}; 