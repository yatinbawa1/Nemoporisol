const shareButton = document.querySelectorAll(".card-share-link");
const starButton = document.querySelectorAll(".card-star");


shareButton.forEach((element) => {
    element.addEventListener('click',() => {
        callPopup("URL copied to clipboard",5);
    });
});

starButton.forEach((element) => {
    let isStared = false;
    element.addEventListener('click',() => {
        if(isStared) {
            element.classList.remove("stared");
        }else{
            element.classList.add("stared");
        }
        isStared = !isStared;
    })
});