// ====================== TYPING ANIMATION ==================
var typed = new Typed(".typing",{
    strings:["","Web Designer ","Web Developer","JS Developer","Mobile Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ======================= SHOW MENU =======================
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// ======================= MENU SHOW =======================
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

// ======================= MENU HIDDEN ======================= 
// Validate if constant exists 
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

// ======================= REVOKE MENU MOBILE ======================= 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // wen we click on eac nav__link , we remove the sow-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n)=>n.addEventListener('click',linkAction))
// ======================= SCROLL SECTIONS ACTIVE LINK ======================= 

// ======================= CHANGE BACKGROUND HEADER =======================
 function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 80viewport height, add the scroll-header
    //class to header tag
    if(this.scrollY >= 80){
        header.classList.add('scroll-header');
    }
    else header.classList.remove('scroll-header');
    
 }

 window.addEventListener('scroll', scrollHeader);

// ======================= SHOW SCROLL UP ======================= 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 350 viewport height, add the show-scroll
    //class to scrool-top
    if(this.scrollY >= 350){
        scrollUp.classList.add('show-scroll');
    }
    else scrollUp.classList.remove('show-scroll');
    
 }

 window.addEventListener('scroll', scrollUp);

//  ========================== ABOUT COLOR THEME ===================== 
const light_theme = document.getElementById("clair");

light_theme.addEventListener('click',()=>{
document.body.classList.toggle("light");
    console.log("hiiiii");

    if(document.body.classList.contains("light")){
      light_theme.src = "assets/img/moon_symbol_50px.png";
    }
    else{light_theme.src = "assets/img/sun_50px.png ";}
});


//  ======================= ABOUT ACTIVE LINK ======================== 


// ======================= ABOUT TABS ======================= 
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent)  => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
             tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');


    });
})

// ======================= CONTACT FORM =======================
const contactform = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-suject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error__message');

const sendEmail = (e) =>{
    e.preventDefault();

    // check if the field has a value
    if(contactName.value ===''|| contactEmail.value === '' ||
    contactSubject.value === '' || contactMessage.value === ''
    ){
        //show message
        errorMessage.textContent = 'Write all the input fields'
    }
    else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_bec3xkf',
            'template_smke10d',
            '#contact-form',
            'SAk7JUWAwZQqIVc15'
        ).then(() => {
            //show message and color, window + dot to open emojis
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent ✔️';

            //remove message after 5 seconds
            setTimeout(()=>{
                errorMessage.textContent = '';
            },5000)
        },(error)=>{
            alert('OOPs! SOMETHING WENT WRONG... ',error)
        });
    };

    //clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
};

contactform.addEventListener('submit', sendEmail);

 /*================= SCROLL REVEAL ANIMATION ================*/
 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000
    // reset: true
});

// SCROLL HOME 
sr.reveal('.home__subtitle',{})
sr.reveal('.home__title',{delay:400})
sr.reveal('.home__img',{origin:'right',delay:600, distance:'300px'})
sr.reveal('.cv',{delay:300, distance:'100px'})

// SCROLL ABOUT 
sr.reveal('.about__description',{delay:500})
sr.reveal('.tabs__btns,.tab__active')

// SCROLL SERVICES 
sr.reveal('.section__description,.services__item',{delay:500})
sr.reveal('.services__icon',{origin:'left',delay:200})

// PORTOFOLIO
sr.reveal('.portfolio__item',{delay:200})