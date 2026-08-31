"use client";
import { useEffect, useState } from "react";

interface ProjectImageProps {
  liveUrl: string;
  fallback: string;
  alt: string;
}

const ProjectImage = ({ liveUrl, fallback, alt }: ProjectImageProps) => {
  const [src, setSrc] = useState<string>(fallback);
  const [triedRemote, setTriedRemote] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadScreenshot = async () => {
      if (!liveUrl) return;
      try {
        const res = await fetch(
          `https://api.microlink.io?url=${encodeURIComponent(
            liveUrl
          )}&screenshot=true&meta=false`
        );
        if (!res.ok) return;
        const data = await res.json();
        const screenshotUrl = data?.data?.screenshot?.url;
        if (!cancelled && screenshotUrl) {
          setSrc(screenshotUrl);
        }
      } catch {
        // fall back to the local illustration image
      } finally {
        if (!cancelled) setTriedRemote(true);
      }
    };

    loadScreenshot();
    return () => {
      cancelled = true;
    };
  }, [liveUrl]);

  return (
    <img
      src={src}
      alt={alt}
      width={490}
      height={300}
      loading="lazy"
      onError={() => !triedRemote && setSrc(fallback)}
      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
    />
  );
};

export default ProjectImage;
