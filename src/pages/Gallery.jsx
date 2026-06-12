import clanCreate1 from "../assets/glory/clan_create1.jpg";
import clanCreate2 from "../assets/glory/clan_create2.jpg";
import clanCreate3 from "../assets/glory/clan_create3.jpg";
import clanCreate4 from "../assets/glory/clan_create4.jpg";

import top1_01 from "../assets/top1/top1_01.jpg";
import top1_02 from "../assets/top1/top1_02.jpg";

import gallery01 from "../assets/screenshots/gallery01.jpg";
import gallery02 from "../assets/screenshots/gallery02.jpg";
import gallery03 from "../assets/screenshots/gallery03.jpg";
import gallery04 from "../assets/screenshots/gallery04.jpg";

import clanVideo1 from "../assets/videos/clan_video1.mp4";

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
];

function Gallery() {
  return (
    <section className="galleryPage">

      <div className="galleryHeader">
        <h1>KASKbIR GALLERY</h1>

        <p>
          Moments of glory, loyalty and domination.
        </p>
      </div>

      <h2 className="gallerySectionTitle">
        🏆 Славные моменты
      </h2>

      <div className="galleryGrid">
        {gloryImages.map((image, index) => (
          <div className="galleryCard" key={index}>
            <img src={image} alt="Clan History" />
          </div>
        ))}
      </div>

      <h2 className="gallerySectionTitle">
        👑 ТОП-1
      </h2>

      <div className="galleryGrid">

        <div className="galleryCard">
          <img src={top1_01} alt="TOP 1" />

          <div className="galleryInfo">
            <p>🗺 Erangel</p>
            <p>💀 8 убийств</p>
            <p>📅 Июнь 2024</p>
          </div>
        </div>

        <div className="galleryCard">
          <img src={top1_02} alt="TOP 1" />

          <div className="galleryInfo">
            <p>🗺 Erangel</p>
            <p>💀 5 убийств</p>
            <p>📅 Май 2024</p>
          </div>
        </div>

      </div>

      <h2 className="gallerySectionTitle">
        🖼 Галерея
      </h2>

      <div className="galleryGrid">
        {screenshots.map((image, index) => (
          <div className="galleryCard" key={index}>
            <img src={image} alt="KASKbIR Screenshot" />
          </div>
        ))}
      </div>

      <h2 className="gallerySectionTitle">
        🎥 Видео
      </h2>

      <div className="videoContainer">
        <video controls width="100%">
          <source src={clanVideo1} type="video/mp4" />
        </video>
      </div>

    </section>
  );
}

export default Gallery;