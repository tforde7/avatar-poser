import { Avatar, AvatarPose, SimpleEuler } from "react-three-avatar";
import {
  Hud,
  OrbitControls,
  OrthographicCamera,
  Plane,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
// import { PoserHud } from "./PoserHud";
import { Interactive, useXR } from "@react-three/xr";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import create from "zustand";
import { useTeleportation } from "./useTeleportation";
import { Vector3 } from "three";
import { TeleportationPlane } from "./TeleportationPlane";

export type PoseKeyframe = {
  time: number;
  pose: AvatarPose;
};

export type PoseAnimation = {
  length: number;
  keyframes: PoseKeyframe[];
};

export type PoserProps = {
  url: string;
};

const queryParams = new URLSearchParams(window.location.search);
const animationBase64 = queryParams.get("animation");
const animLength = queryParams.get("length");
const fancy = queryParams.get("fancy") === "true";



export const Poser = ({ url }: PoserProps) => {

  const [width, height] = useWindowSize();
  fancy;
  const offsetY = -height / 3;
  const editorHeight = height / 4;
  const editorWidth = width * 0.9;

  const { isPresenting } = useXR();

  return (
    <>
    <mesh>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial color="red"></meshStandardMaterial>
    </mesh>
      {isPresenting && (
        <>
          <TeleportationPlane leftHand />
        </>
      )}
    </>
  );
};
