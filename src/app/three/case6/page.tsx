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
  TextureLoader,
  Vector2,
  Raycaster,
  Vector3,
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
    camera.position.z = 30;
    camera.position.x = 1;
    camera.position.y = 1;
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controller = new OrbitControls(camera, renderer.domElement);
    const material = new MeshBasicMaterial({
      // color: 0x00ff00,
      map: new TextureLoader().load("http://localhost:3000/light.png"),
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
      // 质量设置为0，这表示这个物体是固定的
      mass: 0,
      shape: new Plane(),
      material: groundMaterial,
    });

    world.addBody(ground);
    ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    const spheres = [];
    const createSphere = (position, direction) => {
      // 创建可视化球体
      const sphere = new Mesh(new SphereGeometry(1, 32, 32), material);
      sphere.position.copy(position);
      // 创建物理球体
      const sphereBody = new Body({
        // 设置质量为1
        mass: 1,
        position: sphere.position as unknown as Vec3,
        material: sphereMaterial,
        // 设置阻力，不会一直往前跑
        linearDamping: 0.5,
        angularDamping: 1,
      });
      const sphereShape = new Sphere(1);
      sphereBody.addShape(sphereShape);

      // 给物理球体增加水平方向的力，这个数值不仅仅表示方向，而且还代表力度，数值越大，球体就会飞得越快、越远
      sphereBody.applyLocalForce(direction.scale(2000), new Vec3(0, 0, 0));
      world.addBody(sphereBody);

      scene.add(sphere);
      sphere.position.copy(sphereBody.position);
      spheres.push({ sphere, sphereBody });
    };

    // 创建可视化地面
    const plane = new Mesh(
      new PlaneGeometry(30, 30),
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
    };
    function animate() {
      updatePhysics();
      controller.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      spheres.forEach(({ sphere, sphereBody }) => {
        sphere.position.copy(sphereBody.position);
        sphere.quaternion.copy(sphereBody.quaternion);
      });
    }
    animate();
    const mouse = new Vector2();

    window.addEventListener("click", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      const raycaster = new Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const pos = new Vector3();
      pos.copy(raycaster.ray.direction).add(raycaster.ray.origin);
      const direction = new Vec3(
        raycaster.ray.direction.x,
        raycaster.ray.direction.y,
        raycaster.ray.direction.z
      );
      createSphere({ x: pos.x, y: pos.y, z: pos.z }, direction);
    });
    ref.current?.append(renderer.domElement);
  }, []);
  return (
    <>
      <div ref={ref}></div>
    </>
  );
};
export default Page;
