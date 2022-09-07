// require('@tensorflow/tfjs-backend-cpu');
// var tf = require( '@tensorflow/tfjs-core');
// import * as tf from;
// import * as tf from 'tensorflow';
var Engine = function(global) {
    var doc = global.document, win = global.window, canvas = doc.createElement("canvas"), ctx = canvas.getContext("2d"), lastTime = 0;
    canvas.width = 707;
    canvas.height = 606;
    doc.body.appendChild(canvas);
    global.ctx = ctx;
    const FPS = 50;
    const timestep = 1000 / FPS;
    var x = 0;
    // let bodies: { pos: tf.Tensor, vel: tf.Tensor, size: number };
    function init() {
        console.log("init");
        console.log("init");
        console.log("init");
        // let pos = tf.randomUniform([numBodies, 2], frameSize[0] * 0.3, frameSize[0] * 0.7);
        // let vel = tf.randomUniform([numBodies, 2], -0.1, 0.2);
        let pos = null, vel = null;
        // vel = tf.tensor([1,2,3])
        // vel = tf.rand
        // vel.print();
        bodies = {
            pos,
            vel,
            size: 5
        };
        main();
    }
    function main() {
        // console.log('main');
        var now = Date.now(), dt = now - lastTime;
        // console.log('time', now, lastTime, dt);
        if (dt > timestep) {
            update();
            lastTime = now;
        }
        // render();
        // update();
        // if (game_over === true) {
        //   // refresh();
        // }
        win.requestAnimationFrame(main);
    }
    function update() {
        ctx.beginPath();
        ctx.clearRect(0, 0, 500, 500);
        ctx.strokeRect(0, 0, 500, 500);
        ctx.rect(x, x, 100, 100);
        ctx.fill();
        // canvas.getContext('2d').begin()
        x++;
    }
    init();
    global.ctx = ctx;
};
window.onload = function() {
    console.log("load");
    // window.onload = Engine(this);
    var a = Engine(this);
// a.init();
};

//# sourceMappingURL=index.74345d3d.js.map
