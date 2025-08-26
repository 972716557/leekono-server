"use client";
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
  TextureLoader,
  EquirectangularReflectionMapping,
  AxesHelper,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//  hdr加载器
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const hdrLoader = new RGBELoader();
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );

    camera.position.z = 5;
    camera.position.y = 1;
    camera.position.x = 1;
    // 创建纹理加载器
    const textureLoader = new TextureLoader();
    const map = textureLoader.load("./favicon-title.png");
    const hdr = hdrLoader.load("./room.hdr", (env) => {
      // 设置球形映射
      env.mapping = EquirectangularReflectionMapping;
      scene.background = env;
    });

    const planGeometry = new PlaneGeometry(1, 1);
    const planMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      map,
      // 允许透明度
      transparent: true,
    });
    const plan = new Mesh(planGeometry, planMaterial);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);
    scene.add(plan);
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
