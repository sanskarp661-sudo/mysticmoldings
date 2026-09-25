const products = [
  {"id": "evil-eye", "name": "Evil-eye pendant set", "category": "Necklaces", "detail": "Pendant & studs · Gold-tone finish", "image": "photos/evil-eye-set.webp", "alt": "A gold evil-eye resin pendant with matching stud earrings", "tag": "A little everyday magic"},
  {"id": "pink-jhumkas", "name": "Pink bloom jhumkas", "category": "Earrings", "detail": "Pressed petals · Pearl & bell drops", "image": "photos/pink-bloom-jhumkas.webp", "image2": "photos/pink-bloom-jhumkas-2.webp", "alt": "Pink resin jhumka earrings with pressed petals, pearls and purple bell drops", "tag": "Festive favourite"},
  {"id": "oxidised-jhumkas", "name": "Oxidised ruby jhumkas", "category": "Earrings", "detail": "Ruby-red resin · Oxidised silver bells", "image": "photos/oxidised-ruby-jhumkas.webp", "image2": "photos/oxidised-ruby-jhumkas-2.webp", "alt": "Oxidised silver jhumka earrings with ruby-red resin centres", "tag": "Everyday ethnic"},
  {"id": "ruby-chandbalis", "name": "Ruby bloom chandbalis", "category": "Earrings", "detail": "Real rose petals · Kundan & pearl drops", "image": "photos/ruby-chandbali-earrings.webp", "alt": "Chandbali earrings made with real red rose petals in resin, framed in kundan crystals with pearl drops", "tag": "Bridal edit", "pos": "50% 55%"},
  {"id": "daisy-chandbalis", "name": "Daisy kundan chandbalis", "category": "Earrings", "detail": "Pressed daisies on black · Kundan & pearls", "image": "photos/daisy-kundan-chandbalis.webp", "alt": "Chandbali earrings with pressed white daisies on black resin, kundan stones and pearl drops", "tag": "Daisy, dressed up"},
  {"id": "tassel-danglers", "name": "Ruby tassel danglers", "category": "Earrings", "detail": "Ruby-red resin · Oxidised chain tassels", "image": "photos/ruby-tassel-danglers.webp", "alt": "Ruby-red resin earrings with long oxidised chain tassels on white silk", "tag": "Made to move"},
  {"id": "blue-lace-earrings", "name": "Blue lace kundan earrings", "category": "Earrings", "detail": "Pressed Queen Anne’s lace · Blue bead drops", "image": "photos/blue-lace-kundan-earrings-card.webp", "alt": "Blue resin earrings holding white Queen Anne’s lace, framed in kundan with blue bead drops", "tag": "Something blue"},
  {"id": "daisy-necklace", "name": "Daisy locket necklace", "category": "Necklaces", "detail": "Real pressed daisy · Gold-tone chain", "image": "photos/daisy-necklace.webp", "alt": "A gold pendant holding a pressed daisy in clear resin", "tag": "A flower, forever", "pos": "50% 60%"},
  {"id": "red-blossom-locket", "name": "Red blossom locket", "category": "Necklaces", "detail": "Tiny red blooms · Antique-gold chain", "image": "photos/red-blossom-locket.webp", "alt": "A small round resin locket with tiny red and white pressed flowers, resting on an open book", "tag": "A little romance", "pos": "45% 50%"},
  {"id": "earrings", "name": "Gold-flake drop earrings", "category": "Earrings", "detail": "Gold flakes · Crystal studs", "image": "photos/gold-flake-earrings.webp", "alt": "Round resin drop earrings filled with gold flakes, with crystal studs", "tag": "Made to sparkle", "pos": "50% 45%"},
  {"id": "butterfly-pendant", "name": "Blue butterfly pendant", "category": "Necklaces", "detail": "Ocean-blue resin · Gold outline", "image": "photos/butterfly-pendant.webp", "alt": "A blue resin butterfly pendant with a gold outline on black velvet", "tag": "Light as a wing"},
  {"id": "ruby-butterfly", "name": "Ruby butterfly pendant", "category": "Necklaces", "detail": "Rose-red resin · Antique-gold wings", "image": "photos/ruby-butterfly-pendant.webp", "alt": "A rose-red resin butterfly pendant on a wooden board beside pink petals", "tag": "Flutter & glow", "pos": "50% 38%"},
  {"id": "maple-pendant", "name": "Maple leaf pendant", "category": "Necklaces", "detail": "Real pressed leaf · Gold-tone chain", "image": "photos/maple-leaf-pendant.webp", "alt": "A real pink maple leaf preserved in resin as a pendant on a gold chain", "tag": "Autumn, kept", "pos": "60% 50%"},
  {"id": "teal-hearts", "name": "Teal heart earrings", "category": "Earrings", "detail": "Shimmer resin · Antique-gold studs", "image": "photos/teal-heart-earrings.webp", "image2": "photos/teal-heart-earrings-2.webp", "alt": "Teal shimmer resin heart earrings with antique-gold studs", "tag": "All heart"},
  {"id": "bar-earrings", "name": "Pink blossom bar earrings", "category": "Earrings", "detail": "Pressed blossoms · Gold-tone drops", "image": "photos/pink-blossom-bar-earrings.webp", "alt": "Pink rectangular resin drop earrings with tiny pressed blossoms", "tag": "Little blooms"},
  {"id": "marigold-earrings", "name": "Marigold flake earrings", "category": "Earrings", "detail": "Orange petal flakes · Pearl-bead studs", "image": "photos/marigold-flake-earrings.webp", "alt": "Round clear resin earrings filled with orange petal flakes and pearl-bead studs", "tag": "Sunshine for your ears", "pos": "50% 60%"},
  {"id": "bracelet", "name": "Hexagon bloom bracelet", "category": "Rings & bracelets", "detail": "Pressed greens · Silver-tone chain", "image": "photos/hexagon-bloom-bracelet.webp", "alt": "A hexagon resin bracelet holding pressed green flowers, worn on the wrist", "tag": "A garden, worn"},
  {"id": "rainbow-bracelet", "name": "Rainbow bloom bracelet", "category": "Rings & bracelets", "detail": "Seven pressed blooms · Silver-tone links", "image": "photos/rainbow-bloom-bracelet.webp", "alt": "A silver bracelet of round resin links, each holding a pressed flower in a different colour, worn on the wrist", "tag": "Every colour of joy"},
  {"id": "ring", "name": "Royal blue filigree ring", "category": "Rings & bracelets", "detail": "Adjustable · Antique filigree", "image": "photos/filigree-ring.webp", "image2": "photos/filigree-ring-2.webp", "alt": "A royal-blue resin ring in an antique filigree setting, held among bougainvillea", "tag": "Statement piece"},
  {"id": "heart-ring", "name": "Heart of gold ring", "category": "Rings & bracelets", "detail": "Pink resin heart · Gold flakes · Adjustable", "image": "photos/heart-of-gold-ring.webp", "alt": "A pink resin heart ring with gold flakes worn on a finger in front of peacock feathers", "tag": "Wear your heart"},
  {"id": "statement-rings", "name": "Oxidised bloom rings", "category": "Rings & bracelets", "detail": "Set of three · Adjustable · Real pressed flowers", "image": "photos/oxidised-statement-rings-card.webp", "alt": "Three oxidised silver statement rings holding yellow, red and peach pressed flowers in resin", "tag": "Stack the blooms"},
  {"id": "sunflower", "name": "Sunflower pendant", "category": "Necklaces", "detail": "Real pressed sunflower · Gold chain", "image": "photos/sunflower-pendant.webp", "image2": "photos/sunflower-pendant-2.webp", "alt": "A gold pendant preserving a bright yellow sunflower in resin", "tag": "Sunshine, kept"},
  {"id": "cameo-pendant", "name": "Lavender cameo pendant", "category": "Necklaces", "detail": "Pressed lavender · Antique filigree frame", "image": "photos/lavender-cameo-pendant.webp", "alt": "An oval cameo pendant with pressed lavender flowers in an antique-gold filigree frame", "tag": "A vintage soul", "pos": "50% 62%"},
  {"id": "blossom-globes", "name": "Blossom globe earrings", "category": "Earrings", "detail": "Blue-kissed glass globes", "image": "photos/blossom-globe-earrings.webp", "image2": "photos/blossom-globe-earrings-2.webp", "alt": "Glass globe drop earrings with blue resin, hanging from a cherry-blossom branch", "tag": "Soft as spring"},
  {"id": "rose-locket", "name": "Rose locket necklace", "category": "Necklaces", "detail": "Pressed rose petals · Gold chain", "image": "photos/rose-locket-necklace.webp", "image2": "photos/rose-locket-necklace-2.webp", "alt": "A gold locket holding pressed red rose petals in resin", "tag": "It was never just a rose"},
  {"id": "golden-globes", "name": "Golden globe earrings", "category": "Earrings", "detail": "Gold flecks · Long drop", "image": "photos/golden-globe-earrings.webp", "alt": "Clear resin globe drop earrings with gold flecks, held up in the hand", "tag": "Catches the light"},
  {"id": "hair-clip", "name": "Sunflower “hope” clip", "category": "Accessories", "detail": "Pressed flowers · Ocean-blue resin", "image": "photos/hope-hair-clip-card.webp", "alt": "An ocean-blue resin hair clip with pressed yellow flowers and the word hope", "tag": "A little hope"},
  {"id": "petal-clutch", "name": "Bridal rose clutch", "category": "Accessories", "detail": "Made with her proposal roses · Name in gold", "image": "photos/petal-name-clutch.webp", "alt": "A bridal resin clutch made with the roses from her proposal, with rose petals, gold leaf and her name in gold", "tag": "From her proposal", "pos": "50% 58%", "custom": "Proposal / date flowers"},
  {"id": "initial", "name": "Initial keychain", "category": "Keychains", "detail": "Your letter · Personalised", "image": "photos/initial-keychain.webp", "alt": "An ocean-blue resin keychain shaped as the letter B", "tag": "Made just for you", "pos": "50% 55%", "custom": "Name or initial piece"},
  {"id": "name-initial", "name": "Floral name initial keychain", "category": "Keychains", "detail": "Your initial & name · Pressed blossoms", "image": "photos/floral-initial-keychain.webp", "alt": "A purple and clear resin letter Y keychain with pressed pink blossoms, a gold name and a pink flower charm", "tag": "Spells you", "pos": "50% 48%", "custom": "Name or initial piece"},
  {"id": "ocean-heart", "name": "Ocean heart keychain", "category": "Keychains", "detail": "Seashell charms · Initial inside", "image": "photos/ocean-heart-keychain.webp", "alt": "A blue heart-shaped resin keychain with an initial and seashell charms", "tag": "A piece of the sea", "custom": "Name or initial piece"},
  {"id": "butterfly-keychain", "name": "Butterfly & rose keychain", "category": "Keychains", "detail": "Rose petals · Red butterfly charm", "image": "photos/butterfly-rose-keychain.webp", "image2": "photos/butterfly-rose-keychain-2.webp", "alt": "A red resin keychain with pressed rose petals and a red butterfly charm", "tag": "Love, carried"},
  {"id": "vintage-key", "name": "Vintage key keychain", "category": "Keychains", "detail": "Pressed bloom · Antique gold", "image": "photos/vintage-key-keychain.webp", "alt": "An antique-gold key keychain holding a pink pressed flower in resin", "tag": "The key to joy"},
  {"id": "photo-clock", "name": "Personalised photo clock", "category": "Keepsakes", "detail": "Your photos & names · Made to order", "image": "photos/photo-clock.webp", "image2": "photos/photo-clock-2.webp", "alt": "A round black glitter resin wall clock set with family photos and names", "tag": "Every hour, together", "pos": "50% 45%", "custom": "Photo keepsake"},
  {"id": "wedding-frame", "name": "Wedding heart frame", "category": "Keepsakes", "detail": "Your photo & flowers · Made to order", "image": "photos/wedding-heart-frame.webp", "alt": "A heart-shaped resin frame holding a wedding photograph and preserved petals", "tag": "From “I do” to always", "pos": "50% 48%", "custom": "Photo keepsake"},
  {"id": "wedding-lamp", "name": "Wedding flower night lamp", "category": "Keepsakes", "detail": "Your wedding flowers · Names & date · LED base", "image": "photos/wedding-flower-lamp.webp", "alt": "A glowing resin block holding preserved wedding roses and pearls with the couple’s names and date, on a lit wooden base", "tag": "Your day, lit up", "pos": "50% 50%", "custom": "Wedding flowers / varmala"},
  {"id": "festive-tops", "name": "Ganesh, lotus & Om table tops", "category": "Home décor", "detail": "Set of three · Gold motifs on crushed stone", "image": "photos/festive-table-tops-card.webp", "alt": "Three resin table tops with gold Ganesh, lotus and Om motifs on crushed-stone bases", "tag": "For Navratri & beyond"}
];

