import React, { useRef } from 'react'
import { useTexture } from "@react-three/drei"
import * as THREE from 'three'
import { useFrame, useThree } from "@react-three/fiber"
const Pro = () => {
    let tex = useTexture("./image2.png");
    const { gl } = useThree();
    let pro = useRef(null);

  // configure texture once it loads
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipMapLinearFilter; // smooth mipmaps
  tex.magFilter = THREE.LinearFilter;             // sharper scaling
  tex.anisotropy = gl.capabilities.getMaxAnisotropy(); // max anisotropy
  tex.generateMipmaps = true;

  useFrame(({ mouse }, delta) => {
    if (pro.current) {
      // base continuous spin
      pro.current.rotation.y += delta * 0.6;
  
      // add mouse offset influence
      pro.current.rotation.x = -mouse.y  * 0.2; // 20% of full turn  
       pro.current.rotation.y += mouse.x * delta;       // subtle horizontal push
    }
  });
    
  return (
    <group rotation={[0, -0.2, -0.1]}>
        <mesh ref={pro}>
        <cylinderGeometry args={[1, 1, 1.2, 32, 1, true]}/>
        <meshStandardMaterial 
          map={tex}
          transparent
          side={THREE.DoubleSide}
          roughness={0.4}
          metalness={0.2}/>
    </mesh>
    </group>
  )
}

export default Pro
