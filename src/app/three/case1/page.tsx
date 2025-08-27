"use client";
// uv贴图，模型是三维的，贴图是二维的，这个时候就需要把模型和贴图对应起来，二维图的坐标和三维模型的坐标对应起来，才能把模型贴图
import { useEffect, useRef } from "react";
import {
  AxesHelper,
  BufferAttribute,
  Camera,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  TextureLoader,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    camera.position.set(1, 1, 15);
    const uvTexture = new TextureLoader().load(
      "http://localhost:3000/light.png "
    );
    const geometry = new PlaneGeometry(2, 2);

    const vertices = new Uint16Array([-1, -1, 1, -1, 1, 1, -1, 1]);
    const uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
    geometry.setAttribute("uv", new BufferAttribute(uvs, 2));
    const plane = new Mesh(
      geometry,
      new MeshBasicMaterial({
        color: 0xffffff,
        map: uvTexture,
      })
    );
    plane.position.x = -2;
    const scene = new Scene();
    scene.add(plane);
    const renderer = new WebGLRenderer();
    const controller = new OrbitControls(camera, renderer.domElement);
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);

    function animate() {
      controller.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    ref.current?.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, []);

  return <div ref={ref}></div>;
};
export default Page;
