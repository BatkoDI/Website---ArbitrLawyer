"use strict"

  /* Creating section - Main */
  let mainMenu = createNav("main.html", "Главная");

  /* Creating section - Prices */
  let costsMenu = createNav("costOfServices.html", "Цены");

  /* Creating section - Contacts */
  let contactsMenu = createNav("#bottomBody", "Контакты");

  /* Creating section - Services */
  let servicesMenu = createNav("main.html#services", "Услуги");

  /* Creating section - Stages */
  let stagesMenu = createNav("#stages", "Этапы");

  /* Creating section - Advantages */
  let advantagesMenu = createNav("#advantages", "Преимущества");

  /* Creating section - Specializations */
  let specializationsMenu = createNav("#specializations","Специализация");


  let posMenu = document.getElementById("menu");

  /* Creating location menu for devices with screen size of more then 500px. */
  function createLocationNavComp () {
  /* If the change is made from a screen with a size less then 500px? then 
  unecessery elements that were created for mobile devices are removed. */  
    if(createNavDiv && createNavUl && createNavLi){
      createNavDiv.remove();
      createNavUl.remove();
      createNavLi.remove();
    }
      posMenu.append(mainMenu);
      posMenu.append(costsMenu);
      posMenu.append(contactsMenu);
      posMenu.append(servicesMenu);
      posMenu.append(stagesMenu);
      posMenu.append(advantagesMenu);
      posMenu.append(specializationsMenu);
    } 

  /* Creating elements for mobile devices. */
  let createNavDiv = createElementAny("div", "menuButton", "Меню");
  let createNavUl = createElementAny("ul", "menuUl");
  let createNavLi = createElementAny("li", "menuLi"); 
  /* Creating location menu for devaices with screen size of less then 500px. */
  function createLocationNavMobile() { 
    posMenu.append(createNavDiv);
        createNavDiv.append(createNavUl);
          createNavUl.append(createNavLi);
            createNavLi.append(mainMenu);
            createNavLi.append(costsMenu);
            createNavLi.append(contactsMenu);
            createNavLi.append(servicesMenu);
            createNavLi.append(stagesMenu);
            createNavLi.append(advantagesMenu);
            createNavLi.append(specializationsMenu);
  }

 /* Creating a function to track thescreen size. If the screen is large then 500px, 
 then a menu is created for large screen. If the screen becomes less then 500px, 
 then a menu for mobile devices with one button is created */
  let mediaQuery = window.matchMedia("(min-width: 501px)");

  function menuChange(media) {
    if(media) {
      createLocationNavComp();
    } else {
      createLocationNavMobile();
    }
  };

  mediaQuery.addEventListener("change", function(event) {
    menuChange(event.matches);
  })
  
   menuChange(mediaQuery.matches); 
  



/* When the user scrolls down the page, we hide the menu.
When the user scrolls the page up, we show the menu. */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "0";
    } else {
      document.getElementById("menu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }