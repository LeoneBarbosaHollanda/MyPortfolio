(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7578:function(e,t,a){Promise.resolve().then(a.bind(a,7003)),Promise.resolve().then(a.bind(a,2573)),Promise.resolve().then(a.bind(a,4196)),Promise.resolve().then(a.bind(a,16)),Promise.resolve().then(a.bind(a,1344)),Promise.resolve().then(a.bind(a,3322))},7003:function(e,t,a){"use strict";var n=a(7437),o=a(8861),s=a(9582);t.default=()=>{let{language:e}=(0,o.Z)(),t=s.Z[e];return(0,n.jsxs)("section",{id:"about",className:"py-20 bg-dark-1000",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center text-neon-blue-500",children:t.aboutTitle}),(0,n.jsxs)("div",{className:"max-w-2xl mx-auto text-neon-blue-100",children:[(0,n.jsx)("p",{className:"mb-4",children:t.aboutContent1}),(0,n.jsx)("p",{children:t.aboutContent2})]})]})}},2573:function(e,t,a){"use strict";var n=a(7437),o=a(8861),s=a(9582),r=a(3041),i=a(9345),l=a(9498),c=a(7760),d=a(598);t.default=()=>{let{language:e}=(0,o.Z)(),t=s.Z[e];return(0,n.jsxs)("section",{id:"contact",className:"py-20 bg-dark-1000",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center text-neon-blue-500",children:t.contactTitle}),(0,n.jsxs)("div",{className:"max-w-md mx-auto space-y-6",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)(r.Z,{className:"text-neon-blue-400"}),(0,n.jsx)("span",{className:"text-neon-blue-100",children:"+55 (85) 98626-9340"})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)(i.Z,{className:"text-neon-blue-400"}),(0,n.jsx)("span",{className:"text-neon-blue-100",children:"leone.hollanda07@gmail.com"})]}),(0,n.jsxs)("div",{className:"flex justify-center space-x-8 mt-8",children:[(0,n.jsx)("a",{href:"https://github.com/LeoneBarbosaHollanda",target:"_blank",rel:"noopener noreferrer",className:"text-neon-blue-400 hover:text-neon-blue-300 transition duration-300",children:(0,n.jsx)(l.Z,{size:32})}),(0,n.jsx)("a",{href:"https://instagram.com/leone.hollanda",target:"_blank",rel:"noopener noreferrer",className:"text-neon-blue-400 hover:text-neon-blue-300 transition duration-300",children:(0,n.jsx)(c.Z,{size:32})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/leone-hollanda-a4032721b/",target:"_blank",rel:"noopener noreferrer",className:"text-neon-blue-400 hover:text-neon-blue-300 transition duration-300",children:(0,n.jsx)(d.Z,{size:32})})]})]})]})}},4196:function(e,t,a){"use strict";var n=a(7437),o=a(8861);t.default=()=>{let{language:e,toggleLanguage:t}=(0,o.Z)();return(0,n.jsx)("header",{className:"w-full py-4 bg-dark-1000 text-neon-blue-400",children:(0,n.jsx)("nav",{className:"container mx-auto flex justify-center items-center",children:(0,n.jsx)("button",{onClick:t,className:"bg-neon-blue-600 text-dark-1000 px-3 py-1 rounded hover:bg-neon-blue-500 transition duration-300",children:"en"===e?"PT":"EN"})})})}},16:function(e,t,a){"use strict";var n=a(7437),o=a(8861),s=a(9582),r=a(3145);t.default=()=>{let{language:e}=(0,o.Z)(),t=s.Z[e];return(0,n.jsxs)("section",{id:"hero",className:"text-center py-20 bg-gradient-to-b from-dark-1000 to-dark-1000",children:[(0,n.jsx)("div",{className:"mb-8",children:(0,n.jsx)(r.default,{src:"/FotoCurriculo.jpg",alt:"Your Name",width:200,height:200,className:"rounded-full mx-auto border-4 border-neon-blue-500"})}),(0,n.jsx)("h1",{className:"text-4xl font-bold mb-4 text-neon-blue-500",children:t.heroTitle}),(0,n.jsx)("p",{className:"text-xl text-neon-blue-300 mb-8",children:t.heroSubtitle})]})}},8861:function(e,t,a){"use strict";a.d(t,{LanguageProvider:function(){return r},Z:function(){return i}});var n=a(7437),o=a(2265);let s=(0,o.createContext)(void 0),r=e=>{let{children:t}=e,[a,r]=(0,o.useState)("en");return(0,n.jsx)(s.Provider,{value:{language:a,toggleLanguage:()=>{r(e=>"en"===e?"pt":"en")}},children:t})},i=()=>{let e=(0,o.useContext)(s);if(void 0===e)throw Error("useLanguage must be used within a LanguageProvider");return e}},1344:function(e,t,a){"use strict";var n=a(7437),o=a(2265),s=a(8861),r=a(9582),i=a(7648);t.default=()=>{let[e,t]=(0,o.useState)(!1),{language:a}=(0,s.Z)(),l=r.Z[a];return(0,o.useEffect)(()=>{let e=()=>{var e;let a=null===(e=document.getElementById("hero"))||void 0===e?void 0:e.offsetHeight;a&&t(window.scrollY>a-100)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{className:"transition-all duration-300 ".concat(e?"fixed top-0 left-0 right-0 bg-dark-1000 shadow-lg z-50":"relative bg-transparent"),children:(0,n.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-center space-x-4",children:[(0,n.jsx)(i.default,{href:"#about",className:"bg-neon-blue-600 text-dark-1000 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300",children:l.about}),(0,n.jsx)(i.default,{href:"#skills",className:"bg-neon-blue-600 text-dark-1000 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300",children:l.experienceTitle}),(0,n.jsx)(i.default,{href:"#contact",className:"bg-neon-blue-600 text-dark-1000 px-4 py-2 rounded hover:bg-neon-blue-500 transition duration-300",children:l.contact})]})}),e&&(0,n.jsx)("div",{className:"h-16"})]})}},3322:function(e,t,a){"use strict";var n=a(7437),o=a(8861),s=a(9582),r=a(3145);let i=[{name:"React",years:2,icon:"/react.png",maxYears:5},{name:"Python",years:3,icon:"/python.png",maxYears:5},{name:"Node",years:1,icon:"/node.png",maxYears:5},{name:"Java",years:2,icon:"/java.png",maxYears:5}];t.default=()=>{let{language:e}=(0,o.Z)(),t=s.Z[e];return(0,n.jsx)("section",{id:"skills",className:"py-20 bg-dark-1000",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-4",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center text-neon-blue-500",children:t.experienceTitle}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row gap-8",children:[(0,n.jsxs)("div",{className:"md:w-1/2",children:[(0,n.jsx)("p",{className:"text-neon-blue-100 mb-4 text-lg",children:t.experienceDescription}),(0,n.jsxs)("ul",{className:"list-disc list-inside text-neon-blue-200 space-y-2",children:[(0,n.jsx)("li",{children:t.experienceItem1}),(0,n.jsx)("li",{children:t.experienceItem2}),(0,n.jsx)("li",{children:t.experienceItem3})]})]}),(0,n.jsx)("div",{className:"md:w-1/2",children:(0,n.jsx)("div",{className:"space-y-6",children:i.map(e=>(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)("div",{className:"w-12 h-12 relative flex-shrink-0",children:(0,n.jsx)(r.default,{src:e.icon,alt:e.name,width:48,height:48,className:"object-contain"})}),(0,n.jsxs)("div",{className:"flex-grow",children:[(0,n.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,n.jsx)("span",{className:"text-neon-blue-300",children:e.name}),(0,n.jsxs)("span",{className:"text-neon-blue-400",children:[e.years," ",t.years]})]}),(0,n.jsx)("div",{className:"h-2 bg-dark-1000 rounded-full overflow-hidden",children:(0,n.jsx)("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500",style:{width:"".concat(e.years/e.maxYears*100,"%")}})})]})]},e.name))})})]})]})})}},9582:function(e,t){"use strict";t.Z={en:{home:"Home",about:"About",projects:"Projects",contact:"Contact",heroTitle:"Hello, my name is Leone Hollanda. ",heroSubtitle:"Welcome to my portfolio",aboutTitle:"About Me",aboutContent1:"Hello, my name is Leone. I am currently in the seventh semester of my Computer Engineering degree at the Federal Institute of Education, Science, and Technology of Cear\xe1 (IFCE). I consider myself a junior Full Stack developer and strive to continuously improve my skills by learning more and more.",aboutContent2:"I joined the LIT laboratory as a volunteer and had the opportunity to gain incredible experiences. Throughout my journey, I had mentors whom I still look up to today, which motivates me to achieve my goal of becoming a software engineer.",projectsTitle:"My Projects",contactTitle:"Contact Me",footerText:"All rights reserved.",experienceTitle:"Experience",experienceDescription:"3 years working as a Software Developer in companies such as:",experienceItem1:"LIT: Worked as a back-end developer using Java to define the software architecture. Responsible for class modeling, relationship mapping, UML diagrams, and contributing to strategic decisions on system structure and functionality.",experienceItem2:"Irede: I worked with automations using C# for the Azure DevOps platform and participated in a project using Java 17. I developed a Spring Boot application with Java, using a RESTful architecture to create scalable APIs. The system was designed for ERP and integrated with a  PostgreSQL database using JPA/Hibernate for data persistence. I implemented automated tests with JUnit and used Maven for dependency management.",experienceItem3:"Salvus: Worked as a full-stack developer, using Node.js and React.js for web applications, JUnit for automated testing, and gained experience with AWS, utilizing Lambda back-end with API Gateway.",years:"years"},pt:{home:"In\xedcio",about:"Sobre",projects:"Projetos",contact:"Contato",heroTitle:"Ol\xe1, me chamo Leone Hollanda.",heroSubtitle:" Seja bem-vindo ao meu portf\xf3lio",aboutTitle:"Sobre Mim",aboutContent1:"Estou cursando o s\xe9timo semestre de Engenharia da Computa\xe7\xe3o pelo Instituto Federal de Educa\xe7\xe3o, Ci\xeancia e Tecnologia do Cear\xe1 (IFCE). Considero-me um desenvolvedor Full Stack j\xfanior e busco sempre aprimorar meus conhecimentos, aprendendo cada vez mais.",aboutContent2:"Entrei no laborat\xf3rio LIT como volunt\xe1rio, onde tive a oportunidade de vivenciar experi\xeancias incr\xedveis. Durante minha trajet\xf3ria, contei com mentores que admiro at\xe9 hoje, e isso me inspira a alcan\xe7ar meu objetivo de me tornar um engenheiro de software.",projectsTitle:"Meus Projetos",contactTitle:"Contato",footerText:"Todos os direitos reservados.",experienceTitle:"Experi\xeancia",experienceDescription:"3 anos trabalhando como Desenvolvedor de Software em empresas como:",experienceItem1:"LIT: Atuei como desenvolvedor back-end no projeto voluntario, trabalhando com Java na defini\xe7\xe3o da arquitetura do software. Fui respons\xe1vel pela modelagem das classes, mapeamento de relacionamentos e cria\xe7\xe3o de diagramas UML, al\xe9m de contribuir para decis\xf5es estrat\xe9gicas sobre funcionalidades e estrutura do sistema.",experienceItem2:"Irede: Trabalhei com automa\xe7\xf5es usando C# para a plataforma Azure DevOps e participei de um projeto usando Java 17,Desenvolvi uma aplica\xe7\xe3o em Spring Boot com Java, utilizando arquitetura RESTful para criar APIs escal\xe1veis. O sistema foi projetado para ERP e integrado a um banco de dados PostgreSQL com JPA/Hibernate para persist\xeancia de dados. Implementei testes automatizados com JUnit e utilizei Maven para o gerenciamento de depend\xeancias",experienceItem3:"Salvus: Atuei como full stack, usando Node.js e React.js para aplica\xe7\xf5es web, JUnit para testes automatizados e tive experi\xeancia com AWS, utilizando back-end Lambda junto com API Gateway.",years:"anos"}}}},function(e){e.O(0,[576,971,117,744],function(){return e(e.s=7578)}),_N_E=e.O()}]);