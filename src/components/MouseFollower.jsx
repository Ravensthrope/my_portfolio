import React, { useState, useEffect, useCallback } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((event) => {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const clientX = event.clientX + scrollX;
    const clientY = event.clientY + scrollY;

    setPosition({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", () => setIsHovering(true));
      link.addEventListener("mouseout", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseover", () => setIsHovering(true));
        link.removeEventListener("mouseout", () => setIsHovering(false));
      });
    };
  }, [handleMouseMove]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: `2px solid ${isHovering ? "#ff69b4" : "#e6e3e3"}`, // Pink color when hovering
          backgroundColor: "transparent",
          boxShadow: `0 0 ${
            isHovering ? "15px" : "5px"
          } rgba(255, 105, 180, 0.5)`, // Pink glow when hovering
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
};

export default MouseFollower;
