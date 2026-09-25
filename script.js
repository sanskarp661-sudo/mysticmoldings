const products = [
  { id: 'earrings', name: 'Petal drop earrings', category: 'Jewellery', detail: 'Dried florals · Gold-tone finish', price: 650, image: 'earrings.svg', alt: 'Gold-edged resin drop earrings with pressed pink flowers', tag: 'A LITTLE EVERYDAY MAGIC' },
  { id: 'clock', name: 'The botanical clock', category: 'Clocks', detail: 'Botanical inspired · Made by hand', price: 1850, image: 'clock.svg', alt: 'Round resin wall clock ringed with preserved flowers and gold numerals', tag: 'FOR YOUR HAPPY PLACE' },
  { id: 'desk', name: 'Bloom pen stand', category: 'Desk & décor', detail: 'A floral touch for your workspace', price: 850, image: 'pen-stand.svg', alt: 'Hexagonal resin pen stand with pressed flowers, holding pens', tag: 'DESK-SIDE DELIGHT' },
  { id: 'table', name: 'The meadow side table', category: 'Tables', detail: 'Nature inspired · Statement piece', price: 6500, image: 'side-table.svg', alt: 'Round resin side table with a meadow of flowers set in its top, on gold legs', tag: 'A CORNER OF CALM' }
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
// Behind-the-craft films: attach each source only as it nears the viewport, and pause off-screen films to save data and battery.
const films = [...document.querySelectorAll('.craft-film video')];
if (films.length) {
  const toggle = document.querySelector('.craft-films-toggle');
  let paused = false;
  const visible = new Set();
  const load = video => { const source = video.querySelector('source[data-src]'); if (!source) return; source.src = source.dataset.src; source.removeAttribute('data-src'); video.preload = 'metadata'; video.load(); };
  const sync = video => { if (!paused && visible.has(video)) video.play().catch(() => {}); else video.pause(); };
  const setPaused = value => { paused = value; toggle.setAttribute('aria-pressed', paused); toggle.firstChild.textContent = paused ? 'Play the films ' : 'Pause the films '; toggle.lastElementChild.textContent = paused ? '▶' : '❙❙'; films.forEach(sync); };
  if ('IntersectionObserver' in window) {
    const nearby = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { load(entry.target); nearby.unobserve(entry.target); } }), { rootMargin: '300px 0px' });
    const onScreen = new IntersectionObserver(entries => entries.forEach(entry => { entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target); sync(entry.target); }), { threshold: 0.2 });
    films.forEach(video => { video.autoplay = false; nearby.observe(video); onScreen.observe(video); });
  } else films.forEach(video => { load(video); visible.add(video); });
  toggle.hidden = false;
  toggle.addEventListener('click', () => setPaused(!paused));
  setPaused(paused);
}
