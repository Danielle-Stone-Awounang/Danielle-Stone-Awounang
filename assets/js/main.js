
// ======================= MENU HIDDEN ======================= 
// Validate if constant exists 

// ======================= REVOKE MENU MOBILE ======================= 

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