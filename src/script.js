// Auto slide of caurosel
let autoSlide = () => {
  let next = document.getElementById("nextbtn");
  setInterval(() => {
    next.click();
  }, 5000);
};

autoSlide();

let clientSlide = () => {
  let client = document.getElementById("client-next");
  setInterval(() => {
    client.click();
  }, 5000);
};

clientSlide();

// Scroll effect on navbar
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-link");
if (window.location.pathname.includes("index")) {
  window.addEventListener("scroll", () => {
    let current = "home";
    const scrollY = window.pageYOffset;
    const navHeight = document.querySelector("nav").offsetHeight - 50;
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

// Form validation
let submitForm = document.getElementById("form-submit");
submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const messageField = document.getElementById("message");

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const subject = subjectField.value.trim();
  const message = messageField.value.trim();
  const error = document.getElementById("error");
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
  alert("Form submitted succesfully!");
  nameField.value = "";
  emailField.value = "";
  subjectField.value = "";
  messageField.value = "";
});
