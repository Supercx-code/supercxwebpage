'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const HeroBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Particle Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 50;

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                if (!canvas) {
                    this.x = 0;
                    this.y = 0;
                } else {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }
                this.size = Math.random() * 2 + 0.5; // Small size 0.5 - 2.5
                this.speedX = Math.random() * 0.5 - 0.25; // Slow horizontal movement
                this.speedY = Math.random() * -0.5 - 0.1; // Slow upward movement
                this.opacity = Math.random() * 0.3 + 0.1; // Low opacity 0.1 - 0.4
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Reset if out of bounds
                if (!canvas) return;
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Create a dynamic radial gradient that follows the mouse
    const background = useMotionTemplate`radial-gradient(
        800px circle at ${mouseX}px ${mouseY}px,
        rgba(37, 99, 235, 0.15),
        transparent 80%
    )`;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#000000]">
            {/* Dark Glass Spotlight */}
            <motion.div
                className="absolute inset-0 opacity-100 transition-opacity duration-300"
                style={{ background }}
            />

            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        </div>
    );
};

export default HeroBackground;
