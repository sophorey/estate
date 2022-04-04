const toLeftBtn = document.querySelector('#testimonials-to-left');
const toRightBtn = document.querySelector('#testimonials-to-right');
const listEl = document.querySelector("#testimonials-list")


toLeftBtn.addEventListener('click', (e) => {
  e.preventDefault();
  listEl.scrollLeft -= 257;
});

toRightBtn.addEventListener('click', (e) => {
  e.preventDefault();
 listEl.scrollLeft += 257;
});