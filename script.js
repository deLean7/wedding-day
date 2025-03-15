document.addEventListener("DOMContentLoaded", function () {

  guestName = window.location.search
  const greeting = document.getElementById("greeting")
  switch (guestName) {
    case "?Julia":
      greeting.innerText = "Привет моя любимая женщина"
      break;
  
    default:
      break;
  }
  // Таймер обратного отсчета
  function updateCountdown() {
      const weddingDate = new Date("2025-08-08T00:00:00").getTime();
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
