import React from "react";

// Tăng số lượng sao lên 8-10 con để phủ đều màn hình hơn
const NUM_STARS = 8;

// Tạo dữ liệu ngẫu nhiên bên ngoài để tránh lỗi render
const STARS_DATA = Array.from({ length: NUM_STARS }).map(() => ({
  // 1. Phân bố ngẫu nhiên toàn màn hình
  x: `${Math.random() * 100}vw`,
  y: `${Math.random() * 60}vh`, // Tập trung ở 60% phần trên màn hình cho tự nhiên

  // 2. Random góc bay (từ 300 đến 330 độ để bay chéo xuống trái)
  angle: `${Math.random() * 30 + 300}deg`,

  // 3. Thời gian chờ (delay) ngẫu nhiên từ 0s đến 25s
  delay: `${(Math.random() * 25).toFixed(2)}s`,

  // 4. Thời gian bay (duration) chậm hơn: 5s - 8s
  duration: `${(Math.random() * 3 + 5).toFixed(2)}s`,
}));

const ShootingStars = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {STARS_DATA.map((config, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            left: config.x,
            top: config.y,
            "--star-delay": config.delay,
            "--star-duration": config.duration,
            "--star-angle": config.angle,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
