"use client";
import { useEffect, useState } from "react";

export function LagCursor() {
  const [hoveringButton, setHoveringButton] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("lag-cursor");
    let mouseX = 0, mouseY = 0;
    let currX = 0, currY = 0;
    const delay = 0.05;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // слушаем hover кнопок
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("mouseenter", () => setHoveringButton(true));
      btn.addEventListener("mouseleave", () => setHoveringButton(false));
    });

    document.addEventListener("mousemove", move);

    const animate = () => {
      currX += (mouseX - currX) * delay;
      currY += (mouseY - currY) * delay;

      if (cursor) {
        cursor.style.left = currX + "px";
        cursor.style.top = currY + "px";
      }
      requestAnimationFrame(animate);
    };

    animate();
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="lag-cursor"
      className={`pointer-events-none fixed top-0 left-0 rounded-full transition-all z-999 duration-200 ease-out ${
        hoveringButton ? "w-10 h-10 bg-[#C5BAFF]/70" : "w-4 h-4 bg-[#C5BAFF]/40"
      }`}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
