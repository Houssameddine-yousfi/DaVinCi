const page1 = document.querySelector('.btnPage1');
const page2 = document.querySelector('.btnPage2');
const page3 = document.querySelector('.btnPage3');
const page = document.querySelectorAll('.page');


page1.addEventListener('click', () =>{
    page.forEach( p => {
        p.style.transform = 'translateX(0)';
    });
});
page2.addEventListener('click', () =>{
    page.forEach( p => {
        p.style.transform = 'translateX(-100%)';
    });
});
page3.addEventListener('click', () =>{
    page.forEach( p => {
        p.style.transform = 'translateX(-200%)';
    });
});