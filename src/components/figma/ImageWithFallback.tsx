import React, { useState } from "react";
import { cn } from "@/components/ui/utils";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackText?: string;
}

export default function ImageWithFallback({
  src,
  alt = "",
  fallbackSrc,
  fallbackText,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          {...props}
        />
      );
    }

    return (
      <div
        className={cn(
          "flex items-center justify-center bg-wf-gray-light text-wf-gray text-sm",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        {fallbackText || alt || "Image unavailable"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
