const addDropdown = (btnId, dropdownContainer) => {
  const btn = document.querySelector(`#${btnId}`);
  const dropdown = document.querySelector(`.${dropdownContainer}`);

  btn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.toggle("hidden");
  });
};

addDropdown("more-vert-btn", "dropdown-container");
