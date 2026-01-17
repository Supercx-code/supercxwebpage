'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Monitor, Globe, Code2, Bot, Database, Headphones, Settings, LineChart, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Flowchart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sourceRef = useRef<HTMLDivElement>(null);
    const targetWrapperRef = useRef<HTMLDivElement>(null);
    const targetRefs = useRef<(HTMLDivElement | null)[]>([]);

    // State for SVG paths
    const [paths, setPaths] = useState<string[]>([]);

    // Function to calculate paths
    const calculatePaths = useCallback(() => {
        if (!containerRef.current || !sourceRef.current || targetRefs.current.length === 0) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const sourceRect = sourceRef.current.getBoundingClientRect();

        // Source point: Bottom center of the source node
        const startX = sourceRect.left + sourceRect.width / 2 - containerRect.left;
        const startY = sourceRect.top + sourceRect.height - containerRect.top;

        const newPaths = targetRefs.current.map((target) => {
            if (!target) return '';

            const targetRect = target.getBoundingClientRect();
            // Target point: Top center of the target node
            const endX = targetRect.left + targetRect.width / 2 - containerRect.left;
            const endY = targetRect.top - containerRect.top;

            // Control points for Bezier curve
            const controlY1 = startY + (endY - startY) / 2;
            const controlY2 = endY - (endY - startY) / 2;

            return `M ${startX} ${startY} C ${startX} ${controlY1}, ${endX} ${controlY2}, ${endX} ${endY}`;
        });

        setPaths(newPaths);
    }, []);

    // Handle resize
    useEffect(() => {
        // Initial calculation
        calculatePaths();

        // Add resize listener
        window.addEventListener('resize', calculatePaths);

        // Also recalculate after a short delay to ensure layout is settled
        const timeout = setTimeout(calculatePaths, 100);

        return () => {
            window.removeEventListener('resize', calculatePaths);
            clearTimeout(timeout);
        };
    }, [calculatePaths]);

    // Animations
    useEffect(() => {
        // Wait for paths to be calculated before animating
        if (paths.length === 0) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });

            // 1. Fade in Top Node
            tl.fromTo(
                sourceRef.current,
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
            )
                // Pulse effect for source node
                .to(sourceRef.current, {
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                }, "-=0.2");

            // 2. Animate SVG paths
            const pathElements = containerRef.current?.querySelectorAll('.connector-line');
            if (pathElements) {
                gsap.set(pathElements, { strokeDasharray: (i, target) => (target as SVGPathElement).getTotalLength(), strokeDashoffset: (i, target) => (target as SVGPathElement).getTotalLength() });
                tl.to(pathElements, {
                    strokeDashoffset: 0,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    stagger: 0.05,
                }, "-=0.2");
            }

            // 3. Stagger fade in Bottom Nodes
            tl.fromTo(
                targetRefs.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(1.5)' },
                "-=0.3"
            );

        }, containerRef);

        return () => ctx.revert();
    }, [paths]); // Re-run animation setup if paths drastically change (though usually we just want to update the d attribute)

    const addToTargetRefs = (el: HTMLDivElement | null, index: number) => {
        targetRefs.current[index] = el;
    };

    const targets = [
        { icon: <Bot className="w-6 h-6 text-cyan-400" />, label: 'AI Chatbots' },
        { icon: <Database className="w-6 h-6 text-coral-400" />, label: 'CRM Setup' },
        { icon: <Headphones className="w-6 h-6 text-pink-400" />, label: 'Helpdesk' },
        { icon: <Settings className="w-6 h-6 text-blue-400" />, label: 'Automation' },
        { icon: <LineChart className="w-6 h-6 text-green-400" />, label: 'BPM' },
        { icon: <Share2 className="w-6 h-6 text-purple-400" />, label: 'Integrations' },
    ];

    return (
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto py-12 px-4">

            {/* SVG Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                {paths.map((d, i) => (
                    <path
                        key={i}
                        d={d}
                        className="connector-line"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                ))}
            </svg>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center gap-20">

                {/* Top Node: Source */}
                <div
                    ref={sourceRef}
                    className="glass-panel p-6 rounded-2xl w-72 shadow-glow flex flex-col items-center gap-4 border border-primary/30"
                >
                    <div className="w-full flex gap-2 mb-2 justify-center opacity-50">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-white mb-1">SuperCX Core</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Unified Intelligence</p>
                    </div>
                    <div className="absolute -right-3 -top-3 p-2 bg-primary/20 rounded-lg border border-primary/50 backdrop-blur-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        <Code2 className="w-5 h-5 text-primary" />
                    </div>
                </div>

                {/* Bottom Nodes: Targets */}
                <div ref={targetWrapperRef} className="flex flex-wrap justify-center w-full gap-6 px-4">
                    {targets.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => addToTargetRefs(el, index)}
                            className="flex flex-col items-center gap-3 glass-panel p-4 rounded-xl w-32 md:w-36 shadow-lg border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <div className="p-3 bg-white/5 rounded-full ring-1 ring-white/10 shadow-inner">
                                {item.icon}
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-gray-300 text-center leading-tight">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Service Coverage</h3>
                <p className="text-gray-400 max-w-xl mx-auto">
                    From AI implementation to full-scale BPM consulting. We handle every aspect of your customer experience stack.
                </p>
            </div>
        </div>
    );
};

export default Flowchart;
