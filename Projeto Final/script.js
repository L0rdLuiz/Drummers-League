const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 0.2
const STAR_COUNT =(window.innerWigth + window.innerHeight) /8;

const canvas = document.querySelector('canvas')
    context = canvas.getContext('2s');


    let scale = 1;
        width,
        height;

        let stars = [];

        let pointerX,
            pointerY;
        
        let velocity = {x:0, y:0, tx0, ty0, z:0.0005}


        let touchInput = false;

        generate();
        resize();
        step();

        window.onresize = resize;
        canvas.onmousemove = ontouchmove;
        canvas.ontouchmove = ontouchmove;
        canvas.ontouchend = onmouseleave;
        document.onmouseleave = onMouseLeave;

        function generate() {

            for(let i = 0; i <STAR_COUNT; i++){
                star.push({
                    x:0,
                    y:0,
                    z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
            });
        }
    }

    function placeStar(star){

        star.x = Math.random() * width;
        star.y = Math.random() * height;
    }

    function recycleStar(star){
        let direction = 'z';

        let vx = Math.abs(velocity.x),
                vy = Math.abs(velocity.y);


        if(vx > 1 || vy >1){
            let axis;
            if(vx > vy){
                axis = Math.random() < vx / ( vx +vy) ? 'h' : 'y';
            }
        }
    }