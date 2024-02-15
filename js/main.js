const headerNavAnchor = document.querySelectorAll(".header-slider a");
const slidersAnimated = document.querySelectorAll(".slider-animation");


/* Clicando no botao e (parando a animacao + colocando o view correspondente)*/
headerNavAnchor.forEach((a) => {
    console.log("bom");
    a.addEventListener("click", () => {
        if (a.id == "anchor1") {
            console.log(a.id + " got clicked");
            slidersAnimated.forEach((figure) => {
                figure.style.animationName = "paused"
                figure.style.transform = "translateX(0%)";
            });
            console.log("go to slide 1");
        } else {
            if (a.id == "anchor2") {
                slidersAnimated.forEach((figure) => {
                    figure.style.animationName = "paused"
                    figure.style.transform = "translateX(-130%)";
                });
                console.log("go to slide 2");
            }
            else {
                if (a.id == "anchor3") {
                    slidersAnimated.forEach((figure) => {
                        figure.style.animationName = "paused"
                        figure.style.transform = "translateX(-250%)";
                    });
                    console.log("go to slide 3");
                }
            }
        }
        /* console.log(a.id + "got clicked"); */
    });
});
