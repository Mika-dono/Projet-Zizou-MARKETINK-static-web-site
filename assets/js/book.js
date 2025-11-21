// Dynamic book that reads images from assets/images/manifest.json
(async () => {
  try {
    const resp = await fetch('assets/images/manifest.json');
    if (!resp.ok) throw new Error('Manifest not found');
    const names = await resp.json();
    const images = names.map(n => `assets/images/${n}`);

    const perPage = 2;
    let pageIndex = 0;
    const totalPages = Math.max(1, Math.ceil(images.length / perPage));

    const pageLabel = document.getElementById('book-page');
    const pagesLabel = document.getElementById('book-pages');
    const leftImg = document.querySelector('.page.left img');
    const rightImg = document.querySelector('.page.right img');
    const prevBtn = document.querySelector('.book-control.prev');
    const nextBtn = document.querySelector('.book-control.next');
    const bookEl = document.querySelector('.book');
    const thumbsEl = document.getElementById('book-thumbs');

    if (!pageLabel || !pagesLabel || !leftImg || !rightImg || !prevBtn || !nextBtn || !bookEl || !thumbsEl) return;

    pagesLabel.textContent = totalPages;

    images.forEach((src, idx) => {
      const t = document.createElement('button');
      t.className = 'book-thumb';
      t.setAttribute('aria-label', `Aller à l'image ${idx + 1}`);
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Vignette ${idx + 1}`;
      t.appendChild(img);
      t.addEventListener('click', () => {
        pageIndex = Math.floor(idx / perPage);
        render();
        document.querySelectorAll('.book-thumb').forEach(el => el.classList.remove('active'));
        t.classList.add('active');
      });
      thumbsEl.appendChild(t);
    });

    function render() {
      pageLabel.textContent = pageIndex + 1;
      const i = pageIndex * perPage;
      leftImg.src = images[i] || '';
      rightImg.src = images[i + 1] || '';
      leftImg.alt = images[i] ? `Page ${i + 1}` : '';
      rightImg.alt = images[i + 1] ? `Page ${i + 2}` : '';

      prevBtn.disabled = pageIndex === 0;
      nextBtn.disabled = pageIndex >= totalPages - 1;
      prevBtn.style.opacity = prevBtn.disabled ? '0.4' : '1';
      nextBtn.style.opacity = nextBtn.disabled ? '0.4' : '1';

      document.querySelectorAll('.book-thumb').forEach((el, idx) => {
        el.classList.toggle('active', Math.floor(idx / perPage) === pageIndex);
      });

      if (pageIndex > 0) bookEl.classList.add('open');
      else bookEl.classList.remove('open');
    }

    prevBtn.addEventListener('click', () => {
      if (pageIndex > 0) pageIndex -= 1;
      render();
    });

    nextBtn.addEventListener('click', () => {
      if (pageIndex < totalPages - 1) pageIndex += 1;
      render();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });

    render();
    const firstThumb = document.querySelector('.book-thumb');
    if (firstThumb) firstThumb.classList.add('active');
  } catch (err) {
    console.warn('Book catalog: failed to load manifest', err);
  }
})();

// Interactions: flip card in hero, modal gallery, and thumbnail preloading
window.addEventListener('DOMContentLoaded', () => {
  // Flip card logic (hero card)
  document.querySelectorAll('[data-flip]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Modal gallery logic
  const modal = document.getElementById('imageModal');
  const modalImg = modal ? modal.querySelector('.image-modal-content') : null;
  const modalCaption = modal ? modal.querySelector('.image-modal-caption') : null;
  const modalCloseBtn = modal ? modal.querySelector('.image-modal-close') : null;

  function openModal(src, alt) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = alt || '';
    if (modalCaption) {
      modalCaption.textContent = alt || '';
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  const thumbs = document.querySelectorAll('.gallery-thumb');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const fullSrc = thumb.getAttribute('data-full') || thumb.getAttribute('src');
      openModal(fullSrc, thumb.getAttribute('alt') || '');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // Preload full images on hover/focus of thumbnails
  thumbs.forEach(thumb => {
    const fullSrc = thumb.getAttribute('data-full');
    if (!fullSrc) return;

    const preload = () => {
      const img = new Image();
      img.src = fullSrc;
    };

    thumb.addEventListener('mouseenter', preload, { once: true });
    thumb.addEventListener('focus', preload, { once: true });
  });
});
