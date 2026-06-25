let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let bask = document.querySelector(".bask");

burger.onclick = function () {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  bask.classList.toggle("hide");
};

let regButton = document.querySelector(".regButton");
let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".closePopup");

if (regButton) {
  regButton.onclick = function () {
    popup.classList.add("open");
  };
}

if (closePopup) {
  closePopup.onclick = function () {
    popup.classList.remove("open");
  };
}

// список
let eventLines = document.querySelectorAll(".eventLine");
eventLines.forEach(function (line) {
  line.onclick = function () {
    eventLines.forEach(function (item) {
      item.classList.remove("open");
    });

    line.classList.add("open");
  };
});

let merchItems = document.querySelectorAll(".merchItem");
merchItems.forEach(function (item) {
  item.onclick = function () {
    merchItems.forEach(function (card) {
      card.classList.remove("open");
    });

    item.classList.add("open");
  };
});
let eventItems = document.querySelectorAll(".eventItem");

eventItems.forEach(function (item) {
  let button = item.querySelector(".eventArrow");
  button.onclick = function () {
    eventItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
      }
    });

    item.classList.toggle("open");
  };
});

// счетчик для корзины
let basketText = document.querySelector(".basketText");
// кнопки в карточках
let goodButtons = document.querySelectorAll(".goodBottom button");
let basketCount = 0;
goodButtons.forEach(function (button) {
  button.onclick = function () {
    basketCount = basketCount + 1;
    basketText.textContent = "(" + basketCount + ")";
  };
});

// листалка книги
let slideTitle = document.querySelector(".slideTitle");
let slideText = document.querySelector(".slideText");
let slideTextTwo = document.querySelector(".slideTextTwo");
let slideImage = document.querySelector(".slideImage");
let prevSlide = document.querySelector(".prevSlide");
let nextSlide = document.querySelector(".nextSlide");

let slides = [
  {
  title: "ОШИБКА ЦИКЛА",
  text: "ошибка цикла возникает, когда система снова возвращается к одному действию. процесс продолжается, но движения вперёд нет.",
  textTwo: "в книге эта ошибка показана как замкнутое пространство, где повтор становится главным событием.",
  image: "images/k_1.png",
},
  {
    title: "ОШИБКА ЗНАЧЕНИЯ",
    text: "ошибка значения появляется, когда данные не совпадают с ожиданиями системы. всё выглядит правильно, но внутри возникает конфликт.",
    textTwo: "этот раздел показывает, как неверное значение может изменить логику интерфейса и превратить порядок в сбой.",
    image: "images/k_2.png",
  },
  {
    title: "ОШИБКА ТЕКСТУР",
    text: "ошибка текстур возникает, когда поверхность объекта загружается неправильно или полностью исчезает.",
    textTwo: "визуальный мир начинает распадаться: материалы путаются, формы теряют привычный вид, а изображение становится нестабильным.",
    image: "images/k_3.png",
  },
  {
  title: "ОШИБКА ЗАГРУЗКИ",
  text: "ошибка загрузки — это ожидание, которое не заканчивается. система обещает результат, но не показывает его.",
  textTwo: "в книге эта ошибка раскрывается через зависшие состояния, пустые экраны и остановленный процесс.",
  image: "images/k_4.png",
},
  {
    title: "КОНФЕРЕНС ЗАЛ",
    text: "конференс зал — пространство фестиваля, где ошибки обсуждаются как часть цифровой культуры.",
    textTwo: "здесь лекции, разговоры и визуальные материалы собираются в одну систему, где сбой становится темой исследования.",
    image: "images/k_5.png",
  },
];

let currentSlide = 0;

function showSlide() {
  slideTitle.textContent = slides[currentSlide].title;
  slideText.textContent = slides[currentSlide].text;
  slideTextTwo.textContent = slides[currentSlide].textTwo;
  slideImage.src = slides[currentSlide].image;
}

// листание, типо если счетчик +1, то надо другой контент поставить
if (nextSlide) {
  nextSlide.onclick = function () {
    currentSlide = currentSlide + 1;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide();
  };
}

// и типо назад тоже самое
if (prevSlide) {
  prevSlide.onclick = function () {
    currentSlide = currentSlide - 1;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide();
  };
}