"use strict"

/* Section - Specializations */
let specHeader = document.createElement("h2");
specHeader.innerHTML = "Наш юрист по арбитражным делам специализируется в следующих сферах";

let specMain = document.createElement("div");
specMain.className = "specializationsMain";

let specBoxOne = document.createElement("div");
specBoxOne.className = "specializationsBox";
    let specBoxOneIcon = document.createElement("img");
    specBoxOneIcon.className = "specializationsIcon";
    specBoxOneIcon.src = "Icons/checkMark.png";
    let specBoxOneHeader = document.createElement("h3");
    specBoxOneHeader.innerHTML = "Строительство (Подряд)";

let specBoxTwo = document.createElement("div");
specBoxTwo.className = "specializationsBox";
    let specBoxTwoIcon = document.createElement("img");
    specBoxTwoIcon.className = "specializationsIcon";
    specBoxTwoIcon.src = "Icons/checkMark.png";
    let specBoxTwoHeader = document.createElement("h3");
    specBoxTwoHeader.innerHTML = "Поставка товара";

let specBoxThree = document.createElement("div");
specBoxThree.className = "specializationsBox";
    let specBoxThreeIcon = document.createElement("img");
    specBoxThreeIcon.className = "specializationsIcon";
    specBoxThreeIcon.src = "Icons/checkMark.png";
    let specBoxThreeHeader = document.createElement("h3");
    specBoxThreeHeader.innerHTML = "Оказание услуг";

let specBoxFour = document.createElement("div");
specBoxFour.className = "specializationsBox";
    let specBoxFourIcon = document.createElement("img");
    specBoxFourIcon.className = "specializationsIcon";
    specBoxFourIcon.src = "Icons/checkMark.png";
    let specBoxFourHeader = document.createElement("h3");
    specBoxFourHeader.innerHTML = "Аренда";

let specBoxFive = document.createElement("div");
specBoxFive.className = "specializationsBox";
    let specBoxFiveIcon = document.createElement("img");
    specBoxFiveIcon.className = "specializationsIcon";
    specBoxFiveIcon.src = "Icons/checkMark.png";
    let specBoxFiveHeader = document.createElement("h3");
    specBoxFiveHeader.innerHTML = "Лизинг";

let specBoxSix = document.createElement("div");
specBoxSix.className = "specializationsBox";
    let specBoxSixIcon = document.createElement("img");
    specBoxSixIcon.className = "specializationsIcon";
    specBoxSixIcon.src = "Icons/checkMark.png";
    let specBoxSixHeader = document.createElement("h3");
    specBoxSixHeader.innerHTML = "Кредиты и займы";

 let specBoxSeven = document.createElement("div");
specBoxSeven.className = "specializationsBox";
    let specBoxSevenIcon = document.createElement("img");
    specBoxSevenIcon.className = "specializationsIcon";
    specBoxSevenIcon.src = "Icons/checkMark.png";
    let specBoxSevenHeader = document.createElement("h3");
    specBoxSevenHeader.innerHTML = "Банкротство";

let specBoxEight = document.createElement("div");
specBoxEight.className = "specializationsBox";
    let specBoxEightIcon = document.createElement("img");
    specBoxEightIcon.className = "specializationsIcon";
    specBoxEightIcon.src = "Icons/checkMark.png";
    let specBoxEightHeader = document.createElement("h3");
    specBoxEightHeader.innerHTML = "Международное право";

let specBoxNine = document.createElement("div");
specBoxNine.className = "specializationsBox";
    let specBoxNineIcon = document.createElement("img");
    specBoxNineIcon.className = "specializationsIcon";
    specBoxNineIcon.src = "Icons/checkMark.png";
    let specBoxNineHeader = document.createElement("h3");
    specBoxNineHeader.innerHTML = "Земельное право";

let specBoxTen = document.createElement("div");
specBoxTen.className = "specializationsBox";
    let specBoxTenIcon = document.createElement("img");
    specBoxTenIcon.className = "specializationsIcon";
    specBoxTenIcon.src = "Icons/checkMark.png";
    let specBoxTenHeader = document.createElement("h3");
    specBoxTenHeader.innerHTML = "Налоговое законодательство";

let specBoxEleven = document.createElement("div");
specBoxEleven.className = "specializationsBox";
    let specBoxElevenIcon = document.createElement("img");
    specBoxElevenIcon.className = "specializationsIcon";
    specBoxElevenIcon.src = "Icons/checkMark.png";
    let specBoxElevenHeader = document.createElement("h3");
    specBoxElevenHeader.innerHTML = "Градостроительное законодательство";

let specBoxTwelve = document.createElement("div");
specBoxTwelve.className = "specializationsBox";
    let specBoxTwelveIcon = document.createElement("img");
    specBoxTwelveIcon.className = "specializationsIcon";
    specBoxTwelveIcon.src = "Icons/checkMark.png";
    let specBoxTwelveHeader = document.createElement("h3");
    specBoxTwelveHeader.innerHTML = "Исполнительное производство";




/* Location of the section Specializations in the DOM */
let posSpecializations = document.getElementById("specializations");

posSpecializations.prepend(specHeader);
posSpecializations.append(specMain);

specMain.append(specBoxOne);
    specBoxOne.append(specBoxOneIcon);
    specBoxOne.append(specBoxOneHeader);

specMain.append(specBoxTwo);
    specBoxTwo.append(specBoxTwoIcon);
    specBoxTwo.append(specBoxTwoHeader);

specMain.append(specBoxThree);
    specBoxThree.append(specBoxThreeIcon);
    specBoxThree.append(specBoxThreeHeader);

specMain.append(specBoxFour);
    specBoxFour.append(specBoxFourIcon);
    specBoxFour.append(specBoxFourHeader);

specMain.append(specBoxFive);
    specBoxFive.append(specBoxFiveIcon);
    specBoxFive.append(specBoxFiveHeader);

specMain.append(specBoxSix);
    specBoxSix.append(specBoxSixIcon);
    specBoxSix.append(specBoxSixHeader);

specMain.append(specBoxSeven);
    specBoxSeven.append(specBoxSevenIcon);
    specBoxSeven.append(specBoxSevenHeader);

specMain.append(specBoxEight);
    specBoxEight.append(specBoxEightIcon);
    specBoxEight.append(specBoxEightHeader);

specMain.append(specBoxNine);
    specBoxNine.append(specBoxNineIcon);
    specBoxNine.append(specBoxNineHeader);

specMain.append(specBoxTen);
    specBoxTen.append(specBoxTenIcon);
    specBoxTen.append(specBoxTenHeader);

specMain.append(specBoxEleven);
    specBoxEleven.append(specBoxElevenIcon);
    specBoxEleven.append(specBoxElevenHeader);

specMain.append(specBoxTwelve);
    specBoxTwelve.append(specBoxTwelveIcon);
    specBoxTwelve.append(specBoxTwelveHeader);