const DM_URL = 'https://ig.me/m/mystic_moldings';
const SHOP_PREVIEW = 8;
// A varied first view: a little of everything before "View all".
const FEATURED = ['daisy-necklace', 'ruby-chandbalis', 'rainbow-bracelet', 'sunflower', 'pink-jhumkas', 'heart-ring', 'name-initial', 'ruby-butterfly'];
const $ = selector => document.querySelector(selector);
const escapeHtml = text => String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const imageUrl = path => `images/${path}`;
const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1Z"/></svg>';

// Saved picks (kept under the original storage key so earlier saves survive).
let bag = {};
try { const saved = JSON.parse(localStorage.getItem('mystic-bag') || '{}'); for (const product of products) { if (Number.isInteger(saved?.[product.id]) && saved[product.id] > 0) bag[product.id] = 1; } } catch {}

// Shop
let showAll = false;
let currentFilter = 'All';
function productCard(p) {
  const saved = Boolean(bag[p.id]);
  const pos = p.pos ? ` style="object-position:${p.pos}"` : '';
  const alt = p.image2 ? `<img class="alt-view" src="${imageUrl(p.image2)}" alt="" loading="lazy" decoding="async">` : '';
  const action = p.custom
    ? `<button class="card-cta" type="button" data-keepsake="${escapeHtml(p.custom)}">Personalise</button>`
    : `<a class="card-cta" href="${DM_URL}" target="_blank" rel="noopener noreferrer" aria-label="DM to order the ${escapeHtml(p.name)} on Instagram">DM to order</a>`;
  return `<article class="card">
    <div class="card-media${p.image2 ? ' has-alt' : ''}">
      <img src="${imageUrl(p.image)}"${pos} alt="${escapeHtml(p.alt)}" loading="lazy" decoding="async">${alt}
      <span class="card-tag">${p.custom ? 'Personalised' : escapeHtml(p.tag)}</span>
      <button class="card-save${saved ? ' saved' : ''}" type="button" data-add="${p.id}" aria-pressed="${saved}" aria-label="${saved ? 'Remove' : 'Save'} ${escapeHtml(p.name)} ${saved ? 'from' : 'to'} your picks">${heart}</button>
      ${p.image2 ? '<span class="view-dots" aria-hidden="true"><i></i><i></i></span>' : ''}
    </div>
    <div class="card-body">
      <p class="card-cat">${escapeHtml(p.category)}</p>
      <h3>${escapeHtml(p.name)}</h3>
      <p class="card-detail">${escapeHtml(p.detail)}</p>
      ${action}
    </div>
  </article>`;
}
function renderProducts(filter = currentFilter) {
  const grid = $('#products');
  if (!grid) return;
  currentFilter = filter;
  const list = products.filter(p => filter === 'All' || p.category === filter);
  const shown = filter === 'All' && !showAll ? FEATURED.map(id => list.find(p => p.id === id)).filter(Boolean).slice(0, SHOP_PREVIEW) : list;
  grid.innerHTML = shown.map(productCard).join('');
  const more = $('#shop-more');
  if (more) {
    more.hidden = filter !== 'All';
    more.querySelector('span').textContent = showAll ? 'Show fewer pieces' : `View all ${list.length} pieces`;
    more.setAttribute('aria-expanded', showAll);
  }
  document.querySelectorAll('[data-filter]').forEach(button => { const active = button.dataset.filter === filter; button.classList.toggle('active', active); button.setAttribute('aria-pressed', active); });
}
function setFilter(filter) { showAll = false; renderProducts(filter); }

