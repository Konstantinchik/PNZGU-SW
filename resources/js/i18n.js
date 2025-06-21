import {createI18n} from "vue-i18n";

const translate = {
    en:{
        navigationBar: {
            news: "News",
            participants: "Participants",
            requirements: "Requirements for Design",
            archive: "Archive of Materials",
            contacts: "Contacts",
            adminPanel: "Admin Panel",
            signIn: "Sign In",
            changeCommittee:"Change the composition of the committee",
            incomingApplications:"Incoming applications",
            historyApplication:"Application history",
            directions:"Directions"
        },
        send:"Submit",
        edit: "Edit",
        fileUpload: {
            attachFile: "Attach a file"
        },
        archivePage:{

        },
        contactsPage: {
            title: "Contact Information",
            paragraph1: "Conference Secretary – Ph.D., Associate Professor Olga Ivanovna Semyankova",
            paragraph2: "Department of Information Support for Management and Production of Penza State University",
            paragraph3: "Phone: "
        },
        forParticipants:{
            applicationsForm:{
                title: "Online Application for Participation",
                addCoAuthor: "Add Co-Author",
                removeCoAuthor: "Remove Co-Author",
                labelTitleApp: "Article Title",
                exampleForTitleApp: "Example: Research on the influence of...",
                labelSelectorDirections: "Direction",
                labelUsername: "Full Name",
                exampleForUsername: "Example: Ivanov Ivan Ivanovich",
                labelPhone: "Phone Number",
                exampleForPhone: "Example: +7 (123) 456-78-90",
                labelPlace: "Place of Work",
                exampleForPlace: "Example: Penza State University/Federal State Budgetary Educational Institution of Higher Education «Penza State University",
                labelPosition: "Position/Degree",
                exampleForPosition: "Example: Associate Professor",
                labelEmail: "Email",
                exampleForEmail: "Example: example@example.com"
            }
        },
        mainPage: {
            organizingCommittee: "Organizing Committee",
            programCommittee: "Program Committee",
            footerText: "© 2024 Conference IKD",
            confBanner: {
                title: "IV All-Russian Scientific and Practical Conference",
                subtitle: "INFORMATION – COMMUNICATION – DOCUMENT",
                date: "September 19-20, 2025",
                description1: "Scientific electronic library (eLIBRARY.RU) with inclusion in the Russian Science Citation Index (RSCI). ",
                description2: "The collection of articles is assigned an international standard book number ISBN, UDC/BBK code."
            },
            mainWorkDir:"The main areas of work",
            confSteps: {
                title: "Key Conference Stages",
                step1: {
                    date: 'August 20, 2025',
                    description: 'Registration and acceptance of applications'
                },
                step2: {
                    date: 'Date',
                    description: 'Conducting the conference'
                },
                step3: {
                    date: 'Date',
                    description: 'Summing up the results'
                }
            }
        },
        newsPage:{},
        reqPage:{
            title: "REVIEW OF MATERIALS",
            paragraph1: "Articles are published in the author's edition. No more than 2 articles are accepted from one author. The volume of the article is from 8000 characters with spaces.",
            paragraph2: "Student articles can be accepted for publication only in co-authorship with a scientific supervisor (articles by students made under scientific supervision are not considered).",
            paragraph3: "The organizing committee reserves the right to reject submitted materials if they do not correspond to the directions of the conference or are of low originality. Unpublished materials are not reviewed and not returned.",
            paragraph4: "After checking the materials for the absence of borrowings in the 'Antiplagiat' system (text originality not less than 60%), for compliance with the requirements of the information letter and coordination of various issues with the author (if necessary), the organizing committee informs the author of the decision on the possibility of publishing the article within 5-7 working days after receiving the application and the article.",
            paragraph5: "In case of absence, all organizational expenses are borne by the conference participant or the sending organization.",
            paragraph6: "Mailing of the printed version of the collection is not provided: participants receive a pdf version of the collection by email after its indexing in RSCI. We kindly ask the authors to comply with the requirements for the design and submission of materials, as they are the basis for including the article in the RSCI.",
            reqTable: {
                requirementsTitle: "Requirements for Article Formatting",
                parameter: "Parameter",
                requirements: "Requirements",
                textEditor: "Text Editor",
                textEditorRequirements: "Microsoft Word (files with extensions *.doc, *.docx, *.rtf).",
                pageFormat: "Page Format",
                pageFormatRequirements: "A4, portrait orientation, text aligned to width, paragraph indent 1.25 cm. Automatic hyphenation is not used.",
                margins: "Margins",
                marginsRequirements: "Top, bottom, left – 20 mm; right – 25 mm.",
                font: "Font",
                fontRequirements: "Size (point) – 14, type – Times New Roman, interval – one and a half.",
                pageNumbering: "Page Numbering",
                pageNumberingRequirements: "Not required.",
                imagesTablesFormulas: "Images, Tables, Formulas",
                imagesTablesFormulasRequirements: "Images and tables are allowed in the text – no more than 2. Images should be at least 60×60 mm and no more than 110×170 mm in *.jpg format. Fonts used in tables should be similar in design and name to the font of the main text of the article. Formulas are formatted in Equation or MathType editors.",
                articleStructure: "Article Structure",
                articleStructureRequirements1: "All elements are formatted with one and a half interval.",
                articleStructureRequirements2: "UDC index",
                articleStructureRequirements3: "ARTICLE TITLE (bold font, uppercase, full line break between lines. Prefit/All subheadings are manually highlighted not allowed.)",
                articleStructureRequirements4: "First Name Middle Name Last Name (full) of the author – highlighted in bold.",
                articleStructureRequirements5: "Abbreviation - organization name (full according to the Charter (without abbreviations and abbreviations), the name of the legal entity firm: FIBOU VO, PJSC, etc. indicated on the right, highlighted normally.)",
                articleStructureRequirements6: "Abstract",
                articleStructureRequirements7: "Keywords",
                articleStructureRequirements8: "All information from points 1-6 in the same order is repeated in English with one and a half interval.",
                articleStructureRequirements9: "Article text (numbering of sources should correspond to the order of references to them in the text ([1], [2–5], if necessary, indicate specific pages in the source in the text: [2, p. 5–8; 3; 4, p. 5]); references to sources are formatted in square brackets [1]. The text of the article can be structured (introduction, main part, conclusions, acknowledgments). If the article is a publication of the results of the implementation of the RNF project (or another fund), it is necessary to refer to the support of the fund with the project number in Russian and English, indicating this after the text of the article. Example: «The study was carried out with the financial support of the RFBR within the framework of the scientific project № 00-00-00000» or «Funding: The reported study was funded by RFBR, project number 00-00-00000».",
                articleStructureRequirements10: "List of literature.",
                articleStructureRequirements11: "Information about the authors.",
                abstract: "Abstract",
                abstractRequirements: "Bold font, left-aligned, according to GOST R 7.0.99 - 2018. Before the abstract, the word «Abstract.» («Abstract.») is given. 4-6 sentences that should contain the main factual information and conclusions presented in the publication. The volume of the abstract should not exceed 250 words. (Incorrect: «the author of the article considers...», «the article gives…». It should be: «Considered…», «Data provided…»).",
                keywords: "Keywords",
                keywordsRequirements: "No less than 5 and no more than 15 words (phrases). They are given, preceded by the words «Keywords:» («Keywords:»), and separated from each other by commas, no period at the end.",
                literatureList: "List of Literature",
                literatureListRequirements: "Placed after the main text of the article with the preceding words «List of Literature». The list of literature with full names of works is given in alphabetical order in accordance with GOST R 7.0.100-2018 «Bibliographic Record. Bibliographic Description. General requirements and rules for compilation» (without transfer of surnames and without a hyphen). The use of automatic page links is not allowed.",
                authorInfo: "Information about the authors",
                authorInfoRequirements1: "Full names, patronymics and surnames, email addresses and ORCID (if available) of the authors",
                authorInfoRequirements2: "Full academic titles",
                authorInfoRequirements3: "Full academic degrees",
                authorInfoRequirements4: "Full name of the organization with the designation of the organizational and legal form of the legal entity in accordance with the Charter (for example, Federal State Educational Institution of Higher Education «Penza State University»)",
                authorInfoNote: "Information about the authors is given in Russian and English after the article with the preceding words «Information about the authors» («Information about the authors»). The author's email address is given without the word «e-mail», no period after the email address."
            }
        },
        signInPage:{},
        faq: {
            title: "FAQ",
            question1: "Who can participate in the conference?",
            answer1: "Teachers and researchers from various levels of government, graduate students, and students involved in communication issues in the official sphere.",
            question2: "How many reports can one participant submit and can different co-authors present the same report?",
            answer2: "Each participant can submit no more than 2 articles.",
            question3: "What are the forms of participation in the conference?",
            answer3: "- in-person: presentation with an oral (plenary report – 25 min, sectional report – 15 min) or poster presentation (A1 format poster) with publication in the conference proceedings;\n\n- remote: online presentation of the report with publication in the conference proceedings;\n\n- in-person or remote participation as a listener (without publication in the conference proceedings).",
            question4: "Is there a registration fee for participation?",
            answer4: "No registration fee is provided.",
            question5: "Can I participate remotely?",
            answer5: "Yes, most sections support a mixed format of participation. Links for remote connection will be sent to participants after the conference program is approved."
        }
    },
    ru:{
        navigationBar:{
            news:"Новости",
            participants:"Участникам",
            requirements:"Требования к оформлению",
            archive:"Архив материалов",
            contacts:"Контакты",
            adminPanel:"Админ панель",
            signIn:"Вход",
            changeCommittee:"Изменить состав комитета",
            incomingApplications:"Входящие заявки",
            historyApplication:"История заявок",
            directions:"Направления"
        },
        send:"Отправить",
        edit: "Изменить",
        fileUpload: {
            attachFile: "Прикрепить файл"
        },
        archivePage:{

        },
        contactsPage:{
            title: "Контактная информация",
            paragraph1: "Ответственный секретарь конференции – к.филол.н., доцент Ольга Ивановна Семянкова",
            paragraph2: "Кафедра «Информационное обеспечение управления и производства» Пензенского государственного университета",
            paragraph3: "Телефон: "
        },
        forParticipants:{
            applicationsForm:{
                title: "Онлайн-заявка на участие",
                addCoAuthor:"Добавить соавтора",
                removeCoAuthor:"Удалить соавтора",
                labelTitleApp:"Название статьи",
                exampleForTitleApp:"Пример: Исследование влияния...",
                labelSelectorDirections:"Направление",
                labelUsername:"ФИО",
                exampleForUsername:"Пример: Иванов Иван Иванович",
                labelPhone:"Номер телефона",
                exampleForPhone:"Пример: +7 (123) 456-78-90",
                labelPlace:"Место работы",
                exampleForPlace:"Пример: ФГБОУ ВО «Пензенский государственный университет»",
                labelPosition:"Должность/степень",
                exampleForPosition:"Пример: Доцент",
                labelEmail:"Электронная почта",
                exampleForEmail:"Пример: example@example.com",
            }
        },
        mainPage: {
            organizingCommittee: "Организационный комитет",
            programCommittee: "Программный комитет",
            footerText: "© 2024 Конференция ИКД",
            confBanner: {
                title: "IV Всероссийская научно-практическая конференция",
                subtitle: "ИНФОРМАЦИЯ – КОММУНИКАЦИЯ – ДОКУМЕНТ",
                date: "19-20 сентября 2025 г.",
                description1: "Научная электронная библиотека (eLIBRARY.RU) с включением в Российский индекс научного цитирования (РИНЦ).",
                description2: "Сборнику статей присваивается международный стандартный книжный номер ISBN, код УДК/ББК."
            },
            mainWorkDir: "Основные направления работы",
            confSteps: {
                title: "Ключевые этапы конференции",
                step1: {
                    date: '20 августа 2025 г',
                    description: 'Регистрация и прием заявок'
                },
                step2: {
                    date: 'Дата',
                    description: 'Проведение конференции'
                },
                step3: {
                    date: 'Дата',
                    description: 'Подведение итогов'
                }
            }
        },
        newsPage:{},
        reqPage:{
            title: "РАССМОТРЕНИЕ МАТЕРИАЛОВ",
            paragraph1: "Статьи публикуются в авторской редакции. От одного автора принимается не более 2-х статей. Объем статьи от 8000 знаков с пробелами.",
            paragraph2: "Статьи студентов могут быть приняты к публикации только в соавторстве с научным руководителем (статьи студентов, выполненные под научным руководством, не рассматриваются).",
            paragraph3: "Оргкомитет оставляет за собой право отклонять представленные материалы, если они не соответствуют направлениям конференции или отличаются низкой оригинальностью. Неопубликованные материалы не рецензируются и не возвращаются.",
            paragraph4: "После проверки материалов на отсутствие заимствований в системе «Антиплагиат» (оригинальность текста не менее 60%), на соответствие их требованиям информационного письма и согласования различных вопросов с автором (при необходимости) оргкомитет сообщает автору решение о возможности опубликования статьи в течение 5-7 рабочих дней после получения заявки и статьи.",
            paragraph5: "В случае отсутствия все организационные расходы принимает на себя участник конференции или командирующая организация.",
            paragraph6: "Рассылка печатной версии сборника не предусмотрена: участники получают pdf-версию сборника по электронной почте после его индексации в РИНЦ. Убедительно просим авторов соблюдать требования к оформлению и подаче материалов, т.к. они являются основанием для включения статьи в РИНЦ.",
            reqTable: {
                requirementsTitle: "Требования к оформлению статьи",
                parameter: "Параметр",
                requirements: "Требования",
                textEditor: "Редактор текста",
                textEditorRequirements: "Microsoft Word (файлы с расширением *.doc, *.docx, *.rtf).",
                pageFormat: "Формат страницы",
                pageFormatRequirements: "A4, ориентация листа – книжная, выравнивание текста по ширине, абзацный отступ 1,25 см. Автоматическая расстановка переносов не используется.",
                margins: "Поля",
                marginsRequirements: "Сверху, снизу, слева – 20 мм; справа – 25 мм.",
                font: "Шрифт",
                fontRequirements: "Размер (кегль) – 14, тип – Times New Roman, интервал – полуторный.",
                pageNumbering: "Нумерация страниц",
                pageNumberingRequirements: "Не требуется.",
                imagesTablesFormulas: "Рисунки, таблицы, формулы",
                imagesTablesFormulasRequirements: "В тексте допускаются рисунки, таблицы – не более 2. Рисунки следует выполнять размером не менее 60×60 мм и не более 110×170 мм в формате *.jpg. Шрифты, используемые в таблицах, должны быть аналогичными по начертанию и названию шрифту основного текста статьи. Формулы оформляются в редакторах Equation или MathType.",
                articleStructure: "Структура статьи",
                articleStructureRequirements1: "Все элементы форматируются через полуторный интервал.",
                articleStructureRequirements2: "Индекс УДК",
                articleStructureRequirements3: "НАЗВАНИЕ СТАТЬИ (полужирный шрифт, прописными буквами, полный перенос между строками. Прифит/Все подзаголовки выделяются вручную не допускается.)",
                articleStructureRequirements4: "Имя Отчество Фамилия (полностью) автора – выделяется жирным шрифтом.",
                articleStructureRequirements5: "Аббревиатура - наименование организации (полностью в соответствии с Уставом (без аббревиатур и сокращений), название фирмы юридического лица: ФИБОУ ВО, ПАО и т.д. указывается по правому краю, выделяется обычное.)",
                articleStructureRequirements6: "Аннотация",
                articleStructureRequirements7: "Ключевые слова",
                articleStructureRequirements8: "Вся информация 1-6 пунктов в том же порядке повторяется на английском языке через полуторный интервал.",
                articleStructureRequirements9: "Текст статьи (нумерация источников должна соответствовать очередности ссылок на них в тексте ([1], [2–5], при необходимости указать конкретные страницы в источнике в тексте пишут: [2, с 5–8; 3; 4, с. 5]); ссылки на источники оформляются в квадратных скобках [1]. Текст статьи может быть структурирован (введение, основная часть, выводы, благодарности). Если статья представляет собой публикацию результатов реализации проекта РНФ (или иного фонда), необходимо ссылаться на поддержку фонда с указанием номера проекта на русском и английском языке, указав это после текста статьи. Образец: «Исследование выполнено при финансовой поддержке РФФИ в рамках научного проекта № 00-00-00000» или «Funding: The reported study was funded by RFBR, project number 00-00-00000».",
                articleStructureRequirements10: "Список литературы.",
                articleStructureRequirements11: "Информация об авторах.",
                abstract: "Аннотация",
                abstractRequirements: "Полужирный шрифт, выравнивание по левому краю, по ГОСТ Р 7.0.99 - 2018. Перед аннотацией приводят слово «Аннотация.» («Abstract.»). 4-6 предложений, которые должны содержать основные фактические сведения и выводы, представленные в публикации. Объём аннотации не должен превышать 250 слов. (Неправильно: «автор статьи рассматривает...», «в статье дано…». Следует: «Рассматривается…», «Приведены сведения…»).",
                keywords: "Ключевые слова",
                keywordsRequirements: "Не менее 5 и не более 15 слов (словосочетаний). Их приводят, предваряя словами «Ключевые слова:» («Keywords:»), и отделяют друг от друга запятыми, в конце точка не ставится.",
                literatureList: "Список литературы",
                literatureListRequirements: "Помещают после основного текста статьи с предшествующими словами «Список литературы». Список литературы с полными названиями работ приводится в алфавитном порядке в соответствии с ГОСТ Р 7.0.100-2018 «Библиографическая запись. Библиографическое описание. Общие требования и правила составления» (без переноса фамилий и без тире). Использование автоматических постраничных ссылок не допускается.",
                authorInfo: "Информация об авторах",
                authorInfoRequirements1: "Полные имена, отчества и фамилии, электронные адреса и ORCID (при наличии) авторов",
                authorInfoRequirements2: "Полные учёные звания",
                authorInfoRequirements3: "Полные учёные степени",
                authorInfoRequirements4: "Полное наименование организации с обозначением организационно-правовой формы юридического лица в соответствии с Уставом (например, Федеральное государственное образовательное учреждение высшего образования «Пензенский государственный университет»)",
                authorInfoNote: "Сведения об авторах приводят на русском и английском языках после статьи с предшествующими словами «Информация об авторах» («Information about the authors»). Электронный адрес автора приводят без слова «e-mail», после электронного адреса точку не ставят."
            }
        },
        faq: {
            title: "FAQ",
            question1: "Кто может принять участие в конференции?",
            answer1: "Преподаватели и научные сотрудники из органов власти различных уровней, аспиранты и студенты, занимающиеся проблемами коммуникации в официальной сфере.",
            question2: "Сколько докладов может заявить один участник и могут ли разные соавторы выступать с одним докладом?",
            answer2: "Каждый участник может заявить не более 2 статей.",
            question3: "Какие формы участия в конференции?",
            answer3: "- очное: выступление с устным (пленарный доклад– 25 мин, секционный доклад – 15 мин) или стендовым докладом (плакат формата А1) с публикацией в сборнике докладов конференции;\n\n- дистанционное: онлайн-представление доклада с публикацией в сборнике докладов конференции;\n\n- очное или дистанционное участие в качестве слушателя (без публикации в сборнике докладов конференции).",
            question4: "Есть ли оргвзнос для участия?",
            answer4: "Оргвзнос не предусмотрен.",
            question5: "Можно ли принять участие дистанционно?",
            answer5: "Да, большинство секций поддерживает смешанный формат участия. Ссылки для удаленного подключения будут направлены участникам после утверждения программы конференции."
        },
        signInPage:{},
    }
}

const i18n = createI18n({
    legacy: true,
    locale: 'ru',
    messages: translate
})

export default i18n;
