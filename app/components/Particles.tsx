"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { tsParticles } from "tsparticles-engine";

type ParticlesProps = {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
};

const Particles: React.FC<ParticlesProps> = ({
  className,
  quantity = 100,
  staticity = 20,
  ease = 10,
  refresh = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Function to update canvas size
  const resizeCanvas = useCallback(() => {
    if (canvasRef.current) {
      canvasSize.current = {
        w: canvasRef.current.width,
        h: canvasRef.current.height,
      };
    }
  }, []); // No dependencies as the function does not change

  // Function to draw particles
  const drawParticles = useCallback(() => {
    if (canvasRef.current) {
      const { width, height } = canvasRef.current;

      tsParticles.load(canvasRef.current, {
        particles: {
          number: { value: quantity },
          size: { value: 3 },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
      });

      if (refresh) {
        tsParticles.refresh();
      }
    }
  }, [quantity, refresh]); // Dependencies include only relevant values

  useEffect(() => {
    if (canvasRef.current) {
      resizeCanvas();
      drawParticles();
    }
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas, drawParticles]);

  return <canvas ref={canvasRef} className={className} />;
};

export default Particles;
