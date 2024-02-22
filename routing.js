document.querySelectorAll(".routing_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const path = btn.dataset.model;
    window.location.href = path === '/' ? '/<repository-name>' : path;
  });
});
