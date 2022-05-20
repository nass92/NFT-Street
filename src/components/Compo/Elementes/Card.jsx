import React from "react";
import "../../styles/Elemente-style/Card.css";

const Card = React.forwardRef(
  (
    {
      width = "250px",
      height = "300px",
      child,
      blurColor = "rgba(48,118,234,0.2)",
      onClick,
    },
    ref
  ) => (
    <div
      className="card"
      style={{
        width: `${width}`,
        height: `${height}`,
        background: `radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05) 0%,
                ${blurColor} 0%,
                rgba(255, 255, 255, 0.05) 70%
              )`,
      }}
      ref={ref}
    >
      {child}
    </div>
  )
);
export default Card;