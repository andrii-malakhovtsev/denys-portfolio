import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./ProjectsGallery.css";

export default function ProjectsGallery({ folder }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toEmbedUrl = (url) => {
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  const images = import.meta.glob("/src/assets/*/*.{png,jpg,jpeg,webp}", { eager: true });
  const imageList = Object.entries(images).map(([path, mod]) => ({
    type: "image",
    url: mod.default,
    path,
  }));
  const filteredImages = imageList.filter((img) => img.path.includes(`src/assets/${folder}/`));

  const videoFiles = import.meta.glob("/src/assets/*/videos.txt", { eager: true, as: "raw" });
  const videosByFolder = Object.entries(videoFiles).reduce((acc, [path, content]) => {
    const folderName = path.split("/").at(-2);
    acc[folderName] = content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((url) => ({ type: "video", url: toEmbedUrl(url) }));
    return acc;
  }, {});
  const filteredVideos = videosByFolder[folder] || [];

  const media = [...filteredVideos, ...filteredImages];
  const selected = selectedIndex !== null ? media[selectedIndex] : null;

  const goPrev = () => setSelectedIndex((i) => (i > 0 ? i - 1 : media.length - 1));
  const goNext = () => setSelectedIndex((i) => (i < media.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {media.map((item, i) =>
          item.type === "image" ? (
            <img
              key={i}
              src={item.url}
              alt={`gallery-${i}`}
              className="gallery-image"
              onClick={() => setSelectedIndex(i)}
            />
          ) : (
            <div key={i} className="gallery-video" onClick={() => setSelectedIndex(i)}>
              <img
                src={`https://img.youtube.com/vi/${item.url.split("/embed/")[1]}/hqdefault.jpg`}
                alt={`video-${i}`}
                className="gallery-image"
              />
              <span className="play-icon">▶</span>
            </div>
          )
        )}
      </div>

      {/* Fullscreen modal */}
      {selected && (
        <div className="gallery-modal" {...swipeHandlers} onClick={() => setSelectedIndex(null)}>
          <button className="gallery-nav prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>‹</button>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            {selected.type === "image" ? (
              <img src={selected.url} alt="full-size" className="gallery-modal-image" />
            ) : (
              <div className="gallery-modal-video-wrapper">
                <iframe
                  src={selected.url}
                  title="video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <button className="gallery-nav next" onClick={(e) => { e.stopPropagation(); goNext(); }}>›</button>
        </div>
      )}
    </div>
  );
}
