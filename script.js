document.addEventListener("DOMContentLoaded", async function () {
  document.addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    audio.play().then(() => {
        console.log("Музыка запущена!");
    }).catch((error) => {
        console.error("Ошибка при воспроизведении:", error);
    });
});

  guestId = window.location.search.replace("?","")
  guestId ? console.log(guestId) : document.body.remove()
  let textGreting = await givePersonalSite(parseInt(guestId))
  const greeting = document.getElementById("greeting")
  greeting.innerHTML = textGreting;
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

  // Квиз-фан
  document.getElementById("quiz-btn").addEventListener("click", function () {
      alert("Вопрос 1: Где Иван сделал предложение Юлии?");
  });
});

async function givePersonalSite(guestId)
{
  let textGreeting = ""
  switch (guestId) {



    case 309209: // Лиза 309209
      textGreeting = "Ростислав и Елизавета"
      await giveTiming("11:00");
      break;
    case 183463: //Рост 183463
      textGreeting = "Ростислав и Елизавета"
      await giveTiming("14:00");
      break;
    case 338461: //Валентин 338461
      textGreeting = "Валентин и Аня"
      await giveTiming("14:00");
      break;
    case 149326: //Анна (Валентин) 149326
      textGreeting = "Валентин и Аня"
      await giveTiming("14:00");
      break;
    case 355936: // Петя 355936
      textGreeting = "Петр и Мария"
      await giveTiming("16:00");
      break;
    case 529041: //Маша 529041
      textGreeting = "Петр и Мария"
      break;
    case 574843: //Соня 574843
      textGreeting = "Софа"
      break;
    case 365822: //Полина 365822
      textGreeting = "Полина"
      break;
    case 996065: //Кристина 996065
      textGreeting = "Кристина"

      break;
      case 788478: //Наташа  788478
      textGreeting = "Наташа"

      break;
      case 394812: //Никита 394812
      textGreeting = "Никита и Кристина"

      break;
      case 963474: //Кристина 963474
      textGreeting = "Никита и Кристина"

      break;
      case 534764: // Папа Мама 534764
      textGreeting = "Папа и Мама"

      break;
      case 730295: //Миша Марина + дети 730295
      textGreeting = "Миша, Марина, Аленочка, Ванечка и Машенька"

      break;
      case 315552: //Бабушка Дедушка 315552
      textGreeting = "Бабушка и Дедушка"

      break;
      case 199844: //Женя Нина Максим Кривцовы 199844
      textGreeting = "Евгений, Нина и Максим"

      break;
      case 905420: //Теть Лена и Араз 905420
      textGreeting = "Елена и Араз"

      break;
      case 586169: //Маша Витя Ваня Вологины 586169
      textGreeting = "Виктор, Мария и Ванечка"

      break;
      case 265939: //Кира Вологина 265939
      textGreeting = "Кируся"

      break;
      case 204194: //Тамара Вологина 204194
      textGreeting = "Бабушка Тома" // think

      break;
      case 873819: //Олег Вологин 873819
      textGreeting = "Олег"

      break;
      case 612764: //Дима Царев 612764
      textGreeting = "Дмитрий"

      break;
      case 301298: //Маргарита Царева 301298
      textGreeting = "Бабушка Рита" //think

      break;
      case 512744: //Мама и Паша 512744
      textGreeting = "Мама и Паша" //think

      break;
      case 319135: //Лена 319135
      textGreeting = "Лена" //think

      break;
      case 436275: //Саша Вика Максим Федяевы 436275
      textGreeting = "Бабушка Рита" //think

      break;
      case 428068: //Алина Максим Меренич 428068
      textGreeting = "Алина и Максим" //think

      default:
        document.body.remove
        return

  }
  return textGreeting

}
async function giveGreeting(greetingText)
{
  const greeting = document.getElementById("greeting")
  greeting.innerText = greetingText

}
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