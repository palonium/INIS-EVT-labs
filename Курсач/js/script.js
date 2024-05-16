// // Получаем все ссылки меню
// const menuLinks = document.querySelectorAll('.header__nav .nav__link');

// // Обрабатываем каждую ссылку
// menuLinks.forEach((link) => {
//   // Добавляем обработчик события "клик"
//   link.addEventListener('click', (event) => {
//     // Удаляем класс "highlight" у всех ссылок меню
//     menuLinks.forEach((menuLink) => {
//       menuLink.classList.remove('highlight');
//     });

//     // Добавляем класс "highlight" к текущей ссылке меню
//     link.classList.add('highlight');
//   });
// });

const buttons = document.querySelectorAll('.slide-button');
    const slides = document.querySelectorAll('.slides__slide');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            slides.forEach(slide => {
                if (slide.id === target) {
                    slide.scrollIntoView();
                }
            });
        });
    });

    //тема
// Получаем ссылку на элементы переключателя темы
let switchMode = document.getElementById("switchMode");
let theme = document.getElementById('theme');

// Проверяем, есть ли сохраненная тема в localStorage
let savedTheme = localStorage.getItem('theme');

// Если есть сохраненная тема, применяем ее
if (savedTheme) {
  theme.href = savedTheme;
}

// Обработчик события клика на переключатель темы
switchMode.onclick = function() {
  if (theme.getAttribute("href") == "style/dark-style.css") {
    theme.href = "style/light-style.css";
  } else {
    theme.href = "style/dark-style.css";
  }

  // Сохраняем выбранную тему в localStorage
  localStorage.setItem('theme', theme.href);
}

function changeTheme(){
    let theme = document.getElementById('theme');

    if (theme.getAttribute("href") == "style/dark-style.css"){
        theme.href = "style/light-style.css";

    } else{
        theme.href = "style/dark-style.css";

    }
}


function openArticle(url) {
    window.location.href = url;
}