console.log("script.js is loading");
console.log(document.getElementById("backToTop"));

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
if (window.location.pathname.includes("index")) {
  window.addEventListener("scroll", () => {
    let current = "home";
    const scrollY = window.pageYOffset;
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight - 50 : 50;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        current = "contact";
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("visited");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("visited");
      }
    });
  });
}

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
