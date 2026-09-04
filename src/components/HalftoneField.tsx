import React from "react";

interface HalftoneFieldProps {
  className?: string;
  dense?: boolean;
  fade?: "bottom" | "top" | "left" | "right" | "radial";
}

const fadeMasks: Record<string, string> = {
  bottom:
    "linear-gradient(to bottom, black 40%, transparent 100%)",
  top: "linear-gradient(to top, black 40%, transparent 100%)",
  left: "linear-gradient(to left, black 40%, transparent 100%)",
  right:
    "linear-gradient(to right, black 40%, transparent 100%)",
  radial:
    "radial-gradient(ellipse at center, black 30%, transparent 70%)",
};

const HalftoneField: React.FC<HalftoneFieldProps> = ({
  className = "",
  dense = false,
  fade = "radial",
}) => (
  <div
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      WebkitMaskImage: fadeMasks[fade],
      maskImage: fadeMasks[fade],
    }}
  >
    <div className={`h-full w-full ${dense ? "halftone-dense" : "halftone"}`} />
  </div>
);

export default HalftoneField;
