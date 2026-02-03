import { useEffect, useState } from "react";

const FIREFLY_COUNT = 30;

export default function Fireflies() {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: FIREFLY_COUNT }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4, // 4–10px
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15, // bay chậm
      delay: Math.random() * 10,
      hue: Math.random() * 360, // màu khác nhau
    }));
    setFireflies(arr);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {fireflies.map((f) => (
        <span
          key={f.id}
          className="firefly"
          style={{
            width: f.size,
            height: f.size,
            left: `${f.x}%`,
            top: `${f.y}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            filter: `hue-rotate(${f.hue}deg)`,
          }}
        />
      ))}
    </div>
  );
}
