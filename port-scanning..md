<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Port Scanning - Batman808026</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css"></head><body>
<div class="container">
  <header><h1>Port Scanning Arsenal</h1><p class="subtitle">SYN · UDP · Xmas · Zombie · Evasion</p></header>
  <nav><a href="index.html">Home</a><a href="port-scanning.html">Port Scanning</a><a href="web-enumeration.html">Web Enum</a><a href="tools.html">Tools</a></nav>
  <div class="content">
    <h2>SYN Scan (Stealth)</h2>
    <pre>nmap -sS -p- --min-rate 5000 --open -T5 -n -Pn target.com</pre>
    <p><strong>Evasion:</strong> <code>-D RND:50</code> | <code>--spoof-source</code> | <code>proxychains</code></p>
    <a href="index.html" class="btn">Back to Home</a>
  </div>
  <footer><p>© 2025 Batman808026</p></footer>
</div>
<script src="assets/matrix.js"></script>
</body></html>
