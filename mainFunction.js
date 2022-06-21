"use strict";

/* Function for creating a block in the section Menu. Used in the Menu.js. */
function createNav(navHref, nameNav) {
    let createNavBox = document.createElement("a");
    createNavBox.className = "menu_section";
    createNavBox.href = navHref;
    createNavBox.innerHTML = nameNav;
    return createNavBox;
 }

function createElementAny(elem, nameClass, text = "") {
    let createElement = document.createElement(elem);
    createElement.className = nameClass;
    createElement.innerHTML = text
    return createElement;
}

/* Functuon for creating a header - h2. Used in the sectionAvantages.js, sectionStages.js, sectionSpecialilizations.js. */
function createHeaderH2(headerName) {
    let headerH2 = document.createElement("h2");
    headerH2.innerHTML = headerName;
    return headerH2;
 }

 /* Function for creating a div element. Used in the sectionAvantages.js, sectionStages.js, sectionSpecialilizations.js, bottomBody.js. */
 function createDiv(nameClass) {
     let div = document.createElement("div");
     div.className = nameClass;
     return div;
 }

 /* Function for creating a nav element. Used in the bottomBody.js. */
 function createNavBottom(nameClass) {
     let nav = document.createElement("nav");
     nav.className = nameClass;
     return nav;
 }

 function createLinkBottom(nameClass, href, nameLink, elementUl) {
    let createElementLi = document.createElement("li");
    let createElementA = document.createElement("a")
    createElementA.className = nameClass;
    createElementA.href = href;
    createElementA.innerHTML = nameLink;
    elementUl.append(createElementLi);
        createElementLi.append(createElementA);
    return createElementLi;
 }

 /* Function for creating a grup elements in Article. Used in the sectionAdvantages.js. */
 function createArticleAdvSection(headerName,text) {
    let createArticleAdv = document.createElement("article");
    createArticleAdv.className = "advantagesBox";
    let iconAdvantages = document.createElement("img");
    iconAdvantages.className = "iconAdvantages";
    iconAdvantages.src = "./Icons/fingerUp.png";
    let advBoxHeader = document.createElement("h3");
    advBoxHeader.innerHTML = headerName;
    let advBoxText = document.createElement("p");
    advBoxText.innerHTML = text;
    createArticleAdv.append(iconAdvantages);
    createArticleAdv.append(advBoxHeader);
    createArticleAdv.append(advBoxText);
    return createArticleAdv;
}

/* Function for creating a grup elements in Article. Used in the sectionSpecializations.js. */ 
function createArticleSpecSection(headerName) {
    let createArticleSpec = document.createElement("article");
    createArticleSpec.className = "specializationsBox";
    let specBoxIcon = document.createElement("img");
    specBoxIcon.className = "specializationsIcon";
    specBoxIcon.src = "./Icons/checkMark.png";
    let specHeader = document.createElement("h3");
    specHeader.innerHTML = headerName;
    createArticleSpec.append(specBoxIcon);
    createArticleSpec.append(specHeader);
    return createArticleSpec;
}

/* Function for creating a grup elements in Article. Used in the sectionStages.js. */ 
function createArticleStagesSection(nameClass, headerName, number) {
    let createArticleStage = document.createElement("article");
    createArticleStage.className = nameClass;
    let boxHeader =document.createElement("h4");
    boxHeader.innerHTML = headerName;
    let boxNumber = document.createElement("h5");
    boxNumber.innerHTML = number;
    createArticleStage.append(boxHeader);
    createArticleStage.append(boxNumber);
    return createArticleStage;
}

/* Function for creating a text in Article. Used in the sectionStages.js */
function createTextArticle(nameClass, arr) {
    let createArticleT = document.createElement("article");
    createArticleT.className = nameClass; 
    for(let text of arr) {
        let createText = document.createElement("p");
        createText.innerHTML = text;
        createArticleT.append(createText);        
    } 
    return createArticleT;
}

/* Function for creating a section background video. Used in the sectionAdvantages.js and sectionStages.js. */
function createVideoBackground (nameClass, video) {
    let createVideo = document.createElement("video");
    createVideo.className = nameClass;
    createVideo.src = video;
    createVideo.autoplay = true;
    createVideo.loop = true;
    createVideo.muted = true;
    createVideo.preload = "metadata";
    return createVideo;
}

/* Function for mouseover and mouseout. Used in the sectionAdvantages.js. */
function mouseEventAdvantages(elem, backGround = "#FFFFFF") {
    elem.onmouseover = function(){
        this.style.background = backGround;
        this.style.borderRadius = "50% 10% / 10% 40%";
        this.style.opacity = "0.7";
        this.style.transition = "0.2s"; 
    }
    elem.onmouseout = function() {
        this.style.background = "";
        this.style.opacity = "1";
    }
}

/* Function for mouseover and mouseout. Used in the sectionStages.js. */
function mouseEventStages(targetElement, element, z_index = "-100", ) {
    targetElement.onmouseover = () => {
        if(document.body.clientWidth <= 500) {
            element.style.position = "static";
        }
        element.style.zIndex = "10";
        element.style.transition = "0.4s";
        element.style.opacity = "0.8";
        targetElement.style.background = "url('Images/img3d.jpg')";
        targetElement.style.backgroundSize = "cover";
    }
    targetElement.onmouseout = () => {
        if(document.body.clientWidth <= 500) {
            element.style.position = "absolute";
        }
        element.style.zIndex = z_index;
        element.style.opacity = "0";
        targetElement.style.background = "";
        element.style.transition = "0.4s";
    }
}