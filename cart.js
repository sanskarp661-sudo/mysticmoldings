// Cart page: review pieces, set quantities and personalisation notes, then send the order as an Instagram DM.
const DM_URL = 'https://ig.me/m/mystic_moldings';
const NOTES_KEY = 'mystic-cart-notes';
const DETAILS_KEY = 'mystic-cart-details';
// UPI: leave empty to share payment details in the Instagram DM.
// To show a masked UPI ID with a "Pay with UPI app" button, put it here, e.g. 'name@bank'.
// Note: the site's code (and the GitHub repository, if public) will contain the full ID.
const UPI_ID = '';
const UPI_NAME = 'Mystic Moldings';
const esc = text => String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const read = key => { try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch { return {}; } };
const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
let notes = read(NOTES_KEY);
const form = document.querySelector('#cart-form');

function cartItems() { return products.filter(p => bag[p.id]); }

function renderCart() {
  const items = cartItems();
  const count = items.reduce((sum, p) => sum + bag[p.id], 0);
  document.querySelector('#cart-count').textContent = count ? `(${count})` : '';
  document.querySelector('#summary-pieces').textContent = count;
  document.querySelector('#cart-summary').hidden = !items.length;
  document.querySelector('#cart-clear').hidden = !items.length;
  document.querySelector('.cart-layout').classList.toggle('is-empty', !items.length);
  document.querySelector('#cart-items').innerHTML = items.length ? items.map(p => `
    <article class="cart-item">
      <img src="images/${p.image}" alt="${esc(p.alt)}" loading="lazy">
      <div class="cart-item-body">
        <p class="cart-item-cat">${esc(p.category)}</p>
        <h3>${esc(p.name)}</h3>
        <p class="cart-item-detail">${esc(p.detail)}</p>
        <label class="cart-note">Personalisation <span>(optional)</span><input data-note="${p.id}" maxlength="200" value="${esc(notes[p.id] || '')}" placeholder="Name, initial, date or colour"></label>
        <div class="cart-item-actions">
          <div class="qty" role="group" aria-label="Quantity of ${esc(p.name)}">
            <button type="button" data-qty="${p.id}" data-step="-1" aria-label="Decrease quantity">−</button>
            <span aria-live="polite">${bag[p.id]}</span>
            <button type="button" data-qty="${p.id}" data-step="1" aria-label="Increase quantity">+</button>
          </div>
          <button class="remove-item" type="button" data-cart-remove="${p.id}" aria-label="Remove ${esc(p.name)} from your cart">Remove</button>
        </div>
      </div>
    </article>`).join('') : `
    <div class="cart-empty">
      <p>Your cart is waiting for a little everyday magic.</p>
      <a class="button dark" href="index.html#shop">Explore the collection <span aria-hidden="true">↗</span></a>
    </div>`;
  renderSuggestions(items);
}

function renderSuggestions(items) {
  const inCart = new Set(items.map(p => p.id));
  const categories = new Set(items.map(p => p.category));
  const pool = products.filter(p => !inCart.has(p.id));
  const picks = [...pool.filter(p => categories.has(p.category)), ...pool.filter(p => !categories.has(p.category))].slice(0, 4);
  document.querySelector('#cart-suggest').hidden = !picks.length;
  document.querySelector('#cart-suggestions').innerHTML = picks.map(p => `<article class="product-card"><div class="product-image"><img src="images/${p.image}" alt="${esc(p.alt)}" loading="lazy"><span class="product-tag">${esc(p.tag)}</span><button class="add-bag" data-add="${p.id}" aria-label="Add ${esc(p.name)} to your cart">+</button></div><div class="product-meta"><h3>${esc(p.name)}</h3></div><p>${esc(p.detail)}</p></article>`).join('');
}

