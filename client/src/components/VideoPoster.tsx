import { useState } from "react";

type VideoPosterProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
};

export function VideoPoster({ src, poster, title, className = "" }: VideoPosterProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={`video-poster video-poster--playing ${className}`.trim()}>
        <video
          src={src}
          title={title}
          poster={poster}
          autoPlay
          controls
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    );
  }

  return (
    <div className={`video-poster ${className}`.trim()}>
      <button
        type="button"
        className="video-poster__trigger"
        onClick={() => setIsPlaying(true)}
        aria-label={`Play ${title}`}
      >
        <img src={poster} alt={title} />
        <span className="video-poster__play" aria-hidden="true">
          ▶
        </span>
      </button>
    </div>
  );
}
