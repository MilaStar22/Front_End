// 1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

let newDiv = document.createElement('div');
document.body.prepend(newDiv);
newDiv.innerText = 'Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div зявляється textarea з тим же текстом, який тепер можна редагувати.';

let newTextArea = document.createElement('textarea');
document.body.prepend(newTextArea);
newTextArea.style.width = '100%';
newTextArea.style.height = '100px';

newTextArea.style.display = "none";

// Press Ctrl + E
document.addEventListener('keydown', function(event){
  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault();
    newDiv.style.display = 'none';
    newTextArea.style.display = "block";
    newTextArea.value = newDiv.innerHTML;
    newTextArea.focus();
  }
})


// Press Ctrl + S
document.addEventListener('keydown', function(event){
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    newTextArea.style.display = "none";
    newDiv.style.display = 'block';
    newDiv.innerHTML = newTextArea.value;

  }
})
