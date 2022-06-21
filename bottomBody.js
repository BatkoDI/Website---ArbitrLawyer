"use strict"

/*Footer*/
let bottomBdMain = createDiv("bottomBodyMain");

/* The first column of links  */
let bottomBdBoxOne = createNavBottom("bottomBodyBox");
    let bottomBdBoxOneList = document.createElement("ul");
        let bottomBdBoxOneMainP = createLinkBottom("bottomBodyBoxHref", "./main.html", "Главная", bottomBdBoxOneList);
        let bottomBdBoxOneCostP = createLinkBottom("bottomBodyBoxHref", "./costOfServices.html", "Цены", bottomBdBoxOneList);
        let bottomBdBoxOneServicesP = createLinkBottom("bottomBodyBoxHref", "./main.html#services", "Услуги", bottomBdBoxOneList);
        let bottomBdBoxOneStagesP = createLinkBottom("bottomBodyBoxHref", "#stages", "Этапы", bottomBdBoxOneList);
        let bottomBdBoxOneAdvantagesP = createLinkBottom("bottomBodyBoxHref", "#advantages", "Преймущества", bottomBdBoxOneList);
        let bottomBdBoxOneSpecP = createLinkBottom("bottomBodyBoxHref", "#specializations", "Специализация", bottomBdBoxOneList);

/* The second column of links  */
let bottomBdBoxTwo = createNavBottom("bottomBodyBox");
    let bottomBdBoxTwoList = document.createElement("ul");
        let bottomBdBoxTwo1P = createLinkBottom("bottomBodyBoxHref2", "./representation.html", "- Представительство в арбитражном суде;", bottomBdBoxTwoList);
        let bottomBdBoxTwo2P = createLinkBottom("bottomBodyBoxHref2", "./documentAnalysis.html", "- Анализ документов;", bottomBdBoxTwoList);
        let bottomBdBoxTwo3P = createLinkBottom("bottomBodyBoxHref2", "./preparationOfDoc.html", "- Подготовка документов;", bottomBdBoxTwoList);
        let bottomBdBoxTwo4P = createLinkBottom("bottomBodyBoxHref2", "./disputesGovernment.html", "- Споры с госорганами;", bottomBdBoxTwoList);
        let bottomBdBoxTwo5P = createLinkBottom("bottomBodyBoxHref2", "./contractDisputes.html", "- Споры по договорным обязательствам;", bottomBdBoxTwoList);
        let bottomBdBoxTwo6P = createLinkBottom("bottomBodyBoxHref2", "./corporateDisputes.html", "- Корпоративные споры;", bottomBdBoxTwoList);
        let bottomBdBoxTwo7P = createLinkBottom("bottomBodyBoxHref2", "./debtCollection.html", "- Взыскание задолженности;", bottomBdBoxTwoList);
        let bottomBdBoxTwo8P = createLinkBottom("bottomBodyBoxHref2", "./enforcementProceedings.html", "- Исполнительное производство;", bottomBdBoxTwoList);
        let bottomBdBoxTwo9P = createLinkBottom("bottomBodyBoxHref2", "./bankruptcy.html", "- Защита интересов в делах о банкротстве;", bottomBdBoxTwoList);
        let bottomBdBoxTwo10P = createLinkBottom("bottomBodyBoxHref2", "./transactionSupport.html", "- Сопровождение сделок;", bottomBdBoxTwoList);


