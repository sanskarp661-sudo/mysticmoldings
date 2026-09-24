const products = [
  { id: 'earrings', name: 'Petal drop earrings', category: 'Jewellery', detail: 'Dried florals · Gold-tone finish', price: 650, image: 'photo-1630019852942-f89202989a4d', tag: 'A LITTLE EVERYDAY MAGIC' },
  { id: 'clock', name: 'The botanical clock', category: 'Clocks', detail: 'Botanical inspired · Made by hand', price: 1850, image: 'photo-1563861826100-9cb868fdbe1c', tag: 'FOR YOUR HAPPY PLACE' },
  { id: 'desk', name: 'Bloom pen stand', category: 'Desk & décor', detail: 'A floral touch for your workspace', price: 850, image: 'photo-1455390582262-044cdead277a', tag: 'DESK-SIDE DELIGHT' },
  { id: 'table', name: 'The meadow side table', category: 'Tables', detail: 'Nature inspired · Statement piece', price: 6500, image: 'photo-1499933374294-4584851497cc', tag: 'A CORNER OF CALM' }
];
const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
const imageUrl = (product, width = 700) => `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=${width}&q=80`;
let bag = {};
try { const saved = JSON.parse(localStorage.getItem('mystic-bag') || '{}'); for (const product of products) { if (Number.isInteger(saved?.[product.id]) && saved[product.id] > 0) bag[product.id] = Math.min(saved[product.id], 99); } } catch {}
function renderProducts(filter = 'All') {
  document.querySelector('#products').innerHTML = products.filter(p => filter === 'All' || p.category === filter).map(p => `<article class="product-card"><div class="product-image"><img src="${imageUrl(p)}" alt="Illustrative ${p.category.toLowerCase()} collection photograph" loading="lazy"><span class="product-tag">${p.tag}</span><button class="add-bag" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></div><div class="product-meta"><h3>${p.name}</h3><span>${money(p.price)}</span></div><p>${p.detail}</p></article>`).join('');
}
function updateBag() {
  const count = Object.values(bag).reduce((a,b) => a+b,0);
  document.querySelector('#bag-count').textContent = count;
  document.querySelector('#bag-title-count').textContent = `(${count})`;
  const items = products.filter(p => bag[p.id]);
  document.querySelector('#bag-items').innerHTML = items.length ? items.map(p => `<div class="bag-item"><img src="${imageUrl(p, 160)}" alt="${p.name}"><div class="bag-item-info"><h3>${p.name}</h3><p>${bag[p.id]} × ${money(p.price)}</p></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name} from bag">Remove</button></div>`).join('') : '<p class="empty-bag">Your bag is waiting for a little everyday magic. Explore the collection and find something you love.</p>';
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
