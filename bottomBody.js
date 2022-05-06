"use strict"

/*Section - BottomBody*/
let bottomBdMain = document.createElement("div");
bottomBdMain.className = "bottomBodyMain";

let bottomBdBoxOne = document.createElement("div");
bottomBdBoxOne.className = "bottomBodyBox";
    let bottomBdBoxOneMainP = document.createElement("p");
        let bottomBdBoxOneMain = document.createElement("a")
        bottomBdBoxOneMain.className = "bottomBodyBoxHref";
        bottomBdBoxOneMain.href = "main.html";
        bottomBdBoxOneMain.innerHTML = "Главная";
    let bottomBdBoxOneCostP = document.createElement("p");
        let bottomBdBoxOneCost = document.createElement("a");
        bottomBdBoxOneCost.className = "bottomBodyBoxHref";
        bottomBdBoxOneCost.href = "costOfServices.html";
        bottomBdBoxOneCost.innerHTML = "Цены";
    let bottomBdBoxOneServicesP = document.createElement("p");
        let bottomBdBoxOneServices = document.createElement("a");
        bottomBdBoxOneServices.className = "bottomBodyBoxHref";
        bottomBdBoxOneServices.href = "main.html#services"
        bottomBdBoxOneServices.innerHTML = "Услуги";
    let bottomBdBoxOneStagesP = document.createElement("p");
        let bottomBdBoxOneStages = document.createElement("a");
        bottomBdBoxOneStages.className = "bottomBodyBoxHref";
        bottomBdBoxOneStages.href = "#stages";
        bottomBdBoxOneStages.innerHTML = "Этапы";
    let bottomBdBoxOneAdvantagesP = document.createElement("p");
        let bottomBdBoxOneAdvantages = document.createElement("a");
        bottomBdBoxOneAdvantages.className = "bottomBodyBoxHref";
        bottomBdBoxOneAdvantages.href = "#advantages";
        bottomBdBoxOneAdvantages.innerHTML = "Преймущества";
    let bottomBdBoxOneSpecP = document.createElement("p");
        let bottomBdBoxOneSpec = document.createElement("a");
        bottomBdBoxOneSpec.className = "bottomBodyBoxHref";
        bottomBdBoxOneSpec.href = "#specializations";
        bottomBdBoxOneSpec.innerHTML = "Специализация";

let bottomBdBoxTwo = document.createElement("div");
bottomBdBoxTwo.className = "bottomBodyBox";
    let bottomBdBoxTwo1P = document.createElement("p");
        let bottomBdBoxTwo1 = document.createElement("a")
        bottomBdBoxTwo1.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo1.href = "representation.html";
        bottomBdBoxTwo1.innerHTML = "- Представительство в арбитражном суде;";
    let bottomBdBoxTwo2P = document.createElement("p");
        let bottomBdBoxTwo2 = document.createElement("a");
        bottomBdBoxTwo2.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo2.href = "documentAnalysis.html";
        bottomBdBoxTwo2.innerHTML = "- Анализ документов;";
    let bottomBdBoxTwo3P = document.createElement("p");
        let bottomBdBoxTwo3 = document.createElement("a");
        bottomBdBoxTwo3.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo3.href = "preparationOfDoc.html";
        bottomBdBoxTwo3.innerHTML = "- Подготовка документов;";
    let bottomBdBoxTwo4P = document.createElement("p");
        let bottomBdBoxTwo4 = document.createElement("a");
        bottomBdBoxTwo4.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo4.href = "disputesGovernment.html";
        bottomBdBoxTwo4.innerHTML = "- Споры с госорганами;";
    let bottomBdBoxTwo5P = document.createElement("p");
        let bottomBdBoxTwo5 = document.createElement("a");
        bottomBdBoxTwo5.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo5.href = "contractDisputes.html";
        bottomBdBoxTwo5.innerHTML = "- Споры по договорным обязательствам;";
    let bottomBdBoxTwo6P = document.createElement("p");
        let bottomBdBoxTwo6 = document.createElement("a");
        bottomBdBoxTwo6.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo6.href = "corporateDisputes.html";
        bottomBdBoxTwo6.innerHTML = "- Корпоративные споры;";
    let bottomBdBoxTwo7P = document.createElement("p");
        let bottomBdBoxTwo7 = document.createElement("a");
        bottomBdBoxTwo7.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo7.href = "debtCollection.html";
        bottomBdBoxTwo7.innerHTML = "- Взыскание задолженности;";
    let bottomBdBoxTwo8P = document.createElement("p");
        let bottomBdBoxTwo8 = document.createElement("a");
        bottomBdBoxTwo8.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo8.href = "enforcementProceedings.html";
        bottomBdBoxTwo8.innerHTML = "- Исполнительное производство;";
    let bottomBdBoxTwo9P = document.createElement("p");
        let bottomBdBoxTwo9 = document.createElement("a");
        bottomBdBoxTwo9.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo9.href = "bankruptcy.html";
        bottomBdBoxTwo9.innerHTML = "- Защита интересов в делах о банкротстве;";
    let bottomBdBoxTwo10P = document.createElement("p");
        let bottomBdBoxTwo10 = document.createElement("a");
        bottomBdBoxTwo10.className = "bottomBodyBoxHref2";
        bottomBdBoxTwo10.href = "transactionSupport.html";
        bottomBdBoxTwo10.innerHTML = "- Сопровождение сделок;";

