"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function ScrambleText({
  text,
  className,
  style,
  delay = 300,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const [display, setDisplay] = useState(() => text.replace(/\S/g, CHARS[0]));
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let iteration = 0;
    const framesPerChar = 4;
    const total = text.length * framesPerChar;

    const animate = () => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "/") return char;
            if (i < Math.floor(iteration / framesPerChar)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration++;
      if (iteration <= total) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    const t = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
