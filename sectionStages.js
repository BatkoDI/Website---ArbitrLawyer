"use strict"

/* Section - Stages */

/* Creating the section header */
let headerStages = createHeaderH2("Этапы помощи арбитражного юриста");

/* Creating the div element */
let stagesMain = createDiv("stagesMain");

/* Creating the grup elements in Articles 1 - 6 */
let boxOne = createArticleStagesSection("stagesBoxOne", "Превентивные меры", "1");
let boxTwo = createArticleStagesSection("stagesBoxTwo", "Досудебное урегулирование", "2");
let boxThree = createArticleStagesSection("stagesBoxThree", "Подготовка к суду", "3");
let boxFour = createArticleStagesSection("stagesBoxFour", "Представительство в суде", "4");
let boxFive = createArticleStagesSection("stagesBoxFive", "Восстановление нарушенных прав", "5");
let boxSix = createArticleStagesSection("stagesBoxSix", "Празднование победы", "6");

/* Creating a text for Articles 1 - 6 */
/* Creating the text for Article 1 */
let arrTextOne = [
    "Этот этап начинается с подготовки открытия бизнеса или начала какого-либо бизнеспроекта и продолжается во время ведения финансово-хозяйственной деятельности.\
    Этап включает в себя подготовку и ведение бизнеса, таким образом, чтобы он, приносил максимальную прибыль и максимально защищал интересы его владельца, при этом\
    соответствовал всем нормам действующего законодательства. Для этого необходимо воспользоваться услугами грамотных арбитражных юристов, имеющих огромный опыт в\
    данной сфере. При помощи нашего арбитражного юриста Вы сможете построить свой бизнес грамотно.",

    "В случае возникновения какой-либо проблемы, будь то проблемы с покупателями или с поставщиками, возникающие в связи с неоплатой товара, работ, услуг, или\
    не поставкой вовремя товара, не оказания вовремя услуг, не выполнения вовремя работ, или проблемы, возникающие с государственными органами при проверках, а также\
    множестве других проблем, бизнес будет максимально защищен.",

    "По мнению нашего юриста по арбитражным делам превентивные меры являются один из самых важных и главных этапов оказываемой помощи арбитражным юристом.",
]
let boxTextOne = createTextArticle("stagesBoxTextOne", arrTextOne);

/* Creating the text for Article 2 */
let arrTextTwo = [
    "Данный этап начинается с момента возникновения проблемы. Например, поставщик не отгружает товар в установленные сроки, покупатель не хочет принимать товар,\
    подрядчик выполняет работы некачественно или затягивает сроки выполнения работ и т.д. На этом этапе очень важно правильно оформить все документы, которые\
    засвидетельствуют проблемный факт. От правильности составления таких документов и соблюдения установленного порядка проведения определенных юридических процедур,\
    установленных законом или договором, зависит дальнейшее положительное разрешение данного вопроса, в случае обращения в Арбитражный суд. При помощи нашего\
    арбитражного юриста Вы сможете максимально безболезненно пройти данный этап.", 
    
    "Следующим шагом в большинстве случаев досудебного урегулирования является направление Претензии (Досудебной претензии). Иногда, если это предусмотрено законном\
    или договором, необходимо провесится процедуру медиации.  Претензию можно направить как сразу, так и непосредственно перед обращение в суд. Главное при этом соблюсти\
    сроки исковой давности (в большинстве случаев это 3 года) и выждать сроки ответа на претензию.", 
    
    "По мнению нашего юриста по арбитражным делам наиболее важным моментом являются первоначальные юридически значимые действия, которые необходимо произвести\
    непосредственно при возникновении проблемы. Не оформив определенных юридических документов и не выполнив определенных процедуры в последствии будет трудно ссылаться\
    на данные обстоятельства и ссылаться на них как доказательства в суде. Мы обращаем особое внимание, что на этапе досудебного урегулирования, необходимо сразу же при\
    возникновении проблемы привлекать к разрешению возникшего вопроса грамотного юриста по арбитражным спорам. Обратившись к нам Вы получите услугу нашего лучшего\
    арбитражного юриста, который быстро и качественно поможет в разрешении сложившейся проблемы.",
]
let boxTextTwo = createTextArticle("stagesBoxTextTwo", arrTextTwo);

/* Creating the text for Article 3 */                        
let arrTextThree = [
    "На данном этапе осуществляется подготовка к судебному процессу, включающая в себя направление Досудебной претензии (если таковая не направлялась), сбор\
    необходимых документов и других необходимых доказательств, подготовка Искового заявления, Возражения или Отзыва. А также, подготавливаются различные Ходатайства, например, о\
    наложении обеспечительных мер и т.д. При этом очень важно выбрать именно те документы и доказательства, которые указывает на правоту Ваших требований или Возражений.",
    
    "Наш арбитражный юрист указывает, что данный этап очень зависит от предыдущих двух этапов Превентивных мер и Досудебного урегулирования. И если на\
    стадии предшествующих этапов, не были правильно оформлены документы, факт, или неправильно или не в полном объеме проведены определенные процедуры, то при подготовке к суду могут\
    возникнуть определенные проблемы, которые приводят к уменьшению вероятности положительного разрешения спора в арбитражном суде. Порой это даже может привести вообще к нулевым шансам\
    выигрыша судебного спора. В этом случае наш юрист по арбитражным делам сразу же сообщит Вам об этом. Мы не беремся за те дела, которые заранее обречены на неуспех, и отговариваем от\
    этой бесперспективной затеи своих клиентов.", 
    
    "Только грамотный и опытный юрист по арбитражным спорам сможет подготовить весь необходимый пакет документов (доказательств) и грамотно составить\
    необходимые процессуальные документы, в том числе и само Исковое заявление, в котором грамотно изложит исковые требования, и грамотно и обосновано укажет на обстоятельства, указывающие\
    на правоту заявленных требований. Обратившись к нам Вы получите услугу нашего лучшего арбитражного юриста, который быстро и качественно поможет в разрешении сложившейся проблемы на этапе\
    Подготовки к суду.",
]
let boxTextThree = createTextArticle("stagesBoxTextThree", arrTextThree);
    
