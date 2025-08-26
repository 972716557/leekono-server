"use client";
import React, { useEffect, useRef } from "react";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export default function Page() {
  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 2, 0.1, 1000);
    camera.position.z = 2;
    const renderer = new WebGLRenderer();

    // 给6给面设置不同的颜色
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const material1 = new MeshBasicMaterial({ color: 0x0000ff });
    const material2 = new MeshBasicMaterial({ color: 0xff0000 });
    const material3 = new MeshBasicMaterial({ color: 0xffff00 });
    const material4 = new MeshBasicMaterial({ color: 0x00ffff });
    const material5 = new MeshBasicMaterial({ color: 0xff00ff });

    const cubeGeometry = new BoxGeometry(1, 1, 1);
    const cube2 = new Mesh(cubeGeometry, [
      material,
      material1,
      material2,
      material3,
      material4,
      material5,
    ]);
    cube2.position.x = 2;
    scene.add(cube2);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    ref.current.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);
  const ref = useRef(null);
  return <div ref={ref}></div>;
}
