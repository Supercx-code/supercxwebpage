'use client';

import React, { useRef, useEffect } from 'react';

const HeroVisual = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;
        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            const container = canvas.parentElement;
            if (container) {
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - canvas.width / 2) * 0.0005;
            mouseY = (e.clientY - rect.top - canvas.height / 2) * 0.0005;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // 3D Particle System
        const particleCount = 150;
        const connectionDistance = 60; // 3D distance
        const sphereRadius = 160;

        interface Point3D {
            x: number;
            y: number;
            z: number;
            baseX: number;
            baseY: number;
            baseZ: number;
            color: string;
            size: number;
            speedOffset: number;
        }

        const particles: Point3D[] = [];
        const colors = [
            '#2563EB', // Primary Blue
            '#60A5FA', // Light Blue
            '#94A3B8', // Silver
            '#FFFFFF', // White
        ];

        // Fibonacci Sphere (even distribution)
        const phi = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < particleCount; i++) {
            const y = 1 - (i / (particleCount - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            particles.push({
                x: x * sphereRadius,
                y: y * sphereRadius,
                z: z * sphereRadius,
                baseX: x * sphereRadius,
                baseY: y * sphereRadius,
                baseZ: z * sphereRadius,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 1.5 + 0.5,
                speedOffset: Math.random() * 100,
            });
        }

        const rotateX = (p: Point3D, angle: number) => {
            const y = p.y * Math.cos(angle) - p.z * Math.sin(angle);
            const z = p.y * Math.sin(angle) + p.z * Math.cos(angle);
            p.y = y;
            p.z = z;
        };

        const rotateY = (p: Point3D, angle: number) => {
            const x = p.x * Math.cos(angle) + p.z * Math.sin(angle);
            const z = -p.x * Math.sin(angle) + p.z * Math.cos(angle);
            p.x = x;
            p.z = z;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Background Glow
            const bgGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300);
            bgGlow.addColorStop(0, 'rgba(37, 99, 235, 0.1)');
            bgGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = bgGlow;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Auto Rotation + Mouse interaction
            const rotationSpeedX = 0.002 - mouseY;
            const rotationSpeedY = 0.003 + mouseX;

            time += 0.01;

            // Update positions and depth sort
            particles.forEach(p => {
                // Return to base shape smoothly but allow some noise
                // Rotate
                rotateY(p, rotationSpeedY);
                rotateX(p, rotationSpeedX);
            });

            // Sort by Z for proper layering (draw back to front)
            particles.sort((a, b) => a.z - b.z);

            // Draw Connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                // Optimization: only check neighbors in sorted array? No, spatial index is better but simple n^2 for 150 is fine (22k checks)
                // Let's just check a subset or purely distance
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dz = p1.z - p2.z;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < connectionDistance) {
                        // Alpha based on Z (depth) and actual distance
                        const depthAlpha = (p1.z + sphereRadius) / (sphereRadius * 2); // 0 to 1
                        const distAlpha = 1 - (dist / connectionDistance);
                        const alpha = depthAlpha * distAlpha * 0.4;

                        if (alpha > 0.01) {
                            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
                            ctx.beginPath();
                            ctx.moveTo(centerX + p1.x, centerY + p1.y);
                            ctx.lineTo(centerX + p2.x, centerY + p2.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Draw Particles
            particles.forEach(p => {
                // Perspective scale
                const scale = (p.z + sphereRadius * 2) / (sphereRadius * 2); // Simple z-scale
                const alpha = Math.max(0.1, (p.z + sphereRadius) / (sphereRadius * 2)); // Fade out back particles

                ctx.fillStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(centerX + p.x, centerY + p.y, p.size * scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // Draw Central Core (Energy Source)
            const corePulse = Math.sin(time * 3) * 5;
            const coreGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60 + corePulse);
            coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            coreGlow.addColorStop(0.2, 'rgba(37, 99, 235, 0.6)');
            coreGlow.addColorStop(1, 'transparent');

            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 60 + corePulse, 0, Math.PI * 2);
            ctx.fill();

            // Inner Lightning Bolt (Logo stylized) - Floating in center
            ctx.save();
            ctx.translate(centerX, centerY);
            // Slight bobbing
            ctx.translate(0, Math.sin(time * 2) * 5);

            // Neon effect with extreme glow for wow factor
            ctx.shadowColor = '#2563EB';
            ctx.shadowBlur = 30;
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 4;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';

            // Inverted Bolt (X coordinates flipped)
            ctx.beginPath();
            ctx.moveTo(12, -25);
            ctx.lineTo(-8, -5);
            ctx.lineTo(5, 0);
            ctx.lineTo(-12, 25);
            ctx.stroke();

            // Internal secondary glow line
            ctx.shadowBlur = 15;
            ctx.strokeStyle = '#60A5FA'; // Lighter blue
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.restore();

            // Traveling energy data packets (random bright spots on lines??) - Keep it simple and elegant for now to ensure performance.
            // A rotating ring around the sphere
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(time * 0.5);
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
            ctx.lineWidth = 1;
            ctx.ellipse(0, 0, sphereRadius * 1.4, sphereRadius * 0.4, Math.PI / 4, 0, Math.PI * 2);
            ctx.stroke();

            // Packet on ring
            const packetAngle = time * 2;
            const px = Math.cos(packetAngle) * sphereRadius * 1.4;
            const py = Math.sin(packetAngle) * sphereRadius * 0.4;
            // Need to rotate this point by PI/4
            const rpx = px * Math.cos(Math.PI / 4) - py * Math.sin(Math.PI / 4);
            const rpy = px * Math.sin(Math.PI / 4) + py * Math.cos(Math.PI / 4);

            ctx.shadowColor = '#FFFFFF';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(rpx, rpy, 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full min-h-[500px]"
        />
    );
};

export default HeroVisual;