let bottomBdBoxThree = document.createElement("div");
bottomBdBoxThree.className = "bottomBodyBox";
    let bottomBdBoxThree1P = document.createElement("p");
        let bottomBdBoxThree1 = document.createElement("a")
        bottomBdBoxThree1.className = "bottomBodyBoxHref2";
        bottomBdBoxThree1.href = "intellectualProperty.html";
        bottomBdBoxThree1.innerHTML = "- Интеллектуальная собственность;";
    let bottomBdBoxThree2P = document.createElement("p");
        let bottomBdBoxThree2 = document.createElement("a")
        bottomBdBoxThree2.className = "bottomBodyBoxHref2";
        bottomBdBoxThree2.href = "internationalLaw.html";
        bottomBdBoxThree2.innerHTML = "- Международное право;";
    let bottomBdBoxThree3P = document.createElement("p");
        let bottomBdBoxThree3 = document.createElement("a")
        bottomBdBoxThree3.className = "bottomBodyBoxHref2";
        bottomBdBoxThree3.href = "taxAudits.html";
        bottomBdBoxThree3.innerHTML = "- Сопровождение налоговых проверок;";
    let bottomBdBoxThree4P = document.createElement("p");
        let bottomBdBoxThree4 = document.createElement("a")
        bottomBdBoxThree4.className = "bottomBodyBoxHref2";
        bottomBdBoxThree4.href = "disputesGovernment.html";
        bottomBdBoxThree4.innerHTML = "- Сопровождение проверок госорганов;";
    let bottomBdBoxThree5P = document.createElement("p");
        let bottomBdBoxThree5 = document.createElement("a")
        bottomBdBoxThree5.className = "bottomBodyBoxHref2";
        bottomBdBoxThree5.href = "employerProtection.html";
        bottomBdBoxThree5.innerHTML = "- Защита интересов работодателя;";
    let bottomBdBoxThree6P = document.createElement("p");
        let bottomBdBoxThree6 = document.createElement("a")
        bottomBdBoxThree6.className = "bottomBodyBoxHref2";
        bottomBdBoxThree6.href = "servicesIT.html";
        bottomBdBoxThree6.innerHTML = "- Услуги в IT-сфере;";
    let bottomBdBoxThree7P = document.createElement("p");
        let bottomBdBoxThree7 = document.createElement("a")
        bottomBdBoxThree7.className = "bottomBodyBoxHref2";
        bottomBdBoxThree7.href = "taxOptimization.html";
        bottomBdBoxThree7.innerHTML = "- Законная оптимизация налогообложения;";
    let bottomBdBoxThree8P = document.createElement("p");
        let bottomBdBoxThree8 = document.createElement("a")
        bottomBdBoxThree8.className = "bottomBodyBoxHref2";
        bottomBdBoxThree8.href = "subsidiaryLiability.html";
        bottomBdBoxThree8.innerHTML = "- Субсидиарная ответственность;";
    let bottomBdBoxThree9P = document.createElement("p");
        let bottomBdBoxThree9 = document.createElement("a")
        bottomBdBoxThree9.className = "bottomBodyBoxHref2";
        bottomBdBoxThree9.href = "consulting.html";
        bottomBdBoxThree9.innerHTML = "- Юридический консалтинг;";
    let bottomBdBoxThree10P = document.createElement("p");
        let bottomBdBoxThree10 = document.createElement("a")
        bottomBdBoxThree10.className = "bottomBodyBoxHref2";
        bottomBdBoxThree10.href = "subscriptionServices.html";
        bottomBdBoxThree10.innerHTML = "- Абонентское обслуживание;";

let bottomBdBoxFour = document.createElement("div");
bottomBdBoxFour.className = "bottomBodyBox";
    let bottomBdBoxFourHeader = document.createElement("h6");
    bottomBdBoxFourHeader.innerHTML = "Контакты";
    let bottomBdBoxFourTelText = document.createElement("p");
    bottomBdBoxFourTelText.innerHTML = "Контактные телефоны:";
    let bottomBdBoxFourTelNumber1 = document.createElement("h6");
    bottomBdBoxFourTelNumber1.innerHTML = "8-989-817-69-26";
    let bottomBdBoxFourEmailText = document.createElement("p");
    bottomBdBoxFourEmailText.innerHTML = "Адрес электронной почты:";
    let bottomBdBoxFourEmail = document.createElement("h6");
    bottomBdBoxFourEmail.innerHTML = "kabinet59-59@mail.ru";


