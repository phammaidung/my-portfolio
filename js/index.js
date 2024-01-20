var typed = new Typed('.text', {
  strings: ['Frontend Developer', 'Mobile Developer', 'YouTuber'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('open');
});
