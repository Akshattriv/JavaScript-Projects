const text = "Twinkle Twinkle Little Star, How I Wonder What You Are, Up Above The World So High, Like A Diamond In The Sky";
let index = 0;

function writeText(){
    document.body.innerText = text.slice(0,index);

    index++;

    if(index > text.length ){
        index = 0;
    }
}

setInterval(writeText, 100);
