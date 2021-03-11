const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const closeBtn = document.querySelector(".close-btn-navbar");
const navbarRight = document.querySelector(".navbar-right")
const container = document.querySelector(".container");
const navItems = document.querySelectorAll(".navbar-item");

isClosed = true
closeBtn.addEventListener('click',(e) => {
    if(isClosed){
        navbarRight.style.display = "flex";
        closeBtn.classList.replace('fa-caret-down','fa-caret-up');
        isClosed = false;
    }else{
        navbarRight.style.display = "none";
        closeBtn.classList.replace('fa-caret-up','fa-caret-down');
        isClosed = true;
    }
})

main.addEventListener("scroll",(ev) => {
    const scrP = ev.target.scrollTop;
    if(scrP > 30) {
        if(!navbar.classList.contains("shadow")){
            navbar.classList.add("shadow");
            container.classList.add("no-bar");
            navItems.forEach(itm => {
                itm.classList.add("bluredItem");
            })
        }
    }
    if(scrP < 35) {
        if(navbar.classList.contains("shadow")){
            navbar.classList.remove("shadow");
            container.classList.remove("no-bar")
            navItems.forEach(itm => {
                itm.classList.remove("bluredItem");
            })
        }
    }
})