// Picks dialog
function updateBag() {
  const items = products.filter(p => bag[p.id]);
  const count = items.length;
  const badge = $('#bag-count');
  if (badge) { badge.textContent = count; badge.classList.toggle('has-items', count > 0); }
  const title = $('#bag-title-count');
  if (title) title.textContent = `(${count})`;
  const list = $('#bag-items');
  if (list) list.innerHTML = count ? items.map(p => `<div class="bag-item"><img src="${imageUrl(p.image)}" alt=""><div class="bag-item-info"><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.category)}</p></div><button class="remove-item" type="button" data-remove="${p.id}" aria-label="Remove ${escapeHtml(p.name)}">Remove</button></div>`).join('') : '<p class="empty-bag">Tap the heart on any piece to save it here, then send us your list for prices and orders.</p>';
  const send = $('#send-picks');
  if (send) send.hidden = !count;
  try { localStorage.setItem('mystic-bag', JSON.stringify(bag)); } catch {}
}
let toastTimer;
function toast(message) { const el = $('#toast'); if (!el) return; el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2800); }
async function sendPicks() {
  const names = products.filter(p => bag[p.id]).map(p => `• ${p.name}`).join('\n');
  const text = `Hi Mystic Moldings! I’d love prices and availability for:\n${names}`;
  try { await navigator.clipboard.writeText(text); toast('List copied. Paste it into your Instagram DM.'); } catch { toast('Opening Instagram. Send us the names of your picks.'); }
  window.open(DM_URL, '_blank', 'noopener');
}

