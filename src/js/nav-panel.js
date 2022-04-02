const navPanelToggle = document.querySelector("#navPanelToggle");

function toggleNavPanelHandler() {
  document.body.classList.toggle("is-navPanel-visible");
}

navPanelToggle.addEventListener("click", toggleNavPanelHandler);