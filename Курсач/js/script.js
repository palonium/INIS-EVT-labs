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


let switchMode = document.getElementById("switchMode");
let switchModeburger = document.getElementById("switchModeburger");
let theme = document.getElementById('theme');

let savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  theme.href = savedTheme;
}


switchMode.onclick = function() {
  if (theme.getAttribute("href") == "style/dark-style.css") {
    theme.href = "style/light-style.css";
  } else {
    theme.href = "style/dark-style.css";
  }

  localStorage.setItem('theme', theme.href);
}

switchModeburger.onclick = function() {
    if (theme.getAttribute("href") == "style/dark-style.css") {
      theme.href = "style/light-style.css";
    } else {
      theme.href = "style/dark-style.css";
    }
  
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