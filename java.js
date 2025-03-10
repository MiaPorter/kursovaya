document.addEventListener('DOMContentLoaded', function() {
    let numDays = document.querySelector('#timerDays');
    let numHours = document.querySelector('#timerHours');
    let numMinutes = document.querySelector('#timerMinutes');
    let numSeconds = document.querySelector('#timerSeconds');
    let deadline = new Date('2025-03-15T23:59:59'); //конечная дата
  
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

// window.addEventListener('scroll', function() {
//     let element = document.getElementById('myElement');
//     let scrollPosition = window.scrollY + this.window.innerHeight;
    // if (scrollPosition < 1200) {
    //     element.style.display = 'none';
    // }
    // else {
    //     element.style.display = 'flex';
    //     element.style.animation = 'animMainTwo 2.5 forwards';
    //     element.style.k
    // }
// });

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
applicantForm.addEventListener('submit', appForm)

function appForm(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    window.location.href = "thanks.html"
  }
  

// document.addEventListener('DOMContentLoaded', function() {
//     let myMainTwo = document.querySelectorAll('.myMainTwo');
//     function checkBlocksVisibility() {
//         let windowHeight = window.innerHeight;
//         myMainTwo.forEach(block => {
//             let blockPosition = myMainTwo.getBoundingClientRect().top;
//             if (blockPosition < windowHeight - 100) {
//                 block.style.opacity = "1";
//                 block.style.transform = "translateY(0)";
//             } 
//             else {
//                 block.style.opacity = "0";
//                 block.style.transform = "translateY(50px)";
//             }
//         });
//     }
//     checkBlocksVisibility();
//     window.addEventListener('scroll', checkBlocksVisibility);
// });

// window.addEventListener('scroll', function() {
//     let element = document.getElementById('myElement');
//     let scrollPosition = window.scrollY + this.window.innerHeight;
//     if (scrollPosition < 1200) {
//         element.style.display = 'none';
//     }
//     else {
//         element.style.display = 'flex';
//     }
// });
