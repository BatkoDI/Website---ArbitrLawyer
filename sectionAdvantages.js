"use strict"

/* Section - Advantages */

/* Creating the section header */
let headerAdvantages = createHeaderH2("Преимущества нашего юриста по арбитражным спорам");

/* Creating the div element */
let advantagesMain = createDiv("advantagesMain");

/* Creating the grup elements in Article */
/* Creating the article One */
let advBoxOne = createArticleAdvSection(
    "Опыт", 
    "У нас работают арбитражные юристы с огромным опытом работы, которые являются профессионалами своего дел. На нашем счету множество выигранных дел и богатая судебная практика."
);

/* Creating the article Two */
 let advBoxTwo = createArticleAdvSection(
    "Специализация",
    "Мы специализируемся исключительно только на арбитражных делах и всего того, что касается взаимоотношений между хозяйствующими субъектами."
 );

 /* Creating the article Three */
let advBoxThree = createArticleAdvSection(
    "Качество и скорость",
    "Все услуги выполняем качественно и в максимально короткие сроки. При этом быстрота выполнения не уменьшает качество и не ухудшает результат."
);

/* Creating the article Four */
let advBoxFour = createArticleAdvSection(
    "Оплата по результату",
    "При достигнутых договоренностях можем работать на результат. При этом оплата оказанных услуг производиться только при положительном разрешении вопроса. Размер гонорара зависит от договоренностей и полученного окончательного результата."
);

/* Creating the article Five */
 let advBoxFive = createArticleAdvSection(
    "Честность",
    "Объективно и честно расскажем о перспективах разрешения возникшей ситуации. Не беремся за заведомо проигрышные дела."
 );

 /* Creating the article Six */
let advBoxSix = createArticleAdvSection(
    "Приемлемые цена",
    "Наши цены приятно удивят Вас, так как мы не являемся посредниками и не платим никому процентов за привлечение клиентов. Помимо этого, при положительном разрешении вопроса в суде большая часть расходов возмещается."
);

/* Creating the video for section background */
let videoAdvantages = createVideoBackground("vidAdvantages", "./video/videoAdvantages.mp4");


let advantagesIndentationBox = createDiv ("advantagesIndentationBox");

/* Location of the section Advantages in the DOM */
let posAdvantages = document.getElementById("advantages");

posAdvantages.prepend(headerAdvantages);
    posAdvantages.append(advantagesMain);
        advantagesMain.append(advBoxOne);
        advantagesMain.append(advBoxTwo);
        advantagesMain.append(advBoxThree);
        advantagesMain.append(advBoxFour);
        advantagesMain.append(advBoxFive);   
        advantagesMain.append(advBoxSix);
        advantagesMain.append(advantagesIndentationBox);
        advantagesMain.append(videoAdvantages);

/* Mouse hover event in the section Advantages */
mouseEventAdvantages(advBoxOne);
mouseEventAdvantages(advBoxTwo);
mouseEventAdvantages(advBoxThree);
mouseEventAdvantages(advBoxFour);
mouseEventAdvantages(advBoxFive);
mouseEventAdvantages(advBoxSix);

