// --- DATE & TIME ---
const dateTimeElements = document.querySelectorAll('[data-datetime-info]');

if (dateTimeElements.length) {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { 
    hour: 'numeric', 
    minute: '2-digit', 
    second: '2-digit', 
    timeZoneName: 'short' 
  };

  // Function to update date & time
  function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
    const formattedDateTime = `${formattedDate} • ${formattedTime}`;
    
    dateTimeElements.forEach(el => el.textContent = formattedDateTime);
  }

  // Initial call
  updateDateTime();

  // Refresh 5 times a second
  setInterval(updateDateTime, 200);
}

// --- BROWSER, OS, AND IP INFO ---
const browserElements = document.querySelectorAll('[data-browser-info]');
const osElements = document.querySelectorAll('[data-os-info]');
const ipv4Elements = document.querySelectorAll('[data-ipv4-info]');
const ipv6Elements = document.querySelectorAll('[data-ipv6-info]');

if (browserElements.length || osElements.length || ipv4Elements.length || ipv6Elements.length) {
  const ua = navigator.userAgent;

  // --- Browser detection ---
  let browserName = '';
  let browserVersion = '';
  if (/Chrome\/(\d+)/.test(ua) && !/Edg\//.test(ua) && !/OPR\//.test(ua)) {
    browserName = 'Chrome';
    browserVersion = ua.match(/Chrome\/(\d+)/)[1];
  } else if (/Edg\/(\d+)/.test(ua)) {
    browserName = 'Edge';
    browserVersion = ua.match(/Edg\/(\d+)/)[1];
  } else if (/Firefox\/(\d+)/.test(ua)) {
    browserName = 'Firefox';
    browserVersion = ua.match(/Firefox\/(\d+)/)[1];
  } else if (/Safari\/(\d+)/.test(ua) && !/Chrome\//.test(ua)) {
    browserName = 'Safari';
    browserVersion = ua.match(/Version\/(\d+)/)?.[1] || '';
  }

  // --- OS detection ---
  let osName = '';
  if (/Windows NT/.test(ua)) {
    osName = 'Windows';
  } else if (/iPad/.test(ua)) {
    const match = ua.match(/OS (\d+)_/);
    const majorVersion = match ? parseInt(match[1], 10) : null;
    osName = majorVersion && majorVersion >= 13 ? 'iPadOS' : 'iOS';
  } else if (/iPhone|iPod/.test(ua)) {
    osName = 'iOS';
  } else if (/Mac OS X/.test(ua)) {
    osName = 'macOS';
  } else if (/Android/.test(ua)) {
    osName = 'Android';
  } else if (/Linux/.test(ua)) {
    osName = 'Linux';
  }

  // --- Update browser & OS elements ---
  browserElements.forEach(el => {
    el.textContent = browserName && browserVersion ? `${browserName} ${browserVersion}` : browserName;
  });
  osElements.forEach(el => el.textContent = osName);

  // --- Fetch IPs ---
  Promise.all([
    fetch('https://api.ipify.org?format=json').then(res => res.json()).catch(() => null),   // IPv4
    fetch('https://api64.ipify.org?format=json').then(res => res.json()).catch(() => null)  // IPv6
  ])
  .then(([ipv4Data, ipv6Data]) => {
    const ipv4 = ipv4Data?.ip || '';
    const ipv6 = ipv6Data?.ip && ipv6Data.ip !== ipv4Data?.ip ? ipv6Data.ip : '';

    ipv4Elements.forEach(el => el.textContent = ipv4 ? `IPv4 • ${ipv4}` : '');
    ipv6Elements.forEach(el => el.textContent = ipv6 ? `IPv6 • ${ipv6}` : '');
  })
  .catch(() => {
    ipv4Elements.forEach(el => el.textContent = '');
    ipv6Elements.forEach(el => el.textContent = '');
  });

  // Select all elements with the attribute data-user-agent-info
  const userAgentElements = document.querySelectorAll('[data-user-agent-info]');

  // Get the client's full user agent string
  const fullUserAgent = navigator.userAgent;

  // Update each selected element with the user agent
  userAgentElements.forEach(element => {
    element.textContent = fullUserAgent;
  });
}

(async () => {
  const textEls = document.querySelectorAll('[data-policy-text]');
  const sriEls = document.querySelectorAll('[data-policy-sri]');
  const idEls = document.querySelectorAll('[data-policy-id]');

  if (textEls.length !== sriEls.length || textEls.length !== idEls.length) {
    console.warn(`⚠️ Mismatch: ${textEls.length} text, ${sriEls.length} SRI, ${idEls.length} ID elements.`);
  }

  for (let i = 0; i < textEls.length; i++) {
    const el = textEls[i];
    const sriTarget = sriEls[i];
    const idTarget = idEls[i];

    if (!sriTarget || !idTarget) {
      console.warn(`⚠️ Missing matching SRI or ID target for index ${i}.`);
      continue;
    }

    console.log(`🧩 Processing element #${i}:`, el);

    const rawText = el.textContent;
    console.log('📜 Original text content:', JSON.stringify(rawText));

    const cleanedText = rawText.replace(/\s+/g, '').toLowerCase();
    console.log('🧼 Cleaned text:', JSON.stringify(cleanedText));

    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(cleanedText);
      console.log('🔢 Encoded data length:', data.length);

      const hashBuffer = await crypto.subtle.digest('SHA-384', data);
      console.log('⚙️ Hash computed successfully.');

      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const base64Hash = btoa(String.fromCharCode(...hashArray));
      const sri = `Cleaned SRI SHA384 • ${base64Hash}`;
      console.log('✅ Generated SRI:', sri);

      sriTarget.textContent = sri;
      console.log('📍 SRI added as text content to:', sriTarget);

      // === Convert to 12-hex-digit ID (first 6 bytes) ===
      const base64Part = sri.replace(/^Cleaned SRI SHA384 • /, '');
      let bytes;
      try {
        bytes = Uint8Array.from(atob(base64Part), c => c.charCodeAt(0));
      } catch (err) {
        console.error('❌ Failed to Base64 decode SRI:', err);
        continue;
      }

      const first6 = bytes.slice(0, 6);
      const id12hex = Array.from(first6)
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

      console.log('🧮 Derived 12-hex-digit ID:', id12hex);
      idTarget.textContent = id12hex;
      console.log('📍 ID added as text content to:', idTarget);

    } catch (err) {
      console.error('❌ Error while generating SRI/ID:', err);
    }
  }
})();
