const input = document.getElementById('myInput');

input.addEventListener('input', function() {
  if (input.validity.valid) {
    input.classList.remove('invalid');
  }
});



//селекты кнопки

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
//второй ряд
const projectButtons = document.querySelectorAll('.button-project');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    projectButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});




//инвалиды инпуты
document.getElementById("submitButton").addEventListener("click", function(event) {
  var nameInput = document.getElementById("myInput");
  var contactInput = document.getElementById("contactInput");
  var detailsInput = document.getElementById("detailsInput");

  if (nameInput.value === "") {
      nameInput.classList.add("invalid-input");
      nameInput.placeholder = "Напишите пожалуйста что-нибудь в этом поле";
      event.preventDefault();
  }

  if (contactInput.value === "") {
      contactInput.classList.add("invalid-input");
      contactInput.placeholder = "Напишите пожалуйста что-нибудь в этом поле";
      event.preventDefault(); 
  }

  if (detailsInput.value === "") {
      detailsInput.classList.add("invalid-input");
      detailsInput.placeholder = "Напишите пожалуйста что-нибудь в этом поле";
      event.preventDefault(); 
  }
});

//модалка
document.getElementById("submitButton-modal").addEventListener("click", function(event) {
  var nameInput = document.getElementById("myInput-modal");
  var contactInput = document.getElementById("contactInput-modal");
  var detailsInput = document.getElementById("detailsInput-modal");

  if (nameInput.value === "") {
      nameInput.classList.add("invalid-input");
      nameInput.placeholder = "Напишите пожалуйста что-нибудь в этом поле";
      event.preventDefault(); 
  }

  if (contactInput.value === "") {
      contactInput.classList.add("invalid-input");
      contactInput.placeholder = "Напишите пожалуйста что-нибудь в этом поле";
      event.preventDefault(); 
  }

  if (detailsInput.value === "") {
      detailsInput.classList.add("invalid-input");
      detailsInput.placeholder = "Напишите пожалуйста что-нибудь в этом поле";
      event.preventDefault();
  }
});

//сохранение инпутов

  var myInputModal = document.getElementById('myInput');
  var contactInputModal = document.getElementById('contactInput');
  var detailsInputModal = document.getElementById('detailsInput');

  myInputModal.value = localStorage.getItem('myInputValue');
  contactInputModal.value = localStorage.getItem('contactInputValue');
  detailsInputModal.value = localStorage.getItem('detailsInputValue');

  myInputModal.addEventListener('input', function() {

    localStorage.setItem('myInputValue', myInput.value);
  });

  contactInputModal.addEventListener('input', function() {
    localStorage.setItem('contactInputValue', contactInput.value);
  });

  detailsInputModal.addEventListener('input', function() {
    localStorage.setItem('detailsInputValue', detailsInput.value);
  });

  //мобилка
  var myInput = document.getElementById('myInput-modal');
  var contactInput = document.getElementById('contactInput-modal');
  var detailsInput = document.getElementById('detailsInput-modal');

  myInput.value = localStorage.getItem('myInputValue');
  contactInput.value = localStorage.getItem('contactInputValue');
  detailsInput.value = localStorage.getItem('detailsInputValue');

  myInput.addEventListener('input', function() {
    localStorage.setItem('myInputValue', myInput.value);
  });

  contactInput.addEventListener('input', function() {
    localStorage.setItem('contactInputValue', contactInput.value);
  });

  detailsInput.addEventListener('input', function() {
    localStorage.setItem('detailsInputValue', detailsInput.value);
  });

//платформы



//медиа карточки
// Получаем кнопки и карточки
const businessButton = document.getElementById('business-button');
const designersButton = document.getElementById('designers-button');
const businessCards = document.querySelector('.media__cards-buiseness');
const designersCards = document.querySelector('.media__cards-designers');

function checkScreenWidth() {
  return window.innerWidth <= 800;
}

// Обработчик события для кнопки "Бизнесу"
businessButton.addEventListener('click', function() {
  // Проверяем размер экрана
  if (checkScreenWidth()) {
    businessCards.style.display = 'block';
  } else {
    businessCards.style.display = 'grid';
  }
  
  designersCards.style.display = 'none';

  businessButton.classList.add('active-media');
  designersButton.classList.remove('active-media');
});

// Обработчик события для кнопки "Дизайнерам"
designersButton.addEventListener('click', function() {
  if (checkScreenWidth()) {
    designersCards.style.display = 'block';
  } else {
    designersCards.style.display = 'grid';
  }

  businessCards.style.display = 'none';

  designersButton.classList.add('active-media');
  businessButton.classList.remove('active-media');
});

window.addEventListener('load', function() {
  if (checkScreenWidth()) {
    businessCards.style.display = 'block';
    designersCards.style.display = 'none';
  }
});


//модальное окно

document.querySelector(".header__button").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});


//ссылки по кнопкам
const button = document.getElementById('btn-link');

button.addEventListener('click', () => {
  window.open('https://umom.notion.site/095018f9e93d4b6fa5ee20127da15d29?pvs=4', '_blank');
});

const btn = document.getElementById('btn-lin');

btnn.addEventListener('click', () => {
  window.open('https://umom.notion.site/f5070caf861540dab7e539e6cc1a0e5e?pvs=4', '_blank');
});