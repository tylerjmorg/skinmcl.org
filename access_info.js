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

    ipv4Elements.forEach(el => el.textContent = ipv4 ? `IPv4 ${ipv4}` : '');
    ipv6Elements.forEach(el => el.textContent = ipv6 ? `IPv6 ${ipv6}` : '');
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
