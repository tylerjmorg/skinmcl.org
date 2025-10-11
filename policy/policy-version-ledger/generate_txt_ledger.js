const fs = require('fs');
const path = require('path');

// Input and output files
const jsonFile = path.join(__dirname, 'policy_version_ledger.json');
const txtFile = path.join(__dirname, 'policy_version_ledger.txt');
const xmlFile = path.join(__dirname, 'policy_version_ledger.xml');

// Policy URLs
const policyInfo = {
  terms_of_service: { title: "Terms of Service", url: "https://skinmcl.org/terms-of-service/" },
  privacy_policy: { title: "Privacy Policy", url: "https://skinmcl.org/privacy-policy/" },
  intellectual_property: { title: "Intellectual Property", url: "https://skinmcl.org/intellectual-property/" }
};

// Word-wrap helper
function wrapText(text, width = 72) {
  const words = text.split(' ');
  let lines = [];
  let line = '';
  for (const word of words) {
    if ((line + ' ' + word).trim().length > width) {
      lines.push(line.trim());
      line = word;
    } else {
      line += ' ' + word;
    }
  }
  if (line) lines.push(line.trim());
  return lines.join('\n');
}

// Helper to get latest release for a policy
function getLatestRelease(releases) {
  return releases.reduce((latest, current) => {
    return new Date(current.release) > new Date(latest.release) ? current : latest;
  }, releases[0]);
}

// Convert JSON to TXT
function convertToTxt(ledgerObj) {
  const ledger = ledgerObj.policy_version_ledger;
  let txt = `# Policy Version Ledger\n\n${wrapText(ledger.description, 72)}\n\n\n## Current Version IDs\n---\n`;

  // Current version IDs (latest release per policy)
  Object.keys(ledger.policies).forEach(key => {
    const latest = getLatestRelease(ledger.policies[key]);
    const title = policyInfo[key].title;
    txt += `${title.padStart(21)} ${latest.id}\n`;
  });

  txt += `\n`;

  // Detailed sections (keep JSON order)
  Object.keys(ledger.policies).forEach(key => {
    const releases = ledger.policies[key];
    const title = policyInfo[key].title;
    const url = policyInfo[key].url;
    txt += `\n## ${title}\nSource: <${url}>\n---\n`;
    releases.forEach(r => {
      txt += `Release ${r.release}\n`;
      txt += `     ID ${r.id}\n`;
      txt += `    SRI ${r.sri}\n\n`;
    });
  });

  return txt.trim();
}

// Convert JSON to XML
function convertToXml(ledgerObj) {
  const ledger = ledgerObj.policy_version_ledger;
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Ledger>\n`;
  xml += `  <Title>Policy Version Ledger</Title>\n`;
  xml += `  <Description>\n    ${ledger.description.trim().replace(/\s+/g, ' ')}\n  </Description>\n`;

  // Current version IDs (latest release per policy)
  xml += `  <CurrentVersionIDs>\n`;
  Object.keys(ledger.policies).forEach(key => {
    const latest = getLatestRelease(ledger.policies[key]);
    xml += `    <Policy name="${policyInfo[key].title}" id="${latest.id}"/>\n`;
  });
  xml += `  </CurrentVersionIDs>\n`;

  // Policies and releases (keep JSON order)
  xml += `  <Policies>\n`;
  Object.keys(ledger.policies).forEach(key => {
    const title = policyInfo[key].title;
    const releases = ledger.policies[key];
    xml += `    <Policy>\n`;
    xml += `      <Name>${title}</Name>\n`;
    xml += `      <Source>${policyInfo[key].url}</Source>\n`;
    releases.forEach(r => {
      xml += `        <Release>\n`;
      xml += `          <ReleaseDate>${r.release}</ReleaseDate>\n`;
      xml += `          <ID>${r.id}</ID>\n`;
      xml += `          <SRI>${r.sri}</SRI>\n`;
      xml += `        </Release>\n`;
    });
    xml += `    </Policy>\n`;
  });
  xml += `  </Policies>\n</Ledger>\n`;
  return xml;
}

// Read JSON and write both TXT and XML
fs.readFile(jsonFile, 'utf8', (err, data) => {
  if (err) return console.error("Error reading JSON:", err);
  let ledgerJson;
  try {
    ledgerJson = JSON.parse(data);
  } catch (e) {
    return console.error("Error parsing JSON:", e);
  }

  // Write TXT
  const txtContent = convertToTxt(ledgerJson);
  fs.writeFileSync(txtFile, txtContent, 'utf8');
  console.log(`✅ TXT created: ${txtFile}`);

  // Write XML
  const xmlContent = convertToXml(ledgerJson);
  fs.writeFileSync(xmlFile, xmlContent, 'utf8');
  console.log(`✅ XML created: ${xmlFile}`);
});
