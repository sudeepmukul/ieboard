import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
    const meshRef = useRef();
    const [active, setActive] = useState(false);

    // Get mouse position from R3F state
    const { mouse, viewport } = useThree();

    // Store target rotation
    const targetRotation = useRef(new THREE.Vector2(0, 0));

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Calculate target rotation based on mouse
        // Use a smaller divisor for more pronounced interaction, larger for subtle
        targetRotation.current.x = (mouse.y * viewport.height) / 3;
        targetRotation.current.y = (mouse.x * viewport.width) / 3;

        // Smoothly interpolate current rotation to target rotation (optimization: direct lerp)
        // We use a dummy rotation sequence to smooth "lookAt".
        // Manually rotating X and Y towards target is simpler than quaternion slerp for restricted mouse movement.

        // Damping factor - higher is faster/jittery, lower is smoother/lazier
        const smoothing = delta * 2;

        // meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, smoothing);
        // meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, smoothing);
        // The above manual lerp fights with the lookAt.
        // Instead, we creating a target LookAt vector and lerping the mesh's position towards it? No.

        // Correct Approach: Use a dummy object to lookAt, then slerp mesh quaternion to dummy quaternion.
        const targetQuaternion = new THREE.Quaternion();
        const dummy = new THREE.Object3D();
        dummy.lookAt(targetRotation.current.y * 5, targetRotation.current.x * 5, 5); // Multipliers adjust sensitivity
        targetQuaternion.copy(dummy.quaternion);

        // Smoothly rotate the visual mesh towards the target orientation
        meshRef.current.quaternion.slerp(targetQuaternion, smoothing);

        // Constant aesthetic wobble
        meshRef.current.rotation.z += delta * 0.1;

        if (active) {
            meshRef.current.rotateOnAxis(new THREE.Vector3(1, 1, 0), delta * 2);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                scale={1}
                onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
                onPointerOut={() => { document.body.style.cursor = 'auto'; }}
                onClick={() => setActive(!active)}
            >
                {/* Trefoil Knot: Resembles Penrose/Infinity Loop */}
                {/* Reduced complexity for performance: 150->100, 20->16 */}
                <torusKnotGeometry args={[1, 0.4, 100, 16, 2, 3]} />

                <MeshTransmissionMaterial
                    backside
                    backsideThickness={10}
                    thickness={3}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={1}
                    anisotropy={20}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.2}
                    color={active ? "#F59E0B" : "#4F46E5"}
                    background="black"
                />
            </mesh>
        </Float>
    );
};

const Scene3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FloatingShape />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Scene3D;
