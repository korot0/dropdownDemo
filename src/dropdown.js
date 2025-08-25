export function initDropdowns() {
  document.querySelectorAll(".dropdown-container").forEach((container) => {
    const btn = container.querySelector(".dropdown-btn");
    const dropdown = container.querySelector(".dropdown");
    dropdown.classList.add("hidden");
    attachListeners(btn, dropdown);
  });
}

const attachListeners = (btn, dropdown) => {
  attachBtnListener(btn, dropdown);
  attachDropdownListener(dropdown);
};

const attachBtnListener = (btn, dropdown) => {
  btn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });
};

const attachDropdownListener = (dropdown) => {
  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.toggle("hidden");
  });
};
