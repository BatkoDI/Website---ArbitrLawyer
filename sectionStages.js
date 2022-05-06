"use strict"

/* Section - Stages */
let headerStages = document.createElement("h2");
headerStages.innerHTML = "Этапы помощи арбитражного юриста";

let stagesMain = document.createElement("div");
stagesMain.className = "stagesMain";

let boxOne = document.createElement("div");
boxOne.className = "stagesBoxOne";
    let boxOneHeader =document.createElement("h4");
    boxOneHeader.innerHTML = "Превентивные меры";
    let boxOneNumber = document.createElement("h5");
    boxOneNumber.innerHTML = "1";

let boxTwo = document.createElement("div");
boxTwo.className = "stagesBoxTwo";
    let boxTwoHeader = document.createElement("h4");
    boxTwoHeader.innerHTML = "Досудебное урегулирование";
    let boxTwoNumber = document.createElement("h5");
    boxTwoNumber.innerHTML = "2";

let boxThree = document.createElement("div");
boxThree.className = "stagesBoxThree";
    let boxThreeHeader = document.createElement("h4");
    boxThreeHeader.innerHTML = "Подготовка к суду";
    let boxThreeNumber = document.createElement("h5");
    boxThreeNumber.innerHTML = "3";

let boxFour = document.createElement("div");
boxFour.className = "stagesBoxFour";
    let boxFourHeader = document.createElement("h4");
    boxFourHeader.innerHTML = "Представительство в суде";
    let boxFourNumber = document.createElement("h5");
    boxFourNumber.innerHTML = "4";

let boxFive = document.createElement("div");
boxFive.className = "stagesBoxFive";
    let boxFiveHeader = document.createElement("h4");
    boxFiveHeader.innerHTML = "Восстановление нарушенных прав";
    let boxFiveNumber = document.createElement("h5");
    boxFiveNumber.innerHTML = "5";

let boxSix = document.createElement("div");
boxSix.className = "stagesBoxSix";
    let boxSixHeader = document.createElement("h4");
    boxSixHeader.innerHTML = "Празднование победы";
    let boxSixNumber = document.createElement("h5");
    boxSixNumber.innerHTML = "6";

let boxTextOne = document.createElement("div");
boxTextOne.className = "stagesBoxTextOne";
    let boxTextOneIn1 = document.createElement("p")
    boxTextOneIn1.innerHTML = "Этот этап начинается с подготовки открытия бизнеса или начала какого-либо бизнеспроекта и продолжается во время ведения финансово-хозяйственной деятельности.\
                        Этап включает в себя подготовку и ведение бизнеса, таким образом, чтобы он, приносил максимальную прибыль и максимально защищал интересы его владельца, при этом\
                        соответствовал всем нормам действующего законодательства. Для этого необходимо воспользоваться услугами грамотных арбитражных юристов, имеющих огромный опыт в\
                        данной сфере. При помощи нашего арбитражного юриста Вы сможете построить свой бизнес грамотно."
    let boxTextOneIn2 = document.createElement("p");
    boxTextOneIn2.innerHTML = "В случае возникновения какой-либо проблемы, будь то проблемы с покупателями или с поставщиками, возникающие в связи с неоплатой товара, работ, услуг, или\
                        не поставкой вовремя товара, не оказания вовремя услуг, не выполнения вовремя работ, или проблемы, возникающие с государственными органами при проверках, а также\
                        множестве других проблем, бизнес будет максимально защищен.";
    let boxTextOneIn3 = document.createElement("p");
    boxTextOneIn3.innerHTML = "По мнению нашего юриста по арбитражным делам превентивные меры являются один из самых важных и главных этапов оказываемой помощи арбитражным юристом.";

