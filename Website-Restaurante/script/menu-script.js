let spaghettiSection1 = document.getElementById("spaghetti-product-section-1")
let spaghettiSection2 = document.getElementById("spaghetti-product-section-2")
let ravioliSection1 = document.getElementById("ravioli-product-section-1")
let risottoSection1 = document.getElementById("risotto-product-section-1")
let risottoSection2 = document.getElementById("risotto-product-section-2")
let sobremesaSection1 = document.getElementById("sobremesa-product-section-1")
let sobremesaSection2 = document.getElementById("sobremesa-product-section-2")
let drinksSection1 = document.getElementById("drinks-product-section-1")
let drinksSection2 = document.getElementById("drinks-product-section-2")

let button1r = document.getElementById("button-1r")
let button1l = document.getElementById("button-1l")
let button3r = document.getElementById("button-3r")
let button3l = document.getElementById("button-3l")
let button4r = document.getElementById("button-4r")
let button4l = document.getElementById("button-4l")
let button5r = document.getElementById("button-5r")
let button5l = document.getElementById("button-5l")


spaghettiSection2.style.display='none'
spaghettiSection2.style.opacity = '0'

risottoSection2.style.display='none'
risottoSection2.style.opacity = '0'
sobremesaSection2.style.display='none'
sobremesaSection2.style.opacity = '0'
drinksSection2.style.display='none'
drinksSection2.style.opacity = '0'

const section_move_right = (section1,section2) => {
    section1.style.opacity = '0';
    setTimeout(() => {
        section1.style.display = 'none'; 
       section2.style.display = 'flex';
        setTimeout(() => {
            section2.style.opacity = '1'; 
        }, 10);
    }, 500);
}
const section_move_left = (section1,section2) => {
   section2.style.opacity = '0';
   setTimeout(() => {
    section2.style.display = 'none';
   section1.style.display = 'flex';
    setTimeout(() => {
        section1.style.opacity = '1';
    },10)
   }, 500)
   
}
button1r.addEventListener('click',() => section_move_right(spaghettiSection1, spaghettiSection2)) 
button1l.addEventListener('click',() => section_move_left(spaghettiSection1, spaghettiSection2))
button3r.addEventListener('click',() =>section_move_right(risottoSection1,risottoSection2)) 
button3l.addEventListener('click',() =>section_move_left(risottoSection1,risottoSection2))
button4r.addEventListener('click',() =>section_move_right(sobremesaSection1,sobremesaSection2)) 
button4l.addEventListener('click',() =>section_move_left(sobremesaSection1,sobremesaSection2))
button5r.addEventListener('click',() =>section_move_right(drinksSection1,drinksSection2)) 
button5l.addEventListener('click',() =>section_move_left(drinksSection1,drinksSection2))