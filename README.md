# Mystic Moldings

A responsive, story-led resin art storefront built with HTML, CSS, and JavaScript.

Open `index.html` in a browser, or serve the directory with `python3 -m http.server 8000` and visit http://localhost:8000.

## Included
- Emotional introduction, commercial and personalised collections, illustrative keepsake stories, and a making process.
- Category filtering and a shopping bag saved in browser local storage.
- Personalisation form that downloads a local text draft; it does not transmit details.
- Responsive layouts, keyboard-accessible dialogs, and reduced-motion support.

## Before launch
Product photos live in `images/photos/` as web-optimised WebP files (the hero, both collection cards, the wedding and rose keepsake stories, and all nineteen shop products, filterable by Earrings, Necklaces, Rings & bracelets, Keychains, Accessories and Keepsakes). Eight products have a second photo (`image2` in `script.js`) shown on hover, or on tap on phones. Every photo the owner has supplied is used: the date-night poster has its own section, and four studio shots form the “From our studio” strip in the Instagram section. The pet keepsake story uses `images/photos/pet-hair-heart-keepsake.webp`, a designed (not photographed) image of a resin heart holding pet fur; replace it with a real photo of a Mystic Moldings pet keepsake when one is available. Site copy (announcement bar, value badges, Instagram section, meta descriptions) follows the @mystic_moldings Instagram bio. Shop names, details and prices are in `script.js`; prices are indicative. Also update the sample INR prices and product details in `script.js`, and replace sample stories with consented, anonymised customer stories. Add business contact details, shipping/returns and privacy policies, and connect an order backend and payment provider. Checkout and enquiry submission are intentionally not live. Google Fonts require an internet connection; images are served locally.

## Contact page
`contact.html` includes enquiry topics, a downloadable enquiry draft, and FAQs. Add the business email and WhatsApp number to the contact details when available. Its form is local-only until a real enquiry service is connected.

## Instagram
The owner-provided profile https://www.instagram.com/mystic_moldings/ is linked from the homepage, both footers, and contact/enquiry flows. Drafts are not sent automatically. Instagram profile content could not be retrieved during setup, so bio, location, policies, and product photos have not been imported or inferred.

## Behind-the-craft videos
The homepage section `#behind-the-craft` (between the keepsake stories and “Something meaningful”) shows four product films from `videos/` (`product-video-01.mp4` … `04.mp4`, each with a matching `-poster.jpg`) as portrait cards with a title and a short line underneath; on phones they become a swipeable row. Videos are muted, looped, `playsinline` and `preload="metadata"`; `script.js` attaches each source only as it nears the viewport, plays it while on screen and pauses it off-screen. Visitors can tap a film or its round button to pause or play it, which also covers phones that block autoplay (for example iPhone Low Power Mode). To replace a film, overwrite the file in `videos/` with the same name.
