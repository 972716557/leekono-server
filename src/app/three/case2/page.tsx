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
  AnimationMixer,
  Clock,
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

    let mixer, currentAction, runAction, walkAction;
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
        // 获取模型动画
        const { animations, scene: internalScene } = gltf;
        console.log(animations, "amimation");

        const runClip = animations.find(
          (item) => item.name === "01_Run_Armature_0"
        );
        const walkClip = animations.find(
          (item) => item.name === "02_walk_Armature_0"
        );
        mixer = new AnimationMixer(internalScene);
        if (runClip) {
          runAction = mixer.clipAction(runClip);
          // .play();
        }
        if (walkClip) {
          walkAction = mixer.clipAction(walkClip);
          // .play();
        }
        scene.add(internalScene);
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
    // const planGeometry = new PlaneGeometry(1, 1);
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
    // 添加环境贴图
    hdrLoader.load("http://localhost:3000/room.hdr", (env) => {
      // 设置球形映射
      env.mapping = EquirectangularReflectionMapping;
      // 设置环境贴图
      scene.background = env;
      scene.environment = env;
      planMaterial.envMap = env;
    });
    // const plan = new Mesh(planGeometry, planMaterial);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);
    // scene.add(plan);
    scene.fog = fog;
    const controller = new OrbitControls(camera, renderer.domElement);
    const clock = new Clock();
    function animate() {
      const elapsedTime = clock.getDelta();
      // 触发动画的更新
      mixer?.update(elapsedTime);
      controller.update();
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }
    animate();
    ref.current?.append(renderer.domElement);

    window.addEventListener("keydown", (e) => {
      if (e.key === "r") {
        if (runAction && runAction !== currentAction) {
          runAction.fadeOut(0.5);
          runAction.reset().fadeIn(0.5).play();
          currentAction = runAction;
        }
      }
      if (e.key === "w") {
        if (walkAction && walkAction !== currentAction) {
          walkAction.fadeOut(0.5);
          walkAction.reset().fadeIn(0.5).play();
          currentAction = walkAction;
        }
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === "r") {
        runAction.fadeOut(0.5).play();
        currentAction = null;
      }
      if (e.key === "w") {
        if (walkAction && walkAction !== currentAction) {
          walkAction.fadeOut(0.5).play();
          currentAction = null;
        }
      }
    });
  }, []);
  return (
    <>
      <div ref={ref}></div>
    </>
  );
};
export default Page;
