// світлофор
let btn = document.querySelector('#btn');
let items = document.querySelectorAll('.item');
let i = 0;

btn.addEventListener('click', function() {
  for (let item = 0; item < items.length; item++) {
    items[item].style.backgroundColor = 'unset';
    if (i === 0) {
      items[i].style.backgroundColor = 'red';
    } else if (i === 1) {
      items[i].style.backgroundColor = 'yellow';
    } else {
      items[i].style.backgroundColor = 'green';
    }
  }
  i++;
  if (i === 3) {
    i = 0;
  }
});
