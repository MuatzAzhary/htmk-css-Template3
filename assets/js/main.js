let navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((e)=>{
    e.addEventListener('click',()=>{
        navLinks.forEach((e)=>{
            e.classList.remove('active');
        });
        e.classList.add('active');
    })
});