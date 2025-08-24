const addDropdown = (btnId) => {
  const btn = document.querySelector(`#${btnId}`);

  btn.addEventListener("click", () => {
    console.log("clicked");
  });
};

addDropdown("more-vert-btn");
