// SELECT THE CLOCK HANDS
const secLine  = document.getElementById('secLine');
const minuteLine  = document.getElementById('minLine');
const hourLine = document.getElementById('hourLine');
// CREATE TIME FUNCTION
function setTime(){
    const time = new Date();
    // SECONDS FORMAT
    const sec  = time.getSeconds();
    // NOW WE WANT THE HAND TO MOVE ON DEGREE SO THIS NEED SOME MATH :)
    let secDeg  = ( sec * 360/60);
    secLine.style.transform    = `rotate(${secDeg}deg)`;
    // MINUTES FORMAT
    const min  = time.getMinutes();
    let minDeg  = ( min * 360/60)  +  ( sec * 360/60)/60 ;
    minuteLine.style.transform = `rotate(${minDeg}deg)`;
    // HOURS FORMAT
    const hour  = time.getHours();
    let hourDeg = ( hour * 360/12) + ( (min * 360/60)/12 ) ;
    hourLine.style.transform   = `rotate(${hourDeg}deg)`;
    // console.log("Hours : " + hour + " minutes : " + min + " seconds : " + sec);
}
// CREATE THE CLOCK COUNTER
setInterval(setTime , 1000);
// CHANGE THE VIEW BUTTON
var clock      = document.querySelector('.clock');
var elements   = document.querySelectorAll('.clock div');
var changeView = document.getElementById('changeView');
var body       = document.querySelector('body');
changeView.addEventListener('click' , change);
// FUNCTION THAT CHANGE THE STYLE
function change(){
    // this.style.backgroundColor = '#582733';
    // body.style.backgroundImage = "url('img/clock-bg-2.jpg')";
    // clock.style.backgroundColor = '#e7e6e6';
    // for (var i = 0 ; i < elements.length ; i ++){
    //     elements[i].classList.add('second-color');
    // }
    if (this.style.backgroundColor = '#3e9294'){
        this.style.backgroundColor = '#582733';
        body.style.backgroundImage = "url('https://res.cloudinary.com/hegeryfiles/image/upload/v1550339368/clock-bg-2.jpg')";
        clock.style.backgroundColor = '#e7e6e6';
        for (var i = 0 ; i < elements.length ; i ++){
            elements[i].classList.add('second-color');
        }
    } else if (this.style.backgroundColor !== '#3e9294'){
        this.style.backgroundColor = '#3e9294';
        body.style.backgroundImage = "url('https://res.cloudinary.com/hegeryfiles/image/upload/v1550339371/clock-bg.jpg')";
        console.log("hhh");
        clock.style.backgroundColor = '#181717';
        for (var i = 0 ; i < elements.length ; i ++){
            elements[i].classList.remove('second-color');
        }
    }
}