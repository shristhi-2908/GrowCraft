function toggleDarkMode() 
{
    const element1 = document.getElementById("main-body");
    console.log(document.getElementById('main-body'));
    element1.classList.toggle("dark");

  if (element1.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}
// Apply dark mode on page load
document.addEventListener("DOMContentLoaded", function () {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.getElementById("darkModeToggle").checked = isDarkMode;
});

// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("change", function () {
    const enabled = this.checked;
    document.body.classList.toggle("dark-mode", enabled);
    localStorage.setItem("darkMode", enabled);
});
