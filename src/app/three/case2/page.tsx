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
  Fog,
  FogExp2,
} from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
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

    //  模型加载器
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "http://localhost:3000/gltf/Wolf-Blender-2.82a.glb",
      (gltf) => {
        // 修改模型颜色
        // gltf.scene.traverse((object) => {
        //   if (object.isMesh) {
        //     // 克隆材质以避免共享问题:cite[8]
        //     object.material = object.material.clone();
        //     object.material.color.setHex(0xff0000);
        //   }
        // });
        console.log(gltf, "gltf");
        scene.add(gltf.scene);
      }
    );
    camera.position.z = 5;
    camera.position.y = 1;
    camera.position.x = 1;
    // 创建雾，线型
    const fog = new Fog(0xffffff, 0.1, 500);
    // 创建雾，指数型
    // const fog = new FogExp2(0xffffff, 0.01);
    // 创建纹理加载器
    const textureLoader = new TextureLoader();
    const map = textureLoader.load("http://localhost:3000/favicon-title.png");
    const lightMap = textureLoader.load("http://localhost:3000/light.png");
    const planGeometry = new PlaneGeometry(1, 1);
    const planMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      map,
      // 允许透明度
      transparent: true,
      // 设置光照贴图
      lightMap,
      // 设置反射
      // reflectivity: 1,
    });
    const hdr = hdrLoader.load("http://localhost:3000/room.hdr", (env) => {
      // 设置球形映射
      env.mapping = EquirectangularReflectionMapping;
      // 设置环境贴图
      scene.background = env;
      scene.environment = env;
      planMaterial.envMap = env;
    });
    const plan = new Mesh(planGeometry, planMaterial);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);
    // scene.add(plan);
    scene.fog = fog;
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
