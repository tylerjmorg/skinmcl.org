document.addEventListener('DOMContentLoaded', () => {
    const shareButtons = document.querySelectorAll('[data-share-link]');

    shareButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const url = button.getAttribute('data-share-link');
        const title = document.title;

        if (navigator.share) {
          try {
            await navigator.share({ title, url });
            console.log('Thanks for sharing!');
          } catch (err) {
            console.error('Error sharing:', err);
          }
        } else {
          alert('Sharing not supported on this browser.');
        }
      });
    });
  });