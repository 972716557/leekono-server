"use client";
// 添加重力
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
} from "three";
import {
  World,
  Body,
  Plane,
  Sphere,
  Vec3,
  Material,
  ContactMaterial,
} from "cannon";
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
    camera.position.z = 8;
    camera.position.x = 1;
    camera.position.y = 1;
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controller = new OrbitControls(camera, renderer.domElement);
    const material = new MeshBasicMaterial({
      color: 0x00ff00,
    });

    // 创建物理事件
    const world = new World();
    world.gravity.set(0, -9.8, 0);

    // 创建物理地面和小球的材质
    const groundMaterial = new Material("groundMaterial");
    const sphereMaterial = new Material("sphereMaterial");
    const contactMaterial = new ContactMaterial(
      groundMaterial,
      sphereMaterial,
      // friction 摩擦系数 restitution 弹性系数
      { friction: 0.3, restitution: 0.6 }
    );
    // 把材质添加到物理世界
    world.addContactMaterial(contactMaterial);

    // 创建物理地面
    const ground = new Body({
      // 这表示这个物体是固定的
      mass: 0,
      shape: new Plane(),
      material: groundMaterial,
    });

    world.addBody(ground);
    ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

    // 创建可视化球体
    const sphere = new Mesh(new SphereGeometry(1, 32, 32), material);
    sphere.position.y = 5;

    // 创建物理球体
    const sphereBody = new Body({
      mass: 1,
      position: sphere.position,
      material: sphereMaterial,
    });
    const sphereShape = new Sphere(1);
    sphereBody.addShape(sphereShape);
    world.addBody(sphereBody);

    scene.add(sphere);
    const plane = new Mesh(
      new PlaneGeometry(10, 10),
      new MeshBasicMaterial({
        color: 0xffffff,
      })
    );

    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);
    const updatePhysics = () => {
      // 每一秒60帧
      world.step(1 / 60);
      // 把物理小球的位置复制到可视化小球
      sphere.position.copy(sphereBody.position);
    };
    function animate() {
      updatePhysics();
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