let boxTextTwo = document.createElement("div");
boxTextTwo.className = "stagesBoxTextTwo";
    let boxTextTwoIn = document.createElement("p");
    boxTextTwoIn.innerHTML = "Данный этап начинается с момента возникновения проблемы. Например, поставщик не отгружает товар в установленные сроки, покупатель не хочет принимать товар,\
                        подрядчик выполняет работы некачественно или затягивает сроки выполнения работ и т.д. На этом этапе очень важно правильно оформить все документы, которые\
                        засвидетельствуют проблемный факт. От правильности составления таких документов и соблюдения установленного порядка проведения определенных юридических процедур,\
                        установленных законом или договором, зависит дальнейшее положительное разрешение данного вопроса, в случае обращения в Арбитражный суд. При помощи нашего\
                        арбитражного юриста Вы сможете максимально безболезненно пройти данный этап. Следующим шагом в большинстве случаев досудебного урегулирования является направление\
                        Претензии (Досудебной претензии). Иногда, если это предусмотрено законном или договором, необходимо провесится процедуру медиации.  Претензию можно направить как\
                        сразу, так и непосредственно перед обращение в суд. Главное при этом соблюсти сроки исковой давности (в большинстве случаев это 3 года) и выждать сроки ответа на\
                        претензию. По мнению нашего юриста по арбитражным делам наиболее важным моментом являются первоначальные юридически значимые действия, которые необходимо\
                        произвести непосредственно при возникновении проблемы. Не оформив определенных юридических документов и не выполнив определенных процедуры в последствии будет\
                        трудно ссылаться на данные обстоятельства и ссылаться на них как доказательства в суде. Мы обращаем особое внимание, что на этапе досудебного урегулирования,\
                        необходимо сразу же при возникновении проблемы привлекать к разрешению возникшего вопроса грамотного юриста по арбитражным спорам. Обратившись к нам Вы получите\
                        услугу нашего лучшего арбитражного юриста, который быстро и качественно поможет в разрешении сложившейся проблемы.";

let boxTextThree = document.createElement("div");
boxTextThree.className = "stagesBoxTextThree";
    let boxTextThreeIn = document.createElement("p");
    boxTextThreeIn.innerHTML = "На данном этапе осуществляется подготовка к судебному процессу, включающая в себя направление Досудебной претензии (если таковая не направлялась), сбор\
    необходимых документов и других необходимых доказательств, подготовка Искового заявления, Возражения или Отзыва. А также, подготавливаются различные Ходатайства, например, о\
    наложении обеспечительных мер и т.д. При этом очень важно выбрать именно те документы и доказательства, которые указывает на правоту Ваших требований или Возражений Наш арбитражный\
    юрист указывает, что данный этап очень зависит от предыдущих двух этапов Превентивных мер и Досудебного урегулирования. И если на стадии предшествующих этапов, не были правильно\
    оформлены документы, факт, или неправильно или не в полном объеме проведены определенные процедуры, то при подготовке к суду могут возникнуть определенные проблемы, которые приводят\
    к уменьшению вероятности положительного разрешения спора в арбитражном суде. Порой это даже может привести вообще к нулевым шансам выигрыша судебного спора. В этом случае наш юрист\
    по арбитражным делам сразу же сообщит Вам об этом. Мы не беремся за те дела, которые заранее обречены на неуспех, и отговариваем от этой бесперспективной затеи своих клиентов. Только\
    грамотный и опытный юрист по арбитражным спорам сможет подготовить весь необходимый пакет документов (доказательств) и грамотно составить необходимые процессуальные документы, в том\
    числе и само Исковое заявление, в котором грамотно изложит исковые требования, и грамотно и обосновано укажет на обстоятельства, указывающие на правоту заявленных требований.\
    Обратившись к нам Вы получите услугу нашего лучшего арбитражного юриста, который быстро и качественно поможет в разрешении сложившейся проблемы на этапе Подготовки к суду.";

let boxTextFour = document.createElement("div");
boxTextFour.className = "stagesBoxTextFour";
    let boxTextFourIn = document.createElement("p");
    boxTextFourIn.innerHTML = "На данном этапе происходит непосредственно разбирательство в судебном процессе, который включает в себя участие юриста по арбитражным делам в судебном\
    процессе, подготовку необходимых документов и представлении их в суд, при необходимости подготовку и предоставлении в суд дополнительных доказательств, и т.д. При этом очень важно\
    правильно и своевременно применять весь доступный перечень прав. Грамотно и в нужный момент предоставить возразит, при необходимости заявить Ходатайство о назначении экспертизы и\
    т.д. Наш арбитражный юрист указывает, что на данном еще в большей степени зависит от предыдущих трех этапов. А также, при этом представительство интересов в суде должен осуществлять\
    очень опытный и грамотный юрист по арбитражным делам. Так как, если даже Вами очень хорошо были пройдены предыдущие этапы, у вас много доказательств, которые юридически правильно\
    оформлены, все необходимые юридические процедуры оформлены и пройдены в установленной последовательности, но представительствами Ваших интересов занимается не очень компетентный в\
    рассматриваемом вопросе арбитражный юрист, то даже при таком положении дел, когда казалось вероятность проиграть процесс минимальные, не вовремя или  вообще не поданное ходатайство\
    или возражение, а также не проведение еще каких-либо значимых для рассматриваемого дела процессуальных действий, может уменьшить Ваши шансы в положительном разрешении вопроса в\
    судебном порядке, а порой даже и вовсе к проигрышу всего дела. У нас работают только опытные и грамотные юристы по арбитражным спорам, которые представят Ваши интересы в Арбитражном\
    суде, помогут быстро и качественно разрешить судебный спор.";    

