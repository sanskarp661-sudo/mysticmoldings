const products = [
  { id: 'evil-eye', name: 'Evil-eye pendant set', category: 'Jewellery', detail: 'Pendant & studs · Gold-tone finish', price: 899, image: 'photos/evil-eye-set.webp', alt: 'A gold evil-eye resin pendant with matching stud earrings', tag: 'A LITTLE EVERYDAY MAGIC' },
  { id: 'earrings', name: 'Gold-flake drop earrings', category: 'Jewellery', detail: 'Gold flakes · Crystal studs', price: 650, image: 'photos/gold-flake-earrings.webp', alt: 'Round resin drop earrings filled with gold flakes, with crystal studs', tag: 'MADE TO SPARKLE' },
  { id: 'daisy-necklace', name: 'Daisy locket necklace', category: 'Jewellery', detail: 'Real pressed daisy · Gold-tone chain', price: 799, image: 'photos/daisy-necklace.webp', alt: 'A gold pendant holding a pressed daisy in clear resin', tag: 'A FLOWER, FOREVER' },
  { id: 'hair-clip', name: 'Sunflower “hope” clip', category: 'Accessories', detail: 'Pressed flowers · Ocean-blue resin', price: 449, image: 'photos/hope-hair-clip.webp', alt: 'An ocean-blue resin hair clip with pressed yellow flowers and the word hope', tag: 'A LITTLE HOPE' },
  { id: 'initial', name: 'Initial keychain', category: 'Keychains', detail: 'Your letter · Personalised', price: 349, image: 'photos/initial-keychain.webp', alt: 'An ocean-blue resin keychain shaped as the letter B', tag: 'MADE JUST FOR YOU' },
  { id: 'ocean-heart', name: 'Ocean heart keychain', category: 'Keychains', detail: 'Seashell charms · Initial inside', price: 399, image: 'photos/ocean-heart-keychain.webp', alt: 'A blue heart-shaped resin keychain with an initial and seashell charms', tag: 'A PIECE OF THE SEA' },
  { id: 'vintage-key', name: 'Vintage key keychain', category: 'Keychains', detail: 'Pressed bloom · Antique gold', price: 449, image: 'photos/vintage-key-keychain.webp', alt: 'An antique-gold key keychain holding a pink pressed flower in resin', tag: 'THE KEY TO JOY' },
  { id: 'wedding-frame', name: 'Wedding heart frame', category: 'Keepsakes', detail: 'Your photo & flowers · Made to order', price: 2499, image: 'photos/wedding-heart-frame.webp', alt: 'A heart-shaped resin frame holding a wedding photograph and preserved petals', tag: 'FROM “I DO” TO ALWAYS' }
];
const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
const imageUrl = product => `images/${product.image}`;
let bag = {};
try { const saved = JSON.parse(localStorage.getItem('mystic-bag') || '{}'); for (const product of products) { if (Number.isInteger(saved?.[product.id]) && saved[product.id] > 0) bag[product.id] = Math.min(saved[product.id], 99); } } catch {}
function renderProducts(filter = 'All') {
  document.querySelector('#products').innerHTML = products.filter(p => filter === 'All' || p.category === filter).map(p => `<article class="product-card"><div class="product-image"><img src="${imageUrl(p)}" alt="${p.alt}" loading="lazy"><span class="product-tag">${p.tag}</span><button class="add-bag" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></div><div class="product-meta"><h3>${p.name}</h3><span>${money(p.price)}</span></div><p>${p.detail}</p></article>`).join('');
}
function updateBag() {
  const count = Object.values(bag).reduce((a,b) => a+b,0);
  document.querySelector('#bag-count').textContent = count;
  document.querySelector('#bag-title-count').textContent = `(${count})`;
  const items = products.filter(p => bag[p.id]);
  document.querySelector('#bag-items').innerHTML = items.length ? items.map(p => `<div class="bag-item"><img src="${imageUrl(p)}" alt="${p.name}"><div class="bag-item-info"><h3>${p.name}</h3><p>${bag[p.id]} × ${money(p.price)}</p></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name} from bag">Remove</button></div>`).join('') : '<p class="empty-bag">Your bag is waiting for a little everyday magic. Explore the collection and find something you love.</p>';
  document.querySelector('#bag-total').innerHTML = items.length ? `<span>Subtotal</span><strong>${money(items.reduce((sum,p) => sum + p.price * bag[p.id], 0))}</strong>` : '';
  try { localStorage.setItem('mystic-bag', JSON.stringify(bag)); } catch {}
}
let toastTimer;
function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2800); }
document.addEventListener('click', event => {
  const filter = event.target.closest('[data-filter]');
  if (filter) { document.querySelectorAll('[data-filter]').forEach(button => { const active = button === filter; button.classList.toggle('active', active); button.setAttribute('aria-pressed', active); }); renderProducts(filter.dataset.filter); }
  const add = event.target.closest('[data-add]');
  if (add) { bag[add.dataset.add] = Math.min((bag[add.dataset.add] || 0) + 1, 99); updateBag(); toast('A little lovely, added to your bag.'); }
  const remove = event.target.closest('[data-remove]');
  if (remove) { delete bag[remove.dataset.remove]; updateBag(); }
  const custom = event.target.closest('[data-keepsake]');
  if (custom) { document.querySelector('[name="keepsake"]').value = custom.dataset.keepsake; document.querySelector('#form-status').textContent = ''; document.querySelector('#custom-dialog').showModal(); }
  const close = event.target.closest('[data-close]');
  if (close) close.closest('dialog').close();
});
document.querySelector('#open-bag').addEventListener('click', () => document.querySelector('#bag-dialog').showModal());
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } }));
document.querySelector('#custom-form')?.addEventListener('submit', event => {
  event.preventDefault(); const data = new FormData(event.target);
  const text = `MYSTIC MOLDINGS — PERSONALISATION ENQUIRY\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nKeepsake: ${data.get('keepsake')}\n\nMy idea:\n${data.get('story') || 'To be discussed.'}\n\nThis is a personal draft. It has not been sent to Mystic Moldings.`;
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = 'my-mystic-moldings-enquiry.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#form-status').textContent = 'Your enquiry file is ready. Copy its contents into a message to @mystic_moldings on Instagram. Nothing has been sent automatically.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', button.classList.contains('active')));
if (document.querySelector('#products')) renderProducts();
updateBag();
// Behind-the-craft films: attach each source only as it nears the viewport, play while on screen, and let visitors tap to pause or play.
const films = [...document.querySelectorAll('.craft-film')].map(card => ({ card, video: card.querySelector('video'), button: card.querySelector('.film-toggle'), label: card.querySelector('h3').textContent.toLowerCase(), onScreen: false, held: false }));
if (films.length) {
  const load = film => { const source = film.video.querySelector('source[data-src]'); if (!source) return; source.src = source.dataset.src; source.removeAttribute('data-src'); film.video.load(); };
  const show = film => { const paused = film.video.paused; film.card.classList.toggle('is-paused', paused); film.button.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} the ${film.label} film`); };
  const sync = film => { if (film.onScreen && !film.held) film.video.play().catch(() => show(film)); else film.video.pause(); };
  films.forEach(film => {
    ['play', 'pause'].forEach(type => film.video.addEventListener(type, () => show(film)));
    const toggle = () => { load(film); if (film.video.paused) { film.held = false; film.video.play().catch(() => show(film)); } else { film.held = true; film.video.pause(); } };
    film.button.addEventListener('click', toggle);
    film.video.addEventListener('click', toggle);
    show(film);
  });
  if ('IntersectionObserver' in window) {
    const byVideo = new Map(films.map(film => [film.video, film]));
    const nearby = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { load(byVideo.get(entry.target)); nearby.unobserve(entry.target); } }), { rootMargin: '300px' });
    const onScreen = new IntersectionObserver(entries => entries.forEach(entry => { const film = byVideo.get(entry.target); film.onScreen = entry.isIntersecting; sync(film); }), { threshold: 0.3 });
    films.forEach(film => { film.video.autoplay = false; nearby.observe(film.video); onScreen.observe(film.video); });
  } else films.forEach(film => { load(film); film.onScreen = true; sync(film); });
}
