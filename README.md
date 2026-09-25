# Mystic Moldings

A responsive, story-led resin art storefront built with HTML, CSS, and JavaScript.

Open `index.html` in a browser, or serve the directory with `python3 -m http.server 8000` and visit http://localhost:8000.

## Included
- Emotional introduction, commercial and personalised collections, illustrative keepsake stories, and a making process.
- Category filtering and a shopping bag saved in browser local storage.
- Personalisation form that downloads a local text draft; it does not transmit details.
- Responsive layouts, keyboard-accessible dialogs, and reduced-motion support.

## Before launch
Product photos live in `images/photos/` as web-optimised WebP files (the hero, both collection cards, the wedding and rose keepsake stories, and all thirty-seven shop products (the shop shows eight at first, with a “View all” button; prices are not shown, customers DM for prices), filterable by Earrings, Necklaces, Rings & bracelets, Keychains, Accessories, Keepsakes and Home décor). A festive-décor feature (Ganesh, lotus and Om table tops) follows the keepsake stories. Eight products have a second photo (`image2` in `script.js`) shown on hover, or on tap on phones. Every photo the owner has supplied is used: the date-night poster has its own section, and ten studio shots form the “From our studio” strip, and three stall photos form the “At exhibitions” section in the Instagram section. The third keepsake story uses the real photo-clock photo; add a pet keepsake story when a real photo of one is available. Site copy (announcement bar, value badges, Instagram section, meta descriptions) follows the @mystic_moldings Instagram bio. Shop names and details are in `script.js`. Also replace sample stories with consented, anonymised customer stories. Add business contact details, shipping/returns and privacy policies, and connect an order backend and payment provider. Checkout and enquiry submission are intentionally not live. Google Fonts require an internet connection; images are served locally.

## Contact page
`contact.html` includes enquiry topics, a downloadable enquiry draft, and FAQs. Add the business email and WhatsApp number to the contact details when available. Its form is local-only until a real enquiry service is connected.

## Instagram
The owner-provided profile https://www.instagram.com/mystic_moldings/ is linked from the homepage, both footers, and contact/enquiry flows. Drafts are not sent automatically. Instagram profile content could not be retrieved during setup, so bio, location, policies, and product photos have not been imported or inferred.

## Behind-the-craft videos
The homepage section `#behind-the-craft` (between the keepsake stories and “Something meaningful”) shows four product films from `videos/` (`product-video-01.mp4` … `04.mp4`, each with a matching `-poster.jpg`) as portrait cards with a title and a short line underneath; on phones they become a swipeable row. Videos are muted, looped, `playsinline` and `preload="metadata"`; `script.js` attaches each source only as it nears the viewport, plays it while on screen and pauses it off-screen. Visitors can tap a film or its round button to pause or play it, which also covers phones that block autoplay (for example iPhone Low Power Mode). To replace a film, overwrite the file in `videos/` with the same name.

## Updating the site
Hostinger and browsers cache `styles.css` and the scripts. Whenever those files change, bump the `?v=` number on their links in `index.html` and `contact.html` so visitors get the new version straight away.

## Cart
`cart.html` + `cart.js`: shoppers add pieces with the “+” on any product, then review them on the cart page (quantities, a personalisation note per piece, their name, phone, city and PIN, an optional date, gift wrap and a note). “Place order on Instagram” copies a ready-made order message and opens the @mystic_moldings DM; “Download order summary” saves the same text. The cart, notes and contact details are kept in the visitor’s browser only. No payment is taken on the site; prices and delivery are confirmed in the DM. A UPI section explains that customers pay by UPI after the order is confirmed in the DM. To show a masked UPI ID and a “Pay with UPI app” button, set `UPI_ID` at the top of `cart.js` (the full ID is then visible in the site code and the public repository).
