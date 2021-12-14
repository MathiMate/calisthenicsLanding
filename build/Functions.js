window.addEventListener("load", start);

function start() {
        scrollFunction(); 
        showOffAside();
}


//#region arrowScroll
window.onscroll = ()=> {scrollFunction()};

function scrollFunction() {
    
    let arrowButton = document.querySelector(".arrow");
    if (document.documentElement.scrollTop >= 800) {
        arrowButton.classList.add("arrowShow");
    } else {
        arrowButton.classList.remove("arrowShow");
    }


    let showAside = document.querySelector(".aside");
    if (document.documentElement.scrollTop >= 300) {
        showAside.classList.add("asideOn");
    } else {
        showAside.classList.remove("asideOn");
    }
}
//#endregion

function showOffAside() {
    let crossButton = document.querySelector('.cross');
    let showAside = document.querySelector(".aside");

        crossButton.addEventListener('click', () => {
            showAside.classList.remove('asideOn');
        });
    }