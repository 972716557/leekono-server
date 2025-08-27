"use client";
// 增加阴影和光源
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  DirectionalLight,
  DirectionalLightHelper,
  PlaneGeometry,
  PCFSoftShadowMap,
  MeshStandardMaterial,
  PointLight,
  PointLightHelper,
  Vector3,
  Raycaster,
  SphereGeometry,
} from "three";
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
    camera.position.z = 10;
    camera.position.x = 1;
    camera.position.y = 1;
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controller = new OrbitControls(camera, renderer.domElement);
    const geometry = new SphereGeometry(1, 32, 32);
    const material = new MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new Mesh(geometry, material);
    const sphere1 = new Mesh(geometry, material);
    const sphere2 = new Mesh(geometry, material);
    sphere1.position.x = 3;
    sphere2.position.x = -3;
    scene.add(sphere, sphere1, sphere2);

    const rayOrigin = new Vector3(-6, 0, 0);
    const rayDirection = new Vector3(1, 0, 0);
    rayDirection.normalize();
    const raycaster = new Raycaster(rayOrigin, rayDirection);
    const arr = raycaster.intersectObjects([sphere, sphere1, sphere2]);
    if (arr.length > 0) {
      arr[0].object.material.color.set(
        Math.random(),
        Math.random(),
        Math.random()
      );
    }
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