function orderText(data) {
  const lines = cartItems().map((p, i) => `${i + 1}. ${p.name} × ${bag[p.id]}${notes[p.id] ? ` (personalise: ${notes[p.id]})` : ''}`);
  return [
    'Hi Mystic Moldings! I’d like to place an order 🌸',
    '',
    ...lines,
    '',
    `Name: ${data.name}`,
    `Phone / WhatsApp: ${data.phone}`,
    `City & PIN: ${data.city}`,
    data.date ? `Needed by: ${data.date}` : null,
    data.gift ? 'Gift wrap: yes, please' : null,
    data.note ? `Note: ${data.note}` : null,
    '',
    'Payment: UPI',
    '',
    'Please confirm prices, availability and delivery. Thank you!'
  ].filter(line => line !== null).join('\n');
}

function formData() {
  const d = new FormData(form);
  return { name: d.get('name').trim(), phone: d.get('phone').trim(), city: d.get('city').trim(), date: d.get('date'), gift: d.get('gift') === 'on', note: d.get('note').trim() };
}
function saveDetails() { const { name, phone, city } = formData(); write(DETAILS_KEY, { name, phone, city }); }
function validate() {
  const err = document.querySelector('#cart-error');
  const missing = [...form.querySelectorAll('[required]')].filter(input => !input.value.trim());
  form.querySelectorAll('[required]').forEach(input => input.setAttribute('aria-invalid', missing.includes(input)));
  if (missing.length) { err.textContent = 'Please add your name, phone number and city so we can reach you.'; missing[0].focus(); return false; }
  if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.value.trim())) { err.textContent = 'Please check your phone number.'; form.phone.setAttribute('aria-invalid', true); form.phone.focus(); return false; }
  err.textContent = ''; return true;
}

document.addEventListener('click', event => {
  const qty = event.target.closest('[data-qty]');
  if (qty) { const id = qty.dataset.qty; bag[id] = Math.max(1, Math.min(99, (bag[id] || 1) + Number(qty.dataset.step))); updateBag(); }
  const remove = event.target.closest('[data-cart-remove]');
  if (remove) { delete bag[remove.dataset.cartRemove]; delete notes[remove.dataset.cartRemove]; write(NOTES_KEY, notes); updateBag(); toast('Removed from your cart.'); }
  if (event.target.closest('#cart-clear') && confirm('Remove all pieces from your cart?')) { Object.keys(bag).forEach(id => delete bag[id]); notes = {}; write(NOTES_KEY, notes); updateBag(); }
  if (event.target.closest('#cart-download')) {
    if (!validate()) return;
    const url = URL.createObjectURL(new Blob([orderText(formData())], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'mystic-moldings-order.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
});
document.addEventListener('input', event => {
  const note = event.target.closest('[data-note]');
  if (note) { notes[note.dataset.note] = note.value.trim(); write(NOTES_KEY, notes); }
  if (event.target.form === form) saveDetails();
});
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!cartItems().length || !validate()) return;
  const text = orderText(formData());
  const status = document.querySelector('#cart-status');
  let copied = false;
  try { await navigator.clipboard.writeText(text); copied = true; } catch {}
  window.open(DM_URL, '_blank', 'noopener');
  status.textContent = copied
    ? 'Your order is copied. Paste it into the Instagram chat that just opened and press send. We’ll reply to confirm.'
    : 'Instagram is opening. Please use “Download order summary” and send us its text in the chat.';
});

const saved = read(DETAILS_KEY);
['name', 'phone', 'city'].forEach(key => { if (saved[key]) form[key].value = saved[key]; });
form.date.min = new Date().toISOString().slice(0, 10);
if (UPI_ID) {
  const [user, bank] = UPI_ID.split('@');
  document.querySelector('#upi-masked').textContent = `${user.slice(0, 2)}${'•'.repeat(Math.max(user.length - 6, 3))}${user.slice(-4)}@${bank}`;
  document.querySelector('#upi-open').href = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&cu=INR`;
  document.querySelector('#upi-copy').addEventListener('click', async () => { try { await navigator.clipboard.writeText(UPI_ID); toast('UPI ID copied.'); } catch { toast('Could not copy. Please type it in your UPI app.'); } });
  document.querySelector('#upi-pay-step').textContent = 'Pay the confirmed amount using the UPI details below and share the screenshot in the DM, and we start making your piece.';
  document.querySelector('#upi-pay').hidden = false;
}
document.addEventListener('cartchange', renderCart);
renderCart();
