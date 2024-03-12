const image = document.querySelector('#coin-image');
const h1 = document.querySelector('.result');
function spincoin(input) {
    const randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber === 0){
        image.src = './image/chand.png';
    }else{
        image.src =  './image/masjid.png';
    }

    if(input === 'chand' && randomNumber === 0 || input === 'masjid' && randomNumber === 1 ){
        h1.innerHTML = '<h2>You won! Bat | Bowl</h2>';

    }else{
        h1.innerHTML = '<h2>Opponent won the toss</h2>';
    }
}