import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [invert, setInvert] = useState(false); 

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    const onOver = (e) => {
      if (e.target.closest(".cursor-target")) {
        setScale(5);          // bigger on text this one is that
        setInvert(true);      
      }
    };
    //  dont mess wit it you will not get my logic i spend too much time on this shit!!!!!!!!!!!!!!!!!!!!!!!! this is a hell hole get out from my code
    const onOut = (e) => {
      if (e.target.closest(".cursor-target")) {
        setScale(1);
        setInvert(false);
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

return (
  <div
    className={[
      "pointer-events-none fixed top-0 left-0 z-[9999]",
      "w-3.5 h-3.5 rounded-full",
      "transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)]",
      "will-change-transform",
      invert ? "bg-white mix-blend-difference" : "bg-[#D4A65A] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
    ].join(" ")}
    style={{
      transform: `translate(${position.x - 5}px, ${position.y - 5}px) scale(${scale})`,
      opacity: 0.98
    }}
  />
);

}
