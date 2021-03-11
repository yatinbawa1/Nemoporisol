const popup = document.querySelector(".popup");
const popupMessage = document.querySelector(".message");

let isWorking = false;

const callPopup = (text,lengthInSeconds = 10,size = 1) => {
    if(isWorking == false){
        isWorking = true;
        let timeLeft = lengthInSeconds;
        popupMessage.innerHTML = text + ` (${timeLeft}s)`
        const timeKeeper = setInterval(() => {
            timeLeft = timeLeft - 1;
            popupMessage.innerHTML = text + ` (${timeLeft}s)` 
        }, 1000);
        
        setTimeout(() => {
            clearInterval(timeKeeper);
            timeLeft = 0;
            popup.style.transform = "translateY(0)";
            isWorking = false;
        },(lengthInSeconds*1000));
    popup.style.transform = "translateY(calc(-100% - 2rem))";
    popup.style.height = `${size*60}px`
    }
}

window.callPopup = callPopup;