document.addEventListener('DOMContentLoaded', function() {
    let numDays = document.querySelector('#timerDays');
    let numHours = document.querySelector('#timerHours');
    let numMinutes = document.querySelector('#timerMinutes');
    let numSeconds = document.querySelector('#timerSeconds');
    let deadline = new Date('2025-12-31T23:59:59'); //конечная дата
  
    // Функция обновления таймера
    let updateTimer = function() {
        let now = new Date();
        let diff = Math.max(0, deadline - now);
  
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);
  
        numDays.textContent = String(days).padStart(2, '0');
        numHours.textContent = String(hours).padStart(2, '0');
        numMinutes.textContent = String(minutes).padStart(2, '0');
        numSeconds.textContent = String(seconds).padStart(2, '0');
  
        if (diff === 0) {
            clearInterval(timeUpd);
        }
    };
    updateTimer();
    let timeUpd = setInterval(updateTimer, 1000);
});

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('myMainTwoAnim');
    }
  });
});
observer.observe(document.querySelector('.myMainTwo'));

let observerTwo = new IntersectionObserver(entriesTwo => {
  entriesTwo.forEach(entryTwo => {
    if (entryTwo.isIntersecting) {
      entryTwo.target.classList.add('myMainThreeLeftAnim');
    }
  });
});
observerTwo.observe(document.querySelector('.myMainThreeLeft'));

let applicantForm = document.getElementById('applHome')
applicantForm.addEventListener('submit', function appForm(event) {
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault()
  window.location.href = "thanks.html"
});

document.addEventListener('DOMContentLoaded', function() {
  let textElements = document.querySelectorAll('#drawText');
  textElements.forEach((el, index) => {
      setTimeout(() => { //для каждого элемента (el) устанавливается таймаут:
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
      }, index * 500); //создаёт задержку: 0ms для первого элемента, 500ms для второго
  });
});

function animateOnScroll() {
  let elements = document.querySelectorAll('.myMainTwo, .myMainThree, .myMainFour, .myMainFive, .myMainSix, .myMainSeven');
  
  elements.forEach(el => {
      let elementPosition = el.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
          el.classList.add('show');
      }
  });
}
// CSS класс для анимации
let style = document.createElement('style');
style.textContent = `
  .myMainTwo.visible, 
  .myMainThree.visible, 
  .myMainFour.visible, 
  .myMainFive.visible, 
  .myMainSix.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
  }
`;
document.head.appendChild(style); //добавляет стиль в код
window.addEventListener('scroll', animateOnScroll); //При каждом скролле будет вызываться функция animateOnScroll

let submitButton = document.querySelector('#applHome button[type="submit"]');
if (submitButton) {
    setInterval(() => {
        submitButton.style.transform = 'scale(1.05)'; //увеличиваем на 5%
        setTimeout(() => {
            submitButton.style.transform = 'scale(1)';
        }, 1000);
    }, 2000);
    
    submitButton.style.transition = 'transform 1s ease';
}

document.querySelectorAll('a[href^="#"]').forEach(link => { // селектор для поиска a - все теги <a>, [href^="#"] - у которых атрибут href начинается с #
  link.addEventListener('click', function(event) {
    // Отменяем стандартное поведение
    event.preventDefault();
    
    let targetId = this.getAttribute('href'); //при клике на ссылку получаем значение href
    let targetElement = document.querySelector(targetId); //находим элемент с соответствующим id
    
    // Прокручиваем плавно к элементу
    if (targetElement) {
      targetElement.scrollIntoView({ //метод плавной прокрутки
        behavior: 'smooth' //плавная анимация
      });
    }
  });
});

//принимает аргумент (size) и возвращает случайное целое число от 0 до size - 1
let randomImg = function (size) {
	return Math.floor(Math.random() * size); //генерирует случайное число от 0 до 1 и умножает на size. затем округляет это число вниз до ближайшего целого
}
let width = 1200; //ширина страницы вашего сайта
let height = 4000; //высота страницы вашего сайта
let target = {
	x:randomImg(width), //диапазон от 0 до 1299
	y:randomImg(height) //от 0 до 3999
}
let image = '<img src="img/alienSale.png" alt="Скидка 10%" class="alienSale">';
let imageElement = $(image);
imageElement.css({
  position: "absolute",
  left: target.x,
  top: target.y,
  cursor: "pointer" // Указатель курсора при наведении
});
// Создаем модальное окно (скрытое)
let modal = $(`
  <div id="discountModal" style="
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%;
    background-color: rgba(76, 29, 17, 0.5);
    align-items: center;
    justify-content: center;
  ">
    <div style="
      background-color:  #FA6312;
      padding: 20px;
      border-radius: 30px;
      min-width: 600px;
      max-width: 90%;
      min-height: 400px;
      max-height: 50%;
      position: relative;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    ">
      <h2 style="
        width: 500px;
        color: #eae2dd;
        font-size: 34px;
        line-height: 1.5;
        margin-left: 10px;
        ">Вам выпало: Скидка 10% на покупку любого участка!
      </h2>
      <button id="closeModal" style="
        background-color: #FA6312;
        border: none;
        border-radius: 20px;
        padding: 6px 5px 5px 5px;
        width: 60px;
        height: 50px;
        font-size: 15px;
        position:absolute; 
        top:10px; 
        right:10px; 
        cursor:pointer;
        color: #eae2dd;
        button:active {
          top: 3px;
          box-shadow: 0 2px 0px #933d0f;
        } 
        ">X
      </button>
      <button id="getSale" style="
        background-color: #eae2dd;
        border: none;
        border-radius: 20px;
        padding: 11px 13px 13px 13px;
        width: 300px;
        height: 70px;
        font-size: 30px;
        margin-top: 100px;
        margin-left: 10px;
        font-weight: 600;
        color:rgb(201, 46, 25);
        ">Получить
      </button>
      <img src="img/alienSaleFace.png" alt="" style="
      width: 400px;
      margin-top: -250px;
      margin-left: 50px;
      ">
    </div>
  </div>`
);
// Добавляем модальное окно в тело документа
$("body").append(modal);
// Обработчик клика по изображению - показать модалку
imageElement.on('click', function() {
  modal.css("display", "flex");
});
// Закрытие модалки по кнопке
modal.find("#closeModal").on('click', function() {
  modal.css("display", "none");
  imageElement.css("display", "none");
});
modal.find("#getSale").on('click', function() {
  modal.css("display", "none");
  imageElement.css("display", "none");
});
// Добавляем изображение в тело документа
$("body").append(imageElement);

document.addEventListener('DOMContentLoaded', function() {
  // Получаем все поля с классом no-paste
  let noPasteInputs = document.querySelectorAll('.no-paste');
  // Для каждого поля добавляем обработчики
  noPasteInputs.forEach(input => {
      // Запрещаем контекстное меню
      input.addEventListener('contextmenu', function(event) {
          event.preventDefault();
          return false;
      });
      // Запрещаем вставку через Ctrl+V
      input.addEventListener('keydown', function(event) {
          // Проверяем комбинацию Ctrl+V или Cmd+V (для Mac)
          if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
            event.preventDefault();
              return false;
          }
      });
      // Запрещаем вставку через меню "Вставить"
      input.addEventListener('paste', function(event) {
          event.preventDefault();
          return false;
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let scrollToTopBtn = document.getElementById('scrollToTop');
  let contactSection = document.getElementById('myMainSeven');
  function checkVisibility() {
      let rect = contactSection.getBoundingClientRect();
      let isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
          scrollToTopBtn.classList.add('visible');
      } else {
          scrollToTopBtn.classList.remove('visible');
      }
  }
  scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});