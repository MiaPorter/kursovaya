document.addEventListener('DOMContentLoaded', function() {
    let numDays = document.querySelector('#timerDays');
    let numHours = document.querySelector('#timerHours');
    let numMinutes = document.querySelector('#timerMinutes');
    let numSeconds = document.querySelector('#timerSeconds');
    let deadline = new Date('2025-04-26T23:59:59'); //конечная дата
  
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
  window.location.href = "engThanks.html"
});
  
// let btn = document.getElementById('#btn');
// btn.addEventListener('click', function() {
    
// })