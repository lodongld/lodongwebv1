var isLoading = false;
var isLoading2 = false;


window.onscroll = function (e) {
    var doc = document.getElementById('main-portfolio1');
    var doc2 = document.getElementById('main-portfolio2_inner');
    var executed1 = false;
    var executed2 = false;

    var parentview = document.querySelector('.main-portfolio1');
    var lc = parentview.children;
    let player = document.querySelector('.lc');

    if (inViewport(doc) === true && isLoading === false) {
        isLoading = true;
        port1_start();
    }

    if (inViewport(doc2) === true && isLoading2 === false) {
        isLoading2 = true;
        port2_start();
    }

}


function inViewport(element) {
    let bounds = element.getBoundingClientRect();
    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;

    if (bounds['left'] < 0) return false;
    if (bounds['top'] < 0) return false;
    if (bounds['right'] > viewWidth) return false;
    if (bounds['bottom'] > viewHeight) return false;

    return true;
}


function port1_start() {
    const box_count = document.getElementById("lottie_port1");
    if (box_count.children.length === 0) {
        var lottieAnim_port1 = lottie.loadAnimation({
            container: document.getElementById("lottie_port1"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'https://assets3.lottiefiles.com/packages/lf20_4KuNZDfXTS.json' // the path to the animation json
        });
        lottieAnim_port1.play();
    } else {
        box_count.innerHTML = '';
    }
}


function port2_start() {
    const box_count = document.getElementById("lottie_port2");
    if (box_count.children.length === 0) {
        var lottieAnim_port2 = lottie.loadAnimation({
            container: document.getElementById("lottie_port2"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,

            path: 'https://assets1.lottiefiles.com/packages/lf20_3O3lBcpSR2.json' // the path to the animation json
        });
        lottieAnim_port2.play();
    } else {
        box_count.innerHTML = '';
    }
}