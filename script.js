document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("dropdownDefaultButton");
    const dropdown = document.getElementById("dropdown");

    button.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });

  document.addEventListener("click", (event) => {
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
      }
    });
  });