/* Creating the text for Article 4 */
let arrTextFour = [
    "На данном этапе происходит непосредственно разбирательство в судебном процессе, который включает в себя участие юриста по арбитражным делам в судебном\
    процессе, подготовку необходимых документов и представлении их в суд, при необходимости подготовку и предоставлении в суд дополнительных доказательств, и т.д. При этом очень важно\
    правильно и своевременно применять весь доступный перечень прав. Грамотно и в нужный момент предоставить возразит, при необходимости заявить Ходатайство о назначении экспертизы и\
    т.д.",
         
    "Наш арбитражный юрист указывает, что на данном еще в большей степени зависит от предыдущих трех этапов. А также, при этом представительство интересов в\
    суде должен осуществлять очень опытный и грамотный юрист по арбитражным делам. Так как, если даже Вами очень хорошо были пройдены предыдущие этапы, у вас много доказательств, которые\
    юридически правильно оформлены, все необходимые юридические процедуры оформлены и пройдены в установленной последовательности, но представительствами Ваших интересов занимается не\
    очень компетентный в рассматриваемом вопросе арбитражный юрист, то даже при таком положении дел, когда казалось вероятность проиграть процесс минимальные, не вовремя или вообще\
    не поданное ходатайство или возражение, а также не проведение еще каких-либо значимых для рассматриваемого дела процессуальных действий, может уменьшить Ваши шансы в положительном\
    разрешении вопроса в судебном порядке, а порой даже и вовсе к проигрышу всего дела. У нас работают только опытные и грамотные юристы по арбитражным спорам, которые представят Ваши\
    интересы в Арбитражном суде, помогут быстро и качественно разрешить судебный спор.",
]
let boxTextFour = createTextArticle("stagesBoxTextFour", arrTextFour);    

/* Creating the text for Article 5 */    
let arrTextFive = [
    "Данный этап начинается с момента вступления в законную силу судебного акта и продолжается вплоть до полного его исполнения. Включает в себя получение\
    Исполнительного документа, его предъявлении к исполнению в службу судебных приставов, либо в банк где находится расчетный счет должника, а также осуществления контроля за\
    исполнением Исполнительного документа.",
    
    "Если Вы считаете, что выиграв дело в суде закрываете весь вопрос, то ошибаетесь. Так как, это зачастую только половина пути. Не всегда, получается\
    быстро исполнить Исполнительный документ. Это может быть связано, как с намеренным оказанием противодействия со стороны должник, так и с банальным недолжным исполнением своих\
    обязательств должностными лицами службы судебных приставов.",
    
    "Наш арбитражный юрист считает, что в случае недолжном исполнении своих обязанностей судебными приставами необходимо незамедлительно писать Жалобы на\
    их действия и/или бездействия, а также если никакого результата Жалобы не принесут оспаривать действия и/или бездействия в судебном порядке. Зачастую, только после «волшебного пинка,\
    каковыми являются Жалобы и обращение в суд (Заявление) приставы начинают работать. При помощи нашего арбитражного юриста вы также можете прибегнуть еще к одному очень действенному\
    оружию по взысканию долга, каковым является введение в отношении должника процедуры банкротства, а также другим не менее действенным процедурам. Обратившись к нам Вы получите услугу\
    нашего лучшего арбитражного юриста, который быстро и качественно поможет в разрешении сложившейся проблемы на этапе Исполнительного производства.",
]
let boxTextFive = createTextArticle("stagesBoxTextFive", arrTextFive);

/* Creating the text for Article 6 */    
let arrTextSix = [
    "Пожалуй, самый приятный из всех этапов. Но это в случае положительного разрешения вопроса. На этом этапе необходимо подвести итоги и сделать определенные\
    выводы. Посмотреть на каком этапе были допущены ошибки. Быстро исправить эти ошибки. Только при помощи нашего арбитражного юриста, ну или конечно какого-либо другого не менее\
    опытного и грамотного юриста Вы ощутите этот сладкий вкус победы.",
]
let boxTextSix = createTextArticle("stagesBoxTextSix", arrTextSix);

/* Creating the video for section background */
let videoStages = createVideoBackground("vidStages", "./video/videoStages.mp4");


/* Location of the section Stages in the DOM */
let posStages = document.getElementById("stages");

posStages.prepend(headerStages);
posStages.append(stagesMain);

stagesMain.append(boxOne); 
stagesMain.append(boxTextOne); 
stagesMain.append(boxTwo);
stagesMain.append(boxTextTwo);
stagesMain.append(boxThree);
stagesMain.append(boxTextThree);
stagesMain.append(boxFour);
stagesMain.append(boxTextFour);
stagesMain.append(boxFive);
stagesMain.append(boxTextFive);
stagesMain.append(boxSix);
stagesMain.append(boxTextSix);

stagesMain.append(videoStages);

/* Mouse hover event in the section Stages Box 1 - 6. */
mouseEventStages(boxOne, boxTextOne);
mouseEventStages(boxTwo, boxTextTwo, "-99");
mouseEventStages(boxThree, boxTextThree, "-98");
mouseEventStages(boxFour, boxTextFour, "-97");
mouseEventStages(boxFive, boxTextFive, "-96");
mouseEventStages(boxSix, boxTextSix, "-95");



  

