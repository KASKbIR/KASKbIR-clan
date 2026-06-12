import bgImage from "../assets/bg.webp";
import wolfImage from "../assets/wolf-bg.png";

const galleryImages = [
  bgImage,
  wolfImage,
  bgImage,
  wolfImage,
  bgImage,
  wolfImage,
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

      <div className="galleryGrid">

        {galleryImages.map((image, index) => (

          <div className="galleryCard" key={index}>

            <img src={image} alt="KASKbIR" />

            <div className="galleryOverlay">

              <h3>KASKbIR</h3>

              <span>Elite PUBG Mobile Clan</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;