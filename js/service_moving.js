let isfirst = false;
let eleWidth;
let eleHeight;
let eleStartTop;
let windowWidth;

let firstPicture = true;
let secondPicture = false;
let thirdPicture = false;
let forthPicture = false;
let fifthPicture = false;
let sixthPicture = false;
let seventhPicture = false;
let downFirst = 0;

let firstHosting = true;
let secondHosting = false;
let thirdHosting = false;
let forthHosting = false;

let upscroll = true;

let endScroll = false;
let isRollingUp = false;
let upFirst = 0;
function displayscrolldown(ele,ele2){
    const elem = document.getElementById(ele);
    const elem2 = document.getElementById(ele2);
    elem.style.display = 'none';
    elem2.style.display = '';
}
function displayscrollup(ele,ele2){
    const elem = document.getElementById(ele);
    const elem2 = document.getElementById(ele2);
    elem.style.display = '';
    elem2.style.display = 'none';

}
window.addEventListener("wheel", (e) => {
    const ele = document.getElementById("develop_detail");
    const ele2 = document.getElementById("hosting_detail");

    if (window.getComputedStyle(ele).display === 'none' && window.getComputedStyle(ele2).display === 'none') {

    } else {
        if (this.oldScroll > this.scrollY) {
            isRollingUp = true;

        } else if (this.oldScroll < this.scrollY) {
            isRollingUp = false;

            if (window.getComputedStyle(ele2).display === 'flex') {
                const topheight = document.getElementById('service1_section');
                if(this.scrollY >= topheight.offsetHeight){
                    const service1_section = document.getElementById("service1_section");
                    service1_section.style.display = 'none';
                }
            }
        } else {
            if (isRollingUp === false) {
                if (downFirst === 2) {
                    //개발 서비스
                    if (window.getComputedStyle(ele).display === 'block') {
                        if (secondPicture === false) {
                            displayscrolldown("detail1_textline","detail2_textline")
                            secondPicture = true;
                            const service1_section = document.getElementById("service1_section");
                            service1_section.style.display = 'none';
                        } else if (thirdPicture === false) {
                            displayscrolldown("detail2_textline","detail3_textline")
                            thirdPicture = true;
                        } else if (forthPicture === false) {
                            displayscrolldown("detail3_textline","detail4_textline")
                            forthPicture = true;
                        } else if (fifthPicture === false) {
                            displayscrolldown("detail4_textline","detail5_textline")
                            fifthPicture = true;
                        } else if (sixthPicture === false) {
                            displayscrolldown("detail5_textline","detail6_textline")
                            sixthPicture = true;
                        } else if (seventhPicture === false) {
                            displayscrolldown("detail6_textline","detail7_textline")
                            seventhPicture = true;
                            endScroll = true;
                        }
                    }else{
                        
                        // if (secondHosting === false) {
                        //     displayscrolldown("hosting1","hosting2")
                        //     secondHosting = true;
                        //     //상단 서비스 내용 감추기
                        //     const service1_section = document.getElementById("service1_section");
                        //     service1_section.style.display = 'none';
                        // } else if (thirdHosting === false) {
                        //     displayscrolldown("hosting2","hosting3")
                        //     thirdHosting = true;
                        // } else if (forthHosting === false) {
                        //     displayscrolldown("hosting3","hosting4")
                        //     forthHosting = true;                            
                        //     endScroll = true;
                        // } 
                    }
                    //호스팅 서비스
                    downFirst = 0;
                } else {
                    downFirst++;
                }

                //호스팅 서비스
            } else {
                if (upFirst === 2) {
                    if (window.getComputedStyle(ele).display === 'block') {
                        if (seventhPicture === true) {
                            displayscrollup("detail6_textline","detail7_textline")
                            seventhPicture = false;
                        } else if (sixthPicture === true) {
                            displayscrollup("detail5_textline","detail6_textline")
                            sixthPicture = false;
                        } else if (fifthPicture === true) {
                            displayscrollup("detail4_textline","detail5_textline")
                            fifthPicture = false;
                        } else if (forthPicture === true) {
                            displayscrollup("detail3_textline","detail4_textline")
                            forthPicture = false;
                        } else if (thirdPicture === true) {
                            displayscrollup("detail2_textline","detail3_textline")
                            thirdPicture = false;
                        } else if (secondPicture === true) {
                            displayscrollup("detail1_textline","detail2_textline")
                            secondPicture = false;
                        } else if (firstPicture === true) {
                            const service1_section = document.getElementById("service1_section");
                            service1_section.style.display = '';
                            service1_section.classList.add('visible_mode');
                            const ele7 = document.getElementById("develop_detail");
                            const footer = document.getElementById("footer-container");
                            ele7.style.display = 'none';
                            footer.style.display = 'none';
                        }    
                    }else{
                        // if (forthHosting === true) {
                        //     console.log('up4')
                        //     displayscrollup("hosting3","hosting4")
                        //     forthHosting = false;
                        // } else if (thirdHosting === true) {
                        //     console.log('up3')
                        //     displayscrollup("hosting2","hosting3")
                        //     thirdHosting = false;
                        // } else if (secondHosting === true) {
                        //     console.log('up2')
                        //     displayscrollup("hosting1","hosting2")
                        //     secondHosting = false;
                        // } else if (firstHosting === true) {
                        //     console.log('up1')
                        //     const service1_section = document.getElementById("service1_section");
                        //     service1_section.style.display = '';
                        //     service1_section.classList.add('visible_mode');
                        //     const ele4 = document.getElementById("hosting_detail");
                        //     const footer = document.getElementById("footer-container");
                        //     ele4.style.display = 'none';
                        //     footer.style.display = 'none';
                        // }
                        if (forthHosting === true) {
                            // console.log('up4')
                            // displayscrollup("hosting3","hosting4")
                            forthHosting = false;
                        } else if (thirdHosting === true) {
                            // console.log('up3')
                            // displayscrollup("hosting2","hosting3")
                            thirdHosting = false;
                        } else if (secondHosting === true) {
                            // console.log('up2')
                            // displayscrollup("hosting1","hosting2")
                            secondHosting = false;
                        } else if (firstHosting === true) {
                            console.log('up1')
                            const service1_section = document.getElementById("service1_section");
                            service1_section.style.display = '';
                            service1_section.classList.add('visible_mode');
                            const ele4 = document.getElementById("hosting_detail");
                            const footer = document.getElementById("footer-container");
                            ele4.style.display = 'none';
                            footer.style.display = 'none';
                        }
                    }                 
                    
                    upFirst = 0;
                } else {
                    upFirst++;
                }
            }

            

        }
        this.oldScroll = this.scrollY;
    }

})
;


