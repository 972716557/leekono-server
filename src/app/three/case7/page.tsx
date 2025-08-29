"use client";
// 让人沿着镜头的方向跑动
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AnimationMixer,
  Euler,
  DirectionalLight,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  Color,
  DoubleSide,
  BoxGeometry,
  Object3DEventMap,
  Group,
  AnimationObjectGroup,
  AnimationAction,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new Scene();
    let wolfScene: Group<Object3DEventMap>;
    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    for (let i = 0; i < 100; i++) {
      const box = new Mesh(
        new BoxGeometry(1, 1, 1),
        new MeshBasicMaterial({ color: Math.random() * 0xffffff })
      );
      box.position.x = Math.random() * 25 * (Math.random() > 0.5 ? -1 : 1);
      box.position.z = Math.random() * 25 * (Math.random() > 0.5 ? -1 : 1);
      box.position.y = 0.5;
      scene.add(box);
    }
    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 1;
    const renderer = new WebGLRenderer();
    renderer.shadowMap.enabled = true;
    const gltfLoader = new GLTFLoader();
    const light = new DirectionalLight(0xff00ff, 2);
    light.castShadow = true;
    const plane = new Mesh(
      new PlaneGeometry(50, 50),
      new MeshBasicMaterial({
        color: 0xffffff,
        side: DoubleSide,
      })
    );
    scene.background = new Color(0xffe085);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);
    scene.add(light);
    let mixer: AnimationMixer,
      walkAction: AnimationAction,
      runAction: AnimationAction;
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
        wolfScene = internalScene;
        internalScene.traverse((object) => {
          object.castShadow = true;
          object.receiveShadow = true;
        });
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

    window.addEventListener("keydown", (e) => {
      if (e.key === "w") {
        wolfScene.rotateY(Math.PI / 2);
      }
      if (e.key === "s") {
        wolfScene.rotateY(-Math.PI / 2);
      }
      if (e.key === "a") {
        wolfScene.rotateY(Math.PI / 2);
      }
      if (e.key === "d") {
        wolfScene.rotateY(-Math.PI / 2);
      }
      runAction.play();
    });
    window.addEventListener("keyup", (e) => {});
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controller = new OrbitControls(camera, renderer.domElement);
    function animate() {
      // 修改元素的向量，模拟移动
      // player.position.add(new Vector3(0,0,0.1))
      // 创建欧拉角，模拟人物旋转方法
      // const euler = new Euler(0, 0, 0.01);
      // box.rotation.copy(euler)
      // 或者直接改变方向 box.rotation.set(Math.PI)
      // 从欧拉角创建四元数
      // const quaternion = new Quaternion();
      // quaternion.setFromEuler(new Euler(0, 0, 0.01));
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
