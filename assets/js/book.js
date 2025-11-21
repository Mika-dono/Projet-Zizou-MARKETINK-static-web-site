<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
=======
>>>>>>> theirs
=======
>>>>>>> theirs
// Dynamic book that reads images from assets/images/manifest.json
(async () => {
  try {
    const resp = await fetch('assets/images/manifest.json');
    if (!resp.ok) throw new Error('Manifest not found');
    const names = await resp.json();
<<<<<<< ours
<<<<<<< ours
    const images = names.map((n) => `assets/images/${n}`);
=======
    const images = names.map(n => `assets/images/${n}`);
>>>>>>> theirs
=======
    const images = names.map(n => `assets/images/${n}`);
>>>>>>> theirs

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
<<<<<<< ours
<<<<<<< ours
        document.querySelectorAll('.book-thumb').forEach((el) => el.classList.remove('active'));
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
=======
// Carnet animé : pages avec texte + image
window.addEventListener('DOMContentLoaded', () => {
  const spreads = [
    {
      meta: 'Origines',
      title: 'Atelier de Saint-Germain',
      text: 'Une table de marbre, du matcha de Kyoto et un chef franco-japonais : le rituel fondateur date de 1996.',
      image: 'assets/images/hero-banner.jpg'
    },
    {
      meta: 'Signature',
      title: 'Matcha & cacao',
      text: 'Assemblage de thés (matcha, hojicha) et de cacaos grands crus, tempérés chaque matin par une équipe réduite.',
      image: 'assets/images/gallery-matcha.jpg'
    },
    {
      meta: 'Hospitalité',
      title: 'Dégustations nomades',
      text: 'Des salons privés à Tokyo aux collaborations palace à Paris : le cérémonial voyage avec la même exigence.',
      image: 'assets/images/gallery-tasting.jpg'
    },
    {
      meta: 'Collaborations',
      title: 'Capsules & couture',
      text: 'Éditions limitées pour la haute couture, finitions laquées ou or chaud, et accords yuzu ou sakura sur mesure.',
      image: 'assets/images/gallery-packaging.jpg'
    },
    {
      meta: 'Sourcing',
      title: 'Raretés responsables',
      text: 'Cacaos tracés, matcha bio, vanille de Madagascar et manuka : chaque batch est produit en petite série.',
      image: 'assets/images/gallery-atelier.jpg'
    },
    {
      meta: 'Transmission',
      title: 'Main et mémoire',
      text: 'Formation interne, gestes précis, bien-être des équipes et cross-culture Paris/Kyoto pour préserver le savoir-faire.',
      image: 'assets/images/history-atelier.jpg'
>>>>>>> theirs
    }
  ];

  const perPage = 2;
  let pageIndex = 0;
  const totalPages = Math.max(1, Math.ceil(spreads.length / perPage));

  const bookShell = document.querySelector('[data-book]');
  const bookEl = bookShell ? bookShell.querySelector('.book') : null;
  const leftPage = bookShell ? bookShell.querySelector('.page.left .page-inner') : null;
  const rightPage = bookShell ? bookShell.querySelector('.page.right .page-inner') : null;
  const pageLabel = document.getElementById('book-page');
  const pagesLabel = document.getElementById('book-pages');
  const prevBtn = document.querySelector('.book-control.prev');
  const nextBtn = document.querySelector('.book-control.next');
  const thumbsEl = document.getElementById('book-thumbs');

  if (!bookShell || !bookEl || !leftPage || !rightPage || !pageLabel || !pagesLabel || !prevBtn || !nextBtn || !thumbsEl) return;

  pagesLabel.textContent = totalPages;

  const applyContent = (el, data) => {
    const meta = el.querySelector('.page-meta');
    const title = el.querySelector('.page-title');
    const text = el.querySelector('.page-text');
    if (!data) {
      el.style.backgroundImage = '';
      meta.textContent = '';
      title.textContent = '';
      text.textContent = '';
      el.classList.add('is-empty');
      return;
    }
    el.classList.remove('is-empty');
    el.style.backgroundImage = data.image ? `url(${data.image})` : '';
    meta.textContent = data.meta || '';
    title.textContent = data.title || '';
    text.textContent = data.text || '';
  };

  const render = () => {
    pageLabel.textContent = pageIndex + 1;
    const i = pageIndex * perPage;
    applyContent(leftPage, spreads[i]);
    applyContent(rightPage, spreads[i + 1]);

    prevBtn.disabled = pageIndex === 0;
    nextBtn.disabled = pageIndex >= totalPages - 1;

    document.querySelectorAll('.book-thumb').forEach((el, idx) => {
      el.classList.toggle('active', Math.floor(idx / perPage) === pageIndex);
=======
=======
>>>>>>> theirs
        document.querySelectorAll('.book-thumb').forEach(el => el.classList.remove('active'));
        t.classList.add('active');
      });
      thumbsEl.appendChild(t);
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
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

<<<<<<< ours
<<<<<<< ours
  prevBtn.addEventListener('click', () => {
    if (pageIndex > 0) pageIndex -= 1;
    render();
<<<<<<< ours
    const firstThumb = document.querySelector('.book-thumb');
    if (firstThumb) firstThumb.classList.add('active');
  } catch (err) {
    console.warn('Book catalog: failed to load manifest', err);
  }
})();

// Interactions: flip card, modal gallery, navigation toggle, form feedback, timeline carousel
window.addEventListener('DOMContentLoaded', () => {
  // Flip card logic (hero card)
  document.querySelectorAll('[data-flip]').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('is-open');
    });
  }

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
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const fullSrc = thumb.getAttribute('data-full') || thumb.getAttribute('src');
      openModal(fullSrc, thumb.getAttribute('alt') || '');
    });
  });

  const thumbModalTrigger = document.getElementById('open-thumbs-modal');
  const bookThumbs = document.getElementById('book-thumbs');
  if (thumbModalTrigger && bookThumbs) {
    thumbModalTrigger.addEventListener('click', () => {
      bookThumbs.scrollIntoView({ behavior: 'smooth', block: 'center' });
      bookThumbs.classList.add('is-highlighted');
      setTimeout(() => bookThumbs.classList.remove('is-highlighted'), 1200);
    });
  }

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
  thumbs.forEach((thumb) => {
    const fullSrc = thumb.getAttribute('data-full');
    if (!fullSrc) return;

    const preload = () => {
      const img = new Image();
      img.src = fullSrc;
    };

    thumb.addEventListener('mouseenter', preload, { once: true });
    thumb.addEventListener('focus', preload, { once: true });
  });

  // Timeline carousel
  const timelineCards = Array.from(document.querySelectorAll('.timeline-card'));
  let activeIndex = 0;
  const updateTimeline = (direction = 1) => {
    if (!timelineCards.length) return;
    activeIndex = (activeIndex + direction + timelineCards.length) % timelineCards.length;
    timelineCards.forEach((card, idx) => {
      card.classList.toggle('active', idx === activeIndex);
      card.style.transform = `translateX(${(idx - activeIndex) * 12}px)`;
    });
  };

  document.querySelectorAll('.timeline-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = btn.getAttribute('data-direction') === 'prev' ? -1 : 1;
      updateTimeline(dir);
    });
  });

  setInterval(() => updateTimeline(1), 4500);
  updateTimeline(0);

  // Contact form feedback (static validation)
  const tastingForm = document.getElementById('tasting-form');
  const status = document.querySelector('.form-status');
  if (tastingForm && status) {
    tastingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(tastingForm);
      const name = formData.get('name');
      const email = formData.get('email');
      if (!name || !email) {
        status.textContent = 'Please provide your name and email to confirm your request.';
        status.style.color = '#c95151';
        return;
      }
      status.textContent = 'Merci! Our concierge will confirm within 24 hours.';
      status.style.color = '#2f7a85';
      tastingForm.reset();
    });
  }

  // Newsletter micro-interaction
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterStatus = document.querySelector('.newsletter-status');
  if (newsletterForm && newsletterEmail && newsletterStatus) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!newsletterEmail.value || !newsletterEmail.validity.valid) {
        newsletterStatus.textContent = 'Email requis.';
        newsletterStatus.style.color = '#c95151';
        return;
      }
      newsletterStatus.textContent = 'Inscription confirmée.';
      newsletterStatus.style.color = '#9fc9ce';
      newsletterEmail.value = '';
    });
  }
=======
  });
=======
    nextBtn.addEventListener('click', () => {
      if (pageIndex < totalPages - 1) pageIndex += 1;
      render();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });
>>>>>>> theirs

=======
    nextBtn.addEventListener('click', () => {
      if (pageIndex < totalPages - 1) pageIndex += 1;
      render();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });

>>>>>>> theirs
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

<<<<<<< ours
<<<<<<< ours
  render();
  const firstThumb = document.querySelector('.book-thumb');
  if (firstThumb) firstThumb.classList.add('active');
>>>>>>> theirs
=======
=======
>>>>>>> theirs
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
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
});
