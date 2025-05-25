window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}
async function isMobileDevice() {
      return (typeof window.orientation !== "undefined") || 
              (navigator.userAgent.indexOf('IEMobile') !== -1) ||
              (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent));
  }
document.addEventListener("DOMContentLoaded", async function () {

   if (window.TelegramWebview) {
        const url = window.location.href;
        const chromeUrl = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;end`;
        window.location.href = chromeUrl;
    }

  console.log(await isMobileDevice())
  
  const soundIcon = document.getElementById('sound-icon');
  const soundIconEnd = document.getElementById('sound-icon-end');
  const backgroundMusic = document.getElementById('background-music');
  let isMusicPlaying = false;
  
  // Обработчик клика по иконке
  soundIcon.addEventListener('click', function() {
      if (isMusicPlaying) {
          // Если музыка играет - выключаем
          backgroundMusic.pause();
          soundIcon.src = 'assets/sound-off.svg';
          soundIconEnd.src = 'assets/sound-off.svg';
          isMusicPlaying = false;
      } else {
          // Если музыка не играет - включаем
          backgroundMusic.play()
              .then(() => {
                  soundIcon.src = 'assets/sound-on.svg';
                  soundIconEnd.src = 'assets/sound-on.svg';
                  isMusicPlaying = true;
              })
              .catch(error => {
                  console.error('Ошибка воспроизведения музыки:', error);
                  alert('Не удалось воспроизвести музыку. Пожалуйста, разрешите воспроизведение звука на этой странице.');
              });
      }
  });
    // Обработчик клика по иконке
  soundIconEnd.addEventListener('click', function() {
     if (isMusicPlaying) {
          // Если музыка играет - выключаем
          backgroundMusic.pause();
          soundIcon.src = 'assets/sound-off.svg';
          soundIconEnd.src = 'assets/sound-off.svg';
          isMusicPlaying = false;
      } else {
          // Если музыка не играет - включаем
          backgroundMusic.play()
              .then(() => {
                  soundIcon.src = 'assets/sound-on.svg';
                  soundIconEnd.src = 'assets/sound-on.svg';
                  isMusicPlaying = true;
              })
              .catch(error => {
                  console.error('Ошибка воспроизведения музыки:', error);
                  alert('Не удалось воспроизвести музыку. Пожалуйста, разрешите воспроизведение звука на этой странице.');
              });
      }
  });


  guestId = window.location.search.replace("?","")
  guestId ? console.log(guestId) : document.body.remove()
  await givePersonalSite(parseInt(guestId))

  // Таймер обратного отсчета
  function updateCountdown() {
      const weddingDate = new Date("2025-08-08T14:00:00").getTime();
      const now = new Date().getTime();
      const timeLeft = weddingDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = `${days} д. ${hours} ч. ${minutes} м. ${seconds} с.`;

      setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
  
// Блокировка горизонтального скролла
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
    
    // Фиксация ширины
    function fixViewport() {
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
    }
    fixViewport();
    window.addEventListener('resize', fixViewport);


    // Инициализация всех слайдеров на странице
document.querySelectorAll('.slider-wrapper').forEach((wrapper) => {
    const container = wrapper.querySelector('.slider-container');
    const slider = container.querySelector('.slider');
    const slides = container.querySelectorAll('.slide');
    const prevBtn = wrapper.querySelector('.prev-arrow');
    const nextBtn = wrapper.querySelector('.next-arrow');
    const dotsContainer = wrapper.querySelector('.slider-dots');
    const colorPalette = wrapper.closest('.examples-container').querySelector('.color-palette');
    
    let currentSlide = 0;
    
    // Создаем точки навигации
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    const colorBoxes = colorPalette.querySelectorAll('.color-box');
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Обновляем активные точки
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Анимация и применение цвета
        animateCurrentColor();
        applyColorFromPalette();
    }
    
    function animateCurrentColor() {
        // Убираем все анимации
        colorBoxes.forEach(box => {
            box.classList.remove('animate');
        });
        
        // Анимируем цвет, соответствующий текущему слайду
        if (colorBoxes.length > 0) {
            const colorIndex = currentSlide % colorBoxes.length;
            colorBoxes[colorIndex].classList.add('animate');
        }
    }

    function applyColorFromPalette() {
        if (colorBoxes.length > 0) {
            const colorIndex = currentSlide % colorBoxes.length;
            const activeColorBox = colorBoxes[colorIndex];
            
            // Получаем цвет из data-атрибута или background-color
            const color = activeColorBox.dataset.color || getComputedStyle(activeColorBox).backgroundColor;
            
            // Применяем цвет к текущему слайду
            slides[currentSlide].style.backgroundColor = color;
            
            // Сохраняем цвет в data-атрибут слайда
            slides[currentSlide].dataset.background = color;
        }
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Инициализация
    updateSlider();
});


});
async function givePersonalDear(params) {
  
}
async function givePersonalSite(guestId)
{
  let textGreeting = ""
  let typeGuest = 0
  switch (guestId) {



    case 309209: // Лиза 309209
      textGreeting = "Ростислав и Елизавета"
      typeGuest = 3
      break;
    case 183463: //Рост 183463
      textGreeting = "Ростислав и Елизавета"
      typeGuest = 3
      break;
    case 338461: //Валентин 338461
      textGreeting = "Валентин и Аня"
      typeGuest = 3
      break;
    case 149326: //Анна (Валентин) 149326
      textGreeting = "Валентин и Аня"
      typeGuest = 3
      break;
    case 355936: // Петя 355936
      textGreeting = "Петр и Мария"
      typeGuest = 3
      break;
    case 529041: //Маша 529041
      textGreeting = "Петр и Мария"
      typeGuest = 3
      break;
    case 574843: //Соня 574843
      textGreeting = "Софа"
      typeGuest = 2
      break;
    case 365822: //Полина 365822
      textGreeting = "Полина"
      typeGuest = 2
      break;
    case 996065: //Кристина 996065
      textGreeting = "Кристина"
      typeGuest = 2

      break;
      case 788478: //Наташа  788478
      textGreeting = "Наташа"
      typeGuest = 2

      break;
      case 394812: //Никита 394812
      textGreeting = "Никита и Кристина"
      typeGuest = 3

      break;
      case 963474: //Кристина 963474
      textGreeting = "Никита и Кристина"
      typeGuest = 3

      break;
      case 534764: // Папа Мама 534764
      textGreeting = "Папа и Мама"
      typeGuest = 3

      break;
      case 730295: //Миша Марина + дети 730295
      textGreeting = "Миша, Марина, Аленочка, Ванечка и Машенька"
      typeGuest = 3

      break;
      case 315552: //Бабушка Дедушка 315552
      textGreeting = "Бабушка и Дедушка"
      typeGuest = 3

      break;
      case 199844: //Женя Нина Максим Кривцовы 199844
      textGreeting = "Евгений, Нина и Максим"
      typeGuest = 3
      break

      case 523226:
      textGreeting = "Евгений и Стефания"
      typeGuest = 3
      break;

      case 395166:
      textGreeting = "Ниночка"
      typeGuest = 2
      break;  

      case 905420: //Теть Лена и Араз 905420
      textGreeting = "Елена и Араз"
      typeGuest = 3

      break;
      case 586169: //Маша Витя Ваня Вологины 586169
      textGreeting = "Виктор, Мария и Ванечка"
      typeGuest = 3

      break;
      case 265939: //Кира Вологина 265939
      textGreeting = "Кируся"
      typeGuest = 2

      break;
      case 204194: //Тамара Вологина 204194
      textGreeting = "Тамара Викторовна" // think
      typeGuest = 4

      break;
      case 873819: //Олег Вологин 873819
      textGreeting = "Олег и Софья"
      typeGuest = 3

      break;
      case 612764: //Дима Царев 612764
      textGreeting = "Дмитрий"
      typeGuest = 1

      break;
      case 301298: //Маргарита Царева 301298
      textGreeting = "Маргарита Александровна" //think
      typeGuest = 4
      break;
      case 512744: //Мама и Паша 512744
      textGreeting = "Мама и Паша" //think
      typeGuest = 3
      break;
      case 319135: //Лена 319135
      textGreeting = "Лена" //think
      typeGuest = 2
      break;
      case 436275: //Саша Вика Максим Федяевы 436275
      textGreeting = "Саша, Вика и Максим" //think
      typeGuest = 3
      break;
      case 428068: //Алина Максим Меренич 428068
      textGreeting = "Алина, Саша и Максим" //think
      typeGuest = 3
      break;
      default:
        document.body.remove
        return

  }
  //return textGreeting
  giveGreeting(textGreeting, typeGuest)
}
/*
typeGuest:
1- ОН 1
2- ОНА 1
3- Их 2 и более
4 - ОНА 1 НА ВЫ
*/
async function giveGreeting(textGreeting, typeGuest)
{
  const greeting = document.getElementById("greeting");
  const dear = document.getElementById("dear");
  const dearOur = document.getElementById("dearOur");

  const ourHeartsText = document.getElementById("ourHeartsText");
  const inviteYouText = document.getElementById("inviteYouText")
  const musicText = document.getElementById("musicText");
  const uOrU = document.getElementById("uOrU");
  const letsG = document.getElementById("letsG");
  const closeEyesG = document.getElementById("closeEyesG");
  const vas = document.getElementById("vas");
  const readyG = document.getElementById("readyG");
  const forgetG = document.getElementById("forgetG");
  const heartG = document.getElementById("heartG");
  if(typeGuest == 1)
  {
    dear.innerHTML = "Дорогой";
    dearOur.innerHTML = "Дорогой "+textGreeting
    greeting.innerText = textGreeting;

    ourHeartsText.textContent = `Наши сердца переполняются радостью, 
                и нам не терпится разделить с тобой
                этот особенный день! `
    inviteYouText.textContent = "Приглашаем тебя на нашу свадьбу!";
    musicText.textContent = "Перед прочтением просим тебя включить музыку для создания атмосферы";
    uOrU.textContent = "с тобой - с тем"
    letsG.textContent = "Давай";
    closeEyesG.textContent = "Закрой";
    vas.textContent = "тебя";
    readyG.textContent = "Готовься";
    forgetG.textContent = "забудь";
    heartG.textContent = "сердце"

  }
  else if(typeGuest == 2)
  {
    dear.innerHTML = "Дорогая";
    dearOur.innerHTML = "Дорогая " + textGreeting
    greeting.innerText = textGreeting;

    ourHeartsText.textContent = `Наши сердца переполняются радостью, 
                и нам не терпится разделить с тобой
                этот особенный день! `
    inviteYouText.textContent = "Приглашаем тебя на нашу свадьбу!";
    musicText.textContent = "Перед прочтением просим тебя включить музыку для создания атмосферы";
    uOrU.textContent = "с тобой — с той";
    letsG.textContent = "Давай";
    closeEyesG.textContent = "Закрой";
    vas.textContent = "тебя";
    readyG.textContent = "Готовься";
    forgetG.textContent = "забудь";
    heartG.textContent = "сердце"
  }
  else if(typeGuest == 3)
  {
    dear.innerHTML = "Дорогие";
    dearOur.innerHTML = "Дорогие наши";
    greeting.innerText = textGreeting;

  }
  else if(typeGuest == 4)
  {
    dear.innerHTML = "Дорогая";
    dearOur.innerHTML = "Дорогая " + textGreeting
    greeting.innerText = textGreeting;

    ourHeartsText.textContent = `Наши сердца переполняются радостью, 
                и нам не терпится разделить с Вами
                этот особенный день! `
    inviteYouText.textContent = "Приглашаем Вас на нашу свадьбу!";
    musicText.textContent = "Перед прочтением просим Вас включить музыку для создания атмосферы";
    uOrU.textContent = "с Вами — с той";
    letsG.textContent = "Давайте";
    closeEyesG.textContent = "Закройте";
    vas.textContent = "Вас";
    readyG.textContent = "Готовьтесь";
    forgetG.textContent = "забудьте";
    heartG.textContent = "сердце"

  }

}

/*
async function giveTiming(startTime)
{
  const timingBreakfast = document.getElementById("timingBreakfast");
  const timingZAGS = document.getElementById("timingZAGS");
  const timingBanket = document.getElementById("timingBanket");
  timingBreakfast.style.display = 'none';
  timingZAGS.style.display = 'none';
  timingBanket.style.display = 'none';
  switch (startTime) {
    case "11:00":
      timingBreakfast.style.display = 'flex';
      timingZAGS.style.display = 'flex';
      timingBanket.style.display = 'flex';
      break;
    case "14:00":
      timingZAGS.style.display = 'flex';
      timingBanket.style.display = 'flex';
      break;
    case "16:00":
      timingBanket.style.display = 'flex';
      break;

  
    default:
      break;
  }
}
*/
/*
async function giveGreeting(guestId)
{
switch (guestId) {
  case 309209: 
    break;

  case 309209: // Лиза 309209
    break;
  case 183463: //Рост 183463

    break;
  case 338461: //Валентин 338461

    break;
  case 149326: //Анна (Валентин) 149326

    break;
  case 355936: // Петя 355936

    break;
    case 529041: //Маша 529041

    break;
    case 574843: //Соня 574843

    break;
    case 365822: //Полина 365822

    break;
    case 996065: //Кристина 996065

    break;
    case 788478: //Наташа  788478

    break;
    case 394812: //Никита 394812

    break;
    case 963474: //Кристина 963474

    break;
    case 534764: // Папа Мама 534764

    break;
    case 730295: //Миша Марина + дети 730295

    break;
    case 315552: //Бабушка Дедушка 315552

    break;
    case 199844: //Женя Нина Максим Кривцовы 199844

    break;
    case 905420: //Теть Лена и Араз 905420

    break;
    case 586169: //Маша Витя Ваня Вологины 586169

    break;
    case 265939: //Кира Вологина 265939

    break;
    case 204194: //Тамара Вологина 204194

    break;
    case 873819: //Олег Вологин 873819

    break;
    case 612764: //Дима Царев 612764

    break;
    case 301298: //Маргарита Царева 301298

    break;
    case 512744: //Мама и Паша 512744

    break;
    case 319135: //Лена 319135

    break;
    case 436275: //Саша Вика Максим Федяевы 436275

    break;
    case 428068: //Алина Максим Меренич 428068

  default:
    break;
}
}
*/
// Фукционал
/*
Приветствие 
Тайминг
Приколы:
-Дресс-код
-Пожелания
Фотки
Пожелания 
*/


/*
--Друзья--
Лиза 309209
Рост 183463
Валентин 338461
Анна (Валентин) 149326
Петя 355936
Маша 529041
Соня 574843
Полина 365822
Кристина 996065
Наташа  788478
Никита 394812
Кристина 963474

==Семья Юли==

Папа Мама 534764
Миша Марина + дети 730295
Бабушка Дедушка 315552
Женя Нина Максим Кривцовы 199844
Нина мл Кривцова 395166
Женя мл Кривцова 523226
Теть Лена и Араз 905420
Маша Витя Ваня Вологины 586169
Кира Вологина 265939
Тамара Вологина 204194
Олег Вологин 873819
Дима Царев 612764
Маргарита Царева 301298

==Семья Вани==
Мама и Паша 512744
Лена 319135
Саша Вика Максим Федяевы 436275
Алина Максим Меренич 428068





? Виктор Иванович
? Сережа Настя Никита Павлик


? Саша
? Лера
? Леонид (Лера)



*/