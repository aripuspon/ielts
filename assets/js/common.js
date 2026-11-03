document.addEventListener('DOMContentLoaded', () => {
  const langSwitches = document.querySelectorAll('.lang-sw a');
  
  langSwitches.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = e.target.getAttribute('data-lang-link');
      
      if (targetLang === 'en') {
        // Swap to English instantly
        document.querySelectorAll('[data-en]').forEach(el => {
          if (!el.hasAttribute('data-original-id')) {
            el.setAttribute('data-original-id', el.innerHTML);
          }
          el.innerHTML = el.getAttribute('data-en');
        });
      } else {
        // Swap back to Indonesian
        document.querySelectorAll('[data-original-id]').forEach(el => {
          el.innerHTML = el.getAttribute('data-original-id');
        });
      }
    });
  });
});
