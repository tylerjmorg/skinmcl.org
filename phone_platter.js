document.addEventListener("DOMContentLoaded", function () {
  const platter = document.querySelector('[data-phone-platter]');
  const openButtons = document.querySelectorAll('[data-phone-button]');
  const closeButton = document.querySelector('[data-close-platter]');

  function openPlatter() {
    platter.classList.add('visible');
  }

  function closePlatter() {
    platter.classList.remove('visible');
  }

  openButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent the click from bubbling up
      if (platter.classList.contains('visible')) {
        closePlatter();
      } else {
        openPlatter();
      }
    });
  });

  closeButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePlatter();
  });

  document.addEventListener('click', function (e) {
    const isClickInsidePlatter = platter.contains(e.target);
    const isClickOnButton = [...openButtons].some(btn => btn.contains(e.target));
    if (!isClickInsidePlatter && !isClickOnButton) {
      closePlatter();
    }
  });

  // Optional: Close platter on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closePlatter();
  });
});