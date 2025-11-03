// simple interactive demo for Bluemora color-change
document.addEventListener('DOMContentLoaded', function () {
  const cup = document.getElementById('cup');
  const blueBtn = document.getElementById('blueBtn');
  const acidBtn = document.getElementById('acidBtn');
  const resetBtn = document.getElementById('resetBtn');

  blueBtn && blueBtn.addEventListener('click', () => {
    cup.classList.remove('purple');
    cup.style.transition = 'background 600ms ease';
    // blue brew
    cup.style.background = 'linear-gradient(#2a66b3,#24518e)';
  });

  acidBtn && acidBtn.addEventListener('click', () => {
    // simulate pH change:
    cup.style.transition = 'background 600ms ease';
    cup.style.background = 'linear-gradient(#8a4fb0,#5b347f)'; // purple-ish
  });

  resetBtn && resetBtn.addEventListener('click', () => {
    cup.style.background = 'linear-gradient(#275f9c,#31478f)';
  });
});
