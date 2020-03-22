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
        title: 'Voir Les profiles sur Linkedin',
        text: 'ceci est un text',
        html:   '<a class="team" href="https://www.linkedin.com/in/houssam-eddine-yousfi/" target="_blank">- Houssam eddine YOUSFI</a><br>'+ 
                '<a class="team" href="https://www.linkedin.com/in/reda-mekhezzem/" target="_blank">- Reda MEKHEZZEM</a><br>'+
                '<a class="team" href="https://www.linkedin.com/in/ishaq-zouaghi-645316131/" target="_blank">- Ishaq ZOUAGHI</a><br>'+
                '<a class="team" href="https://www.linkedin.com/in/ibrahim-dellal-809222119/" target="_blank">- Ibrahim DELLAL</a><br>'
      })
});
