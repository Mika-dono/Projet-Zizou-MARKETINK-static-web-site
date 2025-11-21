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
