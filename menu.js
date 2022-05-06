"use strict"

/* Блок меню */
  /* Секция - Главная */
  let mainMenu = document.createElement("a");
  mainMenu.className = "menu_section";
  mainMenu.href = "main.html";
  mainMenu.innerHTML = "Главная";

  /* Секция - Цены*/
  let costsMenu = document.createElement("a");
  costsMenu.className = "menu_section";
  costsMenu.href = "costOfServices.html";
  costsMenu.innerHTML = "Цены";

  /* Секция - Контакты */
  let contactsMenu = document.createElement("a");
  contactsMenu.className = "menu_section";
  contactsMenu.href = "#bottomBody";
  contactsMenu.innerHTML = "Контакты";

  /* Секция - Услуги*/
  let servicesMenu = document.createElement("a");
  servicesMenu.className = "menu_section";
  servicesMenu.href = "main.html#services";
  servicesMenu.innerHTML = "Услуги";

  /* Секция - Этапы*/
  let stagesMenu = document.createElement("a");
  stagesMenu.className = "menu_section";
  stagesMenu.href = "#stages";
  stagesMenu.innerHTML = "Этапы";

  /* Секция - Преимущества*/
  let advantagesMenu = document.createElement("a");
  advantagesMenu.className = "menu_section";
  advantagesMenu.href = "#advantages";
  advantagesMenu.innerHTML = "Преимущества";

  /* Секция - Специализация*/
  let specializationsMenu = document.createElement("a");
  specializationsMenu.className = "menu_section";
  specializationsMenu.href = "#specializations";
  specializationsMenu.innerHTML = "Специализация";

  /* Вставка блока Меню в DOM */
  let posMenu = document.getElementById("menu")

  posMenu.append(mainMenu);
  posMenu.append(costsMenu);
  posMenu.append(contactsMenu);
  posMenu.append(servicesMenu);
  posMenu.append(stagesMenu);
  posMenu.append(advantagesMenu);
  posMenu.append(specializationsMenu);
  

/* Когда пользователь прокручивает страницу вниз, скрываем меню.
  Когда пользователь прокручивает страницу вверх, показываем меню. */
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