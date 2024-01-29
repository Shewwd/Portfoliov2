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