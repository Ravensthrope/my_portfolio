import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/theme";

const MouseFollower = () => {
  const { themeMode } = useTheme();
  const cursorRef = useRef(null);
  const isActive = useRef(true);
  const animationId = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  // Smooth cursor movement using lerp
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Animation loop for smooth cursor movement
  const animateCursor = () => {
    if (!isActive.current || !cursorRef.current) return;

    // Smooth interpolation
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

    // Apply transform
    cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;

    animationId.current = requestAnimationFrame(animateCursor);
  };

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!isActive.current) return;
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  // Hover handlers
  const handleMouseEnter = () => {
    if (!isActive.current) return;
    isHovering.current = true;
    updateCursorStyle();
  };

  const handleMouseLeave = () => {
    if (!isActive.current) return;
    isHovering.current = false;
    updateCursorStyle();
  };

  // Update cursor style based on theme and hover state
  const updateCursorStyle = () => {
    if (!cursorRef.current) return;

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
    const isHover = isHovering.current;

    cursorRef.current.style.width = isHover ? "50px" : "40px";
    cursorRef.current.style.height = isHover ? "50px" : "40px";
    cursorRef.current.style.border = `2px solid ${
      isHover ? currentColors.hover.border : currentColors.default.border
    }`;
    cursorRef.current.style.boxShadow = `0 0 ${isHover ? "15px" : "5px"} ${
      isHover ? currentColors.hover.shadow : currentColors.default.shadow
    }`;
  };

  // Attach hover listeners to interactive elements
  const attachHoverListeners = () => {
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], .interactive, .project-card, .nav-link"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      element.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    });
  };

  useEffect(() => {
    isActive.current = true;

    // Initialize cursor position
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Initial hover listener attachment
    attachHoverListeners();

    // Start animation loop
    animateCursor();

    // Update cursor style initially
    updateCursorStyle();

    // Reattach listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      isActive.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      
      observer.disconnect();
    };
  }, []);

  // Update cursor style when theme changes
  useEffect(() => {
    updateCursorStyle();
  }, [themeMode]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={cursorRef}
        className="fixed pointer-events-none mouse-follower"
        style={{
          width: "40px",
          height: "40px",
          border: "2px solid rgba(100, 100, 100, 0.8)",
          borderRadius: "50%",
          backgroundColor: "transparent",
          boxShadow: "0 0 5px rgba(100, 100, 100, 0.3)",
          transform: "translate3d(0, 0, 0) translate(-50%, -50%)",
          transition: "width 0.2s ease-out, height 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default MouseFollower;
