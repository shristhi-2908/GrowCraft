console.log("script.js is loading");
console.log(document.getElementById("backToTop"));

// Check authentication status when page loads
document.addEventListener('DOMContentLoaded', function() {
  checkAuthStatus();
});

// Check if user is logged in and update navbar
function checkAuthStatus() {
  const userData = localStorage.getItem('growcraft_user');
  const loginBtn = document.getElementById('login-btn');
  const profileSection = document.getElementById('profile-section');
  
  if (userData) {
    const user = JSON.parse(userData);
    updateNavbarForLoggedInUser(user);
  } else {
    // No user logged in - ensure login button is shown and profile is hidden
    if (loginBtn) {
      loginBtn.style.display = 'block';
    }
    if (profileSection) {
      profileSection.classList.remove('show');
      profileSection.style.display = 'none'; // Force hide
    }
  }
}

// Update navbar for logged in user
function updateNavbarForLoggedInUser(user) {
  const loginBtn = document.getElementById('login-btn');
  const profileSection = document.getElementById('profile-section');
  
  if (loginBtn && profileSection) {
    loginBtn.style.display = 'none';
    profileSection.classList.add('show');
    
    // Update navbar display name
    const navbarUserName = document.getElementById('navbar-user-name');
    if (navbarUserName) {
      const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
      navbarUserName.textContent = fullName || 'User';
    }
    
    // Update dropdown user information
    const userDisplayName = document.getElementById('user-display-name');
    const userDisplayEmail = document.getElementById('user-display-email');
    
    if (userDisplayName) {
      userDisplayName.textContent = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User';
    }
    
    if (userDisplayEmail) {
      userDisplayEmail.textContent = user.email || 'user@example.com';
    }
  }
}

// Logout function
function logout() {
  // Remove user data from localStorage
  localStorage.removeItem('growcraft_user');
  
  // Get elements
  const loginBtn = document.getElementById('login-btn');
  const profileSection = document.getElementById('profile-section');
  
  // Show login button and hide profile section
  if (loginBtn) {
    loginBtn.style.display = 'block';
  }
  
  if (profileSection) {
    profileSection.classList.remove('show');
    profileSection.style.display = 'none'; // Force hide with inline style as backup
  }
  
  // Show logout message
  const logoutMessage = document.createElement('div');
  logoutMessage.className = 'alert alert-success alert-dismissible fade show';
  logoutMessage.style.position = 'fixed';
  logoutMessage.style.top = '20px';
  logoutMessage.style.right = '20px';
  logoutMessage.style.zIndex = '9999';
  logoutMessage.innerHTML = `
    <i class="fas fa-check-circle me-2"></i>
    Logged out successfully!
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  document.body.appendChild(logoutMessage);
  
  // Refresh page after showing message
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}

// Auto slide of carousel
let autoSlide = () => {
  let next = document.getElementById("nextbtn");
  if (!next) return; // ⛔ Skip if element doesn't exist
  setInterval(() => {
    next.click();
  }, 5000);
};
autoSlide();

// Auto slide of client section
let clientSlide = () => {
  let client = document.getElementById("client-next");
  if (!client) return; // ⛔ Prevent error if not found
  setInterval(() => {
    client.click();
  }, 5000);
};
clientSlide();

// Scroll effect on navbar (only on index page)
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = null;
  let minDistance = window.innerHeight;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < minDistance) {
      minDistance = rect.top;
      currentSection = section.getAttribute("id");
    }
  });

  if (!currentSection && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    currentSection = "contact"; // fallback if at bottom
  }

  navLinks.forEach((link) => {
    link.classList.remove("visited");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("visited");
    }
  });
});


// Form validation (only if form exists)
let submitForm = document.getElementById("form-submit");
if (submitForm) {
  submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");
    const error = document.getElementById("error");

    if (!nameField || !emailField || !subjectField || !messageField || !error) return;

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !subject || !message) {
      error.textContent = "All fields are required.";
      return;
    }
    if (!emailPattern.test(email)) {
      error.textContent = "Please enter a valid email address.";
      return;
    }

    error.textContent = "";
    alert("Form submitted successfully!");
    nameField.value = "";
    emailField.value = "";
    subjectField.value = "";
    messageField.value = "";
  });
}

// Show/hide the back-to-top button on scroll
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top smoothly when back-to-top button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
document.querySelectorAll('.toggle-btn').forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        const cardBody = btn.closest('.card-body');
                        const summary = cardBody.querySelector('.summary');
                        const extra = cardBody.querySelector('.extra');

                        const isExpanded = !extra.classList.contains('d-none');

                        if (isExpanded) {
                            summary.classList.remove('d-none');
                            extra.classList.add('d-none');
                            btn.textContent = "Read More";
                        } else {
                            summary.classList.add('d-none');
                            extra.classList.remove('d-none');
                            btn.textContent = "Read Less";
                        }
                    });
                });

// Enhanced Services Cards Animation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards
    const serviceCards = document.querySelectorAll('.card-services');
    serviceCards.forEach((card, index) => {
        // Add class for scroll animation but keep cards visible by default
        card.classList.add('animate-on-scroll');
        
        // Add mouse interaction effects
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease-out';
        });

        observer.observe(card);
    });

    // Add CSS class for enhanced button effects
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced hover effect for buttons inside cards */
        .card-services .btn-group .btn {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .card-services .btn-group .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .card-services .btn-group .btn:hover::before {
            left: 100%;
        }

        .card-services .btn-group .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
        }
    `;
    document.head.appendChild(style);
});