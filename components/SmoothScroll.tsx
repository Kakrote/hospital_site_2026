"use client";

import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // smoothness
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2, // adjust speed/sensitivity
        });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return children;
}