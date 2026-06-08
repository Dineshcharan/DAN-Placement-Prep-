const fs = require('fs');
const path = 'c:/Users/dines/Downloads/dan-prep-zen-main (23)/dan-prep-zen-main/api/website-assistant.ts';
let text = fs.readFileSync(path, 'utf8');
const start = '    // Enhanced keyword-based responses for comprehensive coverage\n';
const end = '    if (userName && !response.includes(userName)) {\n';
const idx = text.indexOf(start);
const jdx = text.indexOf(end, idx);
if (idx === -1 || jdx === -1) {
  console.error('Markers not found');
  process.exit(1);
}
text = text.slice(0, idx) + text.slice(jdx);
fs.writeFileSync(path, text, 'utf8');
console.log('Removed old response block');
