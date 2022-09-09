import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs-core';

var Engine = function(global: any) {
  var doc = global.document,
    win = global.window,
    canvas = doc.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    lastTime = 0;
  canvas.width = 707;
  canvas.height = 606;
  doc.body.appendChild(canvas);
  global.ctx = ctx;
  const FPS: number = 50;
  const timestep: number = 1000 / FPS;
  // var x = 0;
  let frameSize: [number, number] = [500, 500];
  const numBodies: number = 15;
  let bodies: { pos: [tf.Tensor, tf.Tensor], vel: [tf.Tensor, tf.Tensor], size: number };



  function init() {
    console.log('init');
    console.log('init');
    let pos = [
      tf.randomUniform([numBodies, 1], 0, frameSize[0] * 0.2),
      tf.randomUniform([numBodies, 1], 0, frameSize[0] * 0.2)
    ];
    let vel = [tf.randomUniform([numBodies, 1], -0.1, 0.2),
               tf.randomUniform([numBodies, 1], -0.1, 0.2)];
    // let vel = tf.randomUniform([numBodies, 2], -0.1, 0.2);
    // let pos = null, vel = null;
    // vel = tf.tensor([1,2,3])
    // vel = tf.rand
    // vel.print();
    bodies = { pos, vel, size: 5 };

    main();
  }


  function main() {
    // console.log('main');
    var now = Date.now(),
      dt = now - lastTime;
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

  function alignment() {

  }

  function seperation() {

  }

  function cohesion() {

  }


  function update() {
    ctx.beginPath();

    ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
    ctx.strokeRect(0, 0, frameSize[0], frameSize[1]);


    let pos = [bodies.pos[0].bufferSync(), bodies.pos[1].bufferSync() ];
    let dirPos = [tf.add(bodies.pos[0], tf.mul(bodies.vel[0], 15)).bufferSync(), tf.add(bodies.pos[1], tf.mul(bodies.vel[1], 15)).bufferSync()];

    for (var i = 0; i < numBodies; ++i) {
      ctx.beginPath();
      ctx.arc(pos[0].get(i), pos[1].get(i), bodies.size, 0, 2 * Math.PI);
      ctx.moveTo(pos[0].get(i), pos[1].get(i));
      ctx.lineTo(dirPos[0].get(i), dirPos[1].get(i));
      ctx.stroke();
    }

      bodies.pos[0] = tf.add(bodies.pos[0], bodies.vel[0]);
      bodies.pos[1] = tf.add(bodies.pos[1], bodies.vel[1]);

  }

  init();
  global.ctx = ctx;

}



window.onload = function() {
  console.log('load');
  // window.onload = Engine(this);
  var a = Engine(this);
  // a.init();
}
