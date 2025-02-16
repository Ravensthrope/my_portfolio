import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from "../context/theme";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { themeMode } = useTheme();
  const isActive = useRef(true);

  const handleMouseMove = useCallback((event) => {
    if (isActive.current) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
  }, []);

  const handleHoverStart = useCallback(() => {
    if (isActive.current) setIsHovering(true);
  }, []);

  const handleHoverEnd = useCallback(() => {
    if (isActive.current) setIsHovering(false);
  }, []);

  useEffect(() => {
    isActive.current = true;

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove);

    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button']"
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleHoverStart);
        element.addEventListener("mouseleave", handleHoverEnd);
      });

      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener("mouseenter", handleHoverStart);
          element.removeEventListener("mouseleave", handleHoverEnd);
        });
      };
    };

    let removeHoverListeners = attachHoverListeners(); // Attach hover listeners initially

    // Reattach listeners when theme changes
    const observer = new MutationObserver(() => {
      removeHoverListeners(); // Remove old listeners
      removeHoverListeners = attachHoverListeners(); // Attach new ones
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      isActive.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      removeHoverListeners();
      observer.disconnect();
    };
  }, [handleMouseMove, handleHoverStart, handleHoverEnd, themeMode]);

  const colors = {
    light: {
      default: {
        border: "rgba(100, 100, 100, 0.8)",
        shadow: "rgba(100, 100, 100, 0.3)",
      },
      hover: {
        border: "rgba(255, 105, 180, 1)",
        shadow: "rgba(255, 105, 180, 0.5)",
      },
    },
    dark: {
      default: {
        border: "rgba(200, 200, 200, 0.8)",
        shadow: "rgba(200, 200, 200, 0.3)",
      },
      hover: {
        border: "rgba(255, 105, 180, 1)",
        shadow: "rgba(255, 105, 180, 0.5)",
      },
    },
  };

  const currentColors = colors[themeMode];

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      <div
        className="fixed transition-all duration-300 ease-out pointer-events-none"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: isHovering ? "50px" : "40px",
          height: isHovering ? "50px" : "40px",
          transform: "translate(-50%, -50%)",
          border: `2px solid ${
            isHovering
              ? currentColors.hover.border
              : currentColors.default.border
          }`,
          borderRadius: "50%",
          backgroundColor: "transparent",
          boxShadow: `0 0 ${isHovering ? "15px" : "5px"} ${
            isHovering
              ? currentColors.hover.shadow
              : currentColors.default.shadow
          }`,
        }}
      />
    </div>
  );
};

export default MouseFollower;
