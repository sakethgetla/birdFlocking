import type { Component } from 'solid-js';
import { onCleanup, onMount } from 'solid-js';

import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs-core';


const App: Component = () => {
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let frame: number;
  let lastTime: number = 0;
  const FPS = 30;
  const numBodies = 15;
  const timeStep = 1000 / FPS;
  let x = 0;
  let frameSize: [number, number] = [500, 500];
  // let bodies: Array<Body>;
  let bodies: { pos: tf.Tensor, vel: tf.Tensor, size: number };

  // let bodies: Array<number[]>;
  // x, y, angle;
  // let bodies: Array<[number, number, number]>;


  const init = () => {

    // let a = tf.tensor([1, 1, 1, 1]);
    // a.print();

    // let pos = math.random(math.matrix([numBodies, 2]), frameSize[0] * 0.1, frameSize[0] * 0.9);
    // let vel = math.random(math.matrix([numBodies, 2]), -1, 1);


    let pos = tf.randomUniform([numBodies, 2], frameSize[0] * 0.3, frameSize[0] * 0.7);
    let vel = tf.randomUniform([numBodies, 2], -0.1, 0.2);
    // let vel = tf.rand([numBodies, 2]);
    bodies = { pos, vel, size: 5 };
    // pos.print();
    // vel.print();

    // console.log(bodies);
  }

  // function updateForces(bodies: {  pos: math.Matrix, vel: math.Matrix, size: number }): [number, number] {
  // function updateForces(bodies: { pos: tf.Tensor, vel: tf.Tensor, size: number }): void {
  function updateForces(): void {

    let forces;
    // *make the boids go to the centre*
    // let centreScreen = tf.tensor([[frameSize[0] / 2, frameSize[1] / 2]]);
    // let dirVec = tf.sub(centreScreen, bodies.pos);
    // forces = tf.mul(dirVec, 0.001);
    // bodies.vel = tf.add(bodies.vel, forces);

    // cohesion
    let avgPos = tf.sum(bodies.pos, 0);
    avgPos = tf.sub(avgPos, bodies.pos);
    avgPos = tf.mul(avgPos, 1 / (numBodies - 1))
    avgPos = tf.sub(avgPos, bodies.pos);
    // let forces = tf.mul(avgPos, 0.001);
    // forces = tf.mul(avgPos, 0.001);
    forces = tf.divNoNan(avgPos, 500);
    // forces.print();
    bodies.vel = tf.add(bodies.vel, forces);

    // alignment
    // add all velocities

    let avgVel = tf.sum(bodies.vel, 0);
    avgVel = tf.sub(avgVel, bodies.vel);
    avgVel = tf.divNoNan(avgVel, (numBodies-1)*100);
    // avgVel = tf.mul(avgVel, 0.001/(numBodies-1));
    bodies.vel = tf.add(bodies.vel, avgVel);


    // separation

    let x = tf.zeros([numBodies, numBodies, 2]);

    x = tf.add(x, bodies.pos)
    // x.print();
    // console.log(x.shape);

    x = tf.sub(tf.transpose(x, [1, 0, 2]), x);

    let y;
    y = tf.pow(x, 2);
    y = tf.sum(y, 2);
    // y = tf.pow(y, -1.1);
    y = tf.divNoNan(1, y);
    // y.print();
    // console.log(y.shape);

    // x =
    // y = tf.clipByValue(y, 0, 10);
    // x = tf.clipByValue(x, 0, 10);
    x = tf.transpose(tf.mul(tf.transpose(x), tf.transpose(y)));

    // x.print();
    // x = tf.clipByValue(x, 0, 10);
    // x.print();

    x = tf.sum(x, 1);
    // x.print();

    bodies.vel = tf.add(bodies.vel, x);

    // x.print();
    // console.log(x.shape);

    // avoid walls


  }

  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;

    if (ctx && time > lastTime + timeStep) {
      lastTime = time;

      ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
      ctx.strokeRect(0, 0, frameSize[0], frameSize[1]);

      updateForces();

      let pos = bodies.pos.bufferSync();
      let dirPos = tf.add(bodies.pos, tf.mul(bodies.vel, 15)).bufferSync();

      for (var i = 0; i < numBodies; ++i) {
        ctx.beginPath();
        ctx.arc(pos.get(i, 0), pos.get(i, 1), bodies.size, 0, 2 * Math.PI);
        ctx.moveTo(pos.get(i, 0), pos.get(i, 1));
        ctx.lineTo(dirPos.get(i, 0), dirPos.get(i, 1));
        ctx.stroke();
      }


      // tf.norm( bodies.vel, 'euclidean', 1).print()
      // tf.div(bodies.vel, tf.norm(bodies.vel, 'euclidean', 1)).print();


      // bodies.pos = tf.add(bodies.pos, tf.div(bodies.vel, tf.norm(bodies.vel, 'euclidean', 1)));
      bodies.pos = tf.add(bodies.pos, bodies.vel);
    }

    frame = requestAnimationFrame(draw)
  }
  onMount(() => {
    console.log("start");
    init();
    frame = requestAnimationFrame(draw);
    console.log(frame);
    onCleanup(() => cancelAnimationFrame(frame));
  })

  return (
    <div>
      <canvas ref={canvasRef} width={frameSize[0]} height={frameSize[1]} />
    </div>
  )
};

export default App;
