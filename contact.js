const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const draft = [
    'MYSTIC MOLDINGS — CONTACT ENQUIRY DRAFT',
    '',
    `Name: ${data.get('name').trim()}`,
    `Email: ${data.get('email').trim()}`,
    `Topic: ${data.get('topic')}`,
    '',
    'Message:',
    data.get('message').trim(),
    '',
    'This draft has not been sent to Mystic Moldings.'
  ].join('\n');
  const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mystic-moldings-contact-enquiry.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#contact-status').textContent = 'Your draft download has started. No message has been sent. Open the file and copy its contents into a message to @mystic_moldings on Instagram.';
});
