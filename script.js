// Optional: Add simple interaction, like clicking on events
document.querySelectorAll('.content').forEach(box => {
  box.addEventListener('click', () => {
    alert(box.querySelector('h2').textContent + " selected");
  });
});
