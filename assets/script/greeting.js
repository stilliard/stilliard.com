
// randomise message
const messages = [
  'A family name',
  'Hello, old friend',
  'I bet you\'re wondering why I called you here',
];
const $greeting = document.querySelector('.greeting');
const randomise = () => $greeting.innerText = messages[Math.floor(Math.random() * messages.length)];
$greeting.addEventListener('click', randomise);
randomise();
