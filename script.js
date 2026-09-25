const products = [
  { id: 'evil-eye', name: 'Evil-eye pendant set', category: 'Necklaces', detail: 'Pendant & studs · Gold-tone finish', image: 'photos/evil-eye-set.webp', alt: 'A gold evil-eye resin pendant with matching stud earrings', tag: 'A LITTLE EVERYDAY MAGIC' },
  { id: 'pink-jhumkas', name: 'Pink bloom jhumkas', category: 'Earrings', detail: 'Pressed petals · Pearl & bell drops', image: 'photos/pink-bloom-jhumkas.webp', image2: 'photos/pink-bloom-jhumkas-2.webp', alt: 'Pink resin jhumka earrings with pressed petals, pearls and purple bell drops', tag: 'FESTIVE FAVOURITE' },
  { id: 'oxidised-jhumkas', name: 'Oxidised ruby jhumkas', category: 'Earrings', detail: 'Ruby-red resin · Oxidised silver bells', image: 'photos/oxidised-ruby-jhumkas.webp', image2: 'photos/oxidised-ruby-jhumkas-2.webp', alt: 'Oxidised silver jhumka earrings with ruby-red resin centres', tag: 'EVERYDAY ETHNIC' },
  { id: 'ruby-chandbalis', name: 'Ruby bloom chandbalis', category: 'Earrings', detail: 'Real rose petals · Kundan & pearl drops', image: 'photos/ruby-chandbali-earrings.webp', alt: 'Chandbali earrings made with real red rose petals in resin, framed in kundan crystals with pearl drops', tag: 'BRIDAL EDIT' },
  { id: 'daisy-chandbalis', name: 'Daisy kundan chandbalis', category: 'Earrings', detail: 'Pressed daisies on black · Kundan & pearls', image: 'photos/daisy-kundan-chandbalis.webp', alt: 'Chandbali earrings with pressed white daisies on black resin, kundan stones and pearl drops', tag: 'DAISY, DRESSED UP' },
  { id: 'tassel-danglers', name: 'Ruby tassel danglers', category: 'Earrings', detail: 'Ruby-red resin · Oxidised chain tassels', image: 'photos/ruby-tassel-danglers.webp', alt: 'Ruby-red resin earrings with long oxidised chain tassels on white silk', tag: 'MADE TO MOVE' },
  { id: 'blue-lace-earrings', name: 'Blue lace kundan earrings', category: 'Earrings', detail: 'Pressed Queen Anne’s lace · Blue bead drops', image: 'photos/blue-lace-kundan-earrings.webp', alt: 'Blue resin earrings holding white Queen Anne’s lace, framed in kundan with blue bead drops', tag: 'SOMETHING BLUE' },
  { id: 'daisy-necklace', name: 'Daisy locket necklace', category: 'Necklaces', detail: 'Real pressed daisy · Gold-tone chain', image: 'photos/daisy-necklace.webp', alt: 'A gold pendant holding a pressed daisy in clear resin', tag: 'A FLOWER, FOREVER' },
  { id: 'red-blossom-locket', name: 'Red blossom locket', category: 'Necklaces', detail: 'Tiny red blooms · Antique-gold chain', image: 'photos/red-blossom-locket.webp', alt: 'A small round resin locket with tiny red and white pressed flowers, resting on an open book', tag: 'A LITTLE ROMANCE' },
  { id: 'earrings', name: 'Gold-flake drop earrings', category: 'Earrings', detail: 'Gold flakes · Crystal studs', image: 'photos/gold-flake-earrings.webp', alt: 'Round resin drop earrings filled with gold flakes, with crystal studs', tag: 'MADE TO SPARKLE' },
  { id: 'butterfly-pendant', name: 'Blue butterfly pendant', category: 'Necklaces', detail: 'Ocean-blue resin · Gold outline', image: 'photos/butterfly-pendant.webp', alt: 'A blue resin butterfly pendant with a gold outline on black velvet', tag: 'LIGHT AS A WING' },
  { id: 'ruby-butterfly', name: 'Ruby butterfly pendant', category: 'Necklaces', detail: 'Rose-red resin · Antique-gold wings', image: 'photos/ruby-butterfly-pendant.webp', alt: 'A rose-red resin butterfly pendant on a wooden board beside pink petals', tag: 'FLUTTER & GLOW' },
  { id: 'maple-pendant', name: 'Maple leaf pendant', category: 'Necklaces', detail: 'Real pressed leaf · Gold-tone chain', image: 'photos/maple-leaf-pendant.webp', alt: 'A real pink maple leaf preserved in resin as a pendant on a gold chain', tag: 'AUTUMN, KEPT' },
  { id: 'teal-hearts', name: 'Teal heart earrings', category: 'Earrings', detail: 'Shimmer resin · Antique-gold studs', image: 'photos/teal-heart-earrings.webp', image2: 'photos/teal-heart-earrings-2.webp', alt: 'Teal shimmer resin heart earrings with antique-gold studs', tag: 'ALL HEART' },
  { id: 'bar-earrings', name: 'Pink blossom bar earrings', category: 'Earrings', detail: 'Pressed blossoms · Gold-tone drops', image: 'photos/pink-blossom-bar-earrings.webp', alt: 'Pink rectangular resin drop earrings with tiny pressed blossoms', tag: 'LITTLE BLOOMS' },
  { id: 'marigold-earrings', name: 'Marigold flake earrings', category: 'Earrings', detail: 'Orange petal flakes · Pearl-bead studs', image: 'photos/marigold-flake-earrings.webp', alt: 'Round clear resin earrings filled with orange petal flakes and pearl-bead studs', tag: 'SUNSHINE FOR YOUR EARS' },
  { id: 'bracelet', name: 'Hexagon bloom bracelet', category: 'Rings & bracelets', detail: 'Pressed greens · Silver-tone chain', image: 'photos/hexagon-bloom-bracelet.webp', alt: 'A hexagon resin bracelet holding pressed green flowers, worn on the wrist', tag: 'A GARDEN, WORN' },
  { id: 'rainbow-bracelet', name: 'Rainbow bloom bracelet', category: 'Rings & bracelets', detail: 'Seven pressed blooms · Silver-tone links', image: 'photos/rainbow-bloom-bracelet.webp', alt: 'A silver bracelet of round resin links, each holding a pressed flower in a different colour, worn on the wrist', tag: 'EVERY COLOUR OF JOY' },
  { id: 'ring', name: 'Royal blue filigree ring', category: 'Rings & bracelets', detail: 'Adjustable · Antique filigree', image: 'photos/filigree-ring.webp', image2: 'photos/filigree-ring-2.webp', alt: 'A royal-blue resin ring in an antique filigree setting, held among bougainvillea', tag: 'STATEMENT PIECE' },
  { id: 'heart-ring', name: 'Heart of gold ring', category: 'Rings & bracelets', detail: 'Pink resin heart · Gold flakes · Adjustable', image: 'photos/heart-of-gold-ring.webp', alt: 'A pink resin heart ring with gold flakes worn on a finger in front of peacock feathers', tag: 'WEAR YOUR HEART' },
  { id: 'statement-rings', name: 'Oxidised bloom rings', category: 'Rings & bracelets', detail: 'Set of three · Adjustable · Real pressed flowers', image: 'photos/oxidised-statement-rings.webp', alt: 'Three oxidised silver statement rings holding yellow, red and peach pressed flowers in resin', tag: 'STACK THE BLOOMS' },
  { id: 'sunflower', name: 'Sunflower pendant', category: 'Necklaces', detail: 'Real pressed sunflower · Gold chain', image: 'photos/sunflower-pendant.webp', image2: 'photos/sunflower-pendant-2.webp', alt: 'A gold pendant preserving a bright yellow sunflower in resin', tag: 'SUNSHINE, KEPT' },
  { id: 'cameo-pendant', name: 'Lavender cameo pendant', category: 'Necklaces', detail: 'Pressed lavender · Antique filigree frame', image: 'photos/lavender-cameo-pendant.webp', alt: 'An oval cameo pendant with pressed lavender flowers in an antique-gold filigree frame', tag: 'A VINTAGE SOUL' },
  { id: 'blossom-globes', name: 'Blossom globe earrings', category: 'Earrings', detail: 'Blue-kissed glass globes', image: 'photos/blossom-globe-earrings.webp', image2: 'photos/blossom-globe-earrings-2.webp', alt: 'Glass globe drop earrings with blue resin, hanging from a cherry-blossom branch', tag: 'SOFT AS SPRING' },
  { id: 'rose-locket', name: 'Rose locket necklace', category: 'Necklaces', detail: 'Pressed rose petals · Gold chain', image: 'photos/rose-locket-necklace.webp', image2: 'photos/rose-locket-necklace-2.webp', alt: 'A gold locket holding pressed red rose petals in resin', tag: 'IT WAS NEVER JUST A ROSE' },
  { id: 'golden-globes', name: 'Golden globe earrings', category: 'Earrings', detail: 'Gold flecks · Long drop', image: 'photos/golden-globe-earrings.webp', alt: 'Clear resin globe drop earrings with gold flecks, held up in the hand', tag: 'CATCHES THE LIGHT' },
  { id: 'hair-clip', name: 'Sunflower “hope” clip', category: 'Accessories', detail: 'Pressed flowers · Ocean-blue resin', image: 'photos/hope-hair-clip.webp', alt: 'An ocean-blue resin hair clip with pressed yellow flowers and the word hope', tag: 'A LITTLE HOPE' },
  { id: 'petal-clutch', name: 'Bridal rose clutch', category: 'Accessories', detail: 'Made with her proposal roses · Name in gold', image: 'photos/petal-name-clutch.webp', alt: 'A bridal resin clutch made with the roses from her proposal, with rose petals, gold leaf and her name in gold', tag: 'FROM HER PROPOSAL' },
  { id: 'initial', name: 'Initial keychain', category: 'Keychains', detail: 'Your letter · Personalised', image: 'photos/initial-keychain.webp', alt: 'An ocean-blue resin keychain shaped as the letter B', tag: 'MADE JUST FOR YOU' },
  { id: 'name-initial', name: 'Floral name initial keychain', category: 'Keychains', detail: 'Your initial & name · Pressed blossoms', image: 'photos/floral-initial-keychain.webp', alt: 'A purple and clear resin letter Y keychain with pressed pink blossoms, a gold name and a pink flower charm', tag: 'SPELLS YOU' },
  { id: 'ocean-heart', name: 'Ocean heart keychain', category: 'Keychains', detail: 'Seashell charms · Initial inside', image: 'photos/ocean-heart-keychain.webp', alt: 'A blue heart-shaped resin keychain with an initial and seashell charms', tag: 'A PIECE OF THE SEA' },
  { id: 'butterfly-keychain', name: 'Butterfly & rose keychain', category: 'Keychains', detail: 'Rose petals · Red butterfly charm', image: 'photos/butterfly-rose-keychain.webp', image2: 'photos/butterfly-rose-keychain-2.webp', alt: 'A red resin keychain with pressed rose petals and a red butterfly charm', tag: 'LOVE, CARRIED' },
  { id: 'vintage-key', name: 'Vintage key keychain', category: 'Keychains', detail: 'Pressed bloom · Antique gold', image: 'photos/vintage-key-keychain.webp', alt: 'An antique-gold key keychain holding a pink pressed flower in resin', tag: 'THE KEY TO JOY' },
  { id: 'photo-clock', name: 'Personalised photo clock', category: 'Keepsakes', detail: 'Your photos & names · Made to order', image: 'photos/photo-clock.webp', image2: 'photos/photo-clock-2.webp', alt: 'A round black glitter resin wall clock set with family photos and names', tag: 'EVERY HOUR, TOGETHER' },
  { id: 'wedding-frame', name: 'Wedding heart frame', category: 'Keepsakes', detail: 'Your photo & flowers · Made to order', image: 'photos/wedding-heart-frame.webp', alt: 'A heart-shaped resin frame holding a wedding photograph and preserved petals', tag: 'FROM “I DO” TO ALWAYS' },
  { id: 'wedding-lamp', name: 'Wedding flower night lamp', category: 'Keepsakes', detail: 'Your wedding flowers · Names & date · LED base', image: 'photos/wedding-flower-lamp.webp', alt: 'A glowing resin block holding preserved wedding roses and pearls with the couple’s names and date, on a lit wooden base', tag: 'YOUR DAY, LIT UP' },
  { id: 'festive-tops', name: 'Ganesh, lotus & Om table tops', category: 'Home décor', detail: 'Set of three · Gold motifs on crushed stone', image: 'photos/festive-table-tops-card.webp', alt: 'Three resin table tops with gold Ganesh, lotus and Om motifs on crushed-stone bases', tag: 'FOR NAVRATRI & BEYOND' }
];
const imageUrl = product => `images/${product.image}`;
let bag = {};
try { const saved = JSON.parse(localStorage.getItem('mystic-bag') || '{}'); for (const product of products) { if (Number.isInteger(saved?.[product.id]) && saved[product.id] > 0) bag[product.id] = Math.min(saved[product.id], 99); } } catch {}
let showAll = false;
const SHOP_PREVIEW = 8;
// A varied first view: a little of everything before "View all".
const FEATURED = ['daisy-necklace', 'ruby-chandbalis', 'rainbow-bracelet', 'petal-clutch', 'pink-jhumkas', 'heart-ring', 'name-initial', 'ruby-butterfly'];
function renderProducts(filter = 'All') {
  const list = products.filter(p => filter === 'All' || p.category === filter);
  const shown = filter === 'All' && !showAll ? FEATURED.map(id => list.find(p => p.id === id)).filter(Boolean).slice(0, SHOP_PREVIEW) : list;
  const more = document.querySelector('#shop-more');
  if (more) { more.hidden = filter !== 'All' || list.length <= SHOP_PREVIEW; more.querySelector('span').textContent = showAll ? 'Show fewer pieces' : `View all ${list.length} pieces`; more.setAttribute('aria-expanded', showAll); }
  document.querySelector('#products').innerHTML = shown.map(p => `<article class="product-card"><div class="product-image${p.image2 ? ' has-alt' : ''}"><img src="${imageUrl(p)}" alt="${p.alt}" loading="lazy">${p.image2 ? `<img class="alt-view" src="images/${p.image2}" alt="" loading="lazy"><span class="view-dots" aria-hidden="true"><i></i><i></i></span>` : ''}<span class="product-tag">${p.tag}</span><button class="add-bag" data-add="${p.id}" aria-label="Add ${p.name} to your cart">+</button></div><div class="product-meta"><h3>${p.name}</h3></div><p>${p.detail}</p></article>`).join('');
}
function updateBag() {
  const count = Object.values(bag).reduce((a, b) => a + b, 0);
  const badge = document.querySelector('#bag-count');
  if (badge) badge.textContent = count;
  try { localStorage.setItem('mystic-bag', JSON.stringify(bag)); } catch {}
  document.dispatchEvent(new CustomEvent('cartchange'));
}
let toastTimer;
function toast(message) { const el = document.querySelector('#toast'); if (!el) return; el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2800); }
document.addEventListener('click', event => {
  const filter = event.target.closest('[data-filter]');
  if (filter) { document.querySelectorAll('[data-filter]').forEach(button => { const active = button === filter; button.classList.toggle('active', active); button.setAttribute('aria-pressed', active); }); renderProducts(filter.dataset.filter); }
  const add = event.target.closest('[data-add]');
  if (add) { bag[add.dataset.add] = Math.min((bag[add.dataset.add] || 0) + 1, 99); updateBag(); toast('Added to your cart.'); }
  const custom = event.target.closest('[data-keepsake]');
  if (custom) { document.querySelector('[name="keepsake"]').value = custom.dataset.keepsake; document.querySelector('#form-status').textContent = ''; document.querySelector('#custom-dialog').showModal(); }
  const altView = !event.target.closest('.add-bag') && event.target.closest('.product-image.has-alt');
  if (altView) altView.classList.toggle('show-alt');
  const shopMore = event.target.closest('#shop-more');
  if (shopMore) { showAll = !showAll; renderProducts('All'); if (!showAll) document.querySelector('#shop').scrollIntoView(); }
  const shopFilter = event.target.closest('[data-shop-filter]');
  if (shopFilter) document.querySelector(`[data-filter="${shopFilter.dataset.shopFilter}"]`)?.click();
  const close = event.target.closest('[data-close]');
  if (close) close.closest('dialog').close();
});
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } }));
document.querySelector('#custom-form')?.addEventListener('submit', event => {
  event.preventDefault(); const data = new FormData(event.target);
  const text = `MYSTIC MOLDINGS — PERSONALISATION ENQUIRY\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nKeepsake: ${data.get('keepsake')}\n\nMy idea:\n${data.get('story') || 'To be discussed.'}\n\nThis is a personal draft. It has not been sent to Mystic Moldings.`;
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = 'my-mystic-moldings-enquiry.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#form-status').textContent = 'Your enquiry file is ready. Copy its contents into a message to @mystic_moldings on Instagram. Nothing has been sent automatically.';
});
const yearEl = document.querySelector('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
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
