"use strict"

/* Section - Advantages */
let headerAdvantages = document.createElement("h2");
headerAdvantages.innerHTML = "Преимущества нашего юриста по арбитражным спорам";

let advantagesMain = document.createElement("div");
advantagesMain.className = "advantagesMain";

let advBoxOne = document.createElement("div");
advBoxOne.className = "advantagesBox";
    let iconAdvantagesOne = document.createElement("img");
    iconAdvantagesOne.className = "iconAdvantages";
    iconAdvantagesOne.src = "Icons/fingerUp.png";
    let advBoxOneHeader = document.createElement("h3");
    advBoxOneHeader.innerHTML = "Опыт";
    let advBoxOneText = document.createElement("p");
    advBoxOneText.innerHTML = "У нас работают арбитражные юристы с огромным опытом работы, которые являются профессионалами своего дел. На нашем счету множество выигранных дел и богатая судебная практика.";

 let advBoxTwo = document.createElement("div");
advBoxTwo.className = "advantagesBox";
    let iconAdvantagesTwo = document.createElement("img");
    iconAdvantagesTwo.className = "iconAdvantages";
    iconAdvantagesTwo.src = "Icons/fingerUp.png";
    let advBoxTwoHeader = document.createElement("h3");
    advBoxTwoHeader.innerHTML = "Специализация";
    let advBoxTwoText = document.createElement("p");
    advBoxTwoText.innerHTML = "Мы специализируемся исключительно только на арбитражных делах и всего того, что касается взаимоотношений между хозяйствующими субъектами."

let advBoxThree = document.createElement("div");
advBoxThree.className = "advantagesBox";
    let iconAdvantagesThree = document.createElement("img");
    iconAdvantagesThree.className = "iconAdvantages";
    iconAdvantagesThree.src = "Icons/fingerUp.png";
    let advBoxThreeHeader = document.createElement("h3");
    advBoxThreeHeader.innerHTML = "Качество и скорость";
    let advBoxThreeText = document.createElement("p");
    advBoxThreeText.innerHTML = "Все услуги выполняем качественно и в максимально короткие сроки. При этом быстрота выполнения не уменьшает качество и не ухудшает результат.";

let advBoxFour = document.createElement("div");
advBoxFour.className = "advantagesBox";
    let iconAdvantagesFour = document.createElement("img");
    iconAdvantagesFour.className = "iconAdvantages";
    iconAdvantagesFour.src = "Icons/fingerUp.png";
    let advBoxFourHeader = document.createElement("h3");
    advBoxFourHeader.innerHTML = "Оплата по результату";
    let advBoxFourText = document.createElement("p");
    advBoxFourText.innerHTML = "При достигнутых договоренностях можем работать на результат. При этом оплата оказанных услуг производиться только при положительном разрешении вопроса. Размер гонорара зависит от договоренностей и полученного окончательного результата.";

 let advBoxFive = document.createElement("div");
advBoxFive.className = "advantagesBox";
    let iconAdvantagesFive = document.createElement("img");
    iconAdvantagesFive.className = "iconAdvantages";
    iconAdvantagesFive.src = "Icons/fingerUp.png";
    let advBoxFiveHeader = document.createElement("h3");
    advBoxFiveHeader.innerHTML = "Честность";
    let advBoxFiveText = document.createElement("p");
    advBoxFiveText.innerHTML = "Объективно и честно расскажем о перспективах разрешения возникшей ситуации. Не беремся за заведомо проигрышные дела.";

let advBoxSix = document.createElement("div");
advBoxSix.className = "advantagesBox";
    let advBoxSixHeader = document.createElement("h3");
    advBoxSixHeader.innerHTML = "Приемлемые цена";
    let advBoxSixText = document.createElement("p");
    advBoxSixText.innerHTML = "Наши цены приятно удивят Вас, так как мы не являемся посредниками и не платим никому процентов за привлечение клиентов. Помимо этого, при положительном разрешении вопроса в суде большая часть расходов возмещается.";
    let iconAdvantagesSix = document.createElement("img");
    iconAdvantagesSix.className = "iconAdvantages";
    iconAdvantagesSix.src = "Icons/fingerUp.png";

let videoAdvantages = document.createElement("video");
videoAdvantages.className = "vidAdvantages";
videoAdvantages.src = "video/videoAdvantages.mp4";
videoAdvantages.autoplay = true;
videoAdvantages.loop = true;
videoAdvantages.muted = true;

let advantagesIndentationBox = document.createElement("div");
advantagesIndentationBox.className = "advantagesIndentationBox";

