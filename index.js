// AOS.init({
//   duration: 3000,
//   once: true,
// });

let Co1= document.getElementById('company1');
let Co2= document.getElementById('company2');
let Co3= document.getElementById('company3');
let Co4= document.getElementById('company4');
let text= document.getElementById('text');
window.addEventListener('scroll' , ()=>{
   
    let value = window.scrollY;

    // text.style.marginTop= -value*.2 +'px'

    Co1.style.right = value * 0.9 + 'px';
    Co2.style.right = value * 0.7 + 'px';
    Co3.style.right = value * 0.5+ 'px';
    Co4.style.right = value * 0.3+ 'px';
})
