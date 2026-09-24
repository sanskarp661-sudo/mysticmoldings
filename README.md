# Mystic Moldings

A responsive, story-led resin art storefront built with HTML, CSS, and JavaScript.

Open `index.html` in a browser, or serve the directory with `python3 -m http.server 8000` and visit http://localhost:8000.

## Included
- Emotional introduction, commercial and personalised collections, illustrative keepsake stories, and a making process.
- Category filtering and a shopping bag saved in browser local storage.
- Personalisation form that downloads a local text draft; it does not transmit details.
- Responsive layouts, keyboard-accessible dialogs, and reduced-motion support.

## Before launch
The product and keepsake images in `images/` are drawn SVG illustrations of resin pieces (coasters, earrings, clock, pen stand, side table, bridal block, varmala frame, rose dome and pet pendant). Replace them with photographs of real Mystic Moldings pieces by dropping photos into `images/` and updating the `src` paths in `index.html` and the `image` fields in `script.js`. Also update the sample INR prices and product details in `script.js`, and replace sample stories with consented, anonymised customer stories. Add business contact details, shipping/returns and privacy policies, and connect an order backend and payment provider. Checkout and enquiry submission are intentionally not live. Google Fonts require an internet connection; images are served locally.

## Contact page
`contact.html` includes enquiry topics, a downloadable enquiry draft, and FAQs. Add the business email and WhatsApp number to the contact details when available. Its form is local-only until a real enquiry service is connected.

## Instagram
The owner-provided profile https://www.instagram.com/mystic_moldings/ is linked from the homepage, both footers, and contact/enquiry flows. Drafts are not sent automatically. Instagram profile content could not be retrieved during setup, so bio, location, policies, and product photos have not been imported or inferred.
