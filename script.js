// Modal open/close
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.setAttribute("aria-hidden", "true");
});
