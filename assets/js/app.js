const page1 = document.querySelector('.btnPage1');
const page2 = document.querySelector('.btnPage2');
const page3 = document.querySelector('.btnPage3');
const page = document.querySelectorAll('.page');
const btns = document.querySelectorAll('.nav-link a')
const about = document.querySelector('.about')



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

about.addEventListener('click', () =>{
    Swal.fire({
        icon: 'info',
        title: 'Information',
        text: 'ceci est un text',
        html: '<a href="https://www.linkedin.com/in/reda-mekhezzem/">Reda Mekhezzem</a>'
      })
});
