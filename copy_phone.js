//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

function copyText() {
  const textToCopy = "+1 (435) 716-8765";
  const button = document.getElementById('copyBtn');
  const copyTrans = document.getElementById('copyTrans');
  const originalText = 'Copy number';

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