  // Show alert
  window.alert("Please open in browser(Safari/Chrome) for better quality!!");

  function enforceDesktopSite() {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=1200, initial-scale=1');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=1200, initial-scale=1';
      document.head.appendChild(meta);
    }
    document.body.style.minWidth = '1200px';

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      console.log('Desktop mode enforced on mobile device');
    }
  }

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enforceDesktopSite);
  } else {
    enforceDesktopSite();
  }

  // Re-apply on resize
  window.addEventListener('resize', enforceDesktopSite);

  // Auto open new window at 1200x1200
  window.open(
    location.href,
    "_blank",
    "width=1200,height=1200,resizable=yes,scrollbars=yes"
  );
   // Reapply font size after typeset or resize
    function enforceMathFontSize() {
      document.querySelectorAll('.mjx-container').forEach(el => {
        el.style.fontSize = "35px";
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      enforceMathFontSize();
    });

    window.addEventListener("resize", () => {
      enforceMathFontSize();
    });

    // Hook into MathJax rendering cycle
    if (window.MathJax) {
      MathJax.startup.promise.then(() => {
        enforceMathFontSize();
      });
    }
