/* --------- Nav Scrolling --------- */
function scrollToSection(section) {
    const targetElement = document.getElementById(`${section}-card`);
    const headerHeight = 80;
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

/* --------- SlideShow --------- */

let snakeGameCurrentSlide = 1;
let snakeGameSlideCount = 3;

let gymProjectCurrentSlide = 1;
let gymProjectSlideCount = 4;

function changeSlide(slideName, incrament){
    let currentSlide;
    let nextSlide;

    if(slideName === "snake-game"){
        currentSlide = document.getElementById(`snake-game-image-${snakeGameCurrentSlide}`);

        const nextSlideIndex = incrament === -1 && snakeGameCurrentSlide === 1 ? snakeGameSlideCount : incrament === 1 && snakeGameCurrentSlide === snakeGameSlideCount ? 1 : snakeGameCurrentSlide + incrament;
        nextSlide = document.getElementById(`snake-game-image-${nextSlideIndex}`);

        currentSlide.className = "hidden";
        nextSlide.className = "shown";

        snakeGameCurrentSlide = nextSlideIndex;
    }else if(slideName === "gym-project") {
        currentSlide = document.getElementById(`gym-project-image-${gymProjectCurrentSlide}`);

        const nextSlideIndex = incrament === -1 && gymProjectCurrentSlide === 1 ? gymProjectSlideCount : incrament === 1 && gymProjectCurrentSlide === gymProjectSlideCount ? 1 : gymProjectCurrentSlide + incrament;
        nextSlide = document.getElementById(`gym-project-image-${nextSlideIndex}`);

        currentSlide.className = "hidden";
        nextSlide.className = "shown";

        gymProjectCurrentSlide = nextSlideIndex;
    }
}

/* --------- ReCaptcha --------- */

function onloadCallback(){
    fetch('/api-key').then(response => response.json()).then(data => {
        grecaptcha.render('recaptcha_element', {
            'sitekey' : data.googleSiteApiKey
        });
    });
}