/* Location of the section BottomBody in the DOM */
let posBottomBody = document.getElementById("bottomBody");

posBottomBody.append(bottomBdMain);

bottomBdMain.append(bottomBdBoxOne);
    bottomBdBoxOne.prepend(bottomBdBoxOneMainP);
        bottomBdBoxOneMainP.append(bottomBdBoxOneMain);
    bottomBdBoxOne.append(bottomBdBoxOneCostP);
        bottomBdBoxOneCostP.append(bottomBdBoxOneCost);
    bottomBdBoxOne.append(bottomBdBoxOneServicesP);
        bottomBdBoxOneServicesP.append(bottomBdBoxOneServices);
    bottomBdBoxOne.append(bottomBdBoxOneStagesP);
        bottomBdBoxOneStagesP.append(bottomBdBoxOneStages);  
    bottomBdBoxOne.append(bottomBdBoxOneAdvantagesP);
        bottomBdBoxOneAdvantagesP.append(bottomBdBoxOneAdvantages);
    bottomBdBoxOne.append(bottomBdBoxOneSpecP);
        bottomBdBoxOneSpecP.append(bottomBdBoxOneSpec);  

bottomBdMain.append(bottomBdBoxTwo);
    bottomBdBoxTwo.append(bottomBdBoxTwo1P);
        bottomBdBoxTwo1P.append(bottomBdBoxTwo1);
    bottomBdBoxTwo.append(bottomBdBoxTwo2P);
        bottomBdBoxTwo2P.append(bottomBdBoxTwo2);
    bottomBdBoxTwo.append(bottomBdBoxTwo3P);
        bottomBdBoxTwo3P.append(bottomBdBoxTwo3);
    bottomBdBoxTwo.append(bottomBdBoxTwo4P);
        bottomBdBoxTwo4P.append(bottomBdBoxTwo4);
    bottomBdBoxTwo.append(bottomBdBoxTwo5P);
        bottomBdBoxTwo5P.append(bottomBdBoxTwo5);
    bottomBdBoxTwo.append(bottomBdBoxTwo6P);
        bottomBdBoxTwo6P.append(bottomBdBoxTwo6);
    bottomBdBoxTwo.append(bottomBdBoxTwo7P);
        bottomBdBoxTwo7P.append(bottomBdBoxTwo7);
    bottomBdBoxTwo.append(bottomBdBoxTwo8P);
        bottomBdBoxTwo8P.append(bottomBdBoxTwo8);
    bottomBdBoxTwo.append(bottomBdBoxTwo9P);
        bottomBdBoxTwo9P.append(bottomBdBoxTwo9);
    bottomBdBoxTwo.append(bottomBdBoxTwo10P);
        bottomBdBoxTwo10P.append(bottomBdBoxTwo10);

bottomBdMain.append(bottomBdBoxThree);
    bottomBdBoxThree.append(bottomBdBoxThree1P);
        bottomBdBoxThree1P.append(bottomBdBoxThree1);
    bottomBdBoxThree.append(bottomBdBoxThree2P);
        bottomBdBoxThree2P.append(bottomBdBoxThree2);
    bottomBdBoxThree.append(bottomBdBoxThree3P);
        bottomBdBoxThree3P.append(bottomBdBoxThree3);
    bottomBdBoxThree.append(bottomBdBoxThree4P);
        bottomBdBoxThree4P.append(bottomBdBoxThree4);
    bottomBdBoxThree.append(bottomBdBoxThree5P);
        bottomBdBoxThree5P.append(bottomBdBoxThree5);
    bottomBdBoxThree.append(bottomBdBoxThree6P);
        bottomBdBoxThree6P.append(bottomBdBoxThree6);
    bottomBdBoxThree.append(bottomBdBoxThree7P);
        bottomBdBoxThree7P.append(bottomBdBoxThree7);
    bottomBdBoxThree.append(bottomBdBoxThree8P);
        bottomBdBoxThree8P.append(bottomBdBoxThree8);
    bottomBdBoxThree.append(bottomBdBoxThree9P);
        bottomBdBoxThree9P.append(bottomBdBoxThree9);
    bottomBdBoxThree.append(bottomBdBoxThree10P);
        bottomBdBoxThree10P.append(bottomBdBoxThree10);

bottomBdMain.append(bottomBdBoxFour);
    bottomBdBoxFour.prepend(bottomBdBoxFourHeader);
    bottomBdBoxFour.append(bottomBdBoxFourTelText);
    bottomBdBoxFour.append(bottomBdBoxFourTelNumber1);
    bottomBdBoxFour.append(bottomBdBoxFourEmailText);
    bottomBdBoxFour.append(bottomBdBoxFourEmail);



