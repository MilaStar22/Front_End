// 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

let box = document.getElementById('myBox');
let resizeHandle = document.getElementById('resizeHandle');
let isResizing = false;
let lastX = 0;
let lastY = 0;

resizeHandle.addEventListener('mousedown', function(e) {
  isResizing = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mousemove', function(e) {
  if (!isResizing) return;

  let width = box.offsetWidth + (e.clientX - lastX);
  let height = box.offsetHeight + (e.clientY - lastY);
  box.style.width = width + 'px';
  box.style.height = height + 'px';

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mouseup', function() {
  isResizing = false;
});