let boxTextFive = document.createElement("div");
boxTextFive.className = "stagesBoxTextFive";
    let boxTextFiveIn = document.createElement("p");
    boxTextFiveIn.innerHTML = "Данный этап начинается с момента вступления в законную силу судебного акта и продолжается вплоть до полного его исполнения. Включает в себя получение\
    Исполнительного документа, его предъявлении к исполнению в службу судебных приставов, либо в банк где находится расчетный счет должника, а также осуществления контроля за\
    исполнением Исполнительного документа. Если Вы считаете, что выиграв дело в суде закрываете весь вопрос, то ошибаетесь. Так как, это зачастую только половина пути. Не всегда,\
    получается быстро исполнить Исполнительный документ. Это может быть связано, как с намеренным оказанием противодействия со стороны должник, так и с банальным недолжным исполнением\
    своих обязательств должностными лицами службы судебных приставов. Наш арбитражный юрист считает, что в случае недолжном исполнении своих обязанностей судебными приставами необходимо\
    незамедлительно писать Жалобы на их действия и/или бездействия, а также если никакого результата Жалобы не принесут оспаривать действия и/или бездействия в судебном порядке. Зачастую,\
    только после «волшебного пинка, каковыми являются Жалобы и обращение в суд (Заявление) приставы начинают работать. При помощи нашего арбитражного юриста вы также можете прибегнуть\
    еще к одному очень действенному оружию по взысканию долга, каковым является введение в отношении должника процедуры банкротства, а также другим не менее действенным процедурам.\
    Обратившись к нам Вы получите услугу нашего лучшего арбитражного юриста, который быстро и качественно поможет в разрешении сложившейся проблемы на этапе Исполнительного производства.";

let boxTextSix = document.createElement("div");
boxTextSix.className = "stagesBoxTextSix";
    let boxTextSixIn = document.createElement("p");
    boxTextSixIn.innerHTML = "Пожалуй, самый приятный из всех этапов. Но это в случае положительного разрешения вопроса. На этом этапе необходимо подвести итоги и сделать определенные\
    выводы. Посмотреть на каком этапе были допущены ошибки. Быстро исправить эти ошибки. Только при помощи нашего арбитражного юриста, ну или конечно какого-либо другого не менее\
    опытного и грамотного юриста Вы ощутите этот сладкий вкус победы.";

let video = document.createElement("video");
video.className = "vidStages";
video.src = "video/videoStages.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true;

/* Location of the section Stages in the DOM */
let posStages = document.getElementById("stages");

posStages.prepend(headerStages);
posStages.append(stagesMain);

stagesMain.append(boxOne);
    boxOne.prepend(boxOneHeader);
    boxOne.append(boxOneNumber);
   
stagesMain.append(boxTwo);
    boxTwo.prepend(boxTwoHeader);
    boxTwo.append(boxTwoNumber);

stagesMain.append(boxThree);
    boxThree.prepend(boxThreeHeader);
    boxThree.append(boxThreeNumber);

stagesMain.append(boxFour);
    boxFour.append(boxFourHeader);
    boxFour.append(boxFourNumber);

stagesMain.append(boxFive);
    boxFive.append(boxFiveHeader);
    boxFive.append(boxFiveNumber);

stagesMain.append(boxSix);
    boxSix.append(boxSixHeader);
    boxSix.append(boxSixNumber);

stagesMain.append(boxTextOne);
    boxTextOne.prepend(boxTextOneIn1);
    boxTextOne.append(boxTextOneIn2);
    boxTextOne.append(boxTextOneIn3);

