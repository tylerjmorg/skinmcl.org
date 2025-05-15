function copyText() {
    const textToCopy = "+1 (435) 716-8765";
    const button = document.getElementById('copyBtn');
    const copyTrans = document.getElementById('copyTrans');
    const originalText = button.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
      copyTrans.textContent = "Copied!";
      copyTrans.style.opacity = 1;

      setTimeout(() => {
        copyTrans.style.opacity = 0.5;
        setTimeout(() => {
          copyTrans.textContent = originalText;
          copyTrans.style.opacity = 1;
        }, 500);
      }, 3000);
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  }