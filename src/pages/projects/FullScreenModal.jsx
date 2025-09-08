import { useEffect } from "react";

export default function FullscreenModal({ currentIndex, media, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const selected = media[currentIndex];

  return (
    <div className="gallery-modal" onClick={onClose}>
      <button className="gallery-nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        ‹
      </button>

      {selected.type === "image" ? (
        <img src={selected.url} alt="fullscreen" className="gallery-modal-image" />
      ) : (
        <div className="gallery-modal-video-wrapper" onClick={(e) => e.stopPropagation()}>
          <iframe
            src={selected.url}
            title="video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <button className="gallery-nav next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        ›
      </button>
    </div>
  );
}
