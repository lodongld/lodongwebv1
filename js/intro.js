function lottie_intro() {

    const elem1 = document.getElementById("container_header");
    elem1.style.visibility = "hidden";

    var lottieAnim = lottie.loadAnimation({
        container: document.getElementById("lottie"), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://assets7.lottiefiles.com/packages/lf20_TVY4YMTEIf.json' // the path to the animation json
    });
    lottieAnim.play();
    lottieAnim.onComplete = function () {
        var elem = document.getElementById("lottie");
        elem.style.display = "absolute";
        elem.style.position = "fixed";
        elem.animate(
            {
                transform: [
                    'translateY(0px)',
                    'translateY(-150%)'
                ]
            },
            {
                duration: 1000, // 밀리초 지정
                fill: 'forwards', // 종료 시 속성을 지님
                easing: 'ease' // 가속도 종류
            }
        );

        setTimeout(function () {
            elem1.style.visibility = "visible";
            elem.style.visibility = "hidden";
        }, 300);

    }
}
document.addEventListener("DOMContentLoaded", function() {
    lottie_intro();
}); 




// lottieAnim_port1.play();
//
// lottie_port1();