/* The third column of links  */
let bottomBdBoxThree = createNavBottom("bottomBodyBox");
    let bottomBdBoxThreeList = document.createElement("ul");
        let bottomBdBoxThree1P = createLinkBottom("bottomBodyBoxHref2", "./intellectualProperty.html", "- Интеллектуальная собственность;", bottomBdBoxThreeList);
        let bottomBdBoxThree2P = createLinkBottom("bottomBodyBoxHref2", "./internationalLaw.html", "- Международное право;", bottomBdBoxThreeList);
        let bottomBdBoxThree3P = createLinkBottom("bottomBodyBoxHref2", "./taxAudits.html", "- Сопровождение налоговых проверок;", bottomBdBoxThreeList);
        let bottomBdBoxThree4P = createLinkBottom("bottomBodyBoxHref2", "./disputesGovernment.html", "- Сопровождение проверок госорганов;", bottomBdBoxThreeList);
        let bottomBdBoxThree5P = createLinkBottom("bottomBodyBoxHref2", "./employerProtection.html","- Защита интересов работодателя;", bottomBdBoxThreeList);
        let bottomBdBoxThree6P = createLinkBottom("bottomBodyBoxHref2", "./servicesIT.html", "- Услуги в IT-сфере;", bottomBdBoxThreeList);
        let bottomBdBoxThree7P = createLinkBottom("bottomBodyBoxHref2", "./taxOptimization.html", "- Законная оптимизация налогообложения;", bottomBdBoxThreeList);
        let bottomBdBoxThree8P = createLinkBottom("bottomBodyBoxHref2", "./subsidiaryLiability.html", "- Субсидиарная ответственность;", bottomBdBoxThreeList);
        let bottomBdBoxThree9P = createLinkBottom("bottomBodyBoxHref2", "./consulting.html", "- Юридический консалтинг;", bottomBdBoxThreeList);
        let bottomBdBoxThree10P = createLinkBottom("bottomBodyBoxHref2", "./subscriptionServices.html", "- Абонентское обслуживание;", bottomBdBoxThreeList);

let bottomBdBoxFour = document.createElement("article");
bottomBdBoxFour.className = "bottomBodyBox";
    let bottomBdBoxFourHeader = document.createElement("h6");
    bottomBdBoxFourHeader.innerHTML = "Контакты";
    let bottomBdBoxFourTelText = document.createElement("p");
    bottomBdBoxFourTelText.innerHTML = "Контактные телефоны:";
    let bottomBdBoxFourTelAdress = document.createElement("adress");
    let bottomBdBoxFourTelNumber1 = document.createElement("a");
    bottomBdBoxFourTelNumber1.className = "bottomBodyBoxHref2";
    bottomBdBoxFourTelNumber1.href = "tel:+79898176926";
    bottomBdBoxFourTelNumber1.innerHTML = "8-989-817-69-26";
    let bottomBdBoxFourEmailText = document.createElement("p");
    bottomBdBoxFourEmailText.innerHTML = "Адрес электронной почты:";
    let bottomBdBoxFourEmailAdress = document.createElement("adress");
    let bottomBdBoxFourEmail = document.createElement("a");
    bottomBdBoxFourEmail.className = "bottomBodyBoxHref2";
    bottomBdBoxFourEmail.href = "mailto:kabinet59-59@mail.ru";
    bottomBdBoxFourEmail.innerHTML = "kabinet59-59@mail.ru";


/* Location of the section BottomBody in the DOM */
let posBottomBody = document.getElementById("bottomBody");

posBottomBody.append(bottomBdMain);

bottomBdMain.append(bottomBdBoxOne);
    bottomBdBoxOne.append(bottomBdBoxOneList)
        
bottomBdMain.append(bottomBdBoxTwo);
    bottomBdBoxTwo.append(bottomBdBoxTwoList);
       
bottomBdMain.append(bottomBdBoxThree);
    bottomBdBoxThree.append(bottomBdBoxThreeList);
       
bottomBdMain.append(bottomBdBoxFour);
    bottomBdBoxFour.prepend(bottomBdBoxFourHeader);
    bottomBdBoxFour.append(bottomBdBoxFourTelText);
    bottomBdBoxFour.append(bottomBdBoxFourTelAdress);
        bottomBdBoxFourTelAdress.append(bottomBdBoxFourTelNumber1);
    bottomBdBoxFour.append(bottomBdBoxFourEmailText);
    bottomBdBoxFour.append(bottomBdBoxFourEmailAdress);
        bottomBdBoxFourEmailAdress.append(bottomBdBoxFourEmail);



