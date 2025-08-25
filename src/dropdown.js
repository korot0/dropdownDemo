export function initDropdowns() {
  document.querySelectorAll(".dropdown-container").forEach((container) => {
    const btn = container.querySelector(".dropdown-btn");
    const dropdown = container.querySelector(".dropdown");
    dropdown.classList.add("hidden");
    attachListeners(container, btn, dropdown);
  });
}

const attachListeners = (container, btn, dropdown) => {
  attachClickListener(btn, dropdown);
  attachMouseLeaveListener(container, dropdown);
};

const attachClickListener = (btn, dropdown) => {
  btn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });
};

const attachMouseLeaveListener = (container, dropdown) => {
  container.addEventListener("mouseleave", () => {
    dropdown.classList.add("hidden");
  });
};
