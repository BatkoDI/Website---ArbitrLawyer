"use strict"

/* Section - Specializations */

/* Creating a section header */
let specHeader = createHeaderH2("Наш юрист по арбитражным делам специализируется в следующих сферах");

/* Creating a div element */
let specMain = createDiv("specializationsMain");

/* Creating the grup elements in Article one - twelve*/
let specBoxOne = createArticleSpecSection("Строительство (Подряд)");
let specBoxTwo = createArticleSpecSection("Поставка товара");
let specBoxThree = createArticleSpecSection("Оказание услуг");
let specBoxFour = createArticleSpecSection("Аренда");
let specBoxFive = createArticleSpecSection("Лизинг");
let specBoxSix = createArticleSpecSection("Кредиты и займы");
let specBoxSeven = createArticleSpecSection("Банкротство");
let specBoxEight = createArticleSpecSection("Международное право");
let specBoxNine = createArticleSpecSection("Земельное право");
let specBoxTen = createArticleSpecSection("Налоговое законодательство");
let specBoxEleven = createArticleSpecSection("Градостроительное законодательство");
let specBoxTwelve = createArticleSpecSection("Исполнительное производство");

/* Location of the section Specializations in the DOM */
let posSpecializations = document.getElementById("specializations");

posSpecializations.prepend(specHeader);
    posSpecializations.append(specMain);
        specMain.append(specBoxOne);
        specMain.append(specBoxTwo);
        specMain.append(specBoxThree);
        specMain.append(specBoxFour);
        specMain.append(specBoxFive);
        specMain.append(specBoxSix);
        specMain.append(specBoxSeven);
        specMain.append(specBoxEight);
        specMain.append(specBoxNine);
        specMain.append(specBoxTen);
        specMain.append(specBoxEleven);
        specMain.append(specBoxTwelve);