// Keepsake form
function openKeepsake(kind) {
  const dialog = $('#custom-dialog');
  if (!dialog) { window.location.href = 'contact.html'; return; }
  const select = dialog.querySelector('[name="keepsake"]');
  if (kind && [...select.options].some(o => o.value === kind)) select.value = kind;
  $('#form-status').textContent = '';
  dialog.showModal();
}
$('#custom-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const text = `MYSTIC MOLDINGS — KEEPSAKE IDEA\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nKeepsake: ${data.get('keepsake')}\n\nMy idea:\n${data.get('story') || 'To be discussed.'}\n\nThis is a personal draft. It has not been sent to Mystic Moldings.`;
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'my-mystic-moldings-keepsake.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  $('#form-status').innerHTML = `Your idea is saved to your device. Share it with us in an <a href="${DM_URL}" target="_blank" rel="noopener noreferrer">Instagram DM ↗</a>. Nothing has been sent automatically.`;
});

// Clicks
document.addEventListener('click', event => {
  const t = event.target;
  const filter = t.closest('[data-filter]');
  if (filter) setFilter(filter.dataset.filter);
  const shopFilter = t.closest('[data-shop-filter]');
  if (shopFilter && $('#products')) { setFilter(shopFilter.dataset.shopFilter); closeMenu(); }
  if (t.closest('#shop-more')) { showAll = !showAll; renderProducts('All'); if (!showAll) $('#shop').scrollIntoView(); }
  const add = t.closest('[data-add]');
  if (add) {
    const id = add.dataset.add;
    if (bag[id]) { delete bag[id]; toast('Removed from your picks.'); } else { bag[id] = 1; toast('Saved to your picks.'); }
    updateBag();
    const saved = Boolean(bag[id]);
    const name = products.find(p => p.id === id)?.name || '';
    add.classList.toggle('saved', saved); add.setAttribute('aria-pressed', saved); add.setAttribute('aria-label', `${saved ? 'Remove' : 'Save'} ${name} ${saved ? 'from' : 'to'} your picks`);
    return;
  }
  const remove = t.closest('[data-remove]');
  if (remove) { delete bag[remove.dataset.remove]; updateBag(); renderProducts(); }
  const altView = t.closest('.card-media.has-alt');
  if (altView && !t.closest('button, a')) altView.classList.toggle('show-alt');
  const keepsake = t.closest('[data-keepsake]');
  if (keepsake) openKeepsake(keepsake.dataset.keepsake);
  if (t.closest('#send-picks')) sendPicks();
  const close = t.closest('[data-close]');
  if (close) close.closest('dialog').close();
});
$('#open-bag')?.addEventListener('click', () => { updateBag(); $('#bag-dialog').showModal(); });
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } }));

