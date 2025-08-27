"use client";
// 通过射线和点击坐标，给点击的物体进行颜色改变
import { useEffect, useRef } from "react";
import {
  AxesHelper,
  Camera,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector2,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sphere = new Mesh(
      new SphereGeometry(1, 32, 32),
      new MeshBasicMaterial({ color: 0xffffff })
    );
    sphere.position.x = -2;
    const sphere1 = new Mesh(
      new SphereGeometry(1, 32, 32),
      new MeshBasicMaterial({ color: 0x00ffff })
    );
    sphere1.position.x = 0;
    const sphere2 = new Mesh(
      new SphereGeometry(1, 32, 32),
      new MeshBasicMaterial({ color: 0x00ff0 })
    );
    sphere2.position.x = 2;
    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    camera.position.set(1, 1, 15);
    const scene = new Scene();
    scene.add(sphere, sphere1, sphere2);
    const renderer = new WebGLRenderer();
    const controller = new OrbitControls(camera, renderer.domElement);
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);

    // 创建射线
    const raycaster = new Raycaster();
    //  创建鼠标向量
    const mouse = new Vector2();
    window.addEventListener("click", (e) => {
      // 这里需要把鼠标点击的坐标转换为canvas坐标系
      // 整个页面其实就分为4个区域，x轴是-1到1，y轴也是-1到1
      // 所以拿当前鼠标的位置去除以整个页面的宽度，就可以获取现在的比例，然后乘以二减一，看看是在左边还是右边
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      // 通过相机和鼠标的位置更新射线
      raycaster.setFromCamera(mouse, camera);

      // j计算物体和射线的交点
      const intersects = raycaster.intersectObjects([sphere, sphere1, sphere2]);

      // 这说明有碰到物体，改变第一个物体的颜色
      if (intersects.length > 0) {
        // 如果已经被选中了，就设为白色
        if (intersects[0].object._isSelect) {
          intersects[0].object.material.color.set(
            intersects[0].object._originColor
          );
          intersects[0].object._isSelect = false;
          return;
        }
        // 获取当前点击的物体的原始颜色
        intersects[0].object._originColor =
          intersects[0].object.material.color.getHex();
        intersects[0].object.material.color.set(Math.random() * 0xffffff);

        intersects[0].object._isSelect = true;
      }
    });

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
