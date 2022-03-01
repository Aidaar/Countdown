const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

// Назначаем дату отсчета
let countdownDate = new Date(2022, 02, 01, 18, 43, 0).getTime();

function getCountdownTime() {

	// Получить текущее время
	const now = new Date().getTime();

	// Найти разницу времени
	const distance = countdownDate - now;

	// 1с = 1000мс
	// 1v = 60c
	// 1ч = 60м
	// 1д = 24ч

	// Создаем переменные в милисекундах
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

 	//  Подсчет для дней, часов, минут и секунд
	 let days = Math.floor(distance / oneDay);
	 let hours = Math.floor((distance % oneDay) / oneHour);
	 let minutes = Math.floor((distance % oneHour) / oneMinute);
	 let seconds = Math.floor((distance % oneMinute) / 1000);

	 // Создаем массив с переменными
	const values = [days, hours, minutes, seconds];

	// Добавляем значения переменных на страницу
	items.forEach(function (item, index) {
		item.textContent =  values[index]
	});

	if (distance < 0) {
		clearInterval(countdown);
		countdownElement.innerHTML = "<h4 class='exprired'> Время вышло </h4>";
		   
	}
}

// Обновление счетчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000);

// Тнициализация текущего времени
getCountdownTime();