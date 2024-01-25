const button1 = document.querySelectorAll('.testimonial__nav--icon')[0];
button1.style.fill = "#D31342";
const button2 = document.querySelectorAll('.testimonial__nav--icon')[1];
const button3 = document.querySelectorAll('.testimonial__nav--icon')[2];
const button4 = document.querySelectorAll('.testimonial__nav--icon')[3];
const button5 = document.querySelectorAll('.testimonial__nav--icon')[4];
button5.style.fill = "#D31342";
const button6 = document.querySelectorAll('.testimonial__nav--icon')[5];
const button7 = document.querySelectorAll('.testimonial__nav--icon')[6];
const button8 = document.querySelectorAll('.testimonial__nav--icon')[7];
const button9 = document.querySelectorAll('.testimonial__nav--icon')[8];
button9.style.fill = "#D31342";
//const modal = document.querySelector('.testimonials');
const modal1 = document.querySelectorAll('.testimonial__modal')[0];
const modal2 = document.querySelectorAll('.testimonial__modal')[1];
const modal3 = document.querySelectorAll('.testimonial__modal')[2];
const svg1 = document.querySelectorAll('use')[0];
const svg2 = document.querySelectorAll('use')[1];
const svg3 = document.querySelectorAll('use')[2];


button1.addEventListener("click", (event) => {
    
    modal1.style.display = "flex";
    modal2.style.display = "none";
    modal3.style.display = "none";
    
});

button2.addEventListener("click", (event) => {
    
    modal1.style.display = "none";
    modal2.style.display = "flex";
    modal3.style.display = "none";
});

button3.addEventListener("click", (event) => {
    
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "flex";
});

button4.addEventListener("click", (event) => {
    
    modal1.style.display = "flex";
    modal2.style.display = "none";
    modal3.style.display = "none";
});

button5.addEventListener("click", (event) => {
    
    modal1.style.display = "none";
    modal2.style.display = "flex";
    modal3.style.display = "none";
});

button6.addEventListener("click", (event) => {
    
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "flex";
});

button7.addEventListener("click", (event) => {
    
    modal1.style.display = "flex";
    modal2.style.display = "none";
    modal3.style.display = "none";
});

button8.addEventListener("click", (event) => {
    
    modal1.style.display = "none";
    modal2.style.display = "flex";
    modal3.style.display = "none";
});

button9.addEventListener("click", (event) => {
    
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "flex";
});