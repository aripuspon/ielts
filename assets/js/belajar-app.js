document.addEventListener('DOMContentLoaded', () => {
  // Image Hotspot Logic
  const pins = document.querySelectorAll('.bl-shot__pin');
  const legendItems = document.querySelectorAll('.bl-shot__item');

  function clearActiveStates() {
    pins.forEach(p => p.classList.remove('is-active'));
    legendItems.forEach(l => l.classList.remove('is-active'));
  }

  // Click on image pin
  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      const pinId = e.target.getAttribute('data-pin');
      clearActiveStates();
      e.target.classList.add('is-active');
      document.querySelector(`.bl-shot__item[data-pin="${pinId}"]`).classList.add('is-active');
    });
  });

  // Click on legend item
  legendItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const pinId = e.currentTarget.getAttribute('data-pin');
      clearActiveStates();
      e.currentTarget.classList.add('is-active');
      document.querySelector(`.bl-shot__pin[data-pin="${pinId}"]`).classList.add('is-active');
    });
  });
});
