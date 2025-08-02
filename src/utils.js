function toggleDarkMode() 
{
    const element1 = document.getElementById("main-body");
    element1.classList.toggle("dark");
    localStorage.setItem("theme", element1.classList.contains("dark") ? "dark" : "light");
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const element1 = document.getElementById("main-body");
  const checkbox = document.querySelector('.checkbox');
  
  if (savedTheme === "dark") {
    element1.classList.add("dark");
    if (checkbox) {
      checkbox.checked = true;
    }
  } else {
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
