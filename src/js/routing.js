document.querySelectorAll(".routing_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = btn.dataset.model;
  });
});