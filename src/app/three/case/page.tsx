"use client";
// tween 补间动画
import { useEffect, useRef } from "react";
import {
  AxesHelper,
  Camera,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector2,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Tween } from "three/examples/jsm/libs/tween.module.js";
const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sphere = new Mesh(
      new SphereGeometry(1, 32, 32),
      new MeshBasicMaterial({ color: 0xffffff })
    );
    // 补间动画
    const tween = new Tween(sphere.position);
    sphere.position.x = -2;
    // 启动动画
    tween.to({ x: 2 }, 1000);
    const tween2 = new Tween(sphere.position);
    tween2.to({ y: -2 }, 1000);
    tween.chain(tween2);
    tween2.chain(tween);
    tween.start();
    // 设置动画重复次数
    // tween.repeat(2);
    // 循环往复，设置一点延迟，避免闪烁
    // tween.yoyo(true).repeatDelay(40);

    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    camera.position.set(1, 1, 15);
    const scene = new Scene();
    scene.add(sphere);
    const renderer = new WebGLRenderer();
    const controller = new OrbitControls(camera, renderer.domElement);
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);

    function animate() {
      controller.update();
      requestAnimationFrame(animate);
      tween.update();
      tween2.update();
      renderer.render(scene, camera);
    }
    animate();
    ref.current?.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, []);

  return <div ref={ref}></div>;
};
export default Page;
