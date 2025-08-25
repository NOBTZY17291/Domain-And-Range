<script>
// Improved Browser Detection Script
function checkBrowser() {
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);
  const isChrome = /Chrome/.test(userAgent) && !/Edg/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  const isMobile = isIOS || isAndroid;
  
  if (isMobile && !isChrome && !isSafari) {
    // Show alert after a short delay to ensure page is loaded
    setTimeout(function() {
      if (confirm("For the best experience, we recommend opening this page in Chrome or Safari. Click OK to continue anyway, or Cancel to copy the link.")) {
        // User clicked OK, continue with desktop enforcement
        enforceDesktopSite();
      } else {
        // User clicked Cancel, offer to copy URL
        copyUrlToClipboard();
      }
    }, 1000);
  } else {
    // Already on Chrome/Safari or desktop, enforce desktop mode
    enforceDesktopSite();
  }
}

function copyUrlToClipboard() {
  const url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard! You can now paste it in Chrome or Safari.");
    }).catch(err => {
      alert("Please manually copy this URL: " + url);
    });
  } else {
    // Fallback for browsers that don't support clipboard API
    prompt("Please copy this URL and open in Chrome or Safari:", url);
  }
}

// Your Desktop Site Enforcer Script
function enforceDesktopSite() {
  // Set viewport to a large fixed width to simulate desktop
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute('content', 'width=1200, initial-scale=1');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=1200, initial-scale=1';
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
  
  // Additional desktop-enforcing techniques
  document.body.style.minWidth = '1000px';
  
  // Check if we're on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    console.log('Desktop mode enforced on mobile device');
  }
}

// Run when document is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkBrowser);
} else {
  checkBrowser();
}

// Also run on window resize to maintain desktop view
window.addEventListener('resize', function() {
  enforceDesktopSite();
});

// MathJax Configuration
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['$$', '$$']]
  }
};
</script>
