"use client";
// 3维射线与物体相交
import { useEffect, useRef } from "react";
import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 1;
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controller = new OrbitControls(camera, renderer.domElement);
    function animate() {
      controller.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    ref.current?.append(renderer.domElement);
  }, []);
  return (
    <>
      <div ref={ref}></div>
    </>
  );
};
export default Page;
