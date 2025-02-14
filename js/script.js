document.addEventListener("DOMContentLoaded", function () {
    // News Ticker Auto-scroll
    const newsTicker = document.querySelector(".news-ticker marquee");
    setInterval(() => {
        newsTicker.start();
        setTimeout(() => newsTicker.stop(), 3000);
    }, 6000);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");
});

// Lightbox Functionality
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const images = document.querySelectorAll(".gallery-image");

// Open Modal with Clicked Image
images.forEach((img, index) => {
    img.parentElement.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        currentIndex = index;
    });
});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Navigate Between Images
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
});

// Close Modal When Clicking Outside the Image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


async function fetchDeathCount() {
    try {
        const response = await fetch("https://api.example.com/death-toll"); // Replace with actual API
        const data = await response.json();
        
        // Assume API returns: { deaths: 32000 }
        document.getElementById("deathCount").innerText = data.deaths.toLocaleString();
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("deathCount").innerText = "Unavailable";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Scroll Animation for Timeline
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const content = entry.target.querySelector('.timeline-content');
                if (content) {
                    const animationClass = content.classList.contains('animate-left') ? 
                        'animate-left' : 'animate-right';
                    content.style.animation = `${animationClass} 0.6s ease forwards`;
                }
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
// Fetch data every 10 seconds
fetchDeathCount();
setInterval(fetchDeathCount, 10000);
