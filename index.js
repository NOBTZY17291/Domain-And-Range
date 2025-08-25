 window.alert("please open in browser for better quality");
    function enforceDesktopSite() {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=1200, initial-scale=1');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=1200, initial-scale=1';
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
      document.body.style.minWidth = '1000px';
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        console.log('Desktop mode enforced on mobile device');
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enforceDesktopSite);
    } else {
      enforceDesktopSite();
    }
    window.addEventListener('resize', function() {
      enforceDesktopSite();
    });
   window.MathJax = {
    tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['$$', '$$']]
  }};
