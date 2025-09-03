import React, { useState } from "react";
import "./ProjectsGallery.css";

export default function ProjectsGallery({ folder }) {
  const [selected, setSelected] = useState(null);

  const images = import.meta.glob("/src/assets/*/*.{png,jpg,jpeg,webp}", {
    eager: true,
  });

  const imageList = Object.entries(images).map(([path, mod]) => ({
    path,
    url: mod.default,
  }));

  const filtered = imageList.filter((img) =>
    img.path.includes(`src/assets/${folder}/`)
  );

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`gallery-${i}`}
            className="gallery-image"
            onClick={() => setSelected(img.url)}
          />
        ))}
      </div>

      {selected && (
        <div
          className="gallery-modal"
          onClick={() => setSelected(null)}
        >
          <img src={selected} alt="full-size" className="gallery-modal-image" />
        </div>
      )}
    </div>
  );
}
