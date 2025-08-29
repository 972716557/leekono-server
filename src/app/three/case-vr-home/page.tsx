"use client";
// 3维射线与物体相交
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SpriteMaterial,
  Sprite,
  Vector2,
  Raycaster,
  Vector3,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  CanvasTexture,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let buttonSprite: Sprite | null = null;

    const scene = new Scene();

    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    camera.position.z = 0.1;
    camera.lookAt(-30, 1, -16);
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controller = new OrbitControls(camera, renderer.domElement);
    controller.minDistance = 1;
    controller.maxDistance = 1;
    const hdrLoader = new RGBELoader();
    const geometry = new SphereGeometry(20);
    let sphere;
    // 翻转法线，使纹理在内部可见
    geometry.scale(1, 1, -1);

    hdrLoader.load("http://localhost:3000/room.hdr", (env) => {
      // 设置球形映射
      const material = new MeshBasicMaterial({ map: env });
      sphere = new Mesh(geometry, material);
      scene.add(sphere);
    });
    // 点精灵，其实就是一张贴图，点击可以去下一个场景
    function createButton() {
      // 创建canvas元素绘制按钮
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext("2d")!;

      // 绘制按钮背景
      const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 120);
      gradient.addColorStop(0, "rgba(106, 176, 247, 0.9)");
      gradient.addColorStop(1, "rgba(41, 128, 224, 0.9)");

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(128, 128, 100, 0, Math.PI * 2);
      context.fill();

      // 绘制按钮边框
      context.strokeStyle = "#1a5276";
      context.lineWidth = 8;
      context.beginPath();
      context.arc(128, 128, 100, 0, Math.PI * 2);
      context.stroke();

      // 绘制按钮图标
      context.fillStyle = "white";
      context.font = "bold 70px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText("ⓘ", 128, 128);

      // 创建纹理和材质
      const texture = new CanvasTexture(canvas);
      const material = new SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false, // 关键：禁用深度测试
      });

      // 创建sprite
      buttonSprite = new Sprite(material);
      buttonSprite.position.set(-16, 1, -16);

      buttonSprite.scale.set(2, 2, 1);
      buttonSprite.center.set(0.5, 0.5);
      buttonSprite.userData = {
        isButton: true,
        name: "panoramaButton",
      };

      scene.add(buttonSprite);
    }
    createButton();

    const raycaster = new Raycaster();
    const mouse = new Vector2();

    window.addEventListener("mousemove", (event) => {
      // 因为外部还有一个header，所以需要减去header的height
      let getBoundingClientRect = ref.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };
      mouse.x =
        ((event.clientX - getBoundingClientRect.left) /
          ref.current?.offsetWidth) *
          2 -
        1;
      mouse.y =
        -(
          (event.clientY - getBoundingClientRect.top) /
          ref.current?.offsetHeight
        ) *
          2 +
        1;

      // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(buttonSprite);
      if (intersects.length > 0) {
        const worldVector = new Vector3(
          intersects[0].object.position.x,
          intersects[0].object.position.y,
          intersects[0].object.position.z
        );
        const dncPosition = worldVector.project(camera);
        const halfWidth = window.innerWidth / 2;
        const halfHeight = window.innerHeight / 2;
        const left = dncPosition.x * halfWidth + halfWidth;
        const top = -dncPosition.y * halfHeight + halfHeight;
        spanRef.current?.style.display = "block";
        spanRef.current?.style.left = left + "px";
        spanRef.current?.style.top = top + "px";
      } else {
        spanRef.current?.style.display = "none";
      }
    });

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    window.addEventListener("click", (e) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(buttonSprite, true);

      if (intersects.length > 0) {
        // 这里切换到另一个场景
        hdrLoader.load("http://localhost:3000/resturant.hdr", (env) => {
          // 设置球形映射
          const material = new MeshBasicMaterial({ map: env });
          sphere.material = material;
        });
      }
    });
    function animate() {
      controller.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    ref.current?.append(renderer.domElement);
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <span ref={spanRef} style={{ position: "absolute", display: "none" }}>
        进入
      </span>
      <div ref={ref}></div>
    </div>
  );
};
export default Page;
