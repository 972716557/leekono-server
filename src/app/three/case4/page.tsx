"use client";
import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  DirectionalLight,
  DirectionalLightHelper,
  PlaneGeometry,
  PCFSoftShadowMap,
  CameraHelper,
  SphereGeometry,
  MeshStandardMaterial,
  PointLight,
  PointLightHelper,
} from "three";
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
    camera.position.z = 5;
    camera.position.x = 1;

    //Create a WebGLRenderer and turn on shadows in the renderer
    const renderer = new WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap; // default PCFShadowMap

    //Create a DirectionalLight and turn on shadows for the light
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 0); //default; light shining from top
    light.castShadow = true; // default false
    scene.add(light);

    const pointLight = new PointLight(0xffffff, 10);
    const pointLightHelper = new PointLightHelper(pointLight);
    pointLight.castShadow = true;
    pointLight.position.set(2, 2, 0);
    scene.add(pointLight, pointLightHelper);

    //Create a sphere that cast shadows (but does not receive them)
    const sphereGeometry = new BoxGeometry(1, 1);
    const sphereMaterial = new MeshStandardMaterial({ color: 0xff0000 });
    const sphere = new Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true; //default is false
    sphere.receiveShadow = false; //default
    scene.add(sphere);

    //Create a plane that receives shadows (but does not cast them)
    const planeGeometry = new PlaneGeometry(5, 5);
    const planeMaterial = new MeshStandardMaterial({ color: 0xffffff });
    const plane = new Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    light.position.x = 2;
    light.position.y = 2;

    //Create a helper for the shadow camera (optional)
    const helper = new DirectionalLightHelper(light);
    scene.add(helper);
    renderer.setSize(window.innerWidth, window.innerHeight);
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