// Mobile menu
const menuToggle = $('.menu-toggle');
function closeMenu() { document.body.classList.remove('menu-open'); menuToggle?.setAttribute('aria-expanded', 'false'); menuToggle?.setAttribute('aria-label', 'Open menu'); }
menuToggle?.addEventListener('click', () => { const open = !document.body.classList.contains('menu-open'); document.body.classList.toggle('menu-open', open); menuToggle.setAttribute('aria-expanded', open); menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
document.querySelectorAll('.site-nav a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// Header shadow once the page scrolls
const header = $('.site-header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Gentle reveal on scroll
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
// On phones the collection, story and film rows scroll sideways, so reveal each row as a whole.
const rowItems = matchMedia('(max-width: 600px)').matches ? '.collection-row, .story-grid, .craft-films-row' : '.collection, .story, .craft-film';
const revealTargets = document.querySelectorAll(`.section-head, .promise, ${rowItems}, .process, .edit, .about-media, .about-copy, .gallery-grid, .cta > *`);
if (!reduceMotion && 'IntersectionObserver' in window) {
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } }), { rootMargin: '0px 0px -8% 0px' });
  revealTargets.forEach(el => io.observe(el));
}

// Films: attach each source only as it nears the viewport, play while on screen, and let visitors tap to pause or play.
const films = [...document.querySelectorAll('.craft-film')].map(card => ({ card, video: card.querySelector('video'), button: card.querySelector('.film-toggle'), label: card.querySelector('h3').textContent.toLowerCase(), onScreen: false, held: false }));
if (films.length) {
  const load = film => { const source = film.video.querySelector('source[data-src]'); if (!source) return; source.src = source.dataset.src; source.removeAttribute('data-src'); film.video.preload = 'metadata'; film.video.load(); };
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

document.querySelectorAll('[data-product-count]').forEach(el => { el.textContent = products.length; });
const year = $('#year'); if (year) year.textContent = new Date().getFullYear();
renderProducts('All');
updateBag();
