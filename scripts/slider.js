const grid = document.querySelectorAll(".slider .portfolio");
const phrase = document.querySelectorAll(".sliderPhrases .quote_comments");
let set = 1;
let phraseIndex = 0;
const maxIndex = phrase.length;
let qtdGrids = grid.length


function active2() {
    phrase[phraseIndex].classList.remove("active");
    phraseIndex++;
    if (phraseIndex >= maxIndex) phraseIndex = 0;
    phrase[phraseIndex].classList.add("active");
}

function active() {
    grid[1].style.opacity = set;
    set++;
    if (set > 1) {
        set = 0;
    }
}

function start() {
    setInterval(() => {
        active();
        active2()
    }, 4000);
}

window.addEventListener("load", start())