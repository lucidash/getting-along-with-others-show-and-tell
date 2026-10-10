(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const indicator = document.getElementById('indicator');
  const fullscreen = document.getElementById('fullscreen');
  let current = 0;

  function showSlide(index, updateHash = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    indicator.textContent = `${current + 1} / ${slides.length}`;
    if (updateHash) history.replaceState(null, '', `#slide-${current + 1}`);
    window.scrollTo(0, 0);
  }

  function readHash() {
    const match = location.hash.match(/^#slide-([1-8])$/);
    showSlide(match ? Number(match[1]) - 1 : 0, false);
  }

  previous.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  window.addEventListener('hashchange', readHash);
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if ((event.key === ' ' || event.key === 'Enter') && event.target.closest('a, button')) return;
    let index;
    if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') index = current + 1;
    else if (event.key === 'ArrowLeft' || event.key === 'PageUp') index = current - 1;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = slides.length - 1;
    else if (/^[1-8]$/.test(event.key)) index = Number(event.key) - 1;
    if (index !== undefined) { event.preventDefault(); showSlide(index); }
  });

  let touchStart;
  const presentation = document.getElementById('presentation');
  presentation.addEventListener('touchstart', event => {
    if (event.touches.length === 1) touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    else touchStart = undefined;
  }, { passive: true });
  presentation.addEventListener('touchend', event => {
    if (!touchStart || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) showSlide(current + (dx < 0 ? 1 : -1));
    touchStart = undefined;
  }, { passive: true });
  presentation.addEventListener('touchcancel', () => { touchStart = undefined; }, { passive: true });

  fullscreen.hidden = !document.documentElement.requestFullscreen;
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { fullscreen.textContent = '전체 화면 재시도'; }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? '전체 화면 종료' : '전체 화면';
  });
  readHash();
})();
