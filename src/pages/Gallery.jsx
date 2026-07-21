// ГАЛЕРЕЯ
import { useState } from "react";

import clanCreate1 from "../assets/glory/clan_create1.jpg";
import clanCreate2 from "../assets/glory/clan_create2.jpg";
import clanCreate3 from "../assets/glory/clan_create3.jpg";
import clanCreate4 from "../assets/glory/clan_create4.jpg";

import top1_01 from "../assets/top1/top1_01.jpg";
import top1_02 from "../assets/top1/top1_02.jpg";
import top1_03 from "../assets/top1/top1_03.jpg";
import top1_04 from "../assets/top1/top1_04.jpg";

import gallery01 from "../assets/screenshots/gallery01.jpg";
import gallery02 from "../assets/screenshots/gallery02.jpg";
import gallery03 from "../assets/screenshots/gallery03.jpg";
import gallery04 from "../assets/screenshots/gallery04.jpg";
import gallery05 from "../assets/screenshots/gallery05.jpg";
import gallery06 from "../assets/screenshots/gallery06.jpg";
import gallery07 from "../assets/screenshots/gallery07.jpg";
import gallery08 from "../assets/screenshots/gallery08.jpg";

import clanVideo1 from "../assets/videos/clan_video1.mp4";
import clanVideo2 from "../assets/videos/clan_video2.mp4";
import clanVideo3 from "../assets/videos/clan_video3.mp4";
import ImageViewer from "../components/ImageViewer";

const gloryImages = [
  clanCreate1,
  clanCreate2,
  clanCreate3,
  clanCreate4,
];

const screenshots = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
];

function Gallery({ lang, t }) {
  const text = t[lang];

  const [openSection, setOpenSection] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };

  const openViewer = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <section className="galleryPage">

        <div className="galleryHeader">
          <h1>{text.galleryTitle}</h1>

          <p>
            {text.gallerySubtitle}
          </p>
        </div>

        {/* СЛАВНЫЕ МОМЕНТЫ */}

        <div
          className="galleryFolder"
          onClick={() => toggleSection("glory")}
        >
          {openSection === "glory"
            ? `📂 ${text.folderGlory}`
            : `📁 ${text.folderGlory}`}
        </div>

        {openSection === "glory" && (
          <div className="galleryGrid">

            {gloryImages.map((image, index) => (

              <div className="galleryCard" key={index}>

                <img
                  src={image}
                  alt="Clan History"
                  onClick={() => openViewer(image)}
                />

              </div>

            ))}

          </div>
        )}

        {/* ТОП-1 */}

        <div
          className="galleryFolder"
          onClick={() => toggleSection("top1")}
        >
          {openSection === "top1"
            ? `📂 ${text.folderTop1}`
            : `📁 ${text.folderTop1}`}
        </div>

        {openSection === "top1" && (

          <div className="galleryGrid">

            <div className="galleryCard">
              <img
                src={top1_01}
                alt="TOP 1"
                onClick={() => openViewer(top1_01)}
              />

              <div className="galleryInfo">
                <p>🗺 Erangel</p>
                <p>💀 8 убийств</p>
                <p>📅 Июнь 2024</p>
              </div>
            </div>

            <div className="galleryCard">
              <img
                src={top1_02}
                alt="TOP 1"
                onClick={() => openViewer(top1_02)}
              />

              <div className="galleryInfo">
                <p>🗺 Erangel</p>
                <p>💀 5 убийств</p>
                <p>📅 Май 2024</p>
              </div>
            </div>

            <div className="galleryCard">
              <img
                src={top1_03}
                alt="TOP 1"
                onClick={() => openViewer(top1_03)}
              />

              <div className="galleryInfo">
                <p>👑 TOP-1</p>
              </div>
            </div>

            <div className="galleryCard">
              <img
                src={top1_04}
                alt="TOP 1"
                onClick={() => openViewer(top1_04)}
              />

              <div className="galleryInfo">
                <p>👑 TOP-1</p>
              </div>
            </div>

          </div>

        )}

        {/* ГАЛЕРЕЯ */}

        <div
          className="galleryFolder"
          onClick={() => toggleSection("screens")}
        >
          {openSection === "screens"
            ? `📂 ${text.folderScreens}`
            : `📁 ${text.folderScreens}`}
        </div>

        {openSection === "screens" && (
          <div className="galleryGrid">

            {screenshots.map((image, index) => (

              <div className="galleryCard" key={index}>

                <img
                  src={image}
                  alt="KASKbIR Screenshot"
                  onClick={() => openViewer(image)}
                />

              </div>

            ))}

          </div>
        )}

        {/* ВИДЕО */}

        <div
          className="galleryFolder"
          onClick={() => toggleSection("video")}
        >
          {openSection === "video"
            ? `📂 ${text.folderVideo}`
            : `📁 ${text.folderVideo}`}
        </div>

{openSection === "video" && (
  <div className="videoContainer">

    <video controls className="galleryVideo">
      <source
        src={clanVideo1}
        type="video/mp4"
      />
      {text.videoNotSupported}
    </video>

    <video controls className="galleryVideo">
      <source
        src={clanVideo2}
        type="video/mp4"
      />
      {text.videoNotSupported}
    </video>

    <video controls className="galleryVideo">
      <source
        src={clanVideo3}
        type="video/mp4"
      />
      {text.videoNotSupported}
    </video>

  </div>
)}

      </section>

      <ImageViewer
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </>
  );
}

export default Gallery;