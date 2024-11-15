import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="navbar line flex gap-5 py-10  absolute top-0 left-1/2 -translate-x-1/2 ">
        {[
          "iPhone",
          "iPad",
          "Airpods",
          "iWatch",
          "iPhone",
          "iPad",
          "Airpods",
          "iWatch",
        ].map((item) => (
          <a href="#" className="text-white text-xs  font-[700] ">
            {item}
          </a>
        ))}
      </div>
      <div className="text-white flex flex-col items-center absolute top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display'] ">
        <h3 className="masked text-4xl tracking-wide font-[700] ">
          macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center text-xs w-3/4">
          a sleek, high-performance laptop with stunning Retina display,
          M-series chips, long battery life, and premium design.
        </p>
      </div>
      <Canvas camera={{ fov: 25, position: [0, -10, 100], antialias: true }}>
        <Environment preset="studio" />
        <ScrollControls pages={3}>
          <Mac />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