stagesMain.append(boxTextTwo);
    boxTextTwo.append(boxTextTwoIn);

stagesMain.append(boxTextThree);
    boxTextThree.append(boxTextThreeIn);

stagesMain.append(boxTextFour);
    boxTextFour.append(boxTextFourIn);

stagesMain.append(boxTextFive);
    boxTextFive.append(boxTextFiveIn);

stagesMain.append(boxTextSix);
    boxTextSix.append(boxTextSixIn);

stagesMain.append(video);

/* Mouse hover event in the section Stages */
/* Mouse hover - BoxOne */
let picBoxOne = document.querySelector(".stagesBoxOne");
let picBoxTextOne = document.querySelector(".stagesBoxTextOne");
picBoxOne.onmouseover = logMouseOverOne;
picBoxOne.onmouseout = logMouseOutOne;
function logMouseOverOne() {
    picBoxTextOne.style.zIndex = "10";
    picBoxTextOne.style.transition = "0.2s";
    picBoxOne.style.background = "url('Images/img3d.jpg')";
    picBoxOne.style.backgroundSize = "cover";
}
function logMouseOutOne() {
    picBoxTextOne.style.zIndex = "-100";
    picBoxOne.style.background = "";
}

/* Mouse hover - BoxTwo */
let picBoxTwo = document.querySelector(".stagesBoxTwo");
let picBoxTextTwo = document.querySelector(".stagesBoxTextTwo");
picBoxTwo.onmouseover = function() {
    picBoxTextTwo.style.zIndex = "10";
    picBoxTextTwo.style.transition = "0.2s";
    picBoxTwo.style.background = "url('Images/img3d.jpg')";
    picBoxTwo.style.backgroundSize = "cover";
}
picBoxTwo.onmouseout = function() {
    picBoxTextTwo.style.zIndex = "-99";
    picBoxTwo.style.background = "";
}

/* Mouse hover - BoxThree */
let picBoxThree = document.querySelector(".stagesBoxThree");
let picBoxTextThree = document.querySelector(".stagesBoxTextThree");
picBoxThree.onmouseover = function() {
    picBoxTextThree.style.zIndex = "10";
    picBoxTextThree.style.transition = "0.2s";
    picBoxThree.style.background = "url('Images/img3d.jpg')";
    picBoxThree.style.backgroundSize = "cover";
}
picBoxThree.onmouseout = function() {
    picBoxTextThree.style.zIndex = "-98";
    picBoxThree.style.background = "";
}

/* Mouse hover - BoxFour */
let picBoxFour = document.querySelector(".stagesBoxFour");
let picBoxTextFour = document.querySelector(".stagesBoxTextFour");
picBoxFour.onmouseover = function() {
    picBoxTextFour.style.zIndex = "10";
    picBoxTextFour.style.transition = "0.2s";
    picBoxFour.style.background = "url('Images/img3d.jpg')";
    picBoxFour.style.backgroundSize = "cover";
}
picBoxFour.onmouseout = function() {
    picBoxTextFour.style.zIndex = "-97";
    picBoxFour.style.background = "";
}

/* Mouse hover - BoxFive */
let picBoxFive = document.querySelector(".stagesBoxFive");
let picBoxTextFive = document.querySelector(".stagesBoxTextFive");
picBoxFive.onmouseover = function() {
    picBoxTextFive.style.zIndex = "10";
    picBoxTextFive.style.transition = "0.2s";
    picBoxFive.style.background = "url('Images/img3d.jpg')";
    picBoxFive.style.backgroundSize = "cover";
}
picBoxFive.onmouseout = function() {
    picBoxTextFive.style.zIndex = "-96";
    picBoxFive.style.background = "";
}

/* Mouse hover - BoxSix */
let picBoxSix = document.querySelector(".stagesBoxSix");
let picBoxTextSix = document.querySelector(".stagesBoxTextSix");
picBoxSix.onmouseover = function() {
    picBoxTextSix.style.zIndex = "10";
    picBoxTextSix.style.transition = "0.2s";
    picBoxSix.style.background = "url('Images/img3d.jpg')";
    picBoxSix.style.backgroundSize = "cover";
}
picBoxSix.onmouseout = function() {
    picBoxTextSix.style.zIndex = "-95";
    picBoxSix.style.background = "";
}


  

