// Отримуємо необхідні елементи DOM
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModal");
var closeBtn = document.getElementById("closeModal");

// Функція для відкриття модального вікна
openBtn.onclick = function() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Закриття модального вікна, якщо користувач клікає поза ним
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
