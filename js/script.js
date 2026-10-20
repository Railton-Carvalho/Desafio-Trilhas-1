const views = document.querySelectorAll("[data-view]");
const backButton = document.querySelector("[data-back]");
const DEFAULT_VIEW = "inicio";

function showView() {
  const id = location.hash.replace("#", "") || DEFAULT_VIEW;
  const target = document.getElementById(id);
  const current = target && target.hasAttribute("data-view") ? id : DEFAULT_VIEW;

  views.forEach((view) => {
    view.hidden = view.id !== current;
  });

  backButton.hidden = current === DEFAULT_VIEW;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", showView);
showView();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && location.hash && location.hash !== `#${DEFAULT_VIEW}`) {
    location.hash = DEFAULT_VIEW;
  }
});
