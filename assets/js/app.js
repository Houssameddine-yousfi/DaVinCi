const page1 = document.querySelector('.btnPage1');
const page2 = document.querySelector('.btnPage2');
const page3 = document.querySelector('.btnPage3');
const page = document.querySelectorAll('.page');
const btns = document.querySelectorAll('.nav-link a')


page1.addEventListener('click', () =>{
    remove()
    page.forEach( p => {
        p.style.transform = 'translateX(0)';
    });
    page1.classList.add("active")
});
page2.addEventListener('click', () =>{
    remove()
    page.forEach( p => {
        p.style.transform = 'translateX(-100%)';
    });
    page2.classList.add("active")
});
page3.addEventListener('click', () =>{
    remove()
    page.forEach( p => {
        p.style.transform = 'translateX(-200%)';
    });
    page3.classList.add("active")
});

function remove() {
    btns.forEach(btn => {
        btn.classList.remove("active");
    });
}