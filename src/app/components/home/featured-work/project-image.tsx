"use client";
import { useState } from "react";
import { getMicrolinkScreenshot } from "@/lib/projects-data";

interface ProjectImageProps {
  liveUrl: string;
  fallback: string;
  alt: string;
}

const ProjectImage = ({ liveUrl, fallback, alt }: ProjectImageProps) => {
  const [src, setSrc] = useState(getMicrolinkScreenshot(liveUrl));
  const [useFallback, setUseFallback] = useState(false);

  return (
    <img
      src={useFallback ? fallback : src}
      alt={alt}
      width={490}
      height={300}
      loading="lazy"
      onError={() => {
        if (!useFallback) {
          setUseFallback(true);
          setSrc(fallback);
        }
      }}
      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
    />
  );
};

export default ProjectImage;