/* Location of the section Advantages in the DOM */
let posAdvantages = document.getElementById("advantages");

posAdvantages.prepend(headerAdvantages);
posAdvantages.append(advantagesMain);

advantagesMain.append(advBoxOne);
    advBoxOne.append(iconAdvantagesOne);
    advBoxOne.append(advBoxOneHeader);
    advBoxOne.append(advBoxOneText);

advantagesMain.append(advBoxTwo);
    advBoxTwo.append(iconAdvantagesTwo);
    advBoxTwo.append(advBoxTwoHeader);
    advBoxTwo.append(advBoxTwoText);

advantagesMain.append(advBoxThree);
    advBoxThree.append(iconAdvantagesThree);
    advBoxThree.append(advBoxThreeHeader);
    advBoxThree.append(advBoxThreeText);

advantagesMain.append(advBoxFour);
    advBoxFour.append(iconAdvantagesFour);
    advBoxFour.append(advBoxFourHeader);
    advBoxFour.append(advBoxFourText);

advantagesMain.append(advBoxFive);
    advBoxFive.append(iconAdvantagesFive);
    advBoxFive.append(advBoxFiveHeader);
    advBoxFive.append(advBoxFiveText);

advantagesMain.append(advBoxSix);
    advBoxSix.append(iconAdvantagesSix);   
    advBoxSix.append(advBoxSixHeader);
    advBoxSix.append(advBoxSixText);

advantagesMain.append(advantagesIndentationBox);

advantagesMain.append(videoAdvantages);

/* Mouse hover event in the section Advantages */
/* Mouse hover - AdvantagesOne */
advBoxOne.onmouseover = mouseOverAdvOne;
advBoxOne.onmouseout = mouseOutAdvOne;
function mouseOverAdvOne() {
    advBoxOne.style.background = "#FFFFFF";
    advBoxOne.style.opacity = "0.7";
    advBoxOne.style.transition = "0.2s";
}
function mouseOutAdvOne() {
    advBoxOne.style.background = "";
    advBoxOne.style.opacity = "1";
}

/* Mouse hover - AdvantagesTwo */
advBoxTwo.onmouseover = mouseOverAdvTwo;
advBoxTwo.onmouseout = mouseOutAdvTwo;
function mouseOverAdvTwo() {
    advBoxTwo.style.background = "#FFFFFF";
    advBoxTwo.style.opacity = "0.7";
    advBoxTwo.style.transition = "0.2s";
}
function mouseOutAdvTwo() {
    advBoxTwo.style.background = "";
    advBoxTwo.style.opacity = "1";
}

/* Mouse hover - AdvantagesThree */
advBoxThree.onmouseover = mouseOverAdvThree;
advBoxThree.onmouseout = mouseOutAdvThree;
function mouseOverAdvThree() {
    advBoxThree.style.background = "#FFFFFF";
    advBoxThree.style.opacity = "0.7";
    advBoxThree.style.transition = "0.2s";
}
function mouseOutAdvThree() {
    advBoxThree.style.background = "";
    advBoxThree.style.opacity = "1";
}

/* Mouse hover - AdvantagesFour*/
advBoxFour.onmouseover = mouseOverAdvFour;
advBoxFour.onmouseout = mouseOutAdvFour;
function mouseOverAdvFour() {
    advBoxFour.style.background = "#FFFFFF";
    advBoxFour.style.opacity = "0.7";
    advBoxFour.style.transition = "0.2s";
}
function mouseOutAdvFour() {
    advBoxFour.style.background = "";
    advBoxFour.style.opacity = "1";
}

/* Mouse hover - AdvantagesFive*/
advBoxFive.onmouseover = mouseOverAdvFive;
advBoxFive.onmouseout = mouseOutAdvFive;
function mouseOverAdvFive() {
    advBoxFive.style.background = "#FFFFFF";
    advBoxFive.style.opacity = "0.7";
    advBoxFive.style.transition = "0.2s";
}
function mouseOutAdvFive() {
    advBoxFive.style.background = "";
    advBoxFive.style.opacity = "1";
}

/* Mouse hover - AdvantagesSix*/
advBoxSix.onmouseover = mouseOverAdvSix;
advBoxSix.onmouseout = mouseOutAdvSix;
function mouseOverAdvSix() {
    advBoxSix.style.background = "#FFFFFF";
    advBoxSix.style.opacity = "0.7";
    advBoxSix.style.transition = "0.2s";
}
function mouseOutAdvSix() {
    advBoxSix.style.background = "";
    advBoxSix.style.opacity = "1";
}