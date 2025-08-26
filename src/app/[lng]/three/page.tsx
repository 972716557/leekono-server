"use client";
import { Button } from "antd";
import { useEffect, useRef } from "react";
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
} from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const Page = () => {
  const ref = useRef(null);
  const renderRef = useRef();
  const gui = new GUI();
  const obj = {
    fullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        renderRef.current?.domElement?.requestFullscreen();
      }
    },
    fullScreenExit() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    },
  };
  gui.add(obj, "fullScreen");
  gui.add(obj, "fullScreenExit");
  const onClick = () => {
    renderRef.current?.domElement?.requestFullscreen();
  };
  const exit = () => {
    document.exitFullscreen();
  };
  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75, // 视角
      window.innerWidth / window.innerHeight, // 宽高比
      0.1, // 相机最近能看到的是什么
      1000 // 相机最远能看到什么
    );
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 创建几何体
    const geometry = new BoxGeometry(1, 1, 1);
    // 设置材质
    const parentMater = new MeshBasicMaterial({ color: 0xf83500 });
    const parentCube = new Mesh(geometry, parentMater);

    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    // 添加子元素，子元素就会跟父元素形成一个集合，这个时候子元素就会相对于父元素进行定位
    parentCube.add(cube);
    parentCube.position.set(-3, 0, 0);
    cube.position.set(3, 0, 0);
    cube.scale.set(2, 2, 2);

    scene.add(parentCube);
    camera.position.z = 5;
    camera.position.y = 1;
    camera.position.x = 1;
    const axesHelper = new AxesHelper(5);
    // 添加轨道控制器，可以拖拽控制x、y、z轴，这里其实就是移动相机的位置
    const controller = new OrbitControls(camera, renderer.domElement);
    // 添加阻尼，让动画看起来有惯性
    controller.enableDamping = true;
    // 设置阻尼系数，就是可以控制动画惯性的时间，阻尼系数越大，时间越短
    controller.dampingFactor = 0.05;
    scene.add(axesHelper);
    // 设置cube x轴的位置
    function animate() {
      controller.update();
      requestAnimationFrame(animate);
      // 设置旋转
      cube.rotation.set(0.01, 0.01, 0.01);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    renderRef.current = renderer;
    animate();
    // 设置文件夹
    const folder = gui.addFolder("cube");
    folder.add(cube.position, "x", -5, 5).name("x坐标");
    // 添加材质 线段展示
    folder.add(material, "wireframe");
    // 动态设置立方体颜色
    const color = {
      cubeColor: "#f00",
    };
    folder
      .addColor(color, "cubeColor")
      .name("立方体颜色")
      .onChange((val) => {
        cube.material.color.set(val);
      });
    folder
      .add(cube.position, "y", -5, 5)
      .name("y坐标")
      .onChange((val) => {
        // 只要改变了y轴的值就会触发
        console.log(val);
      })
      .onFinishChange((val) => {
        // 只有改变完成才会触发
        console.log(val);
      });

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.requestFullscreen();
    });

    ref.current?.append(renderer.domElement);
  }, []);
  return (
    <>
      <Button onClick={onClick}>全屏</Button>
      <Button onClick={exit}>退出全屏</Button>

      <div ref={ref}></div>
    </>
  );
};
export default Page;
