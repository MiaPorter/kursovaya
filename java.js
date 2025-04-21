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

// let randomImg = function (size) {
//   return Math.floor(Math.random() * size);
// }
// let width = 1300;
// let height = 4000;
// let target = {
//   x:randomImg(width),
//   y:randomImg(height)
// }
// let image = '<img src="10757677.png" alt"">';
// let imageElement = $(image);
// imageElement.css({
//   position: "absolute",
//   left: target.x,
//   top: target.y
// })
// $("body").append(imageElement);

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
  .myMainSix.visible, 
  .myMainSeven.visible {
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

// Плавная прокрутка для всех якорных ссылок
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
