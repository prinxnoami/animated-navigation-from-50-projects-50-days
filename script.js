let bar= document.querySelector('.bar');
let nav= document.querySelector('.nav');
let line1=document.querySelector('.line1');
let line2=document.querySelector('.line2');


bar.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})