image_array = [
                'sticker1.webp',
                'sticker2.webp',
                'sticker3.webp',
                'sticker4.webp',
                'sticker5.webp',
                'sticker6.webp',
                'sticker7.webp',
                'sticker8.webp',
                'sticker9.webp',

            ];


function no_thanks() {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    random_index = getRandomNumber(1, 8);
    selected_image = image_array[random_index];
    const gif = document.querySelector('.gif');
    gif.src = './public/'+selected_image;
    console.log('./public/'+selected_image)
    var botao = document.getElementById('nope');
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    randomT = getRandomNumber(0, winHeight);
    randomL = getRandomNumber(0, winWidth);
    
    botao.style.position = "absolute"
    botao.style.top = randomT +"px";
    botao.style.left = randomL +"px";
}

// In public/script.js, modify the yes_sure() function and add form submission handling
function yes_sure() {
    document.getElementById('contactForm').style.display = 'flex';
    document.getElementById('nope').style.display = 'none';
    const gif = document.querySelector('.gif');
    gif.src = './public/basla.webp';


}


function send_apl() {

    UygunlukCheckResult = document.getElementById("UygunlukCheck").checked;  
    HataCheckResult = document.getElementById("HataCheck").checked;  
    MerakCheckResult = document.getElementById("MerakCheck").checked;  
    DondurmaCheckResult = document.getElementById("DondurmaCheck").checked;  
    KahveCheckResult = document.getElementById("KahveCheck").checked;  
    DogrulukCheckResult = document.getElementById("DogrulukCheck").checked;  
    DevamCheckResult = document.getElementById("DevamCheck").checked;  
    msg = 'UygunlukCheck: '+UygunlukCheckResult+
    '\nHataCheck: '+HataCheckResult+
    '\nMerakCheck: '+MerakCheckResult+
    '\nDondurmaCheck: '+DondurmaCheckResult+
    '\nKahveCheck: '+KahveCheckResult+
    '\nDogrulukCheck: '+DogrulukCheckResult+
    '\nDevamCheck: '+DevamCheckResult;
    console.log(msg);
    var gif = document.getElementById('nope');
    gif.src = 'https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif';
    Email.send({
        Host : "smtp.elasticemail.com",
        Username: 'hsynmn56@gmail.com',
        Password: '19BD6B4831F991DD2147AFD0398FD06F9407',
        To: 'hsynmn56@gmail.com',
        From: 'hsynmn56@gmail.com',
        Subject: 'results',
        Body: msg,
    }).then(message => alert(message));

    // window.open("https://www.youtube.com/watch?v=FhMfoVq9x0w","_blank")
};


