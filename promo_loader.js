//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener("DOMContentLoaded", function () {
  // Change this to switch the JS file you're serving
  const relativeJsPath = ""; // ← switch this path

  // Create and insert the script tag
  const script = document.createElement("script");
  script.src = relativeJsPath;

  console.log("Promo header loaded!"); 

  document.body.appendChild(script);
});
