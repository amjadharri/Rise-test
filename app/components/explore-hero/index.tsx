"use client";

import React, { useState, Suspense, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import TitleHeading from "../common/title-heading";
import UpgradeableSkills from "../common/upgradeable-skills";
import AvatarButton from "../common/avatar-button";
import Image from "next/image";

const ExploreHero: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>("general");
  const [radius, setRadius] = useState<number>(150);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([0, 40, 5]);

  const avatars = useMemo(
    () => [
      {
        src: "/assets/explore-hero/bearclaw-avatar.png",
        alt: "bearclaw",
        angle: -80,
      },
      {
        src: "/assets/explore-hero/bullguard-avatar.png",
        alt: "bullguard",
        angle: -40,
      },
      {
        src: "/assets/explore-hero/general-lodge-avatar.png",
        alt: "general",
        angle: 0,
      },
      {
        src: "/assets/explore-hero/meowshi-avatar.png",
        alt: "meowshi",
        angle: 40,
      },
      {
        src: "/assets/explore-hero/stormpepe-avatar.png",
        alt: "stormpepe",
        angle: 80,
      },
    ],
    []
  );

  const backgroundImages: Record<string, string> = {
    bearclaw: "/assets/explore-hero/bearclaw.png",
    bullguard: "/assets/explore-hero/bullguard.png",
    general: "/assets/explore-hero/general-lodge.png",
    meowshi: "/assets/explore-hero/meowshi.png",
    stormpepe: "/assets/explore-hero/stormpepe.png",
  };

  const models: Record<string, string> = {
    general: "/assets/models/general.glb",
    meowshi: "/assets/models/meowshi.glb",
    stormpepe: "/assets/models/stormpepe.glb",
    bullguard: "/assets/models/bullguard.glb",
    bearclaw: "/assets/models/bearclaw.glb",
  };

  const avatarTexts: Record<string, string> = {
    bearclaw: "Bearclaw",
    bullguard: "Bullguard",
    general: "General Doge",
    meowshi: "Meowshe",
    stormpepe: "Stormpepe",
  };

  useEffect(() => {
    const updateRadiusAndCamera = () => {
      setRadius(window.innerWidth < 768 ? 90 : 150);
      setCameraPosition(window.innerWidth < 768 ? [0, 20, 5] : [0, 50, 5]);
    };
    updateRadiusAndCamera();

    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    window.addEventListener("resize", updateRadiusAndCamera);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateRadiusAndCamera);
    };
  }, []);

  if (!isSmallScreen) {
    Object.values(models).forEach((path) => {
      useGLTF.preload(path);
    });
  }

  const handleAvatarClick = (alt: string) => setSelectedAvatar(alt);

  const Model = ({ modelKey }: { modelKey: string }) => {
    const path = models[modelKey];
    const { scene } = useGLTF(path);

    const modelScale = window.innerWidth < 780 ? 10 : 25;
    const primitivePosition =
      window.innerWidth < 780 ? [0, -5, 0] : [0, -20, 0];

    return scene ? (
      <primitive
        object={scene}
        scale={modelScale}
        position={primitivePosition}
      />
    ) : null;
  };

  // useEffect(() => {
  //   const updateRadiusAndCamera = () => {
  //     setRadius(window.innerWidth < 768 ? 90 : 150);
  //     setCameraPosition(window.innerWidth < 768 ? [0, 20, 5] : [0, 50, 5]);
  //   };
  //   updateRadiusAndCamera();

  //   const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   window.addEventListener("resize", updateRadiusAndCamera);
  //   return () => window.removeEventListener("resize", updateRadiusAndCamera);
  // }, []);

  return (
    <div id="white-paper" className="py-10 overflow-hidden relative min-h-screen h-[100dvh] w-full lg:h-[120dvh] 2xl:h-[100dvh] dxl:h-[80dvh]">
      <div
        className="relative w-full h-full bg-opacity-10 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url('${backgroundImages[selectedAvatar]}')`,
        }}
      >
        <div className="grid grid-cols-[1fr_3fr_1fr] h-full items-center">
          <div className="w-full h-full relative flex items-end md:items-center justify-start">
            <div className="absolute top-20 md:top-[80%] left-6">
              <h1 className="font-avon text-2xl md:text-7xl text-[#4c4336] uppercase">
                {avatarTexts[selectedAvatar]}
              </h1>
            </div>
            <div className="relative w-[100px] md:w-full flex items-center justify-start">
              <Image
                src="/assets/explore-hero/left-object.png"
                alt=""
                width={170}
                height={170}
                className="z-10"
              />
              <div className="absolute flex justify-center items-center right-[80%] md:right-[90%] z-[9999]">
                {avatars.map(({ src, alt, angle }) => (
                  <AvatarButton
                    key={alt}
                    src={src}
                    alt={alt}
                    size={60}
                    angle={angle}
                    radius={radius}
                    isActive={selectedAvatar === alt}
                    onClick={() => handleAvatarClick(alt)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col absolute left-auto inset-0 items-between justify-between md:relative text-nowrap">
            <div>
              <TitleHeading className="user-select-none  flex items-center justify-center text-center">
                Explore Heroes
              </TitleHeading>
              <div className="absolute inset-0 flex items-center justify-center z-40">
                <Canvas className="canvas"
                  style={{
                    width: isSmallScreen ? "80%" : "100%",
                    height: isSmallScreen ? "80%" : "100%",
                  }}
                  camera={{ position: cameraPosition }}
                  shadows
                >
                  <ambientLight intensity={0.5} color="#ffffff" />

                  <directionalLight
                    position={[10, 20, 15]}
                    intensity={2.3}
                    color="#ffffff"
                    // castShadow
                    // shadow-mapSize-width={104}
                    // shadow-mapSize-height={1024}
                    // shadow-camera-far={60}
                  />
                  <directionalLight
                    position={[-15, 10, 15]}
                    intensity={1.5}
                    color="#ffe6cc"
                    // castShadow
                    // shadow-mapSize-width={1024}
                    // shadow-mapSize-height={1024}
                    // shadow-camera-far={60}
                  />

                  <directionalLight
                    position={[0, 10, -20]}
                    intensity={1.8}
                    color="#ffffff"
                    // castShadow
                  />

                  <directionalLight
                    position={[20, 10, 0]}
                    intensity={1.2}
                    color="#b3e0ff"
                    // castShadow
                  />
                  <directionalLight
                    position={[-20, 10, 0]}
                    intensity={1.2}
                    color="#b3e0ff"
                    // castShadow
                  />

                  <spotLight
                    position={[5, 15, 10]}
                    intensity={2.2}
                    penumbra={0.9}
                    angle={0.5}
                    color="#a1d6e2"
                    // castShadow
                    // shadow-mapSize-width={1024}
                    // shadow-mapSize-height={1024}
                  />

                  <pointLight
                    position={[2, 8, 5]}
                    intensity={1.0}
                    color="#ffffff"
                  />
                  <pointLight
                    position={[-2, 8, 5]}
                    intensity={1.0}
                    color="#ffffff"
                  />
                  <pointLight
                    position={[0, 6, -5]}
                    intensity={1.0}
                    color="#a1d6e2"
                  />
                  <pointLight
                    position={[5, 10, 0]}
                    intensity={0.8}
                    color="#ffc078"
                  />
                  <pointLight
                    position={[-5, 10, 0]}
                    intensity={0.8}
                    color="#ffc078"
                  />

                  <pointLight
                    position={[3, 5, 8]}
                    intensity={0.6}
                    color="#ffffff"
                  />
                  <pointLight
                    position={[-3, 5, 8]}
                    intensity={0.6}
                    color="#ffffff"
                  />
                  <pointLight
                    position={[0, -8, 5]}
                    intensity={0.5}
                    color="#a1d6e2"
                  />
                  <pointLight
                    position={[0, 8, -5]}
                    intensity={0.5}
                    color="#88ccff"
                  />

                  <hemisphereLight groundColor="#b3e0ff" intensity={0.6} />

                  <Suspense fallback={null}>
                    <Model modelKey={selectedAvatar} />
                  </Suspense>

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    rotateSpeed={3}
                  />
                </Canvas>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="absolute bottom-48 md:bottom-10 text-[10px] md:text-sm font-semibold text-gradient">
                Hold and Drag to Interact
              </p>
              <div className="absolute bottom-52 md:bottom-12 flex justify-center z-30">
                <Image
                  src="/assets/explore-hero/bottom-curve.png"
                  alt="Bottom Curve"
                  width={1000}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-30">
              <Image
                src="/assets/explore-hero/left-right-curve.png"
                alt="Left Right Curve"
                width={800}
                height={800}
                className="w-[75%] h-auto opacity-40"
              />
            </div>
          </div>

          <div className="w-[100px] lg:w-[200px] absolute right-5 bottom-5 md:bottom-0 h-full flex items-end md:items-center justify-center">
            <UpgradeableSkills />
          </div>
        </div>
      </div>
      <div className="hidden absolute bottom-0 w-full h-full bg-cover md:flex justify-center z-30">
        <Image
          src="/assets/explore-hero/smoke.png"
          alt="Smoke Effect"
          width={2000}
          height={500}
          className="w-full h-auto opacity-80"
        />
      </div>
      <div className="hidden absolute bottom-0 right-0 bg-cover md:flex justify-end z-30">
        <Image
          src="/assets/explore-hero/fire.png"
          alt="Fire Effect"
          width={2000}
          height={500}
          className="w-full h-auto opacity-80"
        />
      </div>
      <div className="hidden absolute bottom-0 left-0 bg-cover md:flex justify-end z-30">
        <Image
          src="/assets/explore-hero/fire-emblems.png"
          alt="Fire Effect"
          width={1000}
          height={500}
          className="w-full h-auto opacity-80"
        />
      </div>
    </div>
  );
};

export default ExploreHero;
