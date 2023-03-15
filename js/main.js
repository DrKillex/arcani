'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};


const minori = [
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/1.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/2.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/3.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/4.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/5.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/6.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/7.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/8.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/9.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/10.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/11.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/12.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/13.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/14.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/15.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/16.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/17.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/18.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/19.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/20.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/21.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/22.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/23.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/24.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/25.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/26.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/27.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/28.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/29.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/30.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/31.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/32.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/33.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/34.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/35.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/36.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/37.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/38.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/39.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/40.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/41.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/42.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/43.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/44.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/45.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/46.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/47.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/48.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/49.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/50.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/51.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/52.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/53.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/54.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/55.png",
    "http://www.nerdcoledi.it/wp-content/uploads/2020/03/56.png"
];

const maggiori = [
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/0.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/1.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/2.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/3.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/4.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/5.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/6.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/7.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/8.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/9.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/10.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/11.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/12.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/13.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/14.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/15.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/16.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/17.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/18.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/19.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/20.jpg",
    "http://www.nerdcoledi.it/wp-content/uploads/2019/12/21.jpg"
];


let pescate = [];


const div = document.getElementById("carta")
const pescaMinore = document.getElementById("pesca-minore")
const pescaMaggiore = document.getElementById("pesca-maggiore")
const reset = document.getElementById('rimescola')

pescaMinore.addEventListener('click', function () {
    div.innerHTML = '';
    let picked = false
    let cartaEstratta;
    if (picked === false){
       while (picked === false) {
        cartaEstratta = getRandomInt(1, 56)
        if (!pescate.includes(cartaEstratta)) {
            pescate.push(cartaEstratta)
            picked = true;
        }
    } 
    }    
    console.log(cartaEstratta)
    console.log(pescate)
})

reset.addEventListener('click', function(){
    pescate = [];
})