function mouse_position(e) {
    const ele = document.getElementById("service1"), // Do not use #
        eleStyle = window.getComputedStyle(ele);

    const ele22 = document.getElementById("service2"), // Do not use #
        eleStyle2 = window.getComputedStyle(ele22);


    if (isfirst === false) {
        /* Below is the width of ele */
        eleWidth = eleStyle.width.replaceAll("px", "");
        eleHeight = eleStyle.height.replaceAll("px", "");
        windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        const windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        isfirst = true;

    }
    const ele2Width = eleStyle2.width.replaceAll("px", "");
    const ele2Height = eleStyle2.height.replaceAll("px", "");


    var ele2 = document.getElementById("service2"); // Do not use #
    var ele1 = document.getElementById("service1"); // Do not use #
    var ele1child = document.getElementById("service1").getElementsByTagName("img"); // Do not use #
    var ele2child = document.getElementById("service2").getElementsByTagName("img"); // Do not use #

    var ele1Text = document.getElementById("services_text1").getElementsByTagName("h1");
    var ele2Text = document.getElementById("services_text2").getElementsByTagName("h1");

    if (e.pageX > 0 && e.pageX < eleWidth && e.pageY > 103 && e.pageY < eleHeight) {
        console.log('hover1')

        ele1.classList.add('move');
        ele1child.item(0).classList.remove('service1_img_tag');
        ele1child.item(0).classList.add('full_screen1');

        ele2.classList.remove('move2');
        ele2child.item(0).classList.remove('full_screen1');
        ele2child.item(0).classList.add('service2_img_tag');

        ele2Text.item(0).style.opacity = "0.1";
        ele1Text.item(0).style.opacity = "1";
    } else if (e.pageX > eleWidth && e.pageX < windowWidth && e.pageY > 0 && e.pageY < eleHeight) {

        console.log('hover12')


        ele2.classList.add('move2');
        ele2child.item(0).classList.remove('service2_img_tag');
        ele2child.item(0).classList.add('full_screen1');

        ele1.classList.remove('move');
        ele1child.item(0).classList.remove('full_screen1');
        ele1child.item(0).classList.add('service1_img_tag');

        ele2Text.item(0).style.opacity = "1";
        ele1Text.item(0).style.opacity = "0.1";


    } else {
        console.log('hover13')
        if (e.pageY < eleHeight) {
            console.log('hover14')
            ele1.classList.remove('move');
            ele1child.item(0).classList.remove('full_screen1');
            ele1child.item(0).classList.add('service1_img_tag');

            ele2.classList.remove('move2');
            ele2child.item(0).classList.remove('full_screen1');
            ele2child.item(0).classList.add('service2_img_tag');

            ele2Text.item(0).style.opacity = "1";
            ele1Text.item(0).style.opacity = "1";
        }
    }
}

function onClickServices(e) {

    if (e.pageX > 0 && e.pageX < eleWidth && e.pageY > 103 && e.pageY < eleHeight) {
        console.log('click 1')
        const ele5 = document.getElementById("develop_detail");
        ele5.style.display = 'block';

        const ele6 = document.getElementById("hosting_detail");
        ele6.style.display = 'none';
    } else if (e.pageX > eleWidth && e.pageX < windowWidth && e.pageY > 0 && e.pageY < eleHeight) {
        console.log('click 2')
        const ele5 = document.getElementById("develop_detail");
        ele5.style.display = 'none';

        const ele6 = document.getElementById("hosting_detail");
        ele6.style.display = 'flex';
        ele6.style.flexDirection = 'column';

        const ele7 = document.getElementById("footer-container");
        ele7.style.display = 'block';


    } else {
        console.log("124124124")
    }

}

function onClickList1() {
    console.log("안녕